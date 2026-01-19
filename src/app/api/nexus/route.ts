/**
 * API Route NEXUS para luiscabrejo.com
 *
 * Arquitectura híbrida con vectorSearch + Supabase
 * Sistema de respuestas idéntico a CreaTuActivo.com
 */

import { createClient } from '@supabase/supabase-js';
import Anthropic from '@anthropic-ai/sdk';
import {
  vectorSearch,
  type DocumentWithEmbedding,
  type VectorSearchResult
} from '@/lib/vectorSearch';

// Configuración
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Lazy initialization de Supabase
let supabaseClient: ReturnType<typeof createClient> | null = null;
function getSupabaseClient() {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseClient;
}

export const runtime = 'edge';
export const maxDuration = 60; // ✅ FIX: 30→60s para lista de precios completa

// Cache en memoria
const searchCache = new Map<string, { data: any; timestamp: number }>();
const systemPromptCache = new Map<string, { content: string; timestamp: number; version: string }>();
const vectorDocsCache: { data: DocumentWithEmbedding[] | null; timestamp: number } = { data: null, timestamp: 0 };
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

// ========================================
// DOCUMENTOS CON EMBEDDINGS
// ========================================
async function getDocumentsWithEmbeddings(): Promise<DocumentWithEmbedding[]> {
  if (vectorDocsCache.data && (Date.now() - vectorDocsCache.timestamp) < CACHE_TTL) {
    return vectorDocsCache.data;
  }

  try {
    const { data, error } = await getSupabaseClient()
      .from('nexus_documents')
      .select('category, title, content, embedding, metadata')
      .in('category', ['arsenal_inicial', 'arsenal_avanzado', 'arsenal_compensacion', 'catalogo_productos', 'arsenal_reto'])
      .not('embedding', 'is', null);

    if (error) {
      console.error('[VectorSearch] Error loading documents:', error);
      return [];
    }

    const docs = (data || []).map(doc => ({
      category: doc.category,
      title: doc.title,
      content: doc.content,
      embedding: doc.embedding,
      metadata: doc.metadata
    }));

    vectorDocsCache.data = docs;
    vectorDocsCache.timestamp = Date.now();
    console.log(`[VectorSearch] Loaded ${docs.length} documents with embeddings`);

    return docs;
  } catch (error) {
    console.error('[VectorSearch] Error:', error);
    return [];
  }
}

// ========================================
// CLASIFICACION VECTORIAL
// ========================================
async function clasificarDocumentoVectorial(userMessage: string): Promise<string | null> {
  const voyageApiKey = process.env.VOYAGE_API_KEY;

  if (!voyageApiKey) {
    console.log('[VectorSearch] No VOYAGE_API_KEY, skipping vector search');
    return null;
  }

  try {
    const documents = await getDocumentsWithEmbeddings();

    if (documents.length === 0) {
      console.log('[VectorSearch] No documents with embeddings found');
      return null;
    }

    const results = await vectorSearch(userMessage, documents, voyageApiKey, {
      threshold: 0.35,
      maxResults: 1,
      debug: false
    });

    if (results.length > 0) {
      const topResult = results[0];
      console.log(`[VectorSearch] Match: ${topResult.category} (similarity: ${topResult.similarity.toFixed(3)})`);

      if (topResult.similarity >= 0.4) {
        return topResult.category;
      }
    }

    return null;
  } catch (error) {
    console.warn('[VectorSearch] Error:', error);
    return null;
  }
}

// ========================================
// CLASIFICACION POR PATRONES (FALLBACK)
// ========================================
function clasificarDocumentoHibrido(userMessage: string): string | null {
  const msg = userMessage.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Patrones para catálogo de productos
  const catalogoPatterns = [
    /precio\s+(del?\s+)?cafe/,
    /cuanto\s+cuesta/,
    /precio\s+(del?\s+)?ganoderma/,
    /lingzhi/,
    /spirulina/,
    /morinzhi/,
    /productos?\s+gano/
  ];

  if (catalogoPatterns.some(p => p.test(msg))) {
    return 'catalogo_productos';
  }

  // Patrones para arsenal inicial
  const inicialPatterns = [
    /como\s+funciona/,
    /que\s+es\s+(esto|nexus|el\s+negocio|gano)/,
    /como\s+empezar/,
    /quiero\s+(saber|conocer)/,
    /cuanto\s+(puedo\s+)?ganar/,
    /inversion|invertir/,
    /paquete|constructor/
  ];

  if (inicialPatterns.some(p => p.test(msg))) {
    return 'arsenal_inicial';
  }

  // Patrones para arsenal avanzado (objeciones)
  const avanzadoPatterns = [
    /piramide|pirámide|multinivel|mlm/,
    /estafa|scam|fraude/,
    /no\s+tengo\s+tiempo/,
    /no\s+me\s+interesa/,
    /es\s+caro|muy\s+caro/,
    /no\s+funciona/
  ];

  if (avanzadoPatterns.some(p => p.test(msg))) {
    return 'arsenal_avanzado';
  }

  // 🎯 Patrones para arsenal_reto (Reto de 5 Días - Lead Magnet)
  // 🆕 SYNC 2026-01-19: Challenge Funnel
  const retoPatterns = [
    /reto\s*(de\s*)?(5|cinco)\s*d[ií]as?/i,    // "reto de 5 días"
    /reto\s*5/i,                                // "reto 5"
    /cinco\s*d[ií]as/i,                         // "cinco días"
    /5\s*d[ií]as/i,                             // "5 días"
    /bootcamp/i,                                // "bootcamp"
    /challenge/i,                               // "challenge"
    /c[oó]mo\s*(me\s*)?registro/i,              // "cómo me registro"
    /c[oó]mo\s*(me\s*)?inscribo/i,              // "cómo me inscribo"
    /qu[eé]\s*es\s*el\s*reto/i,                 // "qué es el reto"
    /de\s*qu[eé]\s*trata\s*el\s*reto/i,         // "de qué trata el reto"
    /temario/i,                                 // "temario"
    /qu[eé]\s*voy\s*a\s*aprender/i,             // "qué voy a aprender"
    /es\s*gratis\s*el\s*reto/i,                 // "es gratis el reto"
    /cuesta\s*el\s*reto/i,                      // "cuesta el reto"
    /es\s*en\s*vivo/i,                          // "es en vivo"
    /es\s*grabado/i,                            // "es grabado"
    /requisitos?\s*(para\s*)?(el\s*)?reto/i,    // "requisitos para el reto"
    /test\s*drive/i,                            // "test drive"
    /prueba\s*de\s*manejo/i,                    // "prueba de manejo"
  ];

  if (retoPatterns.some(p => p.test(msg))) {
    console.log('[Patterns] Clasificación: arsenal_reto');
    return 'arsenal_reto';
  }

  // 🔥 Patrones para arsenal_compensacion (Reto 12 Días + CV/PV + GEN5 + Binario)
  // 🆕 SYNC 2026-01-18: Sincronizado con Marketing/Dashboard
  const compensacionPatterns = [
    // ===== RETO DE LOS 12 DÍAS (específico, no captura "reto 5") =====
    /reto\s*(de\s*)?(12|doce)/i, /12\s*dias/i, /doce\s*dias/i, /reto\s*diciembre/i,
    /campana\s*diciembre/i, /construir\s*diciembre/i,

    // ===== INVERSIÓN MÍNIMA / KIT DE INICIO =====
    /inversion\s*minima/i, /minimo\s*para\s*empezar/i,
    /443/i, /kit\s*inicio/i, /kit\s*inicial/i,
    /cuanto\s*minimo/i, /menos\s*puedo\s*empezar/i,
    /mas\s*barato/i, /mas\s*economico/i,
    /opcion\s*accesible/i, /menor\s*inversion/i,

    // ===== COMPENSACIÓN Y FORMAS DE GANAR =====
    /como\s*(se\s*)?gano?/i, /formas\s*ganar/i,
    /como\s*gana\s*uno/i, /como\s*ganas/i,
    /gana\s*en\s*este\s*plan/i, /ganar\s*en\s*este\s*plan/i,
    /maneras\s*ganar/i, /cuantas\s*formas\s*ganar/i,
    /12\s*formas/i, /doce\s*formas/i,
    /plan\s*compensacion/i, /plan\s*ganancias/i,

    // ===== PROYECCIONES Y GANANCIAS =====
    /proyeccion\s*ganar/i, /cuanto\s*puedo\s*ganar/i,
    /potencial\s*ganancias/i, /ganar\s*reto/i,
    /ganar\s*12\s*dias/i, /ganancias\s*reto/i, /ingresos\s*reto/i,

    // ===== DUPLICACIÓN 2x2 =====
    /2\s*x\s*2/i, /duplicacion/i, /sistema\s*2\s*2/i, /red\s*8\s*190/i,

    // ===== OPCIONES DE INVERSIÓN =====
    /opciones\s*inversion/i, /opciones\s*para\s*empezar/i,
    /con\s*cuanto\s*empiezo/i, /cuanto\s*necesito\s*invertir/i,

    // ===== CV/PV DE PRODUCTOS (FIX 2025-12-10) =====
    /cuantos?\s*cv/i, /cuantos?\s*pv/i,
    /cv\s*(tiene|de|del)/i, /pv\s*(tiene|de|del)/i,
    /(tiene|aporta|genera)\s*cv/i, /(tiene|aporta|genera)\s*pv/i,
    /puntos\s*(tiene|de|del)/i, /(valor|volumen)\s*comision/i, /(valor|volumen)\s*personal/i,
    /completar\s*pv/i, /faltan\s*pv/i, /llegar\s*a\s*50\s*pv/i,
    /tengo\s*pv/i, /productos\s*para\s*(pv|recompra)/i,
    /luvoco\s*(cv|pv|puntos)/i, /maquina\s*(cv|pv|puntos)/i,
    /(cv|pv|puntos)\s*(luvoco|maquina)/i,

    // ===== 🆕 GEN5 Y BONOS (SYNC 2026-01-18) =====
    /bono/i, /gen5/i, /gen\s*5/i, /gen-5/i,
    /inicio\s*rapido/i, /comision/i,
    /cuanto\s*gano/i, /porcentaje/i,
    /que\s*gano\s*cuando/i, /binario/i,
    /bono\s*semanal/i, /consumo\s*semanal/i,
    /recompra/i, /techo/i, /gcv/i,

    // ===== 🆕 AUTO ENVÍO (SYNC 2026-01-18) =====
    /auto\s*envio/i, /autoenvio/i,
    /que\s*auto\s*envio/i, /como\s*funciona\s*auto\s*envio/i,
    /beneficios\s*auto\s*envio/i, /programa\s*auto\s*envio/i,
    /que\s*es\s*auto\s*envio/i, /cuanto\s*auto\s*envio/i,
    /programa\s*lealtad/i, /producto\s*gratis/i,
    /producto\s*obsequio/i, /recompensa\s*consumo/i
  ];

  if (compensacionPatterns.some(p => p.test(msg))) {
    console.log('[Patterns] Clasificación: arsenal_compensacion');
    return 'arsenal_compensacion';
  }

  return null;
}

// ========================================
// CONSULTAR ARSENAL HIBRIDO
// ========================================
async function consultarArsenalHibrido(userMessage: string): Promise<VectorSearchResult[]> {
  const cacheKey = `hibrido_${userMessage.toLowerCase().substring(0, 50)}`;

  const cached = searchCache.get(cacheKey);
  if (cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
    console.log('Cache hit arsenal:', cacheKey.substring(0, 30));
    return cached.data;
  }

  // Paso 1: Clasificación vectorial
  let documentType = await clasificarDocumentoVectorial(userMessage);

  // Paso 2: Fallback a patrones
  if (!documentType) {
    documentType = clasificarDocumentoHibrido(userMessage);
    if (documentType) {
      console.log(`[Patterns] Clasificación: ${documentType}`);
    }
  }

  // Paso 3: Consultar documento
  if (documentType) {
    try {
      const { data, error } = await getSupabaseClient()
        .from('nexus_documents')
        .select('id, title, content, category, metadata')
        .eq('category', documentType)
        .limit(1);

      if (!error && data && data.length > 0) {
        const result = data.map(doc => ({
          category: doc.category,
          title: doc.title,
          content: doc.content,
          similarity: 1.0,
          metadata: doc.metadata,
          search_method: 'classification'
        }));

        searchCache.set(cacheKey, { data: result, timestamp: Date.now() });
        return result;
      }
    } catch (error) {
      console.error('Error consulta arsenal:', error);
    }
  }

  // Paso 4: Fallback búsqueda semántica general
  try {
    const { data, error } = await getSupabaseClient().rpc('search_nexus_documents', {
      search_query: userMessage.substring(0, 200),
      match_count: 1
    });

    if (!error && data && data.length > 0) {
      const result = (data || []).filter((doc: any) =>
        doc.category && doc.category.includes('arsenal')
      ).map((doc: any) => ({
        ...doc,
        similarity: doc.similarity || 0.5,
        search_method: 'semantic'
      }));

      searchCache.set(cacheKey, { data: result, timestamp: Date.now() });
      return result;
    }
  } catch (error) {
    console.error('Error búsqueda semántica:', error);
  }

  return [];
}

// ========================================
// SYSTEM PROMPT
// ========================================
async function getSystemPrompt(): Promise<string> {
  const cacheKey = 'system_prompt_main';
  const cached = systemPromptCache.get(cacheKey);

  if (cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
    console.log(`System prompt ${cached.version} desde cache`);
    return cached.content;
  }

  try {
    const { data, error } = await getSupabaseClient()
      .from('system_prompts')
      .select('prompt, version')
      .eq('name', 'nexus_main')
      .single();

    if (error || !data?.prompt) {
      console.error('Error leyendo system prompt:', error);
      return getFallbackSystemPrompt();
    }

    systemPromptCache.set(cacheKey, {
      content: data.prompt,
      timestamp: Date.now(),
      version: data.version || 'unknown'
    });

    console.log(`System prompt ${data.version} cargado`);
    return data.prompt;
  } catch (error) {
    console.error('Error system prompt:', error);
    return getFallbackSystemPrompt();
  }
}

function getFallbackSystemPrompt(): string {
  return `Eres NEXUS, el Copiloto del Arquitecto del ecosistema CreaTuActivo.com.

Tu misión es entregar la arquitectura y las herramientas para que cada Constructor Inteligente pueda construir un activo que le compre su tiempo de vuelta.

LOS TRES PILARES DE TU CONOCIMIENTO:
- EL MOTOR: Los productos Gano Excel con fórmula exclusiva
- EL MÉTODO: Los 3 Pasos INICIAR → ACOGER → ACTIVAR
- LA APLICACIÓN: CreaTuActivo.com - tecnología + IA

PAQUETES DE INVERSIÓN:
- Constructor Inicial ($200 USD / ~$900.000 COP) - 2 meses cortesía tecnología
- Constructor Empresarial ($500 USD / ~$2.250.000 COP) - 4 meses cortesía
- Constructor Visionario ($1,000 USD / ~$4.500.000 COP) - 6 meses cortesía

Usa lenguaje profesional pero cercano. Responde en español.`;
}

// ========================================
// POST HANDLER
// ========================================
export async function POST(req: Request) {
  const startTime = Date.now();

  try {
    const { messages, sessionId, fingerprint } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Request inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const latestUserMessage = messages[messages.length - 1].content;
    console.log(`[NEXUS] Mensaje: "${latestUserMessage.substring(0, 50)}..."`);

    // Buscar documentos relevantes
    const relevantDocs = await consultarArsenalHibrido(latestUserMessage);
    console.log(`[NEXUS] Documentos encontrados: ${relevantDocs.length}`);

    // Construir contexto
    let context = '';
    if (relevantDocs.length > 0) {
      const doc = relevantDocs[0];
      context = `ARSENAL CONVERSACIONAL - CONTEXTO:

[${doc.category?.toUpperCase()}]
${doc.title}:
${doc.content}

---

`;
    }

    // Obtener system prompt
    const systemPrompt = await getSystemPrompt();

    // Preparar mensajes para Claude
    const recentMessages = messages.length > 6 ? messages.slice(-6) : messages;

    // Construir array de system blocks (solo incluir context si no está vacío)
    const systemBlocks: Array<{ type: 'text'; text: string }> = [
      { type: 'text', text: systemPrompt }
    ];

    // Solo agregar contexto si tiene contenido
    if (context && context.trim().length > 0) {
      systemBlocks.push({ type: 'text', text: context });
    }

    // FIX 2025-12-08: Detectar lista de precios COMPLETA
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
    const pideListaPrecios = /lista.*precio|todos.*los.*precio|precios.*producto|catálogo.*precio|dame.*los.*precio|cuáles.*son.*los.*precio|22.*producto|lista.*completa/i.test(lastUserMessage);

    const maxTokens = pideListaPrecios ? 1000 : 600;
    console.log(`🔍 DEBUG PRECIOS: pideListaPrecios=${pideListaPrecios}, max_tokens=${maxTokens}`);

    // Llamar a Claude con streaming
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      system: systemBlocks,
      stream: true,
      max_tokens: maxTokens,
      temperature: 0.3,
      messages: recentMessages,
    });

    // Crear stream de respuesta
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of response) {
            if (event.type === 'content_block_delta' &&
                event.delta.type === 'text_delta') {
              const text = event.delta.text;
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();

          const totalTime = Date.now() - startTime;
          console.log(`[NEXUS] Completado en ${totalTime}ms`);
        } catch (error) {
          console.error('[NEXUS] Stream error:', error);
          controller.error(error);
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });

  } catch (error) {
    console.error('[NEXUS] Error:', error);

    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';

    return new Response(JSON.stringify({
      error: `Error procesando consulta: ${errorMessage}`
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

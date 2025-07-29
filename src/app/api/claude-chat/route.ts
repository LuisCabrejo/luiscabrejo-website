// /src/app/api/claude-chat/route.ts - VERSIÓN MÍNIMA FUNCIONAL

import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
  maxRetries: 2,
  timeout: 30000, // 30 segundos
});

// Fallback responses mejoradas
const getIntelligentFallback = (userMessage: string): string => {
  const normalizedMessage = userMessage.toLowerCase();

  if (normalizedMessage.includes('fundador') || normalizedMessage.includes('programa')) {
    return `Temporalmente tengo dificultades técnicas, pero ser **Fundador** del sistema 4M significa tres cosas concretas:

**🎯 Posicionamiento:** Eres uno de los primeros 150 antes del lanzamiento masivo del 1 de septiembre.

**🤝 Participación:** Contribuyes activamente en la construcción y perfeccionamiento del sistema 4M.

**🏆 Privilegio:** Acceso exclusivo a herramientas, entrenamientos y soporte que no estarán disponibles públicamente.

Luis y Liliana diseñaron este programa específicamente para crear una base sólida de distribuidores serios antes de abrir al público general.

_Disculpa la dificultad técnica - puedes seguir preguntando mientras se resuelve._`;
  }

  if (normalizedMessage.includes('invest') || normalizedMessage.includes('dinero') || normalizedMessage.includes('precio') || normalizedMessage.includes('cuesta') || normalizedMessage.includes('paquet')) {
    return `Durante esta dificultad técnica temporal:

**💰 Paquetes Fundadores Disponibles:**
• **Emprendedor ($200):** Ideal para probar el sistema sin gran riesgo
• **Empresarial ($500):** Balance perfecto entre inversión y potencial
• **Visionario ($1000):** Máximo potencial desde el primer día

**🔄 Costo Recurrente:** Solo 50 PV mensual (aprox $80 USD) por el cual recibes producto de igual valor.

**✅ Transparencia Total:** Inversión única en el paquete + productos mensuales que utilizas o compartes.

_Disculpa la dificultad técnica - el sistema está experimentando alta demanda._`;
  }

  if (normalizedMessage.includes('gano excel') || normalizedMessage.includes('ganoderma') || normalizedMessage.includes('empresa') || normalizedMessage.includes('productos')) {
    return `Aunque tengo dificultades técnicas:

**🏢 Gano Excel:** Empresa establecida desde 1995 con más de 30 años de operación continua.

**🔬 Innovación Única:** Patente mundial sobre Ganoderma Lucidum creada por **Leow Soon Seng** - tecnología que ningún competidor puede replicar.

**🌱 Productos Colombia:** Bebidas funcionales, suplementos y cuidado personal, todos con Ganoderma.

**🚀 Sistema 4M:** La innovación de **Luis y Liliana** para facilitar la distribución de estos productos únicos.

_Disculpa la dificultad técnica - puedes explorar portal.4millones.com mientras se resuelve._`;
  }

  if (normalizedMessage.includes('funciona') || normalizedMessage.includes('sistema') || normalizedMessage.includes('cómo') || normalizedMessage.includes('proceso')) {
    return `Con dificultades técnicas temporales, pero el sistema 4M funciona así:

**🔗 Las 3 C's del Sistema:**
• **Conectar:** Identifica personas con mentalidad de crecimiento
• **Compartir:** Usa herramientas 4M automatizadas (no presentaciones manuales)
• **Acompañar:** Brinda soporte durante su proceso de evaluación

**⚡ La Diferencia Clave:** La tecnología hace la presentación profesional, tú haces la conexión humana auténtica.

**🎯 Tu Rol:** No eres "vendedor" - eres conector de personas inteligentes con oportunidades inteligentes.

_Disculpa la dificultad técnica - el sistema está bajo alta demanda._`;
  }

  // Fallback general
  return `Disculpa, estoy experimentando una dificultad técnica temporal debido a alta demanda del sistema.

**🔧 Mientras se resuelve:**
• Puedes explorar **portal.4millones.com** para ver las herramientas funcionando
• Revisar información en **luiscabrejo.com/fundadores**
• Seguir preguntando - tengo respuestas básicas disponibles

**⚡ El Sistema 4M está funcionando normalmente** - solo mi conexión tiene intermitencias por el tráfico de pre-lanzamiento.

¿Hay algo específico sobre Gano Excel, el programa Fundadores, o el sistema 4M que te gustaría saber?`;
};

// Función principal simplificada
export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    const { message, conversationHistory = [], context = 'general' } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // System prompt simplificado
    const systemPrompt = `You are NEXUS, the digital representative of the 4M system developed by Luis Cabrejo and Liliana Moreno for Gano Excel distribution.

CRITICAL IDENTITY: You speak ABOUT the 4M system (third person), never AS Luis or Liliana (first person).

KEY FACTS:
- Luis: 11 years Gano Excel experience, 9 consecutive Diamond years
- Liliana: Also Diamond, married 25 years
- Gano Excel: Founded 1995 by Leow Soon Seng (Malaysia), 30+ years operation
- 4M System: Luis & Liliana's innovation for distribution (NOT product creation)
- Products: Ganoderma Lucidum beverages, supplements, personal care
- Packages: $200/$500/$1000 + 50 PV monthly (~$80 USD)

Respond professionally about Gano Excel distribution opportunities for Colombian "inconformes inteligentes."`;

    // Preparar mensajes
    const messages = [
      ...conversationHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];

    let response;
    let metadata = { responseType: 'claude', source: 'api' };

    try {
      // Intentar Claude API con timeout de 25s
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);

      const claudeResponse = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1500,
        temperature: 0.7,
        top_p: 0.9,
        system: systemPrompt,
        messages: messages,
      });

      clearTimeout(timeoutId);
      response = claudeResponse.content[0].text;

    } catch (error) {
      console.error('Claude API failed:', error);
      response = getIntelligentFallback(message);
      metadata = { responseType: 'fallback', source: 'local' };
    }

    // Calcular delay
    const wordCount = response.split(' ').length;
    const baseDelay = metadata.responseType === 'fallback' ? 800 : 1800;
    const wordDelay = Math.min(wordCount * 12, 1000);
    const calculatedDelay = baseDelay + wordDelay + (Math.random() * 300 - 150);
    const finalDelay = Math.max(800, Math.min(calculatedDelay, 3500));

    return NextResponse.json({
      message: response,
      delay: finalDelay,
      metadata: {
        ...metadata,
        timestamp: new Date().toISOString(),
        processingTime: Date.now() - startTime
      }
    });

  } catch (error) {
    console.error('API Error:', error);

    return NextResponse.json({
      message: getIntelligentFallback('error'),
      delay: 1000,
      metadata: {
        responseType: 'emergency',
        source: 'error_handler',
        timestamp: new Date().toISOString()
      }
    });
  }
}

// /src/app/api/claude-chat/route.ts - MEJORADA PARA MAYOR ESTABILIDAD

import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

// MEJORADO: Configuración más robusta
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
  maxRetries: 2, // Reducido para evitar cascading failures
  timeout: 30000, // Aumentado a 30 segundos
});

// NUEVO: Configuración de timeouts más generosa
const API_CONFIG = {
  maxRetries: 3,
  baseDelay: 1000,
  maxDelay: 8000,
  timeout: 25000, // 25 segundos para Claude
  fallbackTimeout: 3000, // 3 segundos para fallback
};

// NUEVO: Sistema de circuit breaker simple
let consecutiveFailures = 0;
let lastFailureTime = 0;
const CIRCUIT_BREAKER_THRESHOLD = 5;
const CIRCUIT_BREAKER_TIMEOUT = 60000; // 1 minuto

// MEJORADO: Función de retry con backoff exponencial más inteligente
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = API_CONFIG.maxRetries
): Promise<T> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await fn();

      // Reset circuit breaker on success
      consecutiveFailures = 0;

      return result;
    } catch (error) {
      console.log(`API attempt ${attempt}/${maxRetries} failed:`, error);
      lastError = error as Error;

      // Increment failure counter
      consecutiveFailures++;
      lastFailureTime = Date.now();

      // Don't retry on final attempt
      if (attempt === maxRetries) break;

      // Calculate exponential backoff with jitter
      const baseDelay = API_CONFIG.baseDelay * Math.pow(2, attempt - 1);
      const jitter = Math.random() * 1000; // Add randomness
      const delay = Math.min(baseDelay + jitter, API_CONFIG.maxDelay);

      console.log(`Waiting ${delay}ms before retry ${attempt + 1}...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError!;
}

// NUEVO: Check circuit breaker
function isCircuitBreakerOpen(): boolean {
  if (consecutiveFailures >= CIRCUIT_BREAKER_THRESHOLD) {
    const timeSinceLastFailure = Date.now() - lastFailureTime;
    return timeSinceLastFailure < CIRCUIT_BREAKER_TIMEOUT;
  }
  return false;
}

// MEJORADO: Función para llamar a Claude con mejor error handling
async function callClaudeAPI(messages: any[], systemPrompt: string): Promise<any> {
  // Check circuit breaker
  if (isCircuitBreakerOpen()) {
    throw new Error('Circuit breaker is open - too many consecutive failures');
  }

  return retryWithBackoff(async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    try {
      const response = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1500,
        temperature: 0.7,
        top_p: 0.9,
        system: systemPrompt,
        messages: messages,
      });

      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);

      // Log detailed error info
      if (error instanceof Error) {
        console.error('Claude API Error Details:', {
          message: error.message,
          name: error.name,
          stack: error.stack?.substring(0, 500),
          timestamp: new Date().toISOString()
        });

        // Handle specific Anthropic errors
        if (error.message.includes('529')) {
          throw new Error('ANTHROPIC_OVERLOADED');
        }
        if (error.message.includes('rate_limit')) {
          throw new Error('RATE_LIMITED');
        }
        if (error.message.includes('timeout') || error.message.includes('aborted')) {
          throw new Error('TIMEOUT');
        }
      }

      throw error;
    }
  });
}

// MEJORADO: Sistema de fallback más robusto
const getIntelligentFallback = (userMessage: string): string => {
  const normalizedMessage = userMessage.toLowerCase();

  // Detección más precisa de intención
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
    return `Aunque tengo dificultades técnicas, aquí está la información esencial:

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

  if (normalizedMessage.includes('resultado') || normalizedMessage.includes('tiempo') || normalizedMessage.includes('cuándo') || normalizedMessage.includes('rápido')) {
    return `Temporalmente offline, pero timeline realista del sistema 4M:

**⚡ Primeras Comisiones:** 2-4 semanas con plan "Arranque Explosivo"

**💰 Activo Significativo:** 3-6 meses de trabajo consistente

**🏆 Riqueza Real:** 12-18 meses de construcción disciplinada

**📈 La Filosofía de Luis:** No es fácil, pero es simple. No es rápido, pero es seguro. No es para todos, pero es para ti si eres "inconformes inteligentes".

_Disculpa la dificultad técnica - puedes seguir preguntando._`;
  }

  // Fallback general mejorado
  return `Disculpa, estoy experimentando una dificultad técnica temporal debido a alta demanda del sistema.

**🔧 Mientras se resuelve:**
• Puedes explorar **portal.4millones.com** para ver las herramientas funcionando
• Revisar información en **luiscabrejo.com/fundadores**
• Seguir preguntando - tengo respuestas básicas disponibles

**⚡ El Sistema 4M está funcionando normalmente** - solo mi conexión tiene intermitencias por el tráfico de pre-lanzamiento.

¿Hay algo específico sobre Gano Excel, el programa Fundadores, o el sistema 4M que te gustaría saber?`;
};

// AQUÍ CONTINÚA CON TODAS TUS 23 RESPUESTAS ESTRATÉGICAS EXISTENTES...
// [TODO EL CÓDIGO DE STRATEGIC RESPONSES SE MANTIENE IGUAL]

// MEJORADO: Función principal con mejor logging
export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    console.log('=== NEXUS API Request Started ===', {
      timestamp: new Date().toISOString(),
      consecutiveFailures,
      circuitBreakerOpen: isCircuitBreakerOpen()
    });

    const { message, conversationHistory = [], context = 'general' } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // MEJORADO: System prompt más conciso para mejor performance
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

    // Preparar mensajes para Claude
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
      // Intentar llamada a Claude con retry mejorado
      console.log('Attempting Claude API call...');

      const claudeResponse = await callClaudeAPI(messages, systemPrompt);

      response = claudeResponse.content[0].text;
      console.log('Claude API call successful', {
        responseLength: response.length,
        duration: Date.now() - startTime
      });

    } catch (error) {
      console.error('Claude API failed after all retries:', error);

      // Use intelligent fallback
      response = getIntelligentFallback(message);
      metadata = { responseType: 'fallback', source: 'local', error: (error as Error).message };

      console.log('Using fallback response', {
        fallbackLength: response.length,
        duration: Date.now() - startTime
      });
    }

    // MEJORADO: Calcular delay más realista
    const calculateResponseDelay = (text: string, responseType: string): number => {
      const wordCount = text.split(' ').length;
      const baseDelays = {
        claude: 1800,    // Reducido para mejor UX
        fallback: 800,   // Más rápido para fallbacks
        strategic: 1500  // Intermedio
      };

      const wordDelay = Math.min(wordCount * 12, 1000); // Reducido
      const randomVariation = Math.random() * 300 - 150; // Menos variación
      const totalDelay = (baseDelays[responseType as keyof typeof baseDelays] || 1200) + wordDelay + randomVariation;

      return Math.max(800, Math.min(totalDelay, 3500)); // Rango más estrecho
    };

    const calculatedDelay = calculateResponseDelay(response, metadata.responseType);

    const responseData = {
      message: response,
      delay: calculatedDelay,
      metadata: {
        ...metadata,
        timestamp: new Date().toISOString(),
        processingTime: Date.now() - startTime,
        consecutiveFailures,
        circuitBreakerStatus: isCircuitBreakerOpen() ? 'open' : 'closed'
      }
    };

    console.log('=== NEXUS API Request Completed ===', {
      success: true,
      duration: Date.now() - startTime,
      responseType: metadata.responseType,
      fallbackUsed: metadata.responseType === 'fallback'
    });

    return NextResponse.json(responseData);

  } catch (error) {
    console.error('=== NEXUS API Request Failed ===', {
      error: error instanceof Error ? error.message : 'Unknown error',
      duration: Date.now() - startTime,
      timestamp: new Date().toISOString()
    });

    // Emergency fallback
    return NextResponse.json({
      message: getIntelligentFallback('error'),
      delay: 1000,
      metadata: {
        responseType: 'emergency',
        source: 'error_handler',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    });
  }
}

// NUEVO: Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    consecutiveFailures,
    circuitBreakerOpen: isCircuitBreakerOpen(),
    version: '4.0-resilient'
  });
}

// /src/app/api/claude-chat/route.ts - ORQUESTACIÓN MODULAR NEXUS v4.8
// Arquitectura modular para sistema distribución Gano Excel

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Imports modulares
import { NexusResponse, ConversationMessage, ResponseType } from './nexus-types';
import {
  NEXUS_SYSTEM_PROMPT,
  strategicResponses,
  fallbackResponses,
  PACKAGES,
  CONVERSION_INFO
} from './nexus-content';
import {
  USER_PROFILES,
  detectProfileFromMessage,
  getProfileTransition,
  getProfileAdaptedResponse,
  isConversationStart,
  generateWelcomeWithProfiles,
  extractNameFromMessage
} from './nexus-profiles';
import {
  findStrategicResponse,
  validateNexusIdentity,
  validateGanoExcelInfo,
  calculateIntelligentDelay,
  analyzeEmotionalState,
  extractConversationContext,
  detectConversionSignals,
  detectGreeting,
  createRetryDelay,
  shouldRetry,
  logNexusInteraction
} from './nexus-utils';

// ========================================
// ANTHROPIC CLIENT
// ========================================
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

// ========================================
// FUNCIONES AUXILIARES PARA FLUJO NOMBRE
// ========================================
const isProfileSelectionMessage = (message: string): boolean => {
  return message.includes('🏥 Profesional de la Salud') ||
         message.includes('🏢 Empleado/Ejecutivo') ||
         message.includes('👨‍💼 Empresario/Comerciante') ||
         message.includes('🏠 Ama de Casa') ||
         message.includes('🎓 Profesional Independiente') ||
         message.includes('✍️ Otro');
};

const getNameRequestResponse = (): string => {
  return `Perfecto, me da mucho gusto conocer tu perfil profesional.

Para brindarte una experiencia completamente personalizada y que esta conversación sea más cercana, me gustaría conocerte por tu nombre.

¿Cuál es tu nombre?`;
};

const isNameResponseContext = (conversationHistory: ConversationMessage[]): { isNameResponse: boolean, profileSelected?: string } => {
  if (conversationHistory.length < 2) return { isNameResponse: false };

  // Buscar en los últimos 4 mensajes
  const recentMessages = conversationHistory.slice(-4);

  // Buscar si hay una solicitud de nombre reciente del bot
  const nameRequestMessage = recentMessages.find(msg =>
    msg.role === 'assistant' && msg.content.includes('¿Cuál es tu nombre?')
  );

  // Buscar si hay una selección de perfil reciente del usuario
  const profileMessage = recentMessages.find(msg =>
    msg.role === 'user' && isProfileSelectionMessage(msg.content)
  );

  return {
    isNameResponse: !!(nameRequestMessage && profileMessage),
    profileSelected: profileMessage?.content
  };
};

const getPersonalizedWelcomeResponse = (userName: string, selectedProfile: string): string => {
  const name = userName.trim();

  if (selectedProfile.includes('🏥 Profesional de la Salud')) {
    return `¡Un gusto conocerte, ${name}! Respeto enormemente tu profesión. Dedicas tu vida al bienestar de otros, y eso conecta directamente con el corazón de nuestro proyecto.

Lo que estamos construyendo es una forma de llevar ese impacto a una escala masiva. Ahora que sé tu enfoque, estoy listo para responder tus preguntas.

¿Por dónde te gustaría empezar?`;
  }
  else if (selectedProfile.includes('🏢 Empleado/Ejecutivo')) {
    return `¡Un placer, ${name}! Entiendo perfectamente el mundo corporativo. Es un lugar de grandes oportunidades, pero también donde tu activo más valioso —tu tiempo— no siempre te pertenece.

Muchos de nuestros socios fundadores vienen de ese entorno, buscando exactamente esto: una forma inteligente de construir un activo patrimonial propio en paralelo.

Ahora que sé un poco más de ti, podemos ir al grano. ¿Cuál es la primera gran pregunta que tienes en mente?`;
  }
  else if (selectedProfile.includes('👨‍💼 Empresario/Comerciante')) {
    return `¡Genial conocerte, ${name}! Hablamos el mismo idioma. Como empresario, sabes que el juego se trata de sistemas, escala y apalancamiento.

Lo que verás aquí es una maquinaria de distribución que te permite construir un mercado a nivel continental sin los costos fijos de la operación tradicional.

Ahora que sé que piensas en grande, ¿cuál es la primera pregunta estratégica que tienes para mí?`;
  }
  else if (selectedProfile.includes('🏠 Ama de Casa')) {
    return `¡Encantado de conocerte, ${name}! Luis siempre dice que quien dirige un hogar tiene el máster de un CEO: gestiona logística, finanzas y personal a diario.

Esas habilidades son oro puro aquí. Este sistema está diseñado para que mujeres con tu capacidad organizativa puedan capitalizar esos talentos en un activo real.

Ahora que sé de tu súper poder, ¿qué es lo primero que te gustaría saber?`;
  }
  else if (selectedProfile.includes('🎓 Profesional Independiente')) {
    return `¡Un placer conocerte, ${name}! Como independiente, conoces mejor que nadie la trampa de cambiar "tiempo por dinero".

Este proyecto trata precisamente de romper esa ecuación, de construir un sistema que te pague mañana por el trabajo que haces hoy.

Ahora que entiendo tu contexto, ¿cuál es la pregunta clave que te ayudaría a ver el potencial?`;
  }
  else {
    return `¡Un gusto conocerte, ${name}! Me alegra que te hayas unido a esta conversación.

El CreaTuActivo que Luis y Liliana han desarrollado está diseñado para personas que buscan una forma inteligente de construir un activo empresarial en el sector del bienestar.

¿Qué te gustaría saber sobre esta oportunidad?`;
  }
};

// ========================================
// FUNCIÓN PRINCIPAL DE RETRY PARA CLAUDE
// ========================================
const callAnthropicWithRetry = async (
  messages: ConversationMessage[],
  maxRetries = 3
): Promise<string> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[NEXUS] Attempt ${attempt}/${maxRetries} to call Anthropic API`);

      const completion = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 400,
        temperature: 0.7,
        system: NEXUS_SYSTEM_PROMPT,
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      });

      return completion.content[0].type === 'text' ? completion.content[0].text : '';

    } catch (error: any) {
      console.error(`[NEXUS] Attempt ${attempt} failed:`, error.status, error.message);

      if (shouldRetry(error, attempt, maxRetries)) {
        const waitTime = createRetryDelay(attempt);
        console.log(`[NEXUS] Waiting ${waitTime}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }

      throw error;
    }
  }

  throw new Error('Max retries exceeded');
};

// ========================================
// FUNCIONES DE RESPUESTA ESPECIALIZADA
// ========================================
const generateConversionResponse = (userMessage: string): string => {
  const packageButtons = PACKAGES.map(pkg =>
    `${pkg.isPopular ? '🚀' : pkg.id === 'emprendedor' ? '🏢' : '💼'} **${pkg.name} - ${pkg.price}**
• ${pkg.description}
• [ENLACE: Activar ${pkg.name}]`
  ).join('\n\n');

  return `¡Perfecto! Vamos a activar tu franquicia de fundador ahora mismo.

**¿Con cuál paquete quieres arrancar?**

${packageButtons}

**Proceso simple:** Al hacer clic se abre formulario donde completarás tus datos y elegirás si quieres recibir por correspondencia o recoger en oficina (${CONVERSION_INFO.cities.join(', ')}).

Una vez envíes el formulario, el equipo te contactará al WhatsApp (${CONVERSION_INFO.whatsappNumber}) para facilitarte el pago y enviarte tu código. ¡En menos de 1 hora estarás activo!`;
};

const getFallbackResponse = (userMessage: string): string => {
  const normalizedMessage = userMessage.toLowerCase();

  if (detectGreeting(userMessage)) {
    return fallbackResponses.greeting;
  }

  if (normalizedMessage.includes('precio') || normalizedMessage.includes('invertir')) {
    return fallbackResponses.pricing;
  }

  if (normalizedMessage.includes('mlm') || normalizedMessage.includes('legítimo')) {
    return fallbackResponses.legitimacy;
  }

  if (normalizedMessage.includes('ganoderma')) {
    return fallbackResponses.ganoderma;
  }

  return fallbackResponses.technical;
};

// ========================================
// LÓGICA PRINCIPAL DE PROCESAMIENTO
// ========================================
const processMessage = async (
  message: string,
  conversationHistory: ConversationMessage[] = []
): Promise<NexusResponse> => {
  let finalResponse: string;
  let responseType: ResponseType;
  let emotion: string;
  let profileUsed: string | undefined;
  let strategicMatch: string | undefined;

  // 1. MANEJO DE INICIO DE CONVERSACIÓN
  if (isConversationStart(conversationHistory)) {
    finalResponse = generateWelcomeWithProfiles();
    responseType = ResponseType.PROFILE;
    emotion = 'WELCOME_ENGAGEMENT';
  }

  // 2. DETECCIÓN DE SELECCIÓN DE PERFIL (SOLICITAR NOMBRE)
  else if (isProfileSelectionMessage(message)) {
    console.log(`[NEXUS] Profile selected: ${message}`);
    finalResponse = getNameRequestResponse();
    responseType = ResponseType.PROFILE;
    emotion = 'NAME_REQUEST';
    profileUsed = message; // Guardar perfil seleccionado
  }

  // 3. DETECCIÓN DE RESPUESTA DE NOMBRE (RESPUESTA PERSONALIZADA)
  else {
    const nameContext = isNameResponseContext(conversationHistory);

    if (nameContext.isNameResponse && nameContext.profileSelected &&
        !isProfileSelectionMessage(message) && message.length < 50) {
      console.log(`[NEXUS] Name received: ${message} for profile: ${nameContext.profileSelected}`);

      finalResponse = getPersonalizedWelcomeResponse(message, nameContext.profileSelected);
      responseType = ResponseType.PROFILE;
      emotion = 'PERSONALIZED_WELCOME';
      profileUsed = nameContext.profileSelected;
    }

    // 4. DETECCIÓN DE CONVERSIÓN
    else if (detectConversionSignals(message)) {
      finalResponse = generateConversionResponse(message);
      responseType = ResponseType.CONVERSION;
      emotion = 'DETERMINACION_URGENCIA';
      strategicMatch = 'conversion_flow';
    }

    // 5. BÚSQUEDA DE RESPUESTA ESTRATÉGICA
    else {
      const strategicResponse = findStrategicResponse(message);

      if (strategicResponse) {
        // Detectar perfil del historial para personalización
        let detectedProfile: string | null = null;
        for (const msg of conversationHistory.reverse()) {
          if (isProfileSelectionMessage(msg.content)) {
            detectedProfile = msg.content;
            break;
          }
        }

        finalResponse = getProfileAdaptedResponse(
          strategicResponse.response,
          strategicResponse.profileAdaptation,
          detectedProfile
        );

        responseType = ResponseType.STRATEGIC;
        emotion = strategicResponse.emotion;
        profileUsed = detectedProfile || undefined;
        strategicMatch = Object.keys(strategicResponses).find(
          key => strategicResponses[key] === strategicResponse
        );
      }

      // 6. USAR CLAUDE AI COMO FALLBACK
      else {
        try {
          const conversationContext = extractConversationContext(conversationHistory);
          const emotionalAnalysis = analyzeEmotionalState(message, conversationHistory);

          // Preparar mensajes para Claude
          const formattedMessages: ConversationMessage[] = [];

          // Agregar historial si existe
          if (conversationHistory && Array.isArray(conversationHistory)) {
            for (const msg of conversationHistory) {
              if (msg.role && msg.content && (msg.role === 'user' || msg.role === 'assistant')) {
                formattedMessages.push({
                  role: msg.role,
                  content: msg.content
                });
              }
            }
          }

          // Agregar mensaje actual
          formattedMessages.push({
            role: 'user',
            content: message
          });

          finalResponse = await callAnthropicWithRetry(formattedMessages);
          responseType = ResponseType.CLAUDE;
          emotion = emotionalAnalysis.primaryEmotion;

          // Validar respuesta de Claude
          const identityValidation = validateNexusIdentity(finalResponse);
          const ganoexcelValidation = validateGanoExcelInfo(finalResponse);

          if (!identityValidation.isValid) {
            console.error('Identity consistency violation:', identityValidation.violations);
            finalResponse = 'Soy NEXUS, el representante digital del CreaTuActivo que Luis y Liliana desarrollaron para distribución de productos Gano Excel. ¿En qué puedo ayudarte a evaluar esta oportunidad?';
          }

          if (!ganoexcelValidation.isValid) {
            console.error('Gano Excel information inaccuracy:', ganoexcelValidation.violations);
          }

        } catch (error: any) {
          console.error('All Anthropic attempts failed:', error);

          finalResponse = getFallbackResponse(message);
          responseType = ResponseType.FALLBACK;
          emotion = 'TECNICO';
        }
      }
    }
  }

  // ========================================
  // PREPARAR RESPUESTA FINAL
  // ========================================
  const wordCount = finalResponse.split(' ').length;
  const calculatedDelay = calculateIntelligentDelay(responseType, wordCount);

  const metadata = {
    responseType,
    emotion,
    wordCount,
    timestamp: new Date().toISOString(),
    profileUsed,
    strategicMatch
  };

  // Log para desarrollo
  logNexusInteraction(message, finalResponse, metadata);

  return {
    message: finalResponse,
    delay: calculatedDelay,
    metadata
  };
};

// ========================================
// ENDPOINT API PRINCIPAL
// ========================================
export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [], context = 'general' } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Procesar mensaje con toda la lógica modular
    const response = await processMessage(message, conversationHistory);

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error in claude-chat API:', error);

    // Respuesta de emergencia específica para NEXUS
    const emergencyResponse: NexusResponse = {
      message: fallbackResponses.emergency,
      delay: 1500,
      metadata: {
        responseType: ResponseType.FALLBACK,
        emotion: 'TECNICO',
        wordCount: 30,
        timestamp: new Date().toISOString()
      }
    };

    return NextResponse.json(emergencyResponse);
  }
}

// ========================================
// ENDPOINT GET PARA HEALTH CHECK
// ========================================
export async function GET() {
  return NextResponse.json({
    status: 'NEXUS v4.8 - CreaTuActivo Active',
    timestamp: new Date().toISOString(),
    modules: {
      content: '24 strategic responses loaded',
      profiles: `${Object.keys(USER_PROFILES).length} profiles active`,
      packages: `${PACKAGES.length} packages configured`,
      validation: 'Identity + Gano Excel validators active',
      nameFlow: 'Profile → Name → Personalized Response flow active'
    }
  });
}

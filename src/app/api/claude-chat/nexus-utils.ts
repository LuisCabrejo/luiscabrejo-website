// /src/app/api/claude-chat/nexus-utils.ts
// Utilidades, validadores y helpers para NEXUS v4.8

import { StrategicResponse, ValidationResult, ConversationContext, EmotionalAnalysis } from './nexus-types';
import { strategicResponses } from './nexus-content';

// ========================================
// DETECCIÓN DE PATRONES ESTRATÉGICOS
// ========================================
export const findStrategicResponse = (userMessage: string): StrategicResponse | null => {
  const normalizedMessage = userMessage.toLowerCase().trim();

  const patterns: Record<string, RegExp[]> = {
    // GRUPO 1: Respuestas Fundacionales
    "que_significa_ser_fundador": [
      /qué significa.*fundador/i, /ser fundador/i, /significa fundador/i, /fundador.*significa/i
    ],
    "urgencia_real_marketing": [
      /urgencia.*real/i, /real.*urgencia/i, /táctica.*marketing/i, /marketing.*táctica/i,
      /cupos.*real/i, /limitado.*real/i, /tiempo.*real/i
    ],
    "tipo_personas": [
      /tipo.*personas/i, /qué.*gente/i, /perfil/i, /quién.*está/i, /personas.*están/i,
      /quiénes.*están/i, /tipo.*gente/i
    ],
    "rol_nexus": [
      /rol.*nexus/i, /qué.*haces/i, /función.*nexus/i, /quién.*eres/i, /tu.*rol/i,
      /eres.*nexus/i, /nexus.*qué/i
    ],
    "plan_primer_ano": [
      /plan.*año/i, /primer.*año/i, /próximo.*año/i, /plan.*futuro/i, /visión.*año/i,
      /roadmap/i, /plan.*tiempo/i
    ],

    // GRUPO 2: Respuestas Operacionales
    "como_funciona_exactamente": [
      /cómo funciona exactamente/i, /funciona.*negocio/i, /cómo.*funciona/i,
      /proceso.*exacto/i, /cómo.*opera/i, /mecánica/i
    ],
    "cuanto_invertir": [
      /cuánto.*invertir/i, /cuánto.*necesito/i, /inversión/i, /cuánto.*cuesta/i,
      /precio/i, /dinero.*necesito/i, /capital.*inicial/i
    ],
    "tiempo_resultados": [
      /tiempo.*resultados/i, /cuándo.*resultados/i, /qué.*tan.*rápido/i,
      /en.*cuánto.*tiempo/i, /demora.*resultados/i
    ],
    "es_mlm_legitimo": [
      /esto.*mlm/i, /es.*multinivel/i, /legítimo/i, /pirámide/i, /confiable/i,
      /estafa/i, /esquema/i, /legal/i
    ],
    "que_tan_dificil": [
      /qué.*tan.*difícil/i, /difícil.*es/i, /complicado/i, /fácil.*es/i,
      /dificultad/i, /complejo/i
    ],
    "cuando_ver_resultados": [
      /cuándo.*ver.*resultados/i, /cuándo.*empiezo.*ganar/i, /primeros.*resultados/i,
      /tiempo.*ver/i, /cuánto.*tarda/i
    ],
    "por_que_me_elegiste": [
      /por.*qué.*me.*elegiste/i, /por.*qué.*yo/i, /elegir.*me/i, /criterios/i,
      /por.*qué.*contactaste/i
    ],
    "que_pasa_si_no_va_bien": [
      /qué.*pasa.*si.*no/i, /si.*no.*funciona/i, /riesgo/i, /garantía/i,
      /no.*va.*bien/i, /fracasa/i, /peor.*caso/i
    ],
    "empezar_con_menos": [
      /empezar.*menos/i, /menos.*dinero/i, /más.*barato/i, /opciones.*económicas/i,
      /precio.*menor/i, /reducido/i
    ],
    "necesito_experiencia_previa": [
      /necesito.*experiencia/i, /experiencia.*previa/i, /sin.*experiencia/i,
      /principiante/i, /novato/i, /primera.*vez/i
    ],
    "de_que_trata_proyecto": [
      /de.*qué.*trata/i, /qué.*es.*proyecto/i, /proyecto.*consiste/i,
      /esencia.*proyecto/i, /resumen.*proyecto/i
    ],
    "yo_que_tengo_que_hacer": [
      /yo.*qué.*hacer/i, /qué.*tengo.*hacer/i, /mi.*trabajo/i, /responsabilidades/i,
      /tareas/i, /mi.*rol/i, /actividades/i
    ],

    // CONVERSIÓN Y OTROS
    "listo_para_arrancar": [
      /estoy.*listo/i, /quiero.*empezar/i, /cómo.*me.*uno/i, /quiero.*ser.*fundador/i,
      /dame.*enlace/i, /dónde.*pago/i, /vamos.*arrancar/i, /acepto/i, /adelante/i
    ],
    "ganoderma_lucidum": [
      /ganoderma.*lucidum/i, /ganoderma/i, /hongo/i, /súper.*hongo/i,
      /rey.*adaptógenos/i, /beneficios.*ganoderma/i, /hongo.*rojo/i
    ]
  };

  // Buscar coincidencias
  for (const [responseKey, patternList] of Object.entries(patterns)) {
    if (patternList.some(pattern => pattern.test(normalizedMessage))) {
      return strategicResponses[responseKey] || null;
    }
  }

  return null;
};

// ========================================
// VALIDADORES DE IDENTIDAD Y CONTENIDO
// ========================================
export const validateNexusIdentity = (response: string): ValidationResult => {
  const violations: string[] = [];

  const identityViolations = [
    { pattern: /yo desarrollé/i, issue: 'Claiming Luis\' development work' },
    { pattern: /mi experiencia de \d+ años/i, issue: 'Claiming Luis\' experience' },
    { pattern: /soy luis/i, issue: 'Identity confusion - claiming to be Luis' },
    { pattern: /soy liliana/i, issue: 'Identity confusion - claiming to be Liliana' },
    { pattern: /como distribuidor/i, issue: 'Claiming distributor role' },
    { pattern: /mi negocio/i, issue: 'Claiming business ownership' },
    { pattern: /cuando empecé/i, issue: 'Claiming personal timeline' }
  ];

  for (const violation of identityViolations) {
    if (violation.pattern.test(response)) {
      violations.push(violation.issue);
    }
  }

  return {
    isValid: violations.length === 0,
    violations,
    suggestions: violations.length > 0 ? [
      'Use third person references: "Luis desarrolló", "La experiencia de Luis"',
      'Maintain NEXUS identity as system representative',
      'Speak ABOUT the CreaTuActivo, not AS Luis/Liliana'
    ] : []
  };
};

export const validateGanoExcelInfo = (response: string): ValidationResult => {
  const violations: string[] = [];

  const inaccuracies = [
    { pattern: /gano excel.*(?!30)\d{2,} años/i, issue: 'Wrong Gano Excel company age' },
    { pattern: /luis.*(?!11)\d{2,} años.*experiencia/i, issue: 'Wrong Luis experience years' },
    { pattern: /diamante.*(?!9)\d{2,} años/i, issue: 'Wrong consecutive Diamond years' },
    { pattern: /luis.*integró.*ganoderma/i, issue: 'Luis did not integrate Ganoderma' },
    { pattern: /luis.*creó.*productos/i, issue: 'Luis did not create products' },
    { pattern: /luis.*desarrolló.*ganoderma/i, issue: 'Luis did not develop Ganoderma technology' },
    { pattern: /luis.*inventó.*café/i, issue: 'Luis did not invent Gano coffee' }
  ];

  for (const inaccuracy of inaccuracies) {
    if (inaccuracy.pattern.test(response)) {
      violations.push(inaccuracy.issue);
    }
  }

  return {
    isValid: violations.length === 0,
    violations,
    suggestions: violations.length > 0 ? [
      'Gano Excel: Founded 1995 by Leow Soon Seng, 30+ years',
      'Luis: 11 years experience distributing, 9 consecutive Diamond',
      'Leow Soon Seng developed Ganoderma technology, Luis developed 4M system'
    ] : []
  };
};

// ========================================
// DELAYS INTELIGENTES OPTIMIZADOS
// ========================================
export const calculateIntelligentDelay = (responseType: string, wordCount: number): number => {
  const baseDelays: Record<string, number> = {
    'strategic': 1800,   // Respuestas estratégicas - más pensamiento
    'profile': 1200,     // Transiciones de perfil - moderado
    'conversion': 1000,  // Conversión - rápido para no perder momentum
    'claude': 2200,      // Claude AI - más elaboradas
    'fallback': 800      // Fallbacks - rápido
  };

  const wordDelay = Math.min(wordCount * 15, 1200); // Max 1.2s por palabras
  const randomVariation = Math.random() * 400 - 200; // ±200ms variation
  const totalDelay = (baseDelays[responseType] || 1500) + wordDelay + randomVariation;

  return Math.max(1000, Math.min(totalDelay, 4000)); // Entre 1-4 segundos
};

// ========================================
// ANÁLISIS EMOCIONAL AVANZADO
// ========================================
export const analyzeEmotionalState = (message: string, history: any[]): EmotionalAnalysis => {
  const normalizedMessage = message.toLowerCase();

  // Detectar emociones primarias
  const emotionalPatterns = {
    'SKEPTICAL_MLM': [
      /no sé/i, /desconfío/i, /estafa/i, /esquema/i, /he visto antes/i, /suena raro/i
    ],
    'ANALYTICAL': [
      /números/i, /datos/i, /evidencia/i, /prueba/i, /estadísticas/i, /ROI/i, /análisis/i
    ],
    'EXCITED': [
      /increíble/i, /perfecto/i, /genial/i, /me encanta/i, /fantástico/i, /excelente/i
    ],
    'WORRIED': [
      /preocupa/i, /miedo/i, /nervioso/i, /inseguro/i, /dudas/i, /temor/i
    ],
    'PROFESSIONAL': [
      /corporativo/i, /empresa/i, /profesional/i, /trabajo/i, /carrera/i, /reputación/i
    ],
    'FRUSTRATED': [
      /cansado/i, /harto/i, /prometieron/i, /tiempo/i, /directo/i, /al grano/i
    ]
  };

  let primaryEmotion = 'NEUTRAL';
  let maxMatches = 0;

  for (const [emotion, patterns] of Object.entries(emotionalPatterns)) {
    const matches = patterns.filter(pattern => pattern.test(normalizedMessage)).length;
    if (matches > maxMatches) {
      maxMatches = matches;
      primaryEmotion = emotion;
    }
  }

  // Intensidad basada en indicadores
  const intensityIndicators = [
    /muy/i, /mucho/i, /realmente/i, /extremadamente/i, /súper/i, /ultra/i
  ];
  const intensity = intensityIndicators.filter(pattern =>
    pattern.test(normalizedMessage)
  ).length + 1;

  // Recomendación de approach
  const approachMap: Record<string, string> = {
    'SKEPTICAL_MLM': 'Acknowledge skepticism + Provide Gano Excel credibility + Invite investigation',
    'ANALYTICAL': 'Provide specific data + Luis track record + Technical details',
    'EXCITED': 'Match energy + Channel to action + Set realistic expectations',
    'WORRIED': 'Validate concerns + Provide security + Conservative options',
    'PROFESSIONAL': 'Respect status + Executive positioning + Reputation enhancement',
    'FRUSTRATED': 'Direct communication + Efficient process + Time-respectful'
  };

  return {
    primaryEmotion,
    intensity: Math.min(intensity, 5),
    context: history.length > 0 ? 'ongoing_conversation' : 'first_contact',
    recommendedApproach: approachMap[primaryEmotion] || 'Balanced empathetic response'
  };
};

// ========================================
// CONTEXTO CONVERSACIONAL
// ========================================
export const extractConversationContext = (history: any[]): ConversationContext => {
  if (!history || history.length === 0) {
    return {
      topics: [],
      conversationStage: 'welcome',
      messagesCount: 0
    };
  }

  const recentMessages = history.slice(-6);
  const topics: string[] = [];

  const topicKeywords = {
    'paquetes': ['paquete', 'precio', 'invertir', 'cuesta', 'valor', 'dinero'],
    'funcionamiento': ['funciona', 'sistema', 'plataforma', 'proceso', 'cómo'],
    'mlm': ['mlm', 'multinivel', 'legítimo', 'esquema', 'pirámide'],
    'resultados': ['resultado', 'tiempo', 'cuándo', 'ganar', 'comisiones'],
    'productos': ['ganoderma', 'café', 'productos', 'beneficios', 'salud'],
    'incorporación': ['dentro', 'acepto', 'empezar', 'listo', 'arrancar'],
    'perfil': ['empleado', 'salud', 'empresario', 'casa', 'independiente']
  };

  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    const mentioned = recentMessages.some(msg =>
      keywords.some(keyword =>
        msg.content && msg.content.toLowerCase().includes(keyword)
      )
    );
    if (mentioned) topics.push(topic);
  }

  // Determinar etapa de conversación
  let conversationStage: 'welcome' | 'profiling' | 'strategic' | 'conversion' = 'strategic';

  if (history.length <= 1) {
    conversationStage = 'welcome';
  } else if (topics.includes('perfil') || recentMessages.some(msg =>
    msg.content && /🏢|🏥|👨‍💼|🏠|🎓|✍️/.test(msg.content)
  )) {
    conversationStage = 'profiling';
  } else if (topics.includes('incorporación')) {
    conversationStage = 'conversion';
  }

  return {
    topics,
    conversationStage,
    messagesCount: history.length
  };
};

// ========================================
// DETECCIÓN DE SEÑALES DE CONVERSIÓN
// ========================================
export const detectConversionSignals = (message: string): boolean => {
  const conversionPatterns = [
    /estoy.*listo/i, /quiero.*empezar/i, /cómo.*me.*uno/i,
    /dame.*enlace/i, /dónde.*pago/i, /acepto/i, /adelante/i,
    /vamos.*arrancar/i, /quiero.*ser.*fundador/i, /me.*interesa.*paquete/i
  ];

  return conversionPatterns.some(pattern => pattern.test(message));
};

// ========================================
// DETECCIÓN DE SALUDO INICIAL
// ========================================
export const detectGreeting = (message: string): boolean => {
  const greetingPatterns = [
    /^hola$/i, /^hi$/i, /^hello$/i, /^hey$/i, /^buenas$/i,
    /hola.*nexus/i, /buenos.*días/i, /buenas.*tardes/i, /buenas.*noches/i
  ];

  return greetingPatterns.some(pattern => pattern.test(message.trim()));
};

// ========================================
// RETRY LOGIC PARA ANTHROPIC
// ========================================
export const createRetryDelay = (attempt: number): number => {
  return Math.pow(2, attempt) * 1000; // Exponential backoff: 2s, 4s, 8s
};

export const shouldRetry = (error: any, attempt: number, maxRetries: number): boolean => {
  return (
    error.status === 529 && // Anthropic overloaded
    attempt < maxRetries
  );
};

// ========================================
// HELPERS DE CONTENIDO
// ========================================
export const truncateResponse = (response: string, maxWords: number = 150): string => {
  const words = response.split(' ');
  if (words.length <= maxWords) {
    return response;
  }

  return words.slice(0, maxWords).join(' ') + '...';
};

export const addEngagementQuestion = (response: string): string => {
  // Si ya tiene pregunta, no agregar otra
  if (response.includes('?')) {
    return response;
  }

  const engagementQuestions = [
    '¿Qué opinas sobre esto?',
    '¿Te gustaría saber más detalles?',
    '¿Alguna pregunta específica?',
    '¿Qué aspecto te interesa más?'
  ];

  const randomQuestion = engagementQuestions[
    Math.floor(Math.random() * engagementQuestions.length)
  ];

  return `${response}\n\n${randomQuestion}`;
};

// ========================================
// LOGGING Y DEBUGGING
// ========================================
export const logNexusInteraction = (
  userMessage: string,
  response: string,
  metadata: any
): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[NEXUS INTERACTION]', {
      timestamp: new Date().toISOString(),
      userMessage: userMessage.substring(0, 100),
      responseType: metadata.responseType,
      emotion: metadata.emotion,
      wordCount: metadata.wordCount,
      delay: metadata.delay
    });
  }
};

// ========================================
// UTILS PARA MOBILE OPTIMIZATION
// ========================================
export const optimizeForMobile = (response: string): string => {
  // Asegurar párrafos cortos para móvil
  return response
    .replace(/\n\n/g, '\n\n') // Mantener breaks existentes
    .replace(/([.!?])\s+([A-Z])/g, '$1\n\n$2'); // Agregar breaks después de oraciones largas
};

export const formatWithEmojis = (response: string): string => {
  // Agregar emojis estratégicos para engagement móvil
  return response
    .replace(/💰/g, '💰')
    .replace(/🚀/g, '🚀')
    .replace(/⚡/g, '⚡')
    .replace(/🎯/g, '🎯');
};

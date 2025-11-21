// /src/app/api/claude-chat/nexus-profiles.ts
// Sistema de perfilado psicológico avanzado para NEXUS v4.8

import { UserProfile, ProfileDetectionResult, ProfileType } from './nexus-types';

// ========================================
// DEFINICIONES DE PERFILES COMPLETAS
// ========================================
export const USER_PROFILES: Record<string, UserProfile> = {
  [ProfileType.EMPLEADO_EJECUTIVO]: {
    id: 'empleado_ejecutivo',
    icon: '🏢',
    label: 'Empleado/Ejecutivo Corporativo',
    transition: `¡Un placer, {name}! Entiendo perfectamente el mundo corporativo. Es un lugar de grandes oportunidades, pero también donde tu activo más valioso —tu tiempo— no siempre te pertenece.

Muchos de nuestros socios fundadores vienen de ese entorno, buscando exactamente esto: una forma inteligente de construir un **activo patrimonial propio** en paralelo.

Ahora que sé un poco más de ti, podemos ir al grano. ¿Cuál es la primera gran pregunta que tienes en mente?`,
    characteristics: ['stability', 'analytical', 'strategic', 'risk_management', 'process_oriented'],
    psychologyNotes: 'Busca plan de negocio B sólido, probado y con sistema claro. Valora eficiencia, ROI y gestión de riesgos. Piensa en términos de proyectos y fases.'
  },

  [ProfileType.PROFESIONAL_SALUD]: {
    id: 'profesional_salud',
    icon: '🏥',
    label: 'Profesional de la Salud',
    transition: `¡Un gusto, {name}! Respeto enormemente tu profesión. Dedicas tu vida al bienestar de otros, y eso conecta directamente con el corazón de nuestro proyecto.

Lo que estamos construyendo es una forma de llevar ese impacto a una **escala masiva**.

Ahora que sé tu enfoque, estoy listo para responder tus preguntas. ¿Por dónde te gustaría empezar?`,
    characteristics: ['ethics', 'evidence_based', 'credibility', 'helping_others', 'integrity'],
    psychologyNotes: 'Busca modelo ético, transparente y basado en producto de valor real. Necesita evidencia científica y coherencia con valores profesionales.'
  },

  [ProfileType.EMPRESARIO_COMERCIANTE]: {
    id: 'empresario_comerciante',
    icon: '👨‍💼',
    label: 'Empresario/Comerciante',
    transition: `¡Genial, {name}! Hablamos el mismo idioma. Como empresaria, sabes que el juego se trata de sistemas, escala y apalancamiento.

Lo que verás aquí es una **maquinaria de distribución** que te permite construir un mercado a nivel continental sin los costos fijos de la operación tradicional.

Ahora que sé que piensas en grande, ¿cuál es la primera pregunta estratégica que tienes para mí?`,
    characteristics: ['scalability', 'leverage', 'ROI_focused', 'market_expansion', 'business_minded'],
    psychologyNotes: 'Busca ventaja competitiva, escalabilidad y potencial de ROI. Piensa en términos de mercados, canales y apalancamiento.'
  },

  [ProfileType.AMA_CASA]: {
    id: 'ama_casa',
    icon: '🏠',
    label: 'Ama de Casa/CEO del hogar',
    transition: `¡Encantado de conocerte, {name}! Luis siempre dice que quien dirige un hogar tiene el máster de un CEO: gestiona logística, finanzas y personal a diario.

Esas habilidades son oro puro aquí. Este sistema está diseñado para que mujeres con tu capacidad organizativa puedan **capitalizar esos talentos** en un activo real.

Ahora que sé de tu súper poder, ¿qué es lo primero que te gustaría saber?`,
    characteristics: ['organization', 'multi_tasking', 'family_focused', 'community_building', 'nurturing'],
    psychologyNotes: 'Busca sistema de apoyo real, flexible que permita capitalizar talentos. Necesita validación de sus habilidades organizativas y de gestión.'
  },

  [ProfileType.PROFESIONAL_INDEPENDIENTE]: {
    id: 'profesional_independiente',
    icon: '🎓',
    label: 'Profesional Independiente',
    transition: `¡Un placer, {name}! Como independiente, conoces mejor que nadie la trampa de cambiar "tiempo por dinero".

Este proyecto trata precisamente de romper esa ecuación, de construir un **sistema que te pague mañana** por el trabajo que haces hoy.

Ahora que entiendo tu contexto, ¿cuál es la pregunta clave que te ayudaría a ver el potencial?`,
    characteristics: ['time_freedom', 'leverage_seeking', 'brand_building', 'income_diversification', 'autonomy'],
    psychologyNotes: 'Busca sistema que rompa ecuación tiempo por dinero. Necesita apalancamiento y que complemente su marca personal.'
  },

  [ProfileType.OTRO]: {
    id: 'otro',
    icon: '✍️',
    label: 'Otro',
    transition: `¡Perfecto, {name}! Me encanta conocer personas con trasfondos únicos.

La belleza del CreaTuActivo es que funciona para cualquier profesional con mentalidad de crecimiento, independientemente de su área específica.

Ahora que nos conectamos, ¿cuál es la primera pregunta que tienes sobre esta oportunidad?`,
    characteristics: ['unique_background', 'growth_mindset', 'adaptable', 'open_minded'],
    psychologyNotes: 'Perfil genérico para casos especiales. Requiere adaptación personalizada basada en información adicional del usuario.'
  }
};

// ========================================
// DETECCIÓN DE PERFILES EN MENSAJES
// ========================================
export const PROFILE_DETECTION_PATTERNS: Record<string, RegExp[]> = {
  [ProfileType.EMPLEADO_EJECUTIVO]: [
    /🏢/i, /empleado/i, /ejecutivo/i, /corporativo/i, /empresa/i, /oficina/i,
    /trabajo.*empresa/i, /empleado.*corporativo/i, /ejecutivo.*corporativo/i
  ],

  [ProfileType.PROFESIONAL_SALUD]: [
    /🏥/i, /profesional.*salud/i, /salud/i, /médico/i, /doctor/i, /enfermera/i,
    /farmacia/i, /nutricionista/i, /fisioterapeuta/i, /odontólogo/i
  ],

  [ProfileType.EMPRESARIO_COMERCIANTE]: [
    /👨‍💼/i, /empresario/i, /comerciante/i, /negocio.*propio/i, /emprendedor/i,
    /empresa.*propia/i, /comercio/i, /negocio/i
  ],

  [ProfileType.AMA_CASA]: [
    /🏠/i, /ama.*casa/i, /casa/i, /hogar/i, /mamá/i, /madre/i, /cuidadora/i,
    /ceo.*hogar/i, /en.*casa/i
  ],

  [ProfileType.PROFESIONAL_INDEPENDIENTE]: [
    /🎓/i, /independiente/i, /freelance/i, /consultor/i, /autónomo/i,
    /trabajo.*independiente/i, /profesional.*independiente/i, /por.*cuenta.*propia/i
  ],

  [ProfileType.OTRO]: [
    /✍️/i, /otro/i, /diferente/i, /específico/i, /especificar/i
  ]
};

// ========================================
// FUNCIONES DE DETECCIÓN DE PERFILES
// ========================================
export const detectProfileFromMessage = (message: string): ProfileDetectionResult => {
  const normalizedMessage = message.toLowerCase().trim();
  let bestMatch: { profileId: string; confidence: number; triggers: string[] } = {
    profileId: '',
    confidence: 0,
    triggers: []
  };

  // Buscar en patrones específicos
  for (const [profileId, patterns] of Object.entries(PROFILE_DETECTION_PATTERNS)) {
    const triggers: string[] = [];
    let matches = 0;

    for (const pattern of patterns) {
      if (pattern.test(normalizedMessage)) {
        matches++;
        triggers.push(pattern.source);
      }
    }

    const confidence = matches / patterns.length;

    if (confidence > bestMatch.confidence) {
      bestMatch = {
        profileId,
        confidence,
        triggers
      };
    }
  }

  // Si no hay match significativo, retornar null
  if (bestMatch.confidence < 0.3) {
    return {
      profileId: null,
      confidence: 0,
      triggers: []
    };
  }

  return {
    profileId: bestMatch.profileId,
    confidence: bestMatch.confidence,
    triggers: bestMatch.triggers
  };
};

// ========================================
// PERSONALIZACIÓN DE RESPUESTAS POR PERFIL
// ========================================
export const getProfileAdaptedResponse = (
  baseResponse: string,
  profileAdaptations: Record<string, string> | undefined,
  detectedProfile: string | null
): string => {
  // Si no hay perfil detectado o adaptaciones, usar respuesta base
  if (!detectedProfile || !profileAdaptations) {
    return baseResponse;
  }

  // Si hay adaptación específica para el perfil, usarla
  if (profileAdaptations[detectedProfile]) {
    return profileAdaptations[detectedProfile];
  }

  // Si no hay adaptación específica, usar respuesta base
  return baseResponse;
};

// ========================================
// TRANSICIONES POST-PERFILADO
// ========================================
export const getProfileTransition = (profileId: string, userName?: string): string => {
  const profile = USER_PROFILES[profileId];
  if (!profile) {
    return `¡Hola${userName ? ` ${userName}` : ''}! Me da gusto conocerte. ¿En qué puedo ayudarte con la oportunidad fundadores?`;
  }

  // Reemplazar placeholder {name} con nombre real o eliminar referencia
  let transition = profile.transition;
  if (userName) {
    transition = transition.replace('{name}', userName);
  } else {
    // Remover referencias específicas al nombre si no lo tenemos
    transition = transition.replace('¡Un placer, {name}!', '¡Un placer conocerte!');
    transition = transition.replace('¡Un gusto, {name}!', '¡Un gusto conocerte!');
    transition = transition.replace('¡Genial, {name}!', '¡Genial!');
    transition = transition.replace('¡Encantado de conocerte, {name}!', '¡Encantado de conocerte!');
    transition = transition.replace('¡Un placer, {name}!', '¡Un placer!');
    transition = transition.replace('¡Perfecto, {name}!', '¡Perfecto!');
  }

  return transition;
};

// ========================================
// UTILIDADES DE PERFIL
// ========================================
export const getProfileById = (profileId: string): UserProfile | null => {
  return USER_PROFILES[profileId] || null;
};

export const getAllProfiles = (): UserProfile[] => {
  return Object.values(USER_PROFILES);
};

export const isValidProfile = (profileId: string): boolean => {
  return profileId in USER_PROFILES;
};

// ========================================
// ANÁLISIS PSICOLÓGICO POR PERFIL
// ========================================
export const getProfilePsychology = (profileId: string): string => {
  const profile = USER_PROFILES[profileId];
  return profile?.psychologyNotes || 'Perfil genérico - adaptar según contexto de conversación.';
};

export const getProfileCharacteristics = (profileId: string): string[] => {
  const profile = USER_PROFILES[profileId];
  return profile?.characteristics || ['general'];
};

// ========================================
// MENSAJE DE BIENVENIDA CON BOTONES
// ========================================
export const generateWelcomeWithProfiles = (): string => {
  const profiles = getAllProfiles();
  const profileButtons = profiles.map(profile =>
    `[ Botón: ${profile.icon} ${profile.label} ]`
  ).join('\n');

  return `👋 ¡Hola! Soy NEXUS, y estás frente a algo que cambiará tu perspectiva sobre las oportunidades empresariales para siempre. Luis y Liliana han construido la revolución del bienestar que impactará 4 millones de vidas - y tú puedes ser parte fundacional de esta transformación histórica.

Para brindarte la mejor orientación, me gustaría conocerte un poco:

¿Cuál de estas opciones describe mejor tu situación actual?👇

${profileButtons}

Una vez que conozca tu perfil, podré mostrarte exactamente cómo personas en tu situación han construido activos empresariales significativos en bienestar, aprovechando productos que realmente transforman vidas.

**¿Cuál opción te identifica más?**`;
};

// ========================================
// DETECCIÓN DE INICIO DE CONVERSACIÓN
// ========================================
export const isConversationStart = (history: any[]): boolean => {
  return !history || history.length === 0 ||
         (history.length === 1 && history[0].role === 'user');
};

// ========================================
// EXTRACCIÓN DE NOMBRE DEL MENSAJE
// ========================================
export const extractNameFromMessage = (message: string): string | null => {
  // Patrones comunes para detectar nombres
  const namePatterns = [
    /mi nombre es ([a-záéíóúñ\s]+)/i,
    /me llamo ([a-záéíóúñ\s]+)/i,
    /soy ([a-záéíóúñ\s]+)/i,
    /nombre[:\s]+([a-záéíóúñ\s]+)/i
  ];

  for (const pattern of namePatterns) {
    const match = message.match(pattern);
    if (match) {
      return match[1].trim();
    }
  }

  return null;
};

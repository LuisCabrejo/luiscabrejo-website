// /src/app/api/claude-chat/nexus-types.ts
// TypeScript interfaces para NEXUS CreaTuActivo

export interface StrategicResponse {
  emotion: string;
  responseType: 'strategic' | 'profile' | 'conversion' | 'claude' | 'fallback';
  response: string;
  profileAdaptation?: Record<string, string>;
}

export interface UserProfile {
  id: string;
  icon: string;
  label: string;
  transition: string;
  characteristics: string[];
  psychologyNotes: string;
}

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  profileDetected?: string;
}

export interface NexusResponse {
  message: string;
  delay: number;
  metadata: {
    responseType: string;
    emotion: string;
    wordCount: number;
    timestamp: string;
    profileUsed?: string;
    strategicMatch?: string;
  };
}

export interface ProfileDetectionResult {
  profileId: string | null;
  confidence: number;
  triggers: string[];
}

export interface EmotionalAnalysis {
  primaryEmotion: string;
  intensity: number;
  context: string;
  recommendedApproach: string;
}

export interface ValidationResult {
  isValid: boolean;
  violations: string[];
  suggestions: string[];
}

export interface ConversationContext {
  topics: string[];
  profileDetected?: string;
  emotionalState?: string;
  conversationStage: 'welcome' | 'profiling' | 'strategic' | 'conversion';
  messagesCount: number;
}

export interface WelcomeMessage {
  content: string;
  hasProfileButtons: boolean;
  profileOptions: UserProfile[];
}

export interface ConversionFlow {
  packages: Package[];
  formUrl: string;
  whatsappNumber: string;
  cities: string[];
}

export interface Package {
  id: string;
  name: string;
  price: string;
  priceUSD: number;
  priceCOP: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
  activationUrl: string;
}

// Enums para mejor type safety
export enum ResponseType {
  STRATEGIC = 'strategic',
  PROFILE = 'profile',
  CONVERSION = 'conversion',
  CLAUDE = 'claude',
  FALLBACK = 'fallback'
}

export enum EmotionType {
  SKEPTICAL_MLM = 'SKEPTICAL_MLM',
  ANALYTICAL = 'ANALYTICAL',
  EXCITED = 'EXCITED',
  WORRIED = 'WORRIED',
  PROFESSIONAL = 'PROFESSIONAL',
  FRUSTRATED = 'FRUSTRATED',
  DETERMINACION_URGENCIA = 'DETERMINACION_URGENCIA',
  CURIOSIDAD_CIENTIFICA = 'CURIOSIDAD_CIENTIFICA'
}

export enum ProfileType {
  EMPLEADO_EJECUTIVO = 'empleado_ejecutivo',
  PROFESIONAL_SALUD = 'profesional_salud',
  EMPRESARIO_COMERCIANTE = 'empresario_comerciante',
  AMA_CASA = 'ama_casa',
  PROFESIONAL_INDEPENDIENTE = 'profesional_independiente',
  OTRO = 'otro'
}

export enum ConversationStage {
  WELCOME = 'welcome',
  PROFILING = 'profiling',
  STRATEGIC = 'strategic',
  CONVERSION = 'conversion'
}

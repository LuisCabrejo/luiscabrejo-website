// /src/components/NexusChat.tsx - CON MEJORAS DE CONECTIVIDAD + FIX CRÍTICO

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Zap, Sparkles, Maximize2, Minimize2, Wifi, WifiOff, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  emotion?: string;
  responseType?: string;
  isOffline?: boolean; // NUEVO: Marca mensajes offline
  retryCount?: number; // NUEVO: Contador de reintentos
}

interface NexusState {
  isLoading: boolean;
  loadingMessage: string;
  isTyping: boolean;
  currentTypedMessage: string;
  loadingPhase: 'analysis' | 'processing' | 'writing' | 'complete';
}

// NUEVO: Estados de conexión
interface ConnectionState {
  status: 'connected' | 'connecting' | 'disconnected' | 'retrying';
  lastSuccessfulConnection: Date | null;
  consecutiveFailures: number;
  averageResponseTime: number;
}

interface NexusChatProps {
  context?: string;
  className?: string;
  showPrompt?: boolean;
  promptMessage?: string;
}

export default function NexusChat({
  context = 'general',
  className = '',
  showPrompt = true,
  promptMessage = '¿Listo para construir tu activo empresarial con Gano Excel? NEXUS conoce el sistema 4M completo.'
}: NexusChatProps) {
  const [isChatOpen, setChatOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showChatPrompt, setShowChatPrompt] = useState(false);

  // Estados para efecto galáctico
  const [chatPhase, setChatPhase] = useState<'closed' | 'initializing' | 'connecting' | 'typing' | 'ready'>('closed');
  const [isInitialMessageShown, setIsInitialMessageShown] = useState(false);

  // Estados del chat con MEMORIA MEJORADA
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationSummary, setConversationSummary] = useState<string[]>([]);

  // Estados para delays inteligentes
  const [nexusState, setNexusState] = useState<NexusState>({
    isLoading: false,
    loadingMessage: '',
    isTyping: false,
    currentTypedMessage: '',
    loadingPhase: 'complete'
  });

  // NUEVO: Estado de conexión
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    status: 'connected',
    lastSuccessfulConnection: new Date(),
    consecutiveFailures: 0,
    averageResponseTime: 2000
  });

  const chatMessagesEndRef = useRef<HTMLDivElement>(null);
  const responseTimeRef = useRef<number[]>([]); // NUEVO: Tracking response times

  // NUEVO: Mensajes de fallback para conexión débil
  const OFFLINE_RESPONSES = {
    general: "Disculpa, tengo una dificultad técnica temporal. Mientras tanto, puedes explorar portal.4millones.com para ver las herramientas del sistema 4M funcionando. ¿Hay algo específico sobre Gano Excel o el sistema 4M que te gustaría saber?",

    fundador: "Temporalmente tengo dificultades técnicas, pero ser Fundador significa tres cosas concretas: **Posicionamiento** (primeros 150 antes del lanzamiento masivo), **Participación** (en la construcción del sistema) y **Privilegio** (acceso a herramientas antes que nadie). El programa está diseñado por Luis y Liliana para crear una base sólida antes del 1 de septiembre.",

    inversion: "Durante esta dificultad técnica: Los paquetes fundadores son **$200** (Emprendedor), **$500** (Empresarial) y **$1000** (Visionario). Inversión única sin costos ocultos. Además, solo 50 PV mensual (aprox $80 USD) por el cual recibes producto de igual valor.",

    ganoexcel: "Aunque tengo dificultades técnicas: Gano Excel es una empresa de **30+ años** con patente mundial sobre Ganoderma Lucidum creada por **Leow Soon Seng** en 1995. Luis y Liliana crearon el **sistema 4M** para facilitar la distribución de estos productos únicos.",

    funcionamiento: "Con dificultades técnicas, pero el sistema funciona así: **3 C's** - Conectar (personas con mentalidad correcta), Compartir (herramientas 4M automatizadas), Acompañar (durante su proceso). La tecnología hace la presentación, tú haces la conexión humana.",

    resultados: "Temporalmente offline, pero timeline realista: **2-4 semanas** primeras comisiones con plan Arranque Explosivo, **3-6 meses** activo significativo, **12-18 meses** riqueza real. No es fácil, pero es simple con el sistema 4M."
  };

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, nexusState.currentTypedMessage]);

  // NUEVO: Detección automática de problemas de red
  useEffect(() => {
    const handleNetworkChange = () => {
      if (!navigator.onLine) {
        setConnectionState(prev => ({
          ...prev,
          status: 'disconnected'
        }));

        // Agregar mensaje de estado offline
        if (isChatOpen && chatMessages.length > 0) {
          addOfflineMessage("Se detectó pérdida de conexión. Puedes seguir preguntando - tengo respuestas básicas disponibles offline.");
        }
      } else {
        setConnectionState(prev => ({
          ...prev,
          status: 'connected',
          lastSuccessfulConnection: new Date(),
          consecutiveFailures: 0
        }));
      }
    };

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, [isChatOpen, chatMessages.length]);

  // NUEVO: Función para agregar mensaje offline
  const addOfflineMessage = (text: string) => {
    const offlineMessage: ChatMessage = {
      id: `offline-${Date.now()}`,
      text,
      isUser: false,
      timestamp: new Date(),
      isOffline: true
    };
    setChatMessages(prev => [...prev, offlineMessage]);
  };

  // NUEVO: Función para obtener respuesta offline inteligente
  const getOfflineResponse = (message: string): string => {
    const normalizedMessage = message.toLowerCase();

    if (normalizedMessage.includes('fundador') || normalizedMessage.includes('programa')) {
      return OFFLINE_RESPONSES.fundador;
    }
    if (normalizedMessage.includes('invest') || normalizedMessage.includes('dinero') || normalizedMessage.includes('precio') || normalizedMessage.includes('cuesta')) {
      return OFFLINE_RESPONSES.inversion;
    }
    if (normalizedMessage.includes('gano excel') || normalizedMessage.includes('ganoderma') || normalizedMessage.includes('empresa')) {
      return OFFLINE_RESPONSES.ganoexcel;
    }
    if (normalizedMessage.includes('funciona') || normalizedMessage.includes('sistema') || normalizedMessage.includes('cómo')) {
      return OFFLINE_RESPONSES.funcionamiento;
    }
    if (normalizedMessage.includes('resultado') || normalizedMessage.includes('tiempo') || normalizedMessage.includes('cuándo')) {
      return OFFLINE_RESPONSES.resultados;
    }

    return OFFLINE_RESPONSES.general;
  };

  // FUNCIÓN CRÍTICA MEJORADA: Envío con retry automático + debug
  const sendMessageWithRetry = async (message: string, maxRetries = 3): Promise<any> => {
    const startTime = Date.now();

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        setConnectionState(prev => ({
          ...prev,
          status: attempt > 1 ? 'retrying' : 'connecting'
        }));

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 segundos timeout

        const formattedHistory = chatMessages
          .filter(msg => !msg.isOffline) // Excluir mensajes offline del historial
          .map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.text
          }));

        const response = await fetch('/api/claude-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message,
            conversationHistory: formattedHistory,
            context
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const responseTime = Date.now() - startTime;

          // Actualizar métricas de conexión
          responseTimeRef.current.push(responseTime);
          if (responseTimeRef.current.length > 10) {
            responseTimeRef.current = responseTimeRef.current.slice(-10); // Mantener últimas 10
          }

          const avgResponseTime = responseTimeRef.current.reduce((a, b) => a + b, 0) / responseTimeRef.current.length;

          setConnectionState(prev => ({
            ...prev,
            status: 'connected',
            lastSuccessfulConnection: new Date(),
            consecutiveFailures: 0,
            averageResponseTime: avgResponseTime
          }));

          return await response.json();
        }

        throw new Error(`HTTP ${response.status}`);

      } catch (error) {
        console.log('🔍 NEXUS DEBUG - Error caught:', error);
        console.log('🔍 NEXUS DEBUG - Error type:', typeof error);
        console.log('🔍 NEXUS DEBUG - Error message:', (error as Error).message);

        // ENHANCED ERROR HANDLING - Don't go offline immediately
        setConnectionState(prev => ({
          ...prev,
          consecutiveFailures: prev.consecutiveFailures + 1
        }));

        if (attempt === maxRetries) {
          // Try one more time with a direct API call before going offline
          try {
            console.log('🔍 NEXUS DEBUG - Last attempt with simple fetch...');
            const directResponse = await fetch('/api/claude-chat', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                message,
                conversationHistory: formattedHistory || [],
                context: context || 'fundadores'
              })
            });

            if (directResponse.ok) {
              const directData = await directResponse.text(); // Get as text first
              console.log('🔍 NEXUS DEBUG - Direct response text:', directData.substring(0, 200));

              try {
                const parsedData = JSON.parse(directData);
                console.log('🔍 NEXUS DEBUG - Parsed successfully:', parsedData.responseType || parsedData.source);

                // SUCCESS! Reset connection state
                setConnectionState(prev => ({
                  ...prev,
                  status: 'connected',
                  lastSuccessfulConnection: new Date(),
                  consecutiveFailures: 0
                }));

                return parsedData; // SUCCESS!
              } catch (parseError) {
                console.error('🔍 NEXUS DEBUG - JSON parse failed:', parseError);
                console.log('🔍 NEXUS DEBUG - Raw response:', directData);
              }
            }
          } catch (lastError) {
            console.log('🔍 NEXUS DEBUG - Even direct call failed:', lastError);
          }

          setConnectionState(prev => ({
            ...prev,
            status: 'disconnected'
          }));

          // Only NOW use offline response
          return {
            message: getOfflineResponse(message),
            delay: 1000,
            metadata: { responseType: 'offline' },
            isOffline: true
          };
        }

        // Esperar antes del siguiente intento (backoff exponencial)
        await new Promise(resolve => setTimeout(resolve, Math.min(1000 * Math.pow(2, attempt - 1), 5000)));
      }
    }
  };

  // Lógica para la invitación proactiva del chat
  useEffect(() => {
    if (!showPrompt) return;

    const timer = setTimeout(() => {
      if (!isChatOpen) {
        setShowChatPrompt(true);
      }
    }, 7000);
    return () => clearTimeout(timer);
  }, [isChatOpen, showPrompt]);

  // Función para agregar temas a memoria conversacional
  const addToConversationMemory = (userMessage: string, botResponse: string) => {
    const topics: string[] = [];

    const topicPatterns = {
      'paquetes': /paquete|precio|invertir|cuesta|valor/i,
      'funcionamiento': /funciona|sistema|plataforma|cómo/i,
      'mlm': /mlm|multinivel|legítimo|pirámide/i,
      'resultados': /resultado|tiempo|cuándo|rápido/i,
      'incorporación': /dentro|acepto|empezar|listo/i
    };

    for (const [topic, pattern] of Object.entries(topicPatterns)) {
      if (pattern.test(userMessage) || pattern.test(botResponse)) {
        if (!conversationSummary.includes(topic)) {
          topics.push(topic);
        }
      }
    }

    if (topics.length > 0) {
      setConversationSummary(prev => [...prev, ...topics]);
    }
  };

  // Función para inicializar secuencia galáctica
  const initializeGalacticSequence = () => {
    setChatPhase('initializing');

    setTimeout(() => {
      setChatPhase('connecting');
    }, 800);

    setTimeout(() => {
      setChatPhase('typing');
    }, 1500);

    setTimeout(() => {
      setChatPhase('ready');

      const galacticMessage: ChatMessage = {
        id: 'galactic-intro',
        text: '⚡ ¡Hola! Soy NEXUS, el representante digital del sistema 4M que Luis Cabrejo y Liliana Moreno desarrollaron para distribución masiva de Gano Excel.\n\n🎯 Mi función: Ayudarte a evaluar si este ecosistema empresarial se alinea con tus objetivos de crecimiento.\n\n¿Qué aspecto del sistema 4M o la oportunidad Gano Excel te gustaría explorar?',
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages([galacticMessage]);
      setIsInitialMessageShown(true);
    }, 3500);
  };

  // Función para simular tipeo realista
  const simulateTyping = async (text: string): Promise<void> => {
    return new Promise((resolve) => {
      const words = text.split(' ');
      let currentIndex = 0;
      let currentText = '';

      const typeNextWord = () => {
        if (currentIndex >= words.length) {
          setNexusState(prev => ({ ...prev, isTyping: false, currentTypedMessage: '' }));
          resolve();
          return;
        }

        const word = words[currentIndex];
        currentText += (currentIndex > 0 ? ' ' : '') + word;

        setChatMessages(prevMessages => {
          const newMessages = [...prevMessages];
          if (newMessages.length > 0) {
            newMessages[newMessages.length - 1] = {
              ...newMessages[newMessages.length - 1],
              text: currentText
            };
          }
          return newMessages;
        });

        currentIndex++;

        const keyWords = ['monopolio', 'tecnológico', 'estratégico', 'fundador', 'filosofía', 'Luis'];
        const isKeyWord = keyWords.some(kw => word.toLowerCase().includes(kw));
        const speed = isKeyWord ? 120 : 60;
        const extraDelay = word.endsWith('.') || word.endsWith('!') || word.endsWith('?') ? 300 : 0;

        setTimeout(typeNextWord, speed + extraDelay);
      };

      typeNextWord();
    });
  };

  // MEJORADO: Secuencia completa de respuesta con retry automático
  const executeResponseSequence = async (userMessage: string) => {
    try {
      // FASE 1: Pensamiento inicial
      setNexusState({
        isLoading: true,
        loadingMessage: connectionState.status === 'connected' ? 'NEXUS está pensando...' : 'Intentando conectar...',
        isTyping: false,
        currentTypedMessage: '',
        loadingPhase: 'analysis'
      });

      // NUEVO: Usar función con retry
      const data = await sendMessageWithRetry(userMessage);
      const { message: responseMessage, delay: calculatedDelay, metadata, isOffline } = data;

      if (isOffline) {
        // Respuesta offline inmediata
        const offlineMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: responseMessage,
          isUser: false,
          timestamp: new Date(),
          isOffline: true
        };

        setChatMessages(prev => [...prev, offlineMessage]);
        setNexusState(prev => ({ ...prev, isLoading: false, loadingPhase: 'complete' }));
        return;
      }

      // Calcular fases del delay
      const phases = {
        analysis: Math.floor(calculatedDelay * 0.3),
        processing: Math.floor(calculatedDelay * 0.4),
        writing: Math.floor(calculatedDelay * 0.3)
      };

      await new Promise(resolve => setTimeout(resolve, phases.analysis));

      // FASE 2: Procesamiento
      const processingMessage = metadata.responseType === 'strategic'
        ? 'Preparando respuesta estratégica sobre Gano Excel...'
        : 'NEXUS está analizando tu consulta sobre el sistema 4M...';

      setNexusState(prev => ({
        ...prev,
        loadingMessage: processingMessage,
        loadingPhase: 'processing'
      }));

      await new Promise(resolve => setTimeout(resolve, phases.processing));

      // FASE 3: Escritura
      setNexusState(prev => ({
        ...prev,
        isLoading: false,
        isTyping: true,
        loadingMessage: '',
        loadingPhase: 'writing'
      }));

      const tempMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: '',
        isUser: false,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, tempMessage]);
      await simulateTyping(responseMessage);
      addToConversationMemory(userMessage, responseMessage);

      setNexusState(prev => ({
        ...prev,
        isTyping: false,
        loadingPhase: 'complete'
      }));

    } catch (error) {
      console.error('Error:', error);
      setNexusState({
        isLoading: false,
        loadingMessage: '',
        isTyping: false,
        currentTypedMessage: '',
        loadingPhase: 'complete'
      });

      // Respuesta de error offline
      setChatMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: getOfflineResponse(userMessage),
        isUser: false,
        timestamp: new Date(),
        isOffline: true
      }]);
    }
  };

  // Función para enviar mensaje
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || nexusState.isLoading || nexusState.isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    await executeResponseSequence(userMessage.text);
  };

  // NUEVO: Función para retry manual
  const handleRetryConnection = async () => {
    setConnectionState(prev => ({ ...prev, status: 'connecting' }));

    try {
      const response = await fetch('/api/claude-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: 'test connection',
          conversationHistory: [],
          context: 'test'
        })
      });

      if (response.ok) {
        setConnectionState(prev => ({
          ...prev,
          status: 'connected',
          lastSuccessfulConnection: new Date(),
          consecutiveFailures: 0
        }));

        addOfflineMessage("✅ Conexión restablecida. ¡Ya puedo responder normalmente!");
      } else {
        throw new Error('Connection failed');
      }
    } catch (error) {
      setConnectionState(prev => ({
        ...prev,
        status: 'disconnected',
        consecutiveFailures: prev.consecutiveFailures + 1
      }));
    }
  };

  const handleToggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChatToggle = () => {
    if (!isChatOpen) {
      setChatOpen(true);
      setShowChatPrompt(false);

      if (!isInitialMessageShown) {
        initializeGalacticSequence();
      }
    } else {
      setChatOpen(false);
      setChatPhase('closed');
      setIsExpanded(false);
    }
  };

  // NUEVO: Componente indicador de conexión
  const ConnectionIndicator = () => {
    if (connectionState.status === 'connected') return null;

    const statusConfig = {
      connecting: {
        icon: <RefreshCw className="w-4 h-4 animate-spin" />,
        color: 'bg-yellow-500',
        text: 'Conectando...',
        textColor: 'text-yellow-700'
      },
      retrying: {
        icon: <RefreshCw className="w-4 h-4 animate-spin" />,
        color: 'bg-orange-500',
        text: `Reintentando... (${connectionState.consecutiveFailures} fallos)`,
        textColor: 'text-orange-700'
      },
      disconnected: {
        icon: <WifiOff className="w-4 h-4" />,
        color: 'bg-red-500',
        text: 'Sin conexión - Modo offline',
        textColor: 'text-red-700'
      }
    };

    const config = statusConfig[connectionState.status as keyof typeof statusConfig];

    return (
      <div className="flex items-center justify-between gap-2 p-2 bg-gray-100 text-sm border-b">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${config.color}`}></div>
          {config.icon}
          <span className={config.textColor}>{config.text}</span>
        </div>

        {connectionState.status === 'disconnected' && (
          <button
            onClick={handleRetryConnection}
            className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            Reconectar
          </button>
        )}
      </div>
    );
  };

  // Componente para renderizar las fases galácticas
  const renderChatPhase = () => {
    switch (chatPhase) {
      case 'initializing':
        return (
          <div className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-3"></div>
              <p className="text-blue-400 text-sm">Iniciando NEXUS<span className="animate-pulse">...</span></p>
            </div>
          </div>
        );

      case 'connecting':
        return (
          <div className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3 animate-pulse"></div>
              <p className="text-purple-400 text-sm">Estableciendo conexión<span className="animate-pulse">...</span></p>
            </div>
          </div>
        );

      case 'typing':
        return (
          <div className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-3 justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <p className="text-blue-300 text-sm">NEXUS está preparando tu respuesta...</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Componente de estado de carga
  const LoadingIndicator = () => {
    if (!nexusState.isLoading && !nexusState.isTyping) return null;

    return (
      <div className="flex justify-start mb-4">
        <div className="bg-slate-700 text-gray-200 p-3 rounded-2xl mr-4 max-w-[280px]">
          {nexusState.isLoading && (
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
              </div>
              <span className="text-sm">{nexusState.loadingMessage}</span>
            </div>
          )}
          {nexusState.isTyping && (
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm">NEXUS está escribiendo...</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Función para obtener tamaño del chat
  const getChatDimensions = () => {
    if (isExpanded) {
      return {
        width: 'w-[95vw] max-w-5xl',
        height: 'h-[90vh] max-h-[800px]',
        maxHeight: 'max-h-[90vh]',
        messagesHeight: '65vh'
      };
    }
    return {
      width: 'w-80 sm:w-96',
      height: 'h-[500px]',
      maxHeight: 'max-h-[500px]',
      messagesHeight: '360px'
    };
  };

  // Función para obtener clases dinámicas del chat container
  const getChatContainerClasses = () => {
    const dimensions = getChatDimensions();

    if (isExpanded) {
      return `fixed inset-4 ${dimensions.width} ${dimensions.height} rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 z-50 mx-auto`;
    }

    return `absolute bottom-20 right-0 ${dimensions.width} ${dimensions.height} rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300`;
  };

  // Función para obtener estilos dinámicos del chat container
  const getChatContainerStyles = (): React.CSSProperties => {
    let styles: React.CSSProperties = {
      background: 'rgba(23, 31, 42, 0.95)',
      backdropFilter: 'blur(12px)'
    };

    switch (chatPhase) {
      case 'connecting':
        styles.border = '1px solid rgba(139, 92, 246, 0.6)';
        styles.boxShadow = '0 0 25px rgba(139, 92, 246, 0.4), 0 0 50px rgba(59, 130, 246, 0.3)';
        break;
      case 'typing':
        styles.border = '1px solid rgba(59, 130, 246, 0.6)';
        styles.boxShadow = '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)';
        break;
      case 'ready':
        styles.border = '1px solid rgba(59, 130, 246, 0.5)';
        styles.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)';
        break;
      default:
        styles.border = '1px solid rgba(255, 255, 255, 0.1)';
        break;
    }

    return styles;
  };

  const dimensions = getChatDimensions();

  return (
    <div className={`fixed bottom-5 right-5 z-50 ${className}`}>
      {/* Prompt proactivo */}
      {showChatPrompt && showPrompt && (
        <div className="absolute bottom-20 right-0 w-64 bg-slate-800 p-4 rounded-lg shadow-lg animate-bounce"
             style={{ backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p className="text-sm text-white">
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {promptMessage}
            </span>
          </p>
          <button
            onClick={() => setShowChatPrompt(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Botón del chat */}
      <button
        onClick={handleChatToggle}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative"
      >
        {isChatOpen ? <X className="w-8 h-8"/> : <MessageCircle className="w-8 h-8"/>}

        {/* NUEVO: Indicador de estado de conexión en el botón */}
        {connectionState.status !== 'connected' && (
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
            <WifiOff className="w-2 h-2 text-white" />
          </div>
        )}
      </button>

      {/* Ventana del chat */}
      {isChatOpen && (
        <div
          className={getChatContainerClasses()}
          style={getChatContainerStyles()}
        >
          {/* NUEVO: Indicador de conexión */}
          <ConnectionIndicator />

          {/* Header del Chat */}
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                <div>
                  <h4 className="font-bold flex items-center gap-2">
                    NEXUS
                    {chatPhase !== 'ready' && chatPhase !== 'closed' && (
                      <span className="ml-2 text-xs opacity-75">
                        {chatPhase === 'initializing' && '🔄'}
                        {chatPhase === 'connecting' && '🔗'}
                        {chatPhase === 'typing' && '✍️'}
                      </span>
                    )}
                    {/* NUEVO: Indicador de conexión en header */}
                    {connectionState.status === 'connected' ? (
                      <Wifi className="w-4 h-4 text-green-300" />
                    ) : (
                      <WifiOff className="w-4 h-4 text-red-300" />
                    )}
                  </h4>
                  <p className="text-xs opacity-90">
                    {chatPhase === 'ready'
                      ? `Sistema 4M • Gano Excel ${connectionState.status === 'connected' ? '• Online' : '• Offline'}`
                      : 'Inicializando...'}
                  </p>
                </div>
              </div>

              {chatPhase === 'ready' && (
                <button
                  onClick={handleToggleExpansion}
                  className="text-white hover:text-blue-200 transition-colors p-1"
                  title={isExpanded ? 'Reducir chat' : 'Expandir chat'}
                >
                  {isExpanded ? (
                    <Minimize2 className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Contenido del Chat */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-4"
            style={{ maxHeight: dimensions.messagesHeight }}
          >
            {chatPhase !== 'ready' && chatPhase !== 'closed' ? (
              renderChatPhase()
            ) : (
              <>
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`${
                      isExpanded ? 'max-w-[600px]' : 'max-w-[280px]'
                    } p-3 rounded-2xl break-words transition-all duration-300 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-4'
                        : message.isOffline
                        ? 'bg-orange-100 text-orange-800 mr-4 border-l-4 border-orange-500'
                        : 'bg-slate-700 text-gray-200 mr-4'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        {/* NUEVO: Indicador de mensaje offline */}
                        {message.isOffline && (
                          <span className="text-xs bg-orange-200 text-orange-700 px-1 rounded">
                            📡 Offline
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <LoadingIndicator />
                <div ref={chatMessagesEndRef} />
              </>
            )}
          </div>

          {/* Input del Chat */}
          {chatPhase === 'ready' && (
            <div className="p-3 border-t border-slate-700 flex-shrink-0">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={
                    connectionState.status === 'connected'
                      ? "Pregúntame sobre Gano Excel o el sistema 4M..."
                      : "Modo offline - Respuestas básicas disponibles..."
                  }
                  className="flex-1 bg-slate-800 text-white p-3 rounded-lg border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  disabled={nexusState.isLoading || nexusState.isTyping}
                />
                <button
                  type="submit"
                  disabled={nexusState.isLoading || nexusState.isTyping || !inputMessage.trim()}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status indicator actualizado */}
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>
                  🤖 NEXUS Sistema 4M {connectionState.status === 'connected' ? 'online' : 'offline'} • Especialista Gano Excel
                </span>
                <div className="flex items-center gap-2">
                  {nexusState.isLoading && <span className="animate-pulse">⚡ Procesando...</span>}
                  {connectionState.status === 'connected' && (
                    <span className="text-green-600">
                      ⚡ {Math.round(connectionState.averageResponseTime)}ms
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

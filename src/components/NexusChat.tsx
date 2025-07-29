// /src/components/NexusChat.tsx - ARCHIVO COMPLETO CON UI FIX APLICADO

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Zap, Sparkles, Maximize2, Minimize2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  emotion?: string;
  responseType?: string;
}

interface NexusState {
  isLoading: boolean;
  loadingMessage: string;
  isTyping: boolean;
  currentTypedMessage: string;
  loadingPhase: 'analysis' | 'processing' | 'writing' | 'complete';
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
  const [isExpanded, setIsExpanded] = useState(false); // NUEVO: Estado expandido
  const [showChatPrompt, setShowChatPrompt] = useState(false);

  // Estados para efecto galáctico
  const [chatPhase, setChatPhase] = useState<'closed' | 'initializing' | 'connecting' | 'typing' | 'ready'>('closed');
  const [isInitialMessageShown, setIsInitialMessageShown] = useState(false);

  // Estados del chat con MEMORIA MEJORADA
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationSummary, setConversationSummary] = useState<string[]>([]); // NUEVO: Resumen de temas

  // Estados para delays inteligentes
  const [nexusState, setNexusState] = useState<NexusState>({
    isLoading: false,
    loadingMessage: '',
    isTyping: false,
    currentTypedMessage: '',
    loadingPhase: 'complete'
  });

  const chatMessagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, nexusState.currentTypedMessage]);

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

  // NUEVO: Función para agregar temas a memoria conversacional
  const addToConversationMemory = (userMessage: string, botResponse: string) => {
    const topics: string[] = [];

    // Detectar temas en el mensaje del usuario
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

    // Fase 1: Inicializando NEXUS (0.8s)
    setTimeout(() => {
      setChatPhase('connecting');
    }, 800);

    // Fase 2: Glow effect + connecting (1.5s total)
    setTimeout(() => {
      setChatPhase('typing');
    }, 1500);

    // Fase 3: Typing animation (3.5s total)
    setTimeout(() => {
      setChatPhase('ready');

      // ✅ MENSAJE INICIAL ACTUALIZADO
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

        // Actualizar el mensaje en tiempo real
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

        // Velocidad variable: más lento en palabras clave
        const keyWords = ['monopolio', 'tecnológico', 'estratégico', 'fundador', 'filosofía', 'Luis'];
        const isKeyWord = keyWords.some(kw => word.toLowerCase().includes(kw));
        const speed = isKeyWord ? 120 : 60; // ms por palabra

        // Pausa extra en signos de puntuación
        const extraDelay = word.endsWith('.') || word.endsWith('!') || word.endsWith('?') ? 300 : 0;

        setTimeout(typeNextWord, speed + extraDelay);
      };

      typeNextWord();
    });
  };

  // Secuencia completa de respuesta con delays inteligentes - UX MEJORADA
  const executeResponseSequence = async (userMessage: string) => {
    try {
      // FASE 1: Pensamiento inicial - MENSAJE MEJORADO
      setNexusState({
        isLoading: true,
        loadingMessage: 'NEXUS está pensando...',
        isTyping: false,
        currentTypedMessage: '',
        loadingPhase: 'analysis'
      });

      // MEMORIA MEJORADA: Enviar historial completo con formato correcto
      const formattedHistory = chatMessages.map(msg => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text
      }));

      // Llamar a la API para obtener respuesta y delay calculado
      const response = await fetch('/api/claude-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: formattedHistory, // MEJORADO: Historial completo
          context
        })
      });

      if (!response.ok) throw new Error('Error en la respuesta');

      const data = await response.json();
      const { message: responseMessage, delay: calculatedDelay, metadata } = data;

      // Calcular fases del delay
      const phases = {
        analysis: Math.floor(calculatedDelay * 0.3),
        processing: Math.floor(calculatedDelay * 0.4),
        writing: Math.floor(calculatedDelay * 0.3)
      };

      // Esperar fase de análisis
      await new Promise(resolve => setTimeout(resolve, phases.analysis));

      // ✅ FASE 2: Procesamiento - MENSAJE MEJORADO
      const processingMessage = metadata.responseType === 'strategic'
        ? 'Preparando respuesta estratégica sobre Gano Excel...'
        : 'NEXUS está analizando tu consulta sobre el sistema 4M...';

      setNexusState(prev => ({
        ...prev,
        loadingMessage: processingMessage,
        loadingPhase: 'processing'
      }));

      await new Promise(resolve => setTimeout(resolve, phases.processing));

      // FASE 3: Escritura - MENSAJE MEJORADO
      setNexusState(prev => ({
        ...prev,
        isLoading: false,
        isTyping: true,
        loadingMessage: '',
        loadingPhase: 'writing'
      }));

      // Crear mensaje temporal para el efecto de tipeo - SIN METADATA VISIBLE
      const tempMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: '',
        isUser: false,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, tempMessage]);

      // Simular tipeo realista
      await simulateTyping(responseMessage);

      // NUEVO: Agregar a memoria conversacional
      addToConversationMemory(userMessage, responseMessage);

      // Finalizar tipeo
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

      setChatMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: 'Disculpa, tuve un problema técnico. ¿Podrías repetir tu pregunta?',
        isUser: false,
        timestamp: new Date()
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

    // Ejecutar secuencia de respuesta con delays
    await executeResponseSequence(userMessage.text);
  };

  // NUEVO: Función para manejar expansión
  const handleToggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Manejar toggle del chat
  const handleChatToggle = () => {
    if (!isChatOpen) {
      setChatOpen(true);
      setShowChatPrompt(false);

      // Solo hacer secuencia galáctica si es la primera vez
      if (!isInitialMessageShown) {
        initializeGalacticSequence();
      }
    } else {
      setChatOpen(false);
      setChatPhase('closed');
      setIsExpanded(false); // Resetear expansión al cerrar
    }
  };

  // Componente para renderizar las fases galácticas - MENSAJES MEJORADOS
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

  // Componente de estado de carga - MEJORADO
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

  // ✅ UI FIX APLICADO - Función para obtener tamaño del chat
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

  // ✅ UI FIX APLICADO - Función para obtener clases dinámicas del chat container
  const getChatContainerClasses = () => {
    const dimensions = getChatDimensions();

    if (isExpanded) {
      // Posicionamiento centrado y responsive para expansión
      return `fixed inset-4 ${dimensions.width} ${dimensions.height} rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 z-50 mx-auto`;
    }

    // Posicionamiento normal (no expandido)
    return `absolute bottom-20 right-0 ${dimensions.width} ${dimensions.height} rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300`;
  };

  // Función para obtener estilos dinámicos del chat container
  const getChatContainerStyles = (): React.CSSProperties => {
    let styles: React.CSSProperties = {
      background: 'rgba(23, 31, 42, 0.95)',
      backdropFilter: 'blur(12px)'
    };

    // Estilos según la fase
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
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        {isChatOpen ? <X className="w-8 h-8"/> : <MessageCircle className="w-8 h-8"/>}
      </button>

      {/* Ventana del chat */}
      {isChatOpen && (
        <div
          className={getChatContainerClasses()}
          style={getChatContainerStyles()}
        >
          {/* Header del Chat - CON BOTÓN EXPANDIR */}
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                <div>
                  <h4 className="font-bold">
                    NEXUS
                    {chatPhase !== 'ready' && chatPhase !== 'closed' && (
                      <span className="ml-2 text-xs opacity-75">
                        {chatPhase === 'initializing' && '🔄'}
                        {chatPhase === 'connecting' && '🔗'}
                        {chatPhase === 'typing' && '✍️'}
                      </span>
                    )}
                  </h4>
                  {/* ✅ TEXTO DEL HEADER ACTUALIZADO */}
                  <p className="text-xs opacity-90">
                    {chatPhase === 'ready' ? 'Sistema 4M • Gano Excel' : 'Inicializando...'}
                  </p>
                </div>
              </div>

              {/* NUEVO: Botón expandir/reducir */}
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

          {/* Contenido del Chat - ALTURA DINÁMICA */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-4"
            style={{ maxHeight: dimensions.messagesHeight }}
          >
            {/* Mostrar fase actual o mensajes */}
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
                        : 'bg-slate-700 text-gray-200 mr-4'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      {/* SOLO mostrar timestamp, NO metadata técnica */}
                      <p className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}

                <LoadingIndicator />
                <div ref={chatMessagesEndRef} />
              </>
            )}
          </div>

          {/* Input del Chat - Solo mostrar cuando esté listo */}
          {chatPhase === 'ready' && (
            <div className="p-3 border-t border-slate-700 flex-shrink-0">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                {/* ✅ PLACEHOLDER INPUT ACTUALIZADO */}
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Pregúntame sobre Gano Excel o el sistema 4M..."
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

              {/* ✅ STATUS INDICATOR ACTUALIZADO */}
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>🤖 NEXUS Sistema 4M online • Especialista Gano Excel</span>
                {nexusState.isLoading && <span className="animate-pulse">⚡ Procesando...</span>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

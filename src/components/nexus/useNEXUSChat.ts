// src/components/nexus/useNEXUSChat.ts
// Hook de chat Queswa para luiscabrejo.com - Usa API /api/nexus con vectorSearch
'use client';
import { useState, useCallback } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export const useNEXUSChat = () => {
  // Mensaje inicial - Ataque al Villano "Plan por Defecto" + Calidez v17.5.0
  const getInitialGreeting = (): Message => {
    return {
      id: 'initial-greeting',
      role: 'assistant',
      content: `Hola, soy Queswa 🪢

La mayoría de personas son rehenes del "Plan por Defecto": trabajar, pagar cuentas, repetir.

Aquí diseñamos tu salida.

¿Cuál es tu situación actual?

**A)** 🏗️ Quiero construir algo propio

**B)** 💭 Me siento estancado y busco un cambio

**C)** 🔍 Solo estoy explorando, sin compromiso

**D)** 🧠 Quiero entender el Modelo de Negocio`,
      timestamp: new Date(),
      isStreaming: false
    };
  };

  const [messages, setMessages] = useState<Message[]>([getInitialGreeting()]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [progressiveReplies, setProgressiveReplies] = useState<string[]>([]);
  const [streamingComplete, setStreamingComplete] = useState(false);

  const generateId = () => Math.random().toString(36).substring(7);

  const cleanMessageContent = (content: string) => {
    return content
      .replace(/QUICK REPLIES:/gi, '')
      .replace(/🏭 ".*?"|⚡ ".*?"|💡 ".*?"|■ ".*?"/g, '')
      .trim();
  };

  const sendMessage = useCallback(async (content: string) => {
    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Preparar respuesta en streaming
    setIsLoading(true);
    setIsStreaming(true);
    setStreamingComplete(false);
    setProgressiveReplies([]);

    // Crear mensaje asistente vacío
    const assistantMessageId = generateId();
    const initialAssistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isStreaming: true
    };

    // Agregar mensaje asistente vacío después de delay
    setTimeout(() => {
      setMessages(prev => [...prev, initialAssistantMessage]);
    }, 200);

    try {
      const controller = new AbortController();
      // ✅ FIX: 30s → 60s para lista de precios completa
      const timeoutId = setTimeout(() => controller.abort(), 60000);

      // Obtener fingerprint si existe
      const fingerprint = typeof window !== 'undefined'
        ? localStorage.getItem('nexus_fingerprint') || `fp_${Date.now()}`
        : `fp_${Date.now()}`;

      const sessionId = `session_${Date.now()}`;

      const response = await fetch('/api/nexus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          fingerprint: fingerprint,
          sessionId: sessionId
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 500) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error del servidor');
        }
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');

      if (contentType?.includes('text/plain') || contentType?.includes('text/stream')) {
        // Streaming response
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
          throw new Error('No se pudo leer la respuesta streaming');
        }

        let accumulatedContent = '';
        let lastUpdateTime = Date.now();
        const minUpdateInterval = 50;

        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          accumulatedContent += chunk;

          const now = Date.now();
          if (now - lastUpdateTime >= minUpdateInterval) {
            const cleanContent = cleanMessageContent(accumulatedContent);

            setMessages(prev =>
              prev.map(msg =>
                msg.id === assistantMessageId
                  ? {
                      ...msg,
                      content: cleanContent,
                      isStreaming: true
                    }
                  : msg
              )
            );

            lastUpdateTime = now;
          }
        }

        // Finalizar streaming
        const finalCleanContent = cleanMessageContent(accumulatedContent);
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessageId
              ? {
                  ...msg,
                  content: finalCleanContent,
                  isStreaming: false
                }
              : msg
          )
        );

        setStreamingComplete(true);

      } else {
        // Respuesta JSON
        const data = await response.json();

        if (data.error) {
          setMessages(prev =>
            prev.map(msg =>
              msg.id === assistantMessageId
                ? {
                    ...msg,
                    content: data.error,
                    isStreaming: false
                  }
                : msg
            )
          );
        } else if (data.response) {
          const cleanContent = cleanMessageContent(data.response);

          // Simular streaming para JSON
          let currentIndex = 0;
          const fullText = cleanContent;
          const streamInterval = setInterval(() => {
            currentIndex += Math.floor(Math.random() * 5) + 1;

            if (currentIndex >= fullText.length) {
              clearInterval(streamInterval);
              setMessages(prev =>
                prev.map(msg =>
                  msg.id === assistantMessageId
                    ? {
                        ...msg,
                        content: fullText,
                        isStreaming: false
                      }
                    : msg
                )
              );
              setStreamingComplete(true);
            } else {
              setMessages(prev =>
                prev.map(msg =>
                  msg.id === assistantMessageId
                    ? {
                        ...msg,
                        content: fullText.substring(0, currentIndex),
                        isStreaming: true
                      }
                    : msg
                )
              );
            }
          }, 50);
        } else {
          throw new Error('Respuesta inválida del servidor');
        }
      }

    } catch (error: unknown) {
      console.error('Error sending message:', error);

      let errorMessage = '';
      const errorObj = error as { name?: string; message?: string };

      if (errorObj.name === 'AbortError') {
        errorMessage = `⏱️ La consulta está tomando más tiempo del esperado.

**Consultoría estratégica inmediata:**
Luis Cabrejo - Fundador Sistema 4M
WhatsApp: +573203415438
Horario: 8:00 AM - 8:00 PM (GMT-5)

¿Hay algo específico que pueda ayudarte mientras tanto?`;

      } else if (errorObj.message?.includes('500') || errorObj.message?.includes('servidor')) {
        errorMessage = errorObj.message;

      } else if (errorObj.message?.includes('fetch')) {
        errorMessage = `🔧 Conexión temporalmente interrumpida.

**Información básica:**
• **EMPRENDEDOR:** $200 USD - Acceso completo al ecosistema
• **EMPRESARIAL:** $500 USD - Más popular, inventario sólido
• **VISIONARIO:** $1,000 USD - Premium con consultoría VIP

**Consultoría:** Luis Cabrejo +573203415438`;

      } else {
        errorMessage = `🤖 Estoy experimentando dificultades técnicas.

**Opciones mientras resolvemos:**
1. **Productos Gano Excel** - Productos con patente mundial
2. **Sistema 4M** - Metodología probada de Luis y Liliana
3. **Consultoría** - Luis Cabrejo +573203415438

¿Qué te gustaría conocer más?`;
      }

      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantMessageId
            ? {
                ...msg,
                content: errorMessage,
                isStreaming: false
              }
            : msg
        )
      );

    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  }, [messages]);

  const resetChat = useCallback(() => {
    setMessages([getInitialGreeting()]);
    setIsLoading(false);
    setIsStreaming(false);
    setProgressiveReplies([]);
    setStreamingComplete(false);
  }, []);

  const handleQuickReply = useCallback((reply: string) => {
    sendMessage(reply);
  }, [sendMessage]);

  const contactLuis = useCallback(() => {
    const contactMessage: Message = {
      id: generateId(),
      role: 'assistant',
      content: `🏗️ **Consultoría Estratégica Disponible**

**Luis Cabrejo - Fundador Sistema 4M**
**WhatsApp:** +573203415438
**Horario:** 8:00 AM - 8:00 PM (GMT-5)
**Experiencia:** 11 años Diamante Gano Excel

**Especialidades de la consultoría:**
• Diseño completo del sistema personalizado para tu perfil
• Análisis de cuál paquete optimiza tu situación específica
• Implementación paso a paso del Sistema 4M
• Mentoring estratégico para construcción de activo

**Tu consultoría incluye:**
✓ Evaluación de tu situación actual y objetivos
✓ Plan de implementación con cronograma específico
✓ Soporte continuo durante tu crecimiento

**¿Te gustaría agendar una llamada con Luis?**`,
      timestamp: new Date(),
      isStreaming: false
    };

    setMessages(prev => [...prev, contactMessage]);
  }, []);

  return {
    messages,
    isLoading,
    isStreaming,
    streamingComplete,
    progressiveReplies,
    sendMessage,
    resetChat,
    handleQuickReply,
    contactLuis
  };
};

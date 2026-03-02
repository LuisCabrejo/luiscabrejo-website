// src/components/nexus/useNEXUSChat.ts
// 🔧 FIX: Eliminar quick replies automáticos para evitar superposición con opciones A, B, C texto
'use client';
import { useState, useCallback } from 'react';

interface Message {
 id: string;
 role: 'user' | 'assistant';
 content: string;
 timestamp: Date;
}

export const useNEXUSChat = () => {
const [messages, setMessages] = useState<Message[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [isStreaming, setIsStreaming] = useState(false);
// 🔧 FIX: Desactivar progressiveReplies para eliminar botones superpuestos
const [progressiveReplies, setProgressiveReplies] = useState<string[]>([]);
const [streamingComplete, setStreamingComplete] = useState(false);

const generateId = () => Math.random().toString(36).substring(7);

// 🔧 FIX CRÍTICO: Función parseQuickReplies DESACTIVADA
// El system prompt v11.5 ya maneja las opciones A, B, C en formato texto
// No necesitamos generar botones automáticos que se superponen
const parseQuickReplies = (content: string) => {
  console.log('🔧 parseQuickReplies DESACTIVADO - usando solo formato texto A, B, C');

  // NO parsear quick replies automáticos
  // Las opciones A, B, C aparecen en formato texto según system prompt v11.5
  setProgressiveReplies([]); // Mantener array vacío

  return []; // No retornar quick replies
};

// Función para limpiar contenido de elementos técnicos
const cleanMessageContent = (content: string) => {
  return content
    .replace(/QUICK REPLIES:/gi, '')
    // 🔧 MANTENER los patrones 🎯 en el texto - son parte del contenido
    // .replace(/🎯 ".*?"/g, '') // COMENTADO - no limpiar estos patrones
    .replace(/🏭 ".*?"|⚡ ".*?"|💡 ".*?"|■ ".*?"/g, '') // Solo legacy patterns
    .trim();
};

const sendMessage = useCallback(async (content: string) => {
  const userMessage: Message = {
    id: generateId(),
    role: 'user',
    content,
    timestamp: new Date(),
  };

  setMessages(prev => [...prev, userMessage]);
  setIsLoading(true);
  setIsStreaming(true);
  setStreamingComplete(false);
  // 🔧 FIX: No limpiar quick replies - mantener vacío
  setProgressiveReplies([]); // Mantener vacío siempre

  // Crear mensaje asistente temporal para streaming
  const assistantMessageId = generateId();
  const initialAssistantMessage: Message = {
    id: assistantMessageId,
    role: 'assistant',
    content: '',
    timestamp: new Date(),
  };

  setMessages(prev => [...prev, initialAssistantMessage]);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 segundos timeout

    // 🔧 FIX CRÍTICO: Obtener datos del tracking.js para NEXUS API
    const fingerprint = (window as any).FrameworkIAA?.fingerprint || localStorage.getItem('nexus_fingerprint') || undefined;
    const sessionId = (window as any).nexusProspect?.id || `session_${Date.now()}`;

    // 🔍 DEBUG: Log para verificar datos del tracking
    console.log('🔧 NEXUS Frontend - Enviando datos:', {
      fingerprint: fingerprint ? fingerprint.substring(0, 16) + '...' : 'undefined',
      sessionId: sessionId,
      hasFrameworkIAA: !!(window as any).FrameworkIAA,
      hasNexusProspect: !!(window as any).nexusProspect
    });

    const response = await fetch('/api/claude-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [...messages, userMessage].map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        // 🔧 CRÍTICO: Incluir datos del tracking para Framework IAA
        fingerprint: fingerprint,
        sessionId: sessionId
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      // Manejar errores HTTP
      if (response.status === 500) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error del servidor');
      }
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    // Verificar si la respuesta es streaming o JSON
    const contentType = response.headers.get('content-type');

    if (contentType?.includes('text/plain') || contentType?.includes('text/stream')) {
      // Manejar streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No se pudo leer la respuesta streaming');
      }

      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedContent += chunk;

        // Actualizar mensaje en tiempo real con contenido limpio
        const cleanContent = cleanMessageContent(accumulatedContent);
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessageId
              ? { ...msg, content: cleanContent }
              : msg
          )
        );
      }

      // 🔧 FIX: NO parsear quick replies - solo marcar como completo
      console.log('🔧 Streaming completado - NO generando quick replies automáticos');
      setStreamingComplete(true);

    } else {
      // Manejar respuesta JSON (fallback o error)
      const data = await response.json();

      if (data.error) {
        // Error con mensaje formateado
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessageId
              ? { ...msg, content: data.error }
              : msg
          )
        );
      } else if (data.response) {
        // Respuesta normal JSON
        const cleanContent = cleanMessageContent(data.response);
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessageId
              ? { ...msg, content: cleanContent }
              : msg
          )
        );
        // 🔧 FIX: NO parsear quick replies automáticos
        setStreamingComplete(true);
      } else {
        throw new Error('Respuesta inválida del servidor');
      }
    }

  } catch (error: any) {
    console.error('Error sending message:', error);

    let errorMessage = '';

    if (error.name === 'AbortError') {
      errorMessage = `⏱️ La arquitectura está procesando tu consulta más tiempo del esperado.

**Consultoría estratégica inmediata:**
Liliana Moreno - Arquitecta Senior
WhatsApp: +573203415438
Horario: 8:00 AM - 8:00 PM (GMT-5)

¿Hay algo específico sobre la arquitectura de CreaTuActivo.com que pueda ayudarte mientras tanto?`;

    } else if (error.message?.includes('500') || error.message?.includes('servidor')) {
      errorMessage = error.message; // Ya viene formateado del servidor

    } else if (error.message?.includes('fetch')) {
      errorMessage = `🔧 Conexión temporalmente interrumpida.

**Información básica de la arquitectura:**
• **PUNTO DE ENTRADA FUNDADOR:** $200 USD - Acceso completo al ecosistema
• **PUNTO DE ENTRADA EMPRESARIAL:** $500 USD - Más popular, inventario sólido
• **PUNTO DE ENTRADA VISIONARIO:** $1,000 USD - Premium con consultoría VIP

**Consultoría:** Liliana Moreno +573203415438`;

    } else {
      errorMessage = `🤖 Estoy experimentando dificultades en mi arquitectura de procesamiento.

**Opciones mientras optimizamos:**
1. **El Motor de Valor** - Los productos únicos con patente mundial
2. **El Plano Estratégico** - El Tridente EAM y metodología
3. **La Maquinaria Tecnológica** - NodeX y automatización
4. **Consultoría Estratégica** - Liliana Moreno +573203415438

¿Qué pieza de la arquitectura te interesa más?`;
    }

    // Actualizar mensaje con error formateado
    setMessages(prev =>
      prev.map(msg =>
        msg.id === assistantMessageId
          ? { ...msg, content: errorMessage }
          : msg
      )
    );

  } finally {
    setIsLoading(false);
    setIsStreaming(false);
  }
 }, [messages]);

const resetChat = useCallback(() => {
  setMessages([]);
  setIsLoading(false);
  setIsStreaming(false);
  setProgressiveReplies([]); // Mantener vacío
  setStreamingComplete(false);
 }, []);

// Funciones auxiliares para quick replies - DESACTIVADAS
const handleQuickReply = useCallback((reply: string) => {
  console.log('🎯 Enviando quick reply:', reply);
  sendMessage(reply);
}, [sendMessage]);

// ✅ FUNCIÓN OPTIMIZADA: Consultoría Estratégica (antes contactLiliana)
const contactLiliana = useCallback(() => {
  const contactMessage: Message = {
    id: generateId(),
    role: 'assistant',
    content: `🏗️ **Consultoría Estratégica Disponible**

**Liliana Moreno - Arquitecta Senior**
**WhatsApp:** +573203415438
**Horario:** 8:00 AM - 8:00 PM (GMT-5)
**Experiencia:** 9 años consecutivos líder en arquitectura de activos

**Especialidades de la consultoría:**
• Diseño completo de la arquitectura personalizada para tu perfil
• Análisis de cuál punto de entrada optimiza tu situación específica
• Implementación paso a paso del Framework IAA
• Mentoring estratégico para construcción de activo patrimonial

**Tu consultoría estratégica incluye:**
✓ Evaluación de tu situación actual y objetivos
✓ Diseño de arquitectura personalizada Motor+Plano+Maquinaria
✓ Plan de implementación con cronograma específico
✓ Soporte continuo durante la construcción de tu activo

**¿Te gustaría que prepare algunos puntos estratégicos antes de tu consultoría?**`,
    timestamp: new Date(),
  };

  setMessages(prev => [...prev, contactMessage]);
}, []);

return {
  messages,
  isLoading,
  isStreaming,
  streamingComplete,
  progressiveReplies, // Siempre array vacío
  sendMessage,
  resetChat,
  handleQuickReply,
  contactLiliana,
 };
};

// src/components/nexus/useSlidingViewport.ts
// Hook para efecto de sliding viewport - Los mensajes anteriores suben mientras el viewport se mantiene estable
'use client';

import { useState, useEffect, useRef, RefObject, useCallback } from 'react';

// useLayoutEffect no funciona en SSR, usar useEffect en su lugar
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useEffect : useEffect;

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

/**
 * Hook que implementa el efecto de sliding viewport.
 * Los mensajes anteriores se desplazan hacia arriba usando CSS transform,
 * mientras que el área de visualización se mantiene estable para el usuario.
 */
export const useSlidingViewport = (
  messages: Message[],
  scrollContainerRef: RefObject<HTMLDivElement | null>
): {
  offset: number;
  registerNode: (messageId: string) => (node: HTMLElement | null) => void;
  isUserScrolling: boolean;
  scrollToLatest: () => void;
} => {
  const [offset, setOffset] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  // Map para mantener referencias a los nodos DOM
  const messageNodesRef = useRef<Map<string, HTMLElement>>(new Map());

  // Referencias para control de scroll
  const lastMessageCountRef = useRef(0);
  const programmaticScrollRef = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calcular offset basado en mensajes anteriores
  const calculateOffset = useCallback(() => {
    if (messages.length <= 2) {
      return 0;
    }

    // Solo calcular altura de mensajes que no sean los últimos 2
    const messagesToHide = messages.slice(0, -2);
    let totalHeight = 0;

    messagesToHide.forEach(msg => {
      const node = messageNodesRef.current.get(msg.id);
      if (node) {
        totalHeight += node.offsetHeight + 16; // 16px de margen
      }
    });

    return totalHeight;
  }, [messages]);

  // Scroll a la conversación actual
  const scrollToLatest = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    programmaticScrollRef.current = true;

    const targetPosition = offset;

    container.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    setIsUserScrolling(false);
  }, [offset, scrollContainerRef]);

  // Detectar scroll manual
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (programmaticScrollRef.current) {
        programmaticScrollRef.current = false;
        return;
      }

      const currentPosition = container.scrollTop;
      const expectedPosition = offset;
      const difference = Math.abs(currentPosition - expectedPosition);

      // Umbral alto para ser menos sensible
      if (difference > 100) {
        setIsUserScrolling(true);

        if (manualScrollTimeoutRef.current) {
          clearTimeout(manualScrollTimeoutRef.current);
        }

        // Timeout corto para volver al auto-scroll
        manualScrollTimeoutRef.current = setTimeout(() => {
          setIsUserScrolling(false);
        }, 1500);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [offset, scrollContainerRef]);

  // Auto-scroll para nuevos mensajes
  useIsomorphicLayoutEffect(() => {
    if (messages.length > lastMessageCountRef.current) {
      requestAnimationFrame(() => {
        const newOffset = calculateOffset();

        setOffset(newOffset);
        setIsUserScrolling(false);

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
          programmaticScrollRef.current = true;
          scrollContainer.scrollTop = newOffset;
        }
      });
    }

    lastMessageCountRef.current = messages.length;
  }, [messages.length, calculateOffset, scrollContainerRef]);

  // Actualizar offset durante streaming
  useIsomorphicLayoutEffect(() => {
    if (messages.length > 0 && !isUserScrolling) {
      const newOffset = calculateOffset();
      if (Math.abs(newOffset - offset) > 10) {
        setOffset(newOffset);

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
          programmaticScrollRef.current = true;
          scrollContainer.scrollTop = newOffset;
        }
      }
    }
  }, [messages, calculateOffset, offset, isUserScrolling, scrollContainerRef]);

  // Registrar nodos DOM
  const registerNode = useCallback((messageId: string) => (node: HTMLElement | null) => {
    const map = messageNodesRef.current;

    if (node) {
      node.dataset.messageId = messageId;
      map.set(messageId, node);
    } else {
      map.delete(messageId);
    }
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, []);

  return {
    offset,
    registerNode,
    isUserScrolling,
    scrollToLatest
  };
};

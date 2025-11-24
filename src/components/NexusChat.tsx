'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
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
  promptMessage = '¿Listo para construir tu activo empresarial con Gano Excel?'
}: NexusChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentElement;
      if (container) {
        const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
        if (isNearBottom || messages.length === 1) {
          messagesEndRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest'
          });
        }
      }
    }
  };

  useEffect(() => {
    const scrollTimer = setTimeout(scrollToBottom, 50);
    return () => clearTimeout(scrollTimer);
  }, [messages.length]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/claude-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content.trim(),
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) throw new Error('Error en la respuesta');

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message || 'Lo siento, no pude procesar tu mensaje.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Disculpa, tuve un problema técnico. ¿Puedes intentar de nuevo?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  const quickReplies = [
    { text: '¿Qué es el programa Fundadores?', icon: '🏗️' },
    { text: '¿Cuánto cuesta empezar?', icon: '💎' },
    { text: 'Háblame de Gano Excel', icon: '🌿' }
  ];

  const containerClasses = isExpanded
    ? "w-full max-w-4xl h-[95vh]"
    : "w-full max-w-lg md:max-w-xl lg:max-w-2xl h-[98vh] md:h-[85vh] lg:h-[80vh]";

  if (!isOpen) {
    return (
      <div className={`fixed bottom-5 right-5 z-50 ${className}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-5 right-5 z-50 ${className}`}>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/20 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        <div className={`${containerClasses} z-50 transition-all duration-300`}>
          <div
            className="h-full flex flex-col shadow-2xl shadow-purple-500/20 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(124, 58, 237, 0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex-shrink-0 p-4 flex justify-between items-center border-b border-white/10 rounded-t-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.4) 0%, rgba(124, 58, 237, 0.4) 100%)'
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)'
                  }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">NEXUS</p>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-xs text-green-400">En línea</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {!isMobile && (
                  <button
                    className="hidden md:block text-slate-400 hover:text-white p-1 transition-colors rounded"
                    onClick={() => setIsExpanded(!isExpanded)}
                    title={isExpanded ? "Contraer ventana" : "Expandir ventana"}
                  >
                    {isExpanded ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M8 7h10v10m-2 2H6V9h10v10"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M5 5h14v14H5V5z"/>
                      </svg>
                    )}
                  </button>
                )}

                <button
                  className="text-slate-400 hover:text-white p-1 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Status Bar */}
            <div className="px-4 py-2 bg-slate-800/30 border-b border-white/5 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-400">
                  {isLoading ? '💭 Procesando consulta...' : '🧠 Asistente CreaTuActivo • Gano Excel'}
                  {!isLoading && <span className="inline-block w-1 h-1 bg-green-400 rounded-full animate-pulse ml-2"></span>}
                </span>
              </div>
            </div>

            {/* Messages Container */}
            <div
              className={`flex-1 overflow-y-auto space-y-4 ${isExpanded ? 'p-6' : 'p-4'}`}
              style={{ scrollbarWidth: 'thin' }}
            >
              {/* Mensaje inicial */}
              {messages.length === 0 && (
                <div className="flex items-start">
                  <div className="w-7 h-7 bg-slate-700 rounded-full flex-shrink-0 flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div className="flex-1 p-3 rounded-lg text-sm bg-slate-800/80 text-slate-200 backdrop-blur-sm">
                    <p className="font-semibold text-white mb-2">👋 Hola, soy NEXUS</p>
                    <p className="mb-3">Tu asistente para el programa Fundadores de CreaTuActivo.com con Gano Excel. Estoy aquí para responder tus preguntas sobre cómo construir tu activo empresarial.</p>

                    <div className="grid grid-cols-1 gap-2 my-3">
                      <div className="text-center p-2 rounded text-xs border border-amber-600/30" style={{ background: 'linear-gradient(135deg, rgba(146, 64, 14, 0.15) 0%, rgba(116, 66, 16, 0.1) 100%)', color: '#f59e0b' }}>
                        <div className="text-sm">💼</div>
                        <div className="text-xs font-medium">Programa Fundadores</div>
                      </div>
                      <div className="text-center p-2 rounded text-xs border border-green-600/30" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)', color: '#10b981' }}>
                        <div className="text-sm">🌿</div>
                        <div className="text-xs font-medium">Gano Excel</div>
                      </div>
                      <div className="text-center p-2 rounded text-xs border border-blue-600/30" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%)', color: '#3b82f6' }}>
                        <div className="text-sm">⚡</div>
                        <div className="text-xs font-medium">Plataforma Tecnológica</div>
                      </div>
                    </div>

                    <p>¿Qué te gustaría saber?</p>
                  </div>
                </div>
              )}

              {/* Mensajes */}
              {messages.map((message) => (
                <div key={message.id} className="flex">
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      message.role === 'user'
                        ? 'text-white max-w-[75%] ml-auto'
                        : 'bg-slate-800/80 text-slate-200 backdrop-blur-sm flex-1'
                    }`}
                    style={message.role === 'user' ? {
                      background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)'
                    } : {}}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 px-1" style={{ minHeight: '32px' }}>
                  <div className="w-6 h-6 bg-slate-700/60 rounded-full flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies (solo cuando no hay mensajes) */}
            {messages.length === 0 && (
              <div className={`border-t border-white/10 ${isExpanded ? 'p-6 pt-4' : 'p-4'} flex-shrink-0`}>
                <div className={`space-y-2 mb-3 ${isExpanded ? 'grid grid-cols-2 gap-3 space-y-0' : ''}`}>
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                        isExpanded ? 'text-sm' : 'text-xs'
                      }`}
                      style={{
                        background: 'rgba(245, 158, 11, 0.1)',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        color: '#F59E0B'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(245, 158, 11, 0.2)';
                        e.currentTarget.style.borderColor = '#F59E0B';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(245, 158, 11, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
                      }}
                      onClick={() => sendMessage(reply.text)}
                    >
                      {reply.icon} <span>{reply.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className={`border-t border-white/10 ${isExpanded ? 'p-4 pt-3' : 'p-3'} flex-shrink-0`}>
              <form className="flex items-center gap-1" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Pregúntame sobre el programa o Gano Excel..."
                  className={`flex-1 bg-slate-800/80 backdrop-blur-sm text-white px-3 py-2.5 rounded-lg border border-slate-700/50 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all ${
                    isExpanded ? 'text-base' : 'text-sm'
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="p-2.5 rounded-lg text-white hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)'
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className={`${isExpanded ? 'px-6 pb-4' : 'px-4 pb-3'} flex-shrink-0`}>
              <div className="flex justify-center gap-4">
                <button
                  className="text-xs text-slate-500 hover:text-slate-300 px-2 py-1 rounded transition-colors"
                  onClick={() => setMessages([])}
                >
                  🔄 Nueva conversación
                </button>
                <button
                  className="text-xs text-slate-500 hover:text-slate-300 px-2 py-1 rounded transition-colors"
                  onClick={() => sendMessage('Quiero contactar a Luis Cabrejo')}
                >
                  👤 Contactar a Luis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

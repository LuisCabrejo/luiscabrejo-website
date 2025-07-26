'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Zap,
  BarChart3,
  Star,
  MessageSquare,
  MessageCircle,
  X,
  Send,
  CheckCircle2,
  Users,
  Globe,
  Target,
  Sparkles,
  Bot
} from 'lucide-react';
import ContactModal from '@/components/ContactModal';

// Tipos para el chat
interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function FundadoresPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isChatOpen, setChatOpen] = useState(false);
  const [showChatPrompt, setShowChatPrompt] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: '¡Hola! Soy NEXUS, tu asistente experto en activos empresariales. Conozco profundamente la economía latinoamericana y cómo construir franquicias personales que generen ingresos 24/7. ¿Cuál es tu situación actual?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatMessagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  // Lógica del Contador
  useEffect(() => {
    const targetDate = new Date('2025-08-01T00:00:00-05:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Lógica para la invitación proactiva del chat
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isChatOpen) {
        setShowChatPrompt(true);
      }
    }, 7000);
    return () => clearTimeout(timer);
  }, [isChatOpen]);

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleChatToggle = () => {
    setChatOpen(!isChatOpen);
    setShowChatPrompt(false);
  };

  // Función para enviar mensaje al chatbot
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Llamada a la API de Gemini
      const response = await fetch('/api/gemini-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          context: 'fundadores_landing' // Contexto específico para esta página
        }),
      });

      const data = await response.json();

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: data.response || 'Lo siento, no pude procesar tu pregunta. ¿Podrías reformularla?',
        isUser: false,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error en chat:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Disculpa, hay un problema técnico. Puedes contactarnos directamente por WhatsApp.',
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-slate-900 text-gray-300 overflow-x-hidden min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Fondo decorativo con gradientes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-green-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navegación Completa */}
      <nav className="fixed top-0 w-full bg-slate-900/50 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer">
                Luis Cabrejo
              </span>
            </Link>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="/historia" className="text-gray-300 hover:text-white transition-colors">
                Historia
              </Link>
              <Link href="/ecosistema" className="text-gray-300 hover:text-white transition-colors">
                Ecosistema
              </Link>
              <Link href="/vision" className="text-gray-300 hover:text-white transition-colors">
                Visión
              </Link>
              <span className="text-purple-400 font-medium">
                Fundadores
              </span>
              <button
                onClick={() => setContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Conectar
              </button>
            </div>

            {/* Menú Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menú Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors py-2">
                  Inicio
                </Link>
                <Link href="/historia" className="text-gray-300 hover:text-white transition-colors py-2">
                  Historia
                </Link>
                <Link href="/ecosistema" className="text-gray-300 hover:text-white transition-colors py-2">
                  Ecosistema
                </Link>
                <Link href="/vision" className="text-gray-300 hover:text-white transition-colors py-2">
                  Visión
                </Link>
                <span className="text-purple-400 font-medium py-2">
                  Fundadores
                </span>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover:shadow-lg transition-all mt-4 text-center"
                >
                  Conectar
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-28 pb-12 md:pt-36 md:pb-20">
        {/* Banner de Contexto */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-4">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-200">
              Estás viendo contenido exclusivo para fundadores
            </span>
          </div>
        </div>

        {/* Encabezado */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            El Ecosistema que lo <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Cambia Todo</span>.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Y tú eres de los primeros en verlo. Una oportunidad única para ser parte del círculo fundador antes del lanzamiento público.
          </p>
        </header>

        {/* Video y CTA Principal */}
        <main className="max-w-4xl mx-auto">
          {/* Placeholder del Video */}
          <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden cursor-pointer group mb-8"
               style={{
                 background: 'rgba(255, 255, 255, 0.05)',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
                 backdropFilter: 'blur(12px)'
               }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 p-6 rounded-full group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Contador y Botón CTA */}
          <div className="text-center mb-16">
            <p className="text-slate-400 mb-2">El acceso para fundadores cierra en:</p>
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-slate-400">DÍAS</div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-slate-500">:</div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-slate-400">HORAS</div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-slate-500">:</div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-slate-400">MINS</div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-slate-500">:</div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-slate-400">SEGS</div>
              </div>
            </div>
            <a href="#activacion" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg px-12 py-4 rounded-full inline-block shadow-lg hover:scale-105 transition-transform duration-300">
              QUIERO MI CÓDIGO DE FUNDADOR
            </a>
          </div>

          {/* 3 Puntos Clave */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              3 Razones para ser <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fundador</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Punto 1 */}
              <div className="text-center p-6 rounded-2xl"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Acceso Tecnológico Exclusivo</h3>
                <p className="text-slate-400">
                  Herramientas de IA avanzada, automatización empresarial y el stack tecnológico completo
                  que nos tomó 11 años desarrollar.
                </p>
              </div>

              {/* Punto 2 */}
              <div className="text-center p-6 rounded-2xl"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Red de Elite Continental</h3>
                <p className="text-slate-400">
                  Conecta directamente con otros fundadores de alto nivel en 16 países.
                  Red privada de empresarios ambiciosos.
                </p>
              </div>

              {/* Punto 3 */}
              <div className="text-center p-6 rounded-2xl"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Participación en 4 Millones</h3>
                <p className="text-slate-400">
                  Como fundador, participas activamente en la construcción del ecosistema
                  que impactará 4 millones de vidas para 2032.
                </p>
              </div>
            </div>
          </section>

          {/* Sección de Activación - Paquetes */}
          <section id="activacion" className="text-center p-8 rounded-3xl mb-16"
                   style={{
                     background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Activa tu <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Franquicia de Fundador</span> Ahora
            </h2>
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
              Elige tu primer inventario para asegurar tu posición. Hoy el rápido se come al lento. La velocidad es la clave.
            </p>

            {/* Paquetes */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Paquete Emprendedor */}
              <div className="p-6 rounded-2xl text-center"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <h3 className="text-xl font-bold text-white mb-4">Paquete Emprendedor</h3>
                <p className="text-slate-400 mb-6">Ideal para empezar a construir tu activo y posicionarte.</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$200</div>
                  <div className="text-sm text-slate-400">$900.000 COP</div>
                </div>
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Activar Ahora
                </button>
              </div>

              {/* Paquete Empresarial */}
              <div className="p-6 rounded-2xl text-center"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <h3 className="text-xl font-bold text-white mb-4">Paquete Empresarial</h3>
                <p className="text-slate-400 mb-6">Un inventario sólido para operar y maximizar tus primeras ganancias.</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$500</div>
                  <div className="text-sm text-slate-400">$2.250.000 COP</div>
                </div>
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Activar Ahora
                </button>
              </div>

              {/* Paquete Visionario - Más Popular */}
              <div className="p-6 rounded-2xl text-center relative"
                   style={{
                     background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                     border: '2px solid rgba(139, 92, 246, 0.5)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Paquete Visionario</h3>
                <p className="text-slate-300 mb-6">Para los que piensan en grande y quieren el 100% de los bonos desde el día uno.</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$1000</div>
                  <div className="text-sm text-slate-300">$4.500.000 COP</div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform">
                  Activar Ahora
                </button>
              </div>
            </div>

            {/* Garantías */}
            <div className="mt-8 flex justify-center items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Sin compromisos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Acceso inmediato
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Solo 147 cupos
              </div>
            </div>
          </section>

          {/* Testimonio Final */}
          <section className="text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-slate-300 italic mb-6">
              "Los fundadores no solo construyen empresas. Construyen legados que transforman continentes."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                LC
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Luis Cabrejo</p>
                <p className="text-slate-400 text-sm">Arquitecto de Ecosistemas Digitales</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Chatbot Flotante */}
      <div className="fixed bottom-5 right-5 z-50">
        {showChatPrompt && (
          <div className="absolute bottom-20 right-0 w-64 bg-slate-800 p-4 rounded-lg shadow-lg animate-bounce"
               style={{ backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <p className="text-sm text-white">
              ¿Quieres construir un activo empresarial? <br />
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NEXUS conoce la fórmula Ray Kroc.
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

        <button
          onClick={handleChatToggle}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        >
          {isChatOpen ? <X className="w-8 h-8"/> : <MessageCircle className="w-8 h-8"/>}
        </button>

        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
               style={{
                 background: 'rgba(23, 31, 42, 0.95)',
                 border: '1px solid rgba(255, 255, 255, 0.1)',
                 backdropFilter: 'blur(12px)',
                 height: '500px' // Altura fija para mejor control
               }}>
            {/* Header del Chat */}
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6" />
                <div>
                  <h4 className="font-bold">NEXUS</h4>
                  <p className="text-xs opacity-90">Tu Socio Estratégico de IA</p>
                </div>
              </div>
            </div>

            {/* Mensajes del Chat */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4" style={{ maxHeight: '360px' }}>
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[280px] p-3 rounded-2xl break-words ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-4'
                      : 'bg-slate-700 text-gray-200 mr-4'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 text-gray-200 p-3 rounded-2xl mr-4">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <span className="text-sm ml-2">NEXUS está escribiendo...</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Elemento invisible para auto-scroll */}
              <div ref={chatMessagesEndRef} />
            </div>

            {/* Input del Chat */}
            <div className="p-3 border-t border-slate-700 flex-shrink-0">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 bg-slate-800 text-white p-3 rounded-lg border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={isTyping || !inputMessage.trim()}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Contacto */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="fundadores"
      />
    </div>
  );
}

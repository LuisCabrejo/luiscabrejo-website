// /src/app/fundadores/page.tsx - ARCHIVO COMPLETO CON TODOS LOS AJUSTES APLICADOS

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Zap,
  Users,
  Target,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import ContactModal from '@/components/ContactModal';
import NexusChat from '@/components/NexusChat';

export default function FundadoresPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
          {/* ✅ DESCRIPCIÓN PRINCIPAL ACTUALIZADA */}
          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            CreaTuActivo.com: La primera App en América para construir un activo.
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
              {/* ✅ PUNTO 1 ACTUALIZADO */}
              <div className="text-center p-6 rounded-2xl"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Stack Tecnológico Avanzado</h3>
                <p className="text-slate-400">
                  App CreaTuActivo.com con automatización empresarial, NEXUS (IA conversacional),
                  tracking de prospectos, sistema de referidos, y tecnología propietaria desarrollada
                  en 11 años distribuyendo Gano Excel.
                </p>
              </div>

              {/* ✅ PUNTO 2 ACTUALIZADO */}
              <div className="text-center p-6 rounded-2xl"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Red "Inconformes Inteligentes"</h3>
                <p className="text-slate-400">
                  Conecta con profesionales de alto nivel en 16 países que distribuyen productos Gano Excel
                  usando CreaTuActivo. Red exclusiva de empresarios ambiciosos.
                </p>
              </div>

              {/* ✅ PUNTO 3 ACTUALIZADO */}
              <div className="text-center p-6 rounded-2xl"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Participación Ecosistema CreaTuActivo</h3>
                <p className="text-slate-400">
                  Como fundador, participas en la construcción del "Amazon del bienestar" que impactará
                  4 millones de vidas con productos únicos Gano Excel para 2032.
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
            {/* ✅ DESCRIPCIÓN DE PAQUETES ACTUALIZADA */}
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
              Elige tu inventario inicial de productos Gano Excel y acceso a CreaTuActivo.
              Cada paquete incluye herramientas tecnológicas completas y soporte especializado.
            </p>

            {/* Paquetes */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* ✅ PAQUETE EMPRENDEDOR ACTUALIZADO */}
              <div className="p-6 rounded-2xl text-center"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <h3 className="text-xl font-bold text-white mb-4">Emprendedor</h3>
                <p className="text-slate-400 mb-6">Acceso completo a CreaTuActivo + inventario inicial Gano Excel para validar el modelo.</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$200</div>
                  <div className="text-sm text-slate-400">$900.000 COP</div>
                </div>
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Activar Ahora
                </button>
              </div>

              {/* ✅ PAQUETE EMPRESARIAL ACTUALIZADO */}
              <div className="p-6 rounded-2xl text-center"
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
                <h3 className="text-xl font-bold text-white mb-4">Empresarial</h3>
                <p className="text-slate-400 mb-6">Inventario sólido Gano Excel + herramientas CreaTuActivo para operación profesional y primeras ganancias.</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$500</div>
                  <div className="text-sm text-slate-400">$2.250.000 COP</div>
                </div>
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Activar Ahora
                </button>
              </div>

              {/* ✅ PAQUETE VISIONARIO ACTUALIZADO */}
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
                <h3 className="text-xl font-bold text-white mb-4">Visionario</h3>
                <p className="text-slate-300 mb-6">Inventario premium Gano Excel + plataforma CreaTuActivo completa para máximo potencial desde día uno.</p>
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
              {/* ✅ BIO DE LUIS ACTUALIZADA */}
              <div className="text-left">
                <p className="text-white font-semibold">Luis Cabrejo</p>
                <p className="text-slate-400 text-sm">Arquitecto CreaTuActivo • Diamante Gano Excel</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ✅ COMPONENTE NEXUS ACTUALIZADO */}
      <NexusChat
        context="fundadores"
        showPrompt={true}
        promptMessage="¿Listo para construir un activo empresarial con Gano Excel? NEXUS conoce la plataforma CreaTuActivo completa."
      />

      {/* Modal de Contacto */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="fundadores"
      />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { ChevronDown, Play, Users, Globe, Zap, ArrowRight, Star, Check, Menu, X } from 'lucide-react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation - FIXED FOR MOBILE */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Luis Cabrejo
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm">
              <Link href="/fundadores" className="hover:text-purple-400 transition-colors font-semibold">Programa Fundadores</Link>
              <Link href="/historia" className="hover:text-blue-400 transition-colors">Mi Historia</Link>
              <Link href="/ecosistema" className="hover:text-blue-400 transition-colors">Ecosistema</Link>
              <Link href="/vision" className="hover:text-blue-400 transition-colors">Visión 4M</Link>
            </div>

            {/* Desktop Conectar Button */}
            <button
              onClick={() => setContactModalOpen(true)}
              className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Conectar
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/fundadores"
                className="block text-lg font-bold hover:text-purple-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programa Fundadores
              </Link>
              <Link
                href="/historia"
                className="block text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mi Historia
              </Link>
              <Link
                href="/ecosistema"
                className="block text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ecosistema
              </Link>
              <Link
                href="/vision"
                className="block text-lg font-medium hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Visión 4M
              </Link>
              {/* Mobile Conectar Button - FIXED */}
              <button
                onClick={() => {
                  setContactModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium mt-4"
              >
                Conectar
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - IMPROVED MOBILE LAYOUT */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm border border-blue-500/30">
              💎 Diamante Gano Excel 11 años | 16 países
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Gano Excel con
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Tecnología e IA
              </span>
              Ingresos Residuales Simples
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-purple-300">¿Ya conoces Gano Excel pero lo dejaste porque era complicado?</strong> Reactiva tu negocio con <Link href="/ecosistema" className="text-blue-400 hover:underline">tecnología IA + automatización</Link> que hace fácil lo que antes era difícil. Sistema probado en 16 países para construir ingresos residuales sin complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/fundadores" className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2 group justify-center">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5" /> Ver Programa Fundadores
              </Link>
              <Link href="/ecosistema" className="border border-purple-400/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-purple-500/10 transition-all flex items-center gap-2 justify-center">
                <Play className="w-4 sm:w-5 h-4 sm:h-5" /> Conoce la Tecnología
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">11</div>
                <div className="text-xs sm:text-sm text-gray-400">Años Diamante</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">16</div>
                <div className="text-xs sm:text-sm text-gray-400">Países Activos</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-400">4M</div>
                <div className="text-xs sm:text-sm text-gray-400">Meta de Impacto</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-video bg-gray-800 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50"></div>
                <Play className="w-12 sm:w-16 h-12 sm:h-16 text-white relative z-10 cursor-pointer hover:scale-110 transition-transform" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded-full">
                  "De la quiebra a 4 millones" - 3:42
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  "Si vivía en estrato cero... pero aún así las personas me seguían, imagina lo que podemos lograr ahora con herramientas de clase mundial."
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-gray-800"></div>
                    ))}
                  </div>
                  <span className="ml-3 text-xs sm:text-sm text-gray-400">+2,847 personas transformadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Social Proof Section - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Reconocido por Líderes de la Industria</h2>
            <p className="text-gray-400">Profesionales de alto nivel que han validado el ecosistema</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Dr. Patricia González</div>
                  <div className="text-xs sm:text-sm text-gray-400">Directora Médica, Ecopetrol</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300">"Las herramientas digitales de Luis han revolucionado cómo veo los negocios. Es el único que combina tecnología real con resultados comprobados."</p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Ing. Carlos Mendoza</div>
                  <div className="text-xs sm:text-sm text-gray-400">VP Tecnología, Banco de Bogotá</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300">"Lo que más me impresiona es su enfoque empresarial. Nada de jerga tradicional, solo estrategia y tecnología de vanguardia."</p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Pastora María Elena</div>
                  <div className="text-xs sm:text-sm text-gray-400">Líder Comunitaria, 15K seguidores</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300">"Por fin alguien que entiende que queremos construir algo serio, no esquemas. Su plataforma es el futuro de los negocios colaborativos."</p>
            </div>
          </div>

          {/* Company Logos - RESPONSIVE */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-60">
            <div className="text-base sm:text-2xl font-bold text-gray-500">ECOPETROL</div>
            <div className="text-base sm:text-2xl font-bold text-gray-500">BANCOLOMBIA</div>
            <div className="text-base sm:text-2xl font-bold text-gray-500">GANO EXCEL</div>
            <div className="text-base sm:text-2xl font-bold text-gray-500">VERCEL</div>
          </div>
        </div>
      </section>

      {/* The Ecosystem Section - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">El Ecosistema Digital que Cambia Todo</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              No es solo un "negocio" - es una arquitectura completa de herramientas, formación y comunidad que permite crear activos empresariales reales en América.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Herramientas Tecnológicas Propias</h3>
                  <p className="text-sm sm:text-base text-gray-400">Desarrolladas con Next.js, IA y automatización. No dependes de materiales corporativos genéricos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Users className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Academia de Formación Empresarial</h3>
                  <p className="text-sm sm:text-base text-gray-400">Desde fundamentos hasta arquitectura avanzada de ecosistemas. Certificaciones reconocidas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Globe className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Red Continental de Socios</h3>
                  <p className="text-sm sm:text-base text-gray-400">16 países, mentores regionales, eventos virtuales semanales. Conexiones que importan.</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    app.creatuactivo.com
                  </div>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base">Tecnología 2025 para construir activos</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">IA Conversacional (NEXUS)</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">Automatización con Next.js</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">Sistema de Tracking Avanzado</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">Red Continental de Socios</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">Analytics en Tiempo Real</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                </div>

                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                >
                  Conocer la Plataforma
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección REACTIVACIÓN - Para 550K ex-distribuidores */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-purple-500/20 rounded-full px-4 py-2 text-sm border border-purple-500/30 mb-6">
              💡 Para quienes ya conocen Gano Excel
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ¿Dejaste Gano Excel Porque Era Complicado?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Más de <strong className="text-purple-300">550,000 personas en Colombia</strong> conocen Gano Excel y saben que funciona.
              Pero sin herramientas, era complicado. <strong className="text-blue-300">Ahora puedes volver con tecnología</strong> que hace todo más simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Antes */}
            <div className="bg-red-900/10 border border-red-500/30 rounded-2xl p-6 sm:p-8">
              <div className="text-red-400 text-4xl mb-4">❌</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-300">Antes (Por eso lo dejaste)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Seguimiento manual de contactos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Explicar lo mismo 100 veces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Sin sistema para escalar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Demasiado tiempo invertido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Difícil enseñar a tu equipo</span>
                </li>
              </ul>
            </div>

            {/* Ahora */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                2025
              </div>
              <div className="text-green-400 text-4xl mb-4">✅</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-300">Ahora (Con Tecnología)</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>IA NEXUS</strong> responde dudas 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>CRM automatizado</strong> hace seguimiento</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Sistema replicable</strong> para tu equipo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Dashboard en tiempo real</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span><strong>Capacitación automática</strong> integrada</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Reactivación */}
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Regla de los 6 Meses: Puedes Empezar de Nuevo
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Si dejaste de comprar hace más de 6 meses, puedes reactivarte con cualquier líder.
              <strong className="text-purple-300"> Ahora con tecnología que hace la diferencia.</strong>
              Sistema probado en 16 países.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fundadores"
                className="bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2 justify-center"
              >
                <Zap className="w-5 h-5" /> Ver Programa con Tecnología
              </Link>
              <button
                onClick={() => setContactModalOpen(true)}
                className="border border-purple-400/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all"
              >
                Hablar con Luis Cabrejo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 4M Section - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">La Visión: 4 Millones de Vidas Transformadas</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              No es solo un número. Es padres de familia recuperando su tiempo, profesionales construyendo legados,
              y una generación completa reescribiendo las reglas del bienestar económico en América Latina.
              <Link href="/fundadores" className="text-purple-400 hover:underline ml-2 font-semibold">
                Únete al Programa Fundadores 2025 →
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-black/30 rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-4">2025-2027</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Fundación</h3>
              <p className="text-sm sm:text-base text-gray-400">100,000 profesionales usando las herramientas. Expansión a los 16 países. Primeros casos de éxito documentados.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-4">2027-2029</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Escalamiento</h3>
              <p className="text-sm sm:text-base text-gray-400">1,000,000 de usuarios activos. Inteligencia artificial avanzada. Red de mentores en cada ciudad principal.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">2029-2032</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Impacto Masivo</h3>
              <p className="text-sm sm:text-base text-gray-400">4,000,000 de beneficiarios. Gano Excel #1 mundial. Un nuevo modelo de bienestar económico en América.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black/50 to-gray-900/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">¿Te Unes a Esta Visión?</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              Si eres un profesional que entiende que el futuro son los ecosistemas colaborativos,
              si buscas construir algo más grande que un "trabajo", si quieres ser parte de la transformación
              económica más importante de América Latina...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/fundadores"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Ver Programa Fundadores
                </Link>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Conoce la Oportunidad
                </button>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  Agenda una Conversación
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Unificado */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="conectar"
      />
    </div>
  );
}

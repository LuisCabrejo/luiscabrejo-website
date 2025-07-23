'use client';

import React, { useState } from 'react';
import { ArrowLeft, Calendar, Target, Users, Globe, TrendingUp, Zap, Heart, Star, ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';

export default function VisionPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Luis Cabrejo
            </Link>
            <div className="hidden md:flex space-x-8 text-sm">
              <Link href="/historia" className="hover:text-blue-400 transition-colors">Mi Historia</Link>
              <Link href="/ecosistema" className="hover:text-blue-400 transition-colors">Ecosistema</Link>
              <Link href="/vision" className="text-blue-400">Visión 4M</Link>
            </div>
            <button
              onClick={() => setContactModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
            >
              Conectar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 sm:mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-4 sm:px-6 py-3 text-base sm:text-lg border border-green-500/30 mb-8">
              🎯 2025 - 2032: El Gran Plan
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                4 MILLONES
              </span>
              <br />
              <span className="text-2xl sm:text-4xl lg:text-5xl text-gray-200">de Vidas Transformadas</span>
            </h1>

            <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              No es solo un número. Es una generación completa reescribiendo las reglas del bienestar económico en América Latina.
              Es padres recuperando su tiempo, profesionales construyendo legados, y familias creando su libertad empresarial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-green-900/20 rounded-2xl p-4 sm:p-6 border border-green-500/30">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">4,000,000</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Beneficiarios Directos</div>
                <div className="text-xs sm:text-sm text-gray-400">Personas con acceso a productos y oportunidad empresarial</div>
              </div>

              <div className="bg-blue-900/20 rounded-2xl p-4 sm:p-6 border border-blue-500/30">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">16</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Países Activos</div>
                <div className="text-xs sm:text-sm text-gray-400">Desde Canadá hasta Chile - Todo el continente americano</div>
              </div>

              <div className="bg-purple-900/20 rounded-2xl p-4 sm:p-6 border border-purple-500/30">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">7</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Años para Lograrlo</div>
                <div className="text-xs sm:text-sm text-gray-400">2025-2032: Roadmap específico y ejecutable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Es Posible */}
      <section className="py-16 sm:py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Por Qué Es Posible Esta Visión?</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              No es un sueño. Es una proyección basada en fundamentos sólidos y tendencias comprobadas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Base Sólida Existente</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-2">11 años como Diamante, red establecida en todo América, infraestructura tecnológica propia, familia empresarial consolidada.</p>
                  <div className="text-xs sm:text-sm text-green-400">✓ +2,847 personas ya impactadas directamente</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Ventaja Tecnológica</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-2">5 años desarrollando herramientas digitales. Stack tecnológico avanzado que la mayoría no tiene ni entiende.</p>
                  <div className="text-xs sm:text-sm text-blue-400">✓ Next.js, IA, automatización, escalabilidad global</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Target className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Momento Perfecto</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-2">El mercado busca alternativas serias. Profesionales desconfían de la jerga tradicional pero abrazan ecosistemas empresariales.</p>
                  <div className="text-xs sm:text-sm text-purple-400">✓ Timing perfecto para disrupcción del sector</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Mercado Continental</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-2">600+ millones de personas en América. Solo necesitamos convencer al 0.67% para llegar a 4 millones.</p>
                  <div className="text-xs sm:text-sm text-orange-400">✓ Mercado masivo + penetración mínima = Victoria</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Proyección de Crecimiento</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 rounded-xl p-3 sm:p-4 border border-green-500/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm sm:text-base">Base Actual</span>
                      <span className="text-green-400 font-bold text-sm sm:text-base">2,847</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '7%'}}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 rounded-xl p-3 sm:p-4 border border-blue-500/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm sm:text-base">2027 (Fase 1)</span>
                      <span className="text-blue-400 font-bold text-sm sm:text-base">100,000</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-xl p-3 sm:p-4 border border-purple-500/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm sm:text-base">2029 (Fase 2)</span>
                      <span className="text-purple-400 font-bold text-sm sm:text-base">1,000,000</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-900/50 to-pink-800/50 rounded-xl p-3 sm:p-4 border border-pink-500/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm sm:text-base">2032 (Fase 3)</span>
                      <span className="text-pink-400 font-bold text-sm sm:text-base">4,000,000</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-pink-500 to-yellow-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-xs sm:text-sm text-gray-400 mb-2">Crecimiento Exponencial Sostenible</div>
                  <div className="text-base sm:text-lg font-semibold text-yellow-400">Meta: 0.67% de América</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Detallado - MOBILE ROADMAP */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Roadmap 2025-2032</h2>
            <p className="text-lg sm:text-xl text-gray-400">Cada fase con objetivos específicos, métricas claras y estrategias definidas</p>
          </div>

          {/* MOBILE ROADMAP (visible on mobile only) */}
          <div className="block lg:hidden space-y-12">

            {/* FASE 1: 2025-2027 FUNDACIÓN */}
            <div className="bg-green-900/20 rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 rounded-full p-2 mr-3">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-400">FASE 1: FUNDACIÓN</h3>
              </div>

              <div className="text-lg font-semibold mb-4">2025 - 2027</div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Consolidar la base tecnológica, expandir a los 16 países, y crear los primeros 100,000 usuarios del ecosistema.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Portal 4millones.com a escala continental</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">IA avanzada integrada en todas las herramientas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Red de mentores en cada país</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">100+ casos de éxito documentados</span>
                </div>
              </div>

              <div className="bg-green-800/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-300 mb-2">100,000</div>
                <div className="text-green-400 font-semibold text-sm">Usuarios Meta Fase 1</div>
              </div>
            </div>

            {/* FASE 2: 2027-2029 ESCALAMIENTO */}
            <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 rounded-full p-2 mr-3">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">FASE 2: ESCALAMIENTO</h3>
              </div>

              <div className="text-lg font-semibold mb-4">2027 - 2029</div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Crecimiento exponencial con IA avanzada, expansión a cada ciudad principal, y consolidación como líder mundial.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">1,000,000 de usuarios activos mensuales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">Inteligencia artificial líder en el sector</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">Red de mentores en cada ciudad principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">Reconocimiento internacional masivo</span>
                </div>
              </div>

              <div className="bg-purple-800/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-300 mb-2">1,000,000</div>
                <div className="text-purple-400 font-semibold text-sm">Usuarios Meta Fase 2</div>
              </div>
            </div>

            {/* FASE 3: 2029-2032 IMPACTO MASIVO */}
            <div className="bg-gradient-to-br from-pink-900/20 to-yellow-900/20 rounded-2xl p-6 border border-pink-500/30">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full p-2 mr-3">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">FASE 3: IMPACTO MASIVO</h3>
              </div>

              <div className="text-lg font-semibold mb-4">2029 - 2032</div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Transformación completa del modelo de bienestar económico en América. Gano Excel #1 mundial. Legado consolidado.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">4,000,000 de beneficiarios directos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">Gano Excel #1 mundial en bienestar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">Nuevo modelo económico establecido</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">Legado familiar y generacional</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-800/30 to-yellow-800/30 rounded-lg p-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent mb-2">4,000,000</div>
                <div className="text-yellow-400 font-semibold text-sm">VISIÓN CUMPLIDA</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* El Legado - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-black/50 to-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Más Que Números: El Verdadero Impacto</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-6 sm:p-8 border border-blue-500/30">
              <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Familias Transformadas</h3>
              <p className="text-sm sm:text-base text-gray-300">Padres recuperando su tiempo, madres construyendo independencia, hijos viendo un modelo empresarial real en casa.</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-2xl p-6 sm:p-8 border border-green-500/30">
              <Target className="w-10 sm:w-12 h-10 sm:h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Profesionales Empoderados</h3>
              <p className="text-sm sm:text-base text-gray-300">Ejecutivos, médicos, ingenieros descubriendo que pueden construir activos empresariales sin sacrificar su credibilidad.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-2xl p-6 sm:p-8 border border-purple-500/30">
              <Globe className="w-10 sm:w-12 h-10 sm:h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Generación Inspirada</h3>
              <p className="text-sm sm:text-base text-gray-300">Jóvenes que crecen viendo que el emprendimiento es normal, que construir empresas es posible, que soñar en grande está bien.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 rounded-2xl p-6 sm:p-8 border border-orange-500/30">
              <Users className="w-10 sm:w-12 h-10 sm:h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Comunidades Prósperas</h3>
              <p className="text-sm sm:text-base text-gray-300">Ciudades enteras donde el emprendimiento colaborativo es la norma, donde apoyarse mutuamente genera abundancia colectiva.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
            <div className="text-4xl sm:text-6xl mb-6">"</div>
            <blockquote className="text-lg sm:text-2xl text-gray-200 font-medium mb-6 italic leading-relaxed">
              En 2032, cuando alguien pregunte cómo fue posible transformar el modelo de bienestar económico en América,
              la respuesta será simple: una persona con visión, herramientas de clase mundial,
              y 4 millones de personas que decidieron construir algo más grande que ellas mismas.
            </blockquote>
            <div className="text-blue-400 font-semibold">— Luis Cabrejo</div>
            <div className="text-gray-400 text-sm">Arquitecto de Ecosistemas Digitales</div>
          </div>
        </div>
      </section>

      {/* CTA Final - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Te Unes a Esta Visión?</h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Esta visión se construye persona por persona, familia por familia, país por país.
              Si resonó contigo, si entiendes que es posible, si quieres ser parte de la transformación más importante de América Latina...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2 text-base sm:text-lg justify-center"
              >
                Quiero Ser Parte <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <Link href="/historia" className="border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-base sm:text-lg">
                Conoce Mi Historia
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>Desde Villavicencio al Mundo</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>2025-2032</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>4 Millones de Vidas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - IMPROVED MOBILE */}
      <footer className="py-8 sm:py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 inline-block">
            Luis Cabrejo
          </Link>
          <p className="text-gray-400 text-xs sm:text-sm mb-4">
            Arquitecto de Ecosistemas Digitales. Construyendo el futuro del bienestar económico en América.
          </p>
          <p className="text-gray-500 text-xs">
            "No es solo un número. Es una generación completa reescribiendo las reglas." - Visión 4 Millones
          </p>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="vision"
      />
    </div>
  );
}

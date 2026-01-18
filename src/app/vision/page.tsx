/**
 * Copyright © 2026 LuisCabrejo.com
 * Todos los derechos reservados.
 *
 * THE ARCHITECT'S SUITE - Bimetallic System v3.0
 * Gold (#C5A059): CTAs, prices, achievements
 * Titanium (#94A3B8): Icons, navigation, structural borders
 *
 * Para consultas de licenciamiento: legal@creatuactivo.com
 */

'use client';

import React, { useState } from 'react';
import { ArrowLeft, Calendar, Target, Users, Globe, TrendingUp, Zap, Heart, Star, ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function VisionPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F1115] text-white">
      <Navigation onContactClick={() => setContactModalOpen(true)} />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center text-[#64748B] hover:text-[#C5A059] mb-6 sm:mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-gradient-to-r from-[#C5A059]/20 to-[#94A3B8]/20 rounded-full px-4 sm:px-6 py-3 text-base sm:text-lg border border-[#C5A059]/30 mb-8">
              🎯 2025 - 2032: El Gran Plan
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#E5E5E5] bg-clip-text text-transparent">
                4 MILLONES
              </span>
              <br />
              <span className="text-2xl sm:text-4xl lg:text-5xl text-[#E5E5E5]">de Vidas Transformadas</span>
            </h1>

            <p className="text-lg sm:text-2xl text-[#A3A3A3] max-w-4xl mx-auto leading-relaxed mb-12">
              No es solo un número. Es una generación completa reescribiendo las reglas del bienestar económico en América Latina.
              Es padres recuperando su tiempo, profesionales construyendo legados, y familias creando su libertad empresarial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 border border-[#C5A059]/30">
                <div className="text-2xl sm:text-3xl font-bold text-[#C5A059] mb-2">4,000,000</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Beneficiarios Directos</div>
                <div className="text-xs sm:text-sm text-[#64748B]">Personas con acceso a productos y oportunidad empresarial</div>
              </div>

              <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 border border-[#94A3B8]/30">
                <div className="text-2xl sm:text-3xl font-bold text-[#94A3B8] mb-2">16</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Países Activos</div>
                <div className="text-xs sm:text-sm text-[#64748B]">Desde Canadá hasta Chile - Todo el continente americano</div>
              </div>

              <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 border border-emerald-500/30">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">7</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Años para Lograrlo</div>
                <div className="text-xs sm:text-sm text-[#64748B]">2025-2032: Roadmap específico y ejecutable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Es Posible */}
      <section className="py-16 sm:py-20 bg-[#15171C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Por Qué Es Posible Esta Visión?</h2>
            <p className="text-lg sm:text-xl text-[#64748B] max-w-3xl mx-auto">
              No es un sueño. Es una proyección basada en fundamentos sólidos y tendencias comprobadas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Base Sólida Existente</h3>
                  <p className="text-sm sm:text-base text-[#A3A3A3] mb-2">11 años como Diamante, red establecida en todo América, infraestructura tecnológica propia, familia empresarial consolidada.</p>
                  <div className="text-xs sm:text-sm text-emerald-400">✓ +2,847 personas ya impactadas directamente</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#94A3B8] p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-[#0F1115]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Ventaja Tecnológica</h3>
                  <p className="text-sm sm:text-base text-[#A3A3A3] mb-2">5 años desarrollando herramientas digitales. Stack tecnológico avanzado que la mayoría no tiene ni entiende.</p>
                  <div className="text-xs sm:text-sm text-[#94A3B8]">✓ Next.js, IA, automatización, escalabilidad global</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C5A059] p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Target className="w-5 sm:w-6 h-5 sm:h-6 text-[#0F1115]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Momento Perfecto</h3>
                  <p className="text-sm sm:text-base text-[#A3A3A3] mb-2">El mercado busca alternativas serias. Profesionales desconfían de la jerga tradicional pero abrazan ecosistemas empresariales.</p>
                  <div className="text-xs sm:text-sm text-[#C5A059]">✓ Timing perfecto para disrupcción del sector</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Mercado Continental</h3>
                  <p className="text-sm sm:text-base text-[#A3A3A3] mb-2">600+ millones de personas en América. Solo necesitamos impactar al 0.67% para llegar a 4 millones.</p>
                  <div className="text-xs sm:text-sm text-orange-400">✓ Mercado masivo + penetración mínima = Victoria</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-[#1A1D23] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Proyección de Crecimiento</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-emerald-900/20 rounded-xl p-3 sm:p-4 border border-emerald-500/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm sm:text-base">Base Actual</span>
                      <span className="text-emerald-400 font-bold text-sm sm:text-base">2,847</span>
                    </div>
                    <div className="w-full bg-[#0F1115] rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{width: '7%'}}></div>
                    </div>
                  </div>

                  <div className="bg-[#94A3B8]/10 rounded-xl p-3 sm:p-4 border border-[#94A3B8]/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm sm:text-base">2027 (Fase 1)</span>
                      <span className="text-[#94A3B8] font-bold text-sm sm:text-base">100,000</span>
                    </div>
                    <div className="w-full bg-[#0F1115] rounded-full h-2">
                      <div className="bg-[#94A3B8] h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>

                  <div className="bg-[#C5A059]/10 rounded-xl p-3 sm:p-4 border border-[#C5A059]/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm sm:text-base">2029 (Fase 2)</span>
                      <span className="text-[#C5A059] font-bold text-sm sm:text-base">1,000,000</span>
                    </div>
                    <div className="w-full bg-[#0F1115] rounded-full h-2">
                      <div className="bg-[#C5A059] h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#C5A059]/20 to-[#D4AF37]/20 rounded-xl p-3 sm:p-4 border border-[#D4AF37]/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm sm:text-base">2032 (Fase 3)</span>
                      <span className="text-[#D4AF37] font-bold text-sm sm:text-base">4,000,000</span>
                    </div>
                    <div className="w-full bg-[#0F1115] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-xs sm:text-sm text-[#64748B] mb-2">Crecimiento Exponencial Sostenible</div>
                  <div className="text-base sm:text-lg font-semibold text-[#C5A059]">Meta: 0.67% de América</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Detallado - COMPLETELY REDESIGNED FOR MOBILE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Roadmap 2025-2032</h2>
            <p className="text-lg sm:text-xl text-[#64748B]">Cada fase con objetivos específicos, métricas claras y estrategias definidas</p>
          </div>

          {/* MOBILE ROADMAP (visible on mobile only) */}
          <div className="block lg:hidden space-y-12">

            {/* FASE 1: 2025-2027 FUNDACIÓN */}
            <div className="bg-emerald-900/20 rounded-2xl p-6 border border-emerald-500/30">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-500 rounded-full p-2 mr-3">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400">FASE 1: FUNDACIÓN</h3>
              </div>

              <div className="text-lg font-semibold mb-4">2025 - 2027</div>
              <p className="text-[#A3A3A3] mb-6 text-sm leading-relaxed">
                Consolidar la base tecnológica, expandir a los 16 países, y crear los primeros 100,000 usuarios del ecosistema.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">Plataforma <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">CreaTuActivo.com</a> a escala continental</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">IA avanzada integrada en todas las herramientas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">Red de mentores en cada país</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">100+ casos de éxito documentados</span>
                </div>
              </div>

              <div className="bg-emerald-800/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-300 mb-2">100,000</div>
                <div className="text-emerald-400 font-semibold text-sm">Usuarios Meta Fase 1</div>
              </div>

              <div className="mt-6 bg-[#1A1D23]/50 rounded-lg p-4">
                <h4 className="text-base font-semibold mb-3 text-emerald-400">Objetivos Específicos 2025-2027:</h4>
                <div className="space-y-3">
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <div className="font-semibold text-sm">Tecnología</div>
                    <div className="text-xs text-[#64748B]">Escalabilidad global, IA personalizada, automatización completa</div>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <div className="font-semibold text-sm">Geografía</div>
                    <div className="text-xs text-[#64748B]">Operación en los 16 países con mentores locales</div>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <div className="font-semibold text-sm">Comunidad</div>
                    <div className="text-xs text-[#64748B]">Academia consolidada, eventos semanales, certificaciones</div>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <div className="font-semibold text-sm">Resultados</div>
                    <div className="text-xs text-[#64748B]">100K usuarios activos, casos de éxito en cada país</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FASE 2: 2027-2029 ESCALAMIENTO */}
            <div className="bg-[#94A3B8]/10 rounded-2xl p-6 border border-[#94A3B8]/30">
              <div className="flex items-center mb-4">
                <div className="bg-[#94A3B8] rounded-full p-2 mr-3">
                  <TrendingUp className="w-5 h-5 text-[#0F1115]" />
                </div>
                <h3 className="text-xl font-bold text-[#94A3B8]">FASE 2: ESCALAMIENTO</h3>
              </div>

              <div className="text-lg font-semibold mb-4">2027 - 2029</div>
              <p className="text-[#A3A3A3] mb-6 text-sm leading-relaxed">
                Crecimiento exponencial con IA avanzada, expansión a cada ciudad principal, y consolidación como líder mundial.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#94A3B8] flex-shrink-0" />
                  <span className="text-sm">1,000,000 de usuarios activos mensuales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#94A3B8] flex-shrink-0" />
                  <span className="text-sm">Inteligencia artificial líder en el sector</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#94A3B8] flex-shrink-0" />
                  <span className="text-sm">Red de mentores en cada ciudad principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#94A3B8] flex-shrink-0" />
                  <span className="text-sm">Reconocimiento internacional masivo</span>
                </div>
              </div>

              <div className="bg-[#94A3B8]/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-[#E5E5E5] mb-2">1,000,000</div>
                <div className="text-[#94A3B8] font-semibold text-sm">Usuarios Meta Fase 2</div>
              </div>

              <div className="mt-6 bg-[#1A1D23]/50 rounded-lg p-4">
                <h4 className="text-base font-semibold mb-3 text-[#94A3B8]">Objetivos Específicos 2027-2029:</h4>
                <div className="space-y-3">
                  <div className="border-l-2 border-[#94A3B8] pl-3">
                    <div className="font-semibold text-sm">Escala Masiva</div>
                    <div className="text-xs text-[#64748B]">De 100K a 1M usuarios. Operación en cada ciudad principal</div>
                  </div>
                  <div className="border-l-2 border-[#94A3B8] pl-3">
                    <div className="font-semibold text-sm">IA Avanzada</div>
                    <div className="text-xs text-[#64748B]">Personalización extrema, predicción de comportamiento</div>
                  </div>
                  <div className="border-l-2 border-[#94A3B8] pl-3">
                    <div className="font-semibold text-sm">Ecosistema Completo</div>
                    <div className="text-xs text-[#64748B]">Servicios financieros, educación, salud integrados</div>
                  </div>
                  <div className="border-l-2 border-[#94A3B8] pl-3">
                    <div className="font-semibold text-sm">Reconocimiento</div>
                    <div className="text-xs text-[#64748B]">Gano Excel posicionado como líder tecnológico mundial</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FASE 3: 2029-2032 IMPACTO MASIVO */}
            <div className="bg-gradient-to-br from-[#C5A059]/20 to-[#D4AF37]/20 rounded-2xl p-6 border border-[#C5A059]/30">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full p-2 mr-3">
                  <Star className="w-5 h-5 text-[#0F1115]" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent">FASE 3: IMPACTO MASIVO</h3>
              </div>

              <div className="text-lg font-semibold mb-4">2029 - 2032</div>
              <p className="text-[#A3A3A3] mb-6 text-sm leading-relaxed">
                Transformación completa del modelo de bienestar económico en América. Gano Excel #1 mundial. Legado consolidado.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span className="text-sm">4,000,000 de beneficiarios directos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span className="text-sm">Gano Excel #1 mundial en bienestar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span className="text-sm">Nuevo modelo económico establecido</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span className="text-sm">Legado familiar y generacional</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#C5A059]/30 to-[#D4AF37]/30 rounded-lg p-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent mb-2">4,000,000</div>
                <div className="text-[#C5A059] font-semibold text-sm">VISIÓN CUMPLIDA</div>
              </div>

              <div className="mt-6 bg-[#1A1D23]/50 rounded-lg p-4">
                <h4 className="text-base font-semibold mb-3 text-[#C5A059]">El Legado 2029-2032:</h4>
                <div className="space-y-3">
                  <div className="border-l-2 border-[#C5A059] pl-3">
                    <div className="font-semibold text-sm">Transformación Social</div>
                    <div className="text-xs text-[#64748B]">Una generación completa con nuevo modelo de bienestar</div>
                  </div>
                  <div className="border-l-2 border-[#C5A059] pl-3">
                    <div className="font-semibold text-sm">Liderazgo Mundial</div>
                    <div className="text-xs text-[#64748B]">Gano Excel como referente global en ecosistemas empresariales</div>
                  </div>
                  <div className="border-l-2 border-[#C5A059] pl-3">
                    <div className="font-semibold text-sm">Legado Familiar</div>
                    <div className="text-xs text-[#64748B]">Tres generaciones participando en el ecosistema</div>
                  </div>
                  <div className="border-l-2 border-[#C5A059] pl-3">
                    <div className="font-semibold text-sm">Impacto Continental</div>
                    <div className="text-xs text-[#64748B]">América Latina como modelo mundial de emprendimiento</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* DESKTOP ROADMAP (hidden on mobile) */}
          <div className="hidden lg:block relative">
            {/* Línea de tiempo central - Bimetallic */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-[#94A3B8] to-[#C5A059]"></div>

            <div className="space-y-32">

              {/* FASE 1: 2025-2027 FUNDACIÓN */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-emerald-500 rounded-full p-4 relative z-10 border-4 border-[#0F1115]">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                  <div className="lg:text-right">
                    <div className="bg-emerald-900/20 rounded-2xl p-8 border border-emerald-500/30">
                      <h3 className="text-3xl font-bold mb-4 text-emerald-400">FASE 1: FUNDACIÓN</h3>
                      <div className="text-2xl font-semibold mb-4">2025 - 2027</div>
                      <p className="text-[#A3A3A3] mb-6 text-lg">
                        Consolidar la base tecnológica, expandir a los 16 países, y crear los primeros 100,000 usuarios del ecosistema.
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                          <span>Plataforma <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">CreaTuActivo.com</a> a escala continental</span>
                        </div>
                        <div className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                          <span>IA avanzada integrada en todas las herramientas</span>
                        </div>
                        <div className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                          <span>Red de mentores en cada país</span>
                        </div>
                        <div className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle className="w-5 h-5 text-emerald-400" />
                          <span>100+ casos de éxito documentados</span>
                        </div>
                      </div>

                      <div className="bg-emerald-800/30 rounded-lg p-4">
                        <div className="text-4xl font-bold text-emerald-300 mb-2">100,000</div>
                        <div className="text-emerald-400 font-semibold">Usuarios Meta Fase 1</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-[#1A1D23]/50 rounded-2xl p-8 border border-white/10">
                      <h4 className="text-xl font-semibold mb-4 text-emerald-400">Objetivos Específicos 2025-2027:</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-emerald-500 pl-4">
                          <div className="font-semibold">Tecnología</div>
                          <div className="text-sm text-[#64748B]">Escalabilidad global, IA personalizada, automatización completa</div>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-4">
                          <div className="font-semibold">Geografía</div>
                          <div className="text-sm text-[#64748B]">Operación en los 16 países con mentores locales</div>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-4">
                          <div className="font-semibold">Comunidad</div>
                          <div className="text-sm text-[#64748B]">Academia consolidada, eventos semanales, certificaciones</div>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-4">
                          <div className="font-semibold">Resultados</div>
                          <div className="text-sm text-[#64748B]">100K usuarios activos, casos de éxito en cada país</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FASE 2: 2027-2029 ESCALAMIENTO */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-[#94A3B8] rounded-full p-4 relative z-10 border-4 border-[#0F1115]">
                    <TrendingUp className="w-8 h-8 text-[#0F1115]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                  <div>
                    <div className="bg-[#1A1D23]/50 rounded-2xl p-8 border border-white/10">
                      <h4 className="text-xl font-semibold mb-4 text-[#94A3B8]">Objetivos Específicos 2027-2029:</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-[#94A3B8] pl-4">
                          <div className="font-semibold">Escala Masiva</div>
                          <div className="text-sm text-[#64748B]">De 100K a 1M usuarios. Operación en cada ciudad principal</div>
                        </div>
                        <div className="border-l-4 border-[#94A3B8] pl-4">
                          <div className="font-semibold">IA Avanzada</div>
                          <div className="text-sm text-[#64748B]">Personalización extrema, predicción de comportamiento</div>
                        </div>
                        <div className="border-l-4 border-[#94A3B8] pl-4">
                          <div className="font-semibold">Ecosistema Completo</div>
                          <div className="text-sm text-[#64748B]">Servicios financieros, educación, salud integrados</div>
                        </div>
                        <div className="border-l-4 border-[#94A3B8] pl-4">
                          <div className="font-semibold">Reconocimiento</div>
                          <div className="text-sm text-[#64748B]">Gano Excel posicionado como líder tecnológico mundial</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:text-left">
                    <div className="bg-[#94A3B8]/10 rounded-2xl p-8 border border-[#94A3B8]/30">
                      <h3 className="text-3xl font-bold mb-4 text-[#94A3B8]">FASE 2: ESCALAMIENTO</h3>
                      <div className="text-2xl font-semibold mb-4">2027 - 2029</div>
                      <p className="text-[#A3A3A3] mb-6 text-lg">
                        Crecimiento exponencial con IA avanzada, expansión a cada ciudad principal, y consolidación como líder mundial.
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#94A3B8]" />
                          <span>1,000,000 de usuarios activos mensuales</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#94A3B8]" />
                          <span>Inteligencia artificial líder en el sector</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#94A3B8]" />
                          <span>Red de mentores en cada ciudad principal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#94A3B8]" />
                          <span>Reconocimiento internacional masivo</span>
                        </div>
                      </div>

                      <div className="bg-[#94A3B8]/20 rounded-lg p-4">
                        <div className="text-4xl font-bold text-[#E5E5E5] mb-2">1,000,000</div>
                        <div className="text-[#94A3B8] font-semibold">Usuarios Meta Fase 2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FASE 3: 2029-2032 IMPACTO MASIVO */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full p-4 relative z-10 border-4 border-[#0F1115]">
                    <Star className="w-8 h-8 text-[#0F1115]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                  <div className="lg:text-right">
                    <div className="bg-gradient-to-br from-[#C5A059]/20 to-[#D4AF37]/20 rounded-2xl p-8 border border-[#C5A059]/30">
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent">FASE 3: IMPACTO MASIVO</h3>
                      <div className="text-2xl font-semibold mb-4">2029 - 2032</div>
                      <p className="text-[#A3A3A3] mb-6 text-lg">
                        Transformación completa del modelo de bienestar económico en América. Gano Excel #1 mundial. Legado consolidado.
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 lg:justify-end">
                          <Star className="w-5 h-5 text-[#C5A059]" />
                          <span>4,000,000 de beneficiarios directos</span>
                        </div>
                        <div className="flex items-center gap-2 lg:justify-end">
                          <Star className="w-5 h-5 text-[#C5A059]" />
                          <span>Gano Excel #1 mundial en bienestar</span>
                        </div>
                        <div className="flex items-center gap-2 lg:justify-end">
                          <Star className="w-5 h-5 text-[#C5A059]" />
                          <span>Nuevo modelo económico establecido</span>
                        </div>
                        <div className="flex items-center gap-2 lg:justify-end">
                          <Star className="w-5 h-5 text-[#C5A059]" />
                          <span>Legado familiar y generacional</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#C5A059]/30 to-[#D4AF37]/30 rounded-lg p-4">
                        <div className="text-4xl font-bold bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent mb-2">4,000,000</div>
                        <div className="text-[#C5A059] font-semibold">VISIÓN CUMPLIDA</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-[#1A1D23]/50 rounded-2xl p-8 border border-white/10">
                      <h4 className="text-xl font-semibold mb-4 text-[#C5A059]">El Legado 2029-2032:</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-[#C5A059] pl-4">
                          <div className="font-semibold">Transformación Social</div>
                          <div className="text-sm text-[#64748B]">Una generación completa con nuevo modelo de bienestar</div>
                        </div>
                        <div className="border-l-4 border-[#C5A059] pl-4">
                          <div className="font-semibold">Liderazgo Mundial</div>
                          <div className="text-sm text-[#64748B]">Gano Excel como referente global en ecosistemas empresariales</div>
                        </div>
                        <div className="border-l-4 border-[#C5A059] pl-4">
                          <div className="font-semibold">Legado Familiar</div>
                          <div className="text-sm text-[#64748B]">Tres generaciones participando en el ecosistema</div>
                        </div>
                        <div className="border-l-4 border-[#C5A059] pl-4">
                          <div className="font-semibold">Impacto Continental</div>
                          <div className="text-sm text-[#64748B]">América Latina como modelo mundial de emprendimiento</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* El Legado - BIMETALLIC */}
      <section className="py-16 sm:py-20 bg-[#15171C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Más Que Números: El Verdadero Impacto</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-[#94A3B8]/30">
              <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-[#94A3B8] mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Familias Transformadas</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">Padres recuperando su tiempo, madres construyendo independencia, hijos viendo un modelo empresarial real en casa.</p>
            </div>

            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-emerald-500/30">
              <Target className="w-10 sm:w-12 h-10 sm:h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Profesionales Empoderados</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">Ejecutivos, médicos, ingenieros descubriendo que pueden construir activos empresariales sin sacrificar su credibilidad.</p>
            </div>

            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30">
              <Globe className="w-10 sm:w-12 h-10 sm:h-12 text-[#C5A059] mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Generación Inspirada</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">Jóvenes que crecen viendo que el emprendimiento es normal, que construir empresas es posible, que soñar en grande está bien.</p>
            </div>

            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-orange-500/30">
              <Users className="w-10 sm:w-12 h-10 sm:h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Comunidades Prósperas</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">Ciudades enteras donde el emprendimiento colaborativo es la norma, donde apoyarse mutuamente genera abundancia colectiva.</p>
            </div>
          </div>

          <div className="bg-[#1A1D23]/70 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
            <div className="text-4xl sm:text-6xl text-[#C5A059] mb-6">"</div>
            <blockquote className="text-lg sm:text-2xl text-[#E5E5E5] font-medium mb-6 italic leading-relaxed">
              En 2032, cuando alguien pregunte cómo fue posible transformar el modelo de bienestar económico en América,
              la respuesta será simple: una persona con visión, herramientas de clase mundial,
              y 4 millones de personas que decidieron construir algo más grande que ellas mismas.
            </blockquote>
            <div className="text-[#C5A059] font-semibold">— Luis Cabrejo</div>
            <div className="text-[#64748B] text-sm">Arquitecto de Ecosistemas Digitales</div>
          </div>
        </div>
      </section>

      {/* CTA Final - BIMETALLIC */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-r from-[#C5A059]/20 to-[#94A3B8]/20 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Te Unes a Esta Visión?</h2>
            <p className="text-base sm:text-xl text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
              Esta visión se construye persona por persona, familia por familia, país por país.
              Si resonó contigo, si entiendes que es posible, si quieres ser parte de la transformación más importante de América Latina...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setContactModalOpen(true)}
                className="bg-[#C5A059] text-[#0F1115] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#D4AF37] transition-all flex items-center gap-2 text-base sm:text-lg justify-center"
              >
                Quiero Ser Parte <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <Link href="/historia" className="border border-[#94A3B8]/30 text-[#E5E5E5] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-base sm:text-lg">
                Conoce Mi Historia
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#64748B]">
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

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="vision"
      />
    </div>
  );
}

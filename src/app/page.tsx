/**
 * Copyright © 2026 LuisCabrejo.com
 * Personal Brand Site - Luis Cabrejo
 *
 * THE ARCHITECT'S SUITE - Bimetallic System v3.0
 * Gold (#C5A059): CTAs, achievements, key highlights
 * Titanium (#94A3B8): Structural elements, navigation, muted text
 * Carbon backgrounds: #0F1115 (deep), #15171C (elevated), #1A1D23 (cards)
 */

'use client';

import React, { useState } from 'react';
import { ChevronDown, Play, Users, Globe, Zap, ArrowRight, Star, Check } from 'lucide-react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E5E5E5]">
      <Navigation onContactClick={() => setContactModalOpen(true)} />

      {/* Hero Section - BIMETALLIC SYSTEM v3.0 */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C5A059]/5 to-[#94A3B8]/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C5A059]/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#94A3B8]/8 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-block bg-[#C5A059]/10 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm border border-[#C5A059]/30 text-[#C5A059]">
              💎 Diamante Gano Excel 11 años | 16 países
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Gano Excel con
              <span className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent block">
                Tecnología e IA
              </span>
              Ingresos Residuales Escalables
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-[#E5E5E5]">¿Ya conoces la industria del network marketing, pero la dejaste porque era complicado?</strong> Yo creo que desarrollar este modelo empresarial se puede hacer sencillo, por eso creamos <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:text-[#D4AF37] hover:underline">CreaTuActivo.com</a>. Desarrolla tu propia empresa de distribución de productos Gano Excel y Gano iTouch con <Link href="/ecosistema" className="text-[#C5A059] hover:text-[#D4AF37] hover:underline">tecnología que facilita lo complejo</Link>. Sistema probado en 16 países para construir ingresos residuales escalables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/fundadores" className="bg-[#C5A059] text-[#0F1115] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:shadow-[0_0_30px_-5px_rgba(197,160,89,0.5)] transition-all flex items-center gap-2 group justify-center">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5" /> Ver Programa Fundadores
              </Link>
              <Link href="/ecosistema" className="border border-[#94A3B8]/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#94A3B8]/10 hover:border-[#C5A059]/50 transition-all flex items-center gap-2 justify-center text-[#E5E5E5]">
                <Play className="w-4 sm:w-5 h-4 sm:h-5" /> Conoce la Tecnología
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#C5A059]">11</div>
                <div className="text-xs sm:text-sm text-[#64748B]">Años Diamante</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#C5A059]">16</div>
                <div className="text-xs sm:text-sm text-[#64748B]">Países Activos</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-emerald-500">4M</div>
                <div className="text-xs sm:text-sm text-[#64748B]">Meta de Impacto</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-[#1A1D23] rounded-2xl sm:rounded-3xl p-4 sm:p-8 backdrop-blur-sm border border-white/10 hover:border-[#C5A059]/30 transition-colors">
              <div className="aspect-video bg-[#15171C] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/30 to-[#94A3B8]/20"></div>
                <Play className="w-12 sm:w-16 h-12 sm:h-16 text-white relative z-10 cursor-pointer hover:scale-110 hover:text-[#C5A059] transition-all" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded-full">
                  "De la quiebra a 4 millones" - 3:42
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm sm:text-base text-[#A3A3A3] mb-4">
                  "Si vivía en estrato cero... pero aún así las personas me seguían, imagina lo que podemos lograr ahora con herramientas de clase mundial."
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full border-2 border-[#1A1D23]"></div>
                    ))}
                  </div>
                  <span className="ml-3 text-xs sm:text-sm text-[#64748B]">+2,847 personas transformadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="w-6 h-6 text-[#64748B]" />
        </div>
      </section>

      {/* Social Proof Section - BIMETALLIC v3.0 */}
      <section className="py-16 sm:py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Reconocido por Líderes de la Industria</h2>
            <p className="text-[#64748B]">Profesionales de alto nivel que han validado el ecosistema</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-[#1A1D23] rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-[#C5A059]/30 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-sm sm:text-base text-white">Dr. Patricia González</div>
                  <div className="text-xs sm:text-sm text-[#64748B]">Directora Médica, Ecopetrol</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#A3A3A3]">"Las herramientas digitales de Luis han revolucionado cómo veo los negocios. Es el único que combina tecnología real con resultados comprobados."</p>
            </div>

            <div className="bg-[#1A1D23] rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-[#C5A059]/30 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#94A3B8] to-[#C5A059] rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-sm sm:text-base text-white">Ing. Carlos Mendoza</div>
                  <div className="text-xs sm:text-sm text-[#64748B]">VP Tecnología, Banco de Bogotá</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#A3A3A3]">"Lo que más me impresiona es su enfoque empresarial. Nada de jerga tradicional, solo estrategia y tecnología de vanguardia."</p>
            </div>

            <div className="bg-[#1A1D23] rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-[#C5A059]/30 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-sm sm:text-base text-white">Pastora María Elena</div>
                  <div className="text-xs sm:text-sm text-[#64748B]">Líder Comunitaria, 15K seguidores</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#A3A3A3]">"Por fin alguien que entiende que queremos construir algo serio, no esquemas. Su plataforma es el futuro de los negocios colaborativos."</p>
            </div>
          </div>

          {/* Company Logos - RESPONSIVE */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-60">
            <div className="text-base sm:text-2xl font-bold text-[#64748B]">ECOPETROL</div>
            <div className="text-base sm:text-2xl font-bold text-[#64748B]">BANCOLOMBIA</div>
            <div className="text-base sm:text-2xl font-bold text-[#64748B]">GANO EXCEL</div>
            <div className="text-base sm:text-2xl font-bold text-[#64748B]">VERCEL</div>
          </div>
        </div>
      </section>

      {/* The Ecosystem Section - BIMETALLIC v3.0 */}
      <section className="py-16 sm:py-20 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">El Ecosistema Digital que Cambia Todo</h2>
            <p className="text-lg sm:text-xl text-[#A3A3A3] max-w-3xl mx-auto">
              No es solo un "negocio" - es una arquitectura completa de herramientas, formación y comunidad que permite crear activos empresariales reales en América.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5A059]/20 p-2 sm:p-3 rounded-full flex-shrink-0 text-[#C5A059]">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Herramientas Tecnológicas Propias</h3>
                  <p className="text-sm sm:text-base text-[#A3A3A3]">Desarrolladas con Next.js, IA y automatización. No dependes de materiales corporativos genéricos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#94A3B8]/20 p-2 sm:p-3 rounded-full flex-shrink-0 text-[#94A3B8]">
                  <Users className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Academia de Formación Empresarial</h3>
                  <p className="text-sm sm:text-base text-[#A3A3A3]">Desde fundamentos hasta arquitectura avanzada de ecosistemas. Certificaciones reconocidas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/20 p-2 sm:p-3 rounded-full flex-shrink-0 text-emerald-500">
                  <Globe className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Red Continental de Socios</h3>
                  <p className="text-sm sm:text-base text-[#A3A3A3]">16 países, mentores regionales, eventos virtuales semanales. Conexiones que importan.</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-[#1A1D23] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#C5A059]/30 transition-colors">
                <div className="text-center mb-6">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent">
                    app.creatuactivo.com
                  </div>
                  <p className="text-[#64748B] mt-2 text-sm sm:text-base">Tecnología 2026 para construir activos</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between bg-[#15171C] rounded-lg p-3 border border-white/5">
                    <span className="text-sm text-[#E5E5E5]">IA Conversacional (NEXUS)</span>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between bg-[#15171C] rounded-lg p-3 border border-white/5">
                    <span className="text-sm text-[#E5E5E5]">Automatización con Next.js</span>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between bg-[#15171C] rounded-lg p-3 border border-white/5">
                    <span className="text-sm text-[#E5E5E5]">Sistema de Tracking Avanzado</span>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between bg-[#15171C] rounded-lg p-3 border border-white/5">
                    <span className="text-sm text-[#E5E5E5]">Red Continental de Socios</span>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between bg-[#15171C] rounded-lg p-3 border border-white/5">
                    <span className="text-sm text-[#E5E5E5]">Analytics en Tiempo Real</span>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>

                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full mt-6 bg-[#C5A059] text-[#0F1115] py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:shadow-[0_0_30px_-5px_rgba(197,160,89,0.5)] transition-all text-sm sm:text-base"
                >
                  Conocer la Plataforma
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección REACTIVACIÓN - BIMETALLIC v3.0 */}
      <section className="py-16 sm:py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-[#C5A059]/10 rounded-full px-4 py-2 text-sm border border-[#C5A059]/30 text-[#C5A059] mb-6">
              Para quienes ya conocen el Network Marketing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              ¿Dejaste el Network Marketing Porque Era Complicado?
            </h2>
            <p className="text-lg sm:text-xl text-[#A3A3A3] max-w-3xl mx-auto leading-relaxed">
              Miles de personas conocen esta industria y saben que funciona.
              Pero sin herramientas, era complicado. <strong className="text-[#E5E5E5]">Ahora puedes desarrollar tu negocio con tecnología que hace sencillo lo complejo</strong>, como Nequi hizo fácil lo que antes requería ir al banco.
            </p>
          </div>

          {/* Analogías Antes/Ahora */}
          <div className="bg-[#1A1D23] rounded-3xl p-8 sm:p-12 max-w-6xl mx-auto mb-12 border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[#C5A059]">
              La Tecnología Ya Transformó Tu Vida Cotidiana
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#15171C] rounded-xl p-6 border border-white/5">
                <div className="text-sm text-[#64748B] mb-2">Antes: Filas en el banco</div>
                <div className="text-lg font-bold text-white mb-2">Ahora: Nequi</div>
                <div className="text-sm text-[#A3A3A3]">Transacciones instantáneas</div>
              </div>

              <div className="bg-[#15171C] rounded-xl p-6 border border-white/5">
                <div className="text-sm text-[#64748B] mb-2">Antes: Carta postal</div>
                <div className="text-lg font-bold text-white mb-2">Ahora: WhatsApp</div>
                <div className="text-sm text-[#A3A3A3]">Comunicación instantánea</div>
              </div>

              <div className="bg-[#15171C] rounded-xl p-6 border border-white/5">
                <div className="text-sm text-[#64748B] mb-2">Antes: Comprar CDs</div>
                <div className="text-lg font-bold text-white mb-2">Ahora: Spotify</div>
                <div className="text-sm text-[#A3A3A3]">Música ilimitada</div>
              </div>

              <div className="bg-[#15171C] rounded-xl p-6 border border-white/5">
                <div className="text-sm text-[#64748B] mb-2">Antes: Llamar taxi</div>
                <div className="text-lg font-bold text-white mb-2">Ahora: Uber/Didi</div>
                <div className="text-sm text-[#A3A3A3]">Movilidad inteligente</div>
              </div>

              <div className="bg-[#15171C] rounded-xl p-6 border border-white/5">
                <div className="text-sm text-[#64748B] mb-2">Antes: Ir al supermercado</div>
                <div className="text-lg font-bold text-white mb-2">Ahora: Rappi</div>
                <div className="text-sm text-[#A3A3A3]">Domicilios en minutos</div>
              </div>

              <div className="bg-[#C5A059]/10 rounded-xl p-6 border-2 border-[#C5A059]/50">
                <div className="text-sm text-[#C5A059] mb-2 font-semibold">Antes: Network Marketing Manual</div>
                <div className="text-lg font-bold text-white mb-2">Ahora: CreaTuActivo</div>
                <div className="text-sm text-[#D4AF37]">App que hace sencillo lograr tus sueños</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-[#A3A3A3] mb-6 leading-relaxed max-w-3xl mx-auto">
                Todas estas apps te hicieron la vida más fácil. <strong className="text-[#C5A059]">CreaTuActivo hace lo mismo con tu negocio de Network Marketing:</strong> tecnología que facilita lo complejo.
              </p>
            </div>
          </div>

          {/* CTA Reactivación */}
          <div className="bg-[#1A1D23] border border-[#C5A059]/30 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Construye Tu Empresa de Distribución con Tecnología que Hace Sencillo lo Complejo
            </h3>
            <p className="text-lg text-[#A3A3A3] mb-8 leading-relaxed">
              Distribuye productos Gano Excel y Gano iTouch con un sistema profesional que facilita cada proceso.
              <strong className="text-[#C5A059]"> App CreaTuActivo + IA NEXUS + CRM automatizado.</strong>
              Sistema probado en 16 países para construir ingresos residuales escalables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fundadores"
                className="bg-[#C5A059] text-[#0F1115] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D4AF37] hover:shadow-[0_0_30px_-5px_rgba(197,160,89,0.5)] transition-all inline-flex items-center gap-2 justify-center"
              >
                <Zap className="w-5 h-5" /> Ver Programa con Tecnología
              </Link>
              <button
                onClick={() => setContactModalOpen(true)}
                className="border border-[#94A3B8]/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#94A3B8]/10 hover:border-[#C5A059]/50 transition-all text-[#E5E5E5]"
              >
                Hablar con Luis Cabrejo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 4M Section - BIMETALLIC v3.0 */}
      <section className="py-16 sm:py-20 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">La Visión: 4 Millones de Vidas Transformadas</h2>
            <p className="text-lg sm:text-xl text-[#A3A3A3] max-w-4xl mx-auto leading-relaxed">
              No es solo un número. Es padres de familia recuperando su tiempo, profesionales construyendo legados,
              y una generación completa reescribiendo las reglas del bienestar económico en América Latina.
              <Link href="/fundadores" className="text-[#C5A059] hover:text-[#D4AF37] hover:underline ml-2 font-semibold">
                Únete al Programa Fundadores 2026 →
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-[#1A1D23] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#C5A059]/30 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-[#C5A059] mb-4">2025-2027</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">Fundación</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">100,000 profesionales usando las herramientas. Expansión a los 16 países. Primeros casos de éxito documentados.</p>
            </div>

            <div className="bg-[#1A1D23] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#C5A059]/30 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-[#C5A059] mb-4">2027-2029</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">Escalamiento</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">1,000,000 de usuarios activos. Inteligencia artificial avanzada. Red de mentores en cada ciudad principal.</p>
            </div>

            <div className="bg-[#1A1D23] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#C5A059]/30 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-500 mb-4">2029-2032</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">Impacto Masivo</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">4,000,000 de beneficiarios. Gano Excel #1 mundial. Un nuevo modelo de bienestar económico en América.</p>
            </div>
          </div>

          <div className="bg-[#1A1D23] rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">¿Te Unes a Esta Visión?</h3>
            <p className="text-sm sm:text-base text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
              Si eres un profesional que entiende que el futuro son los ecosistemas colaborativos,
              si buscas construir algo más grande que un "trabajo", si quieres ser parte de la transformación
              económica más importante de América Latina...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/fundadores"
                  className="bg-[#C5A059] text-[#0F1115] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:shadow-[0_0_30px_-5px_rgba(197,160,89,0.5)] transition-all"
                >
                  Ver Programa Fundadores
                </Link>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-[#94A3B8]/20 text-[#E5E5E5] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#94A3B8]/30 transition-all"
                >
                  Conoce la Oportunidad
                </button>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 hover:border-[#C5A059]/30 transition-all text-[#E5E5E5]"
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

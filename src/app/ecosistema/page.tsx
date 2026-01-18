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
import { ArrowLeft, Monitor, Smartphone, Users, BarChart3, Zap, Globe, Code, Brain, PlayCircle, ExternalLink, Check, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function EcosistemaPage() {
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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
              El
              <span className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent"> Ecosistema </span>
              que Cambia Todo
            </h1>
            <p className="text-lg sm:text-xl text-[#A3A3A3] max-w-4xl mx-auto leading-relaxed">
              No es solo un "negocio" - es una arquitectura completa de herramientas digitales, formación empresarial y comunidad que permite crear activos empresariales reales sin la fricción tradicional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 border border-[#C5A059]/30 text-center">
              <Code className="w-10 sm:w-12 h-10 sm:h-12 text-[#C5A059] mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Tecnología Avanzada</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">Next.js, IA, automatización. Herramientas que compiten con grandes corporaciones.</p>
            </div>

            <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 border border-[#94A3B8]/30 text-center">
              <Users className="w-10 sm:w-12 h-10 sm:h-12 text-[#94A3B8] mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Comunidad Continental</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">16 países, mentores regionales, eventos semanales. Conexiones que importan.</p>
            </div>

            <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 border border-emerald-500/30 text-center">
              <BarChart3 className="w-10 sm:w-12 h-10 sm:h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Resultados Comprobados</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3]">11 años como Diamante, +2,847 personas impactadas, familia empresarial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Central - BIMETALLIC */}
      <section className="py-16 sm:py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-gradient-to-r from-[#C5A059]/20 to-[#94A3B8]/20 rounded-full px-3 sm:px-4 py-2 text-sm border border-[#C5A059]/30 mb-6">
                🏗️ Centro de Comando Empresarial
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <a href="https://app.creatuactivo.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent hover:underline">
                  app.creatuactivo.com
                </a>
              </h2>

              <p className="text-lg sm:text-xl text-[#A3A3A3] mb-6 sm:mb-8 leading-relaxed">
                Tu hub personal para construir activos empresariales. Dashboard personalizado, herramientas de marketing, academia digital y red de mentores - todo en una plataforma integrada.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-[#A3A3A3]">Dashboard personal con métricas en tiempo real</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-[#A3A3A3]">Herramientas de marketing automatizadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-[#A3A3A3]">Academia con certificaciones empresariales</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-[#A3A3A3]">Red de mentores en 16 países</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-[#A3A3A3]">Soporte IA 24/7 personalizado</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-[#C5A059] text-[#0F1115] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#D4AF37] transition-all flex items-center gap-2 group justify-center"
                >
                  Acceder al Portal <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://app.creatuactivo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#94A3B8]/30 text-[#E5E5E5] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 justify-center"
                >
                  <PlayCircle className="w-4 h-4" /> Ver Demo
                </a>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-[#1A1D23] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 relative">
                {/* Mockup del Portal - RESPONSIVE */}
                <div className="bg-[#0F1115] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-500 rounded-full"></div>
                    <div className="ml-2 sm:ml-4 text-xs text-[#64748B]">app.creatuactivo.com</div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-gradient-to-r from-[#C5A059]/20 to-[#94A3B8]/20 rounded-lg p-3 sm:p-4 border border-[#C5A059]/30">
                      <div className="text-xs sm:text-sm font-semibold text-[#C5A059] mb-2">Dashboard Personal</div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="bg-[#15171C] rounded p-2 text-center">
                          <div className="text-sm sm:text-lg font-bold text-emerald-400">847</div>
                          <div className="text-xs text-[#64748B]">Contactos</div>
                        </div>
                        <div className="bg-[#15171C] rounded p-2 text-center">
                          <div className="text-sm sm:text-lg font-bold text-[#94A3B8]">23</div>
                          <div className="text-xs text-[#64748B]">Activos</div>
                        </div>
                        <div className="bg-[#15171C] rounded p-2 text-center">
                          <div className="text-sm sm:text-lg font-bold text-[#C5A059]">16</div>
                          <div className="text-xs text-[#64748B]">Países</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-[#15171C] rounded-lg p-2 sm:p-3 flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-[#A3A3A3]">Catálogo Personalizado</span>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                      <div className="bg-[#15171C] rounded-lg p-2 sm:p-3 flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-[#A3A3A3]">Presentación Empresarial</span>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                      <div className="bg-[#15171C] rounded-lg p-2 sm:p-3 flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-[#A3A3A3]">Academia Digital</span>
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      </div>
                      <div className="bg-[#15171C] rounded-lg p-2 sm:p-3 flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-[#A3A3A3]">Red de Mentores</span>
                        <div className="w-2 h-2 bg-[#94A3B8] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements - BIMETALLIC */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full p-2 sm:p-3">
                  <Zap className="w-4 sm:w-6 h-4 sm:h-6 text-[#0F1115]" />
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-[#94A3B8] rounded-full p-2 sm:p-3">
                  <Brain className="w-4 sm:w-6 h-4 sm:h-6 text-[#0F1115]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas del Ecosistema - BIMETALLIC */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Herramientas Integradas del Ecosistema</h2>
            <p className="text-lg sm:text-xl text-[#64748B] max-w-3xl mx-auto">
              Cada herramienta trabaja en conjunto para facilitar tu crecimiento empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Catálogo Personalizado - Gold accent */}
            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 hover:border-[#C5A059]/50 transition-all group">
              <div className="bg-[#C5A059] p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-5 sm:w-6 h-5 sm:h-6 text-[#0F1115]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                <a href="https://creatuactivo.com/sistema/productos" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  Catálogo Productos
                </a>
              </h3>
              <p className="text-sm sm:text-base text-[#A3A3A3] mb-4 sm:mb-6">Sistema de catálogos personalizados y escalables. Cada miembro tiene su propia tienda digital optimizada.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#C5A059]" />
                  <span>Personalización automática</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#C5A059]" />
                  <span>Escalabilidad continental</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#C5A059]" />
                  <span>Analytics integrados</span>
                </div>
              </div>
              <a
                href="https://creatuactivo.com/sistema/productos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#C5A059]/20 border border-[#C5A059]/50 px-4 py-3 rounded-full font-semibold hover:bg-[#C5A059]/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Ver Catálogo <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </a>
            </div>

            {/* Presentación Empresarial - Titanium accent */}
            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-[#94A3B8]/30 hover:border-[#94A3B8]/50 transition-all group">
              <div className="bg-[#94A3B8] p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#0F1115]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                <a href="https://creatuactivo.com/presentacion-empresarial" target="_blank" rel="noopener noreferrer" className="hover:text-[#94A3B8] transition-colors">
                  Presentación Empresarial
                </a>
              </h3>
              <p className="text-sm sm:text-base text-[#A3A3A3] mb-4 sm:mb-6">Presentación profesional del modelo empresarial. Sin jerga MLM tradicional, enfoque corporativo.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#94A3B8]" />
                  <span>Lenguaje empresarial profesional</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#94A3B8]" />
                  <span>Casos de éxito documentados</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#94A3B8]" />
                  <span>Calculadoras de potencial</span>
                </div>
              </div>
              <a
                href="https://creatuactivo.com/presentacion-empresarial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#94A3B8]/20 border border-[#94A3B8]/50 px-4 py-3 rounded-full font-semibold hover:bg-[#94A3B8]/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Ver Presentación <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </a>
            </div>

            {/* E-commerce - Emerald accent */}
            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all group">
              <div className="bg-emerald-500 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  ganocafe.online
                </a>
              </h3>
              <p className="text-sm sm:text-base text-[#A3A3A3] mb-4 sm:mb-6">E-commerce funcional con Google Ads activo. Tu tienda personal optimizada para conversión.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400" />
                  <span>Google Ads integrado</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400" />
                  <span>Optimización de conversión</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400" />
                  <span>Pagos internacionales</span>
                </div>
              </div>
              <a
                href="https://ganocafe.online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500/20 border border-emerald-500/50 px-4 py-3 rounded-full font-semibold hover:bg-emerald-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Visitar Tienda <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </a>
            </div>

            {/* Academia Digital - Orange accent */}
            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all group">
              <div className="bg-orange-500 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Academia Digital</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3] mb-4 sm:mb-6">Formación empresarial desde fundamentos hasta arquitectura avanzada de ecosistemas.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400" />
                  <span>Certificaciones reconocidas</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400" />
                  <span>Masterclasses con Luis</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400" />
                  <span>Biblioteca de casos de éxito</span>
                </div>
              </div>
              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full bg-orange-500/20 border border-orange-500/50 px-4 py-3 rounded-full font-semibold hover:bg-orange-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Acceder Academia <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
            </div>

            {/* Red de Mentores - Pink accent */}
            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all group">
              <div className="bg-pink-500 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Red de Mentores</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3] mb-4 sm:mb-6">Mentores regionales en 16 países. Conexiones reales que aceleran tu crecimiento.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-pink-400" />
                  <span>Mentores en cada país</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-pink-400" />
                  <span>Eventos virtuales semanales</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-pink-400" />
                  <span>Grupos de mentoría</span>
                </div>
              </div>
              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full bg-pink-500/20 border border-pink-500/50 px-4 py-3 rounded-full font-semibold hover:bg-pink-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Conocer Red <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
            </div>

            {/* IA & Automatización - Gold/Titanium accent */}
            <div className="bg-[#1A1D23]/50 rounded-2xl p-6 sm:p-8 border border-[#C5A059]/30 hover:border-[#C5A059]/50 transition-all group">
              <div className="bg-gradient-to-r from-[#C5A059] to-[#94A3B8] p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-[#0F1115]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">IA & Automatización</h3>
              <p className="text-sm sm:text-base text-[#A3A3A3] mb-4 sm:mb-6">Inteligencia artificial integrada para optimización automática y soporte 24/7.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#C5A059]" />
                  <span>Soporte IA 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#C5A059]" />
                  <span>Optimización automática</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#C5A059]" />
                  <span>Recomendaciones personalizadas</span>
                </div>
              </div>
              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full bg-[#C5A059]/20 border border-[#C5A059]/50 px-4 py-3 rounded-full font-semibold hover:bg-[#C5A059]/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Ver IA en Acción <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack - BIMETALLIC */}
      <section className="py-16 sm:py-20 bg-[#15171C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Tecnología de Vanguardia</h2>
            <p className="text-lg sm:text-xl text-[#64748B]">
              El mismo stack que usan las empresas más innovadoras del mundo
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 text-center border border-white/10 hover:border-[#C5A059]/50 transition-all">
              <div className="text-3xl sm:text-4xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Next.js 14</h3>
              <p className="text-xs sm:text-sm text-[#64748B]">Framework React de última generación para máximo rendimiento</p>
            </div>

            <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 text-center border border-white/10 hover:border-[#94A3B8]/50 transition-all">
              <div className="text-3xl sm:text-4xl mb-4">🚀</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Vercel</h3>
              <p className="text-xs sm:text-sm text-[#64748B]">Despliegue global instantáneo y optimización automática</p>
            </div>

            <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 text-center border border-white/10 hover:border-emerald-500/50 transition-all">
              <div className="text-3xl sm:text-4xl mb-4">🧠</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">IA Integrada</h3>
              <p className="text-xs sm:text-sm text-[#64748B]">Inteligencia artificial para personalización y soporte</p>
            </div>

            <div className="bg-[#1A1D23]/50 rounded-2xl p-4 sm:p-6 text-center border border-white/10 hover:border-orange-500/50 transition-all">
              <div className="text-3xl sm:text-4xl mb-4">🔧</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Automatización</h3>
              <p className="text-xs sm:text-sm text-[#64748B]">Procesos automatizados que escalan sin fricción</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - BIMETALLIC */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-[#1A1D23]/70 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Listo Para Acceder al Ecosistema?</h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
              Si eres un profesional que entiende que el futuro son los ecosistemas digitales,
              que buscas herramientas de clase mundial para construir tu activo empresarial...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setContactModalOpen(true)}
                className="bg-[#C5A059] text-[#0F1115] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#D4AF37] transition-all flex items-center gap-2 justify-center"
              >
                Acceder al Portal <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/vision" className="border border-[#94A3B8]/30 text-[#E5E5E5] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Ver la Visión 4 Millones
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#64748B]">
              <div className="flex items-center gap-2">
                <Globe className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>16 Países Activos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>+2,847 Usuarios</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3 sm:w-4 h-3 sm:h-4" />
                <span>24/7 Soporte IA</span>
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
        formType="ecosistema"
      />
    </div>
  );
}

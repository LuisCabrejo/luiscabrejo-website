import React from 'react';
import { ArrowLeft, Monitor, Smartphone, Users, BarChart3, Zap, Globe, Code, Brain, PlayCircle, ExternalLink, Check, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function EcosistemaPage() {
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
              <Link href="/ecosistema" className="text-blue-400">Ecosistema</Link>
              <Link href="/vision" className="hover:text-blue-400 transition-colors">Visión 4M</Link>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transition-all text-sm sm:text-base">
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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
              El
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Ecosistema </span>
              que Cambia Todo
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              No es solo un "negocio" - es una arquitectura completa de herramientas digitales, formación empresarial y comunidad que permite crear activos empresariales reales sin la fricción tradicional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-blue-900/20 rounded-2xl p-4 sm:p-6 border border-blue-500/30 text-center">
              <Code className="w-10 sm:w-12 h-10 sm:h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Tecnología Avanzada</h3>
              <p className="text-sm sm:text-base text-gray-300">Next.js, IA, automatización. Herramientas que compiten con grandes corporaciones.</p>
            </div>

            <div className="bg-purple-900/20 rounded-2xl p-4 sm:p-6 border border-purple-500/30 text-center">
              <Users className="w-10 sm:w-12 h-10 sm:h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Comunidad Continental</h3>
              <p className="text-sm sm:text-base text-gray-300">16 países, mentores regionales, eventos semanales. Conexiones que importan.</p>
            </div>

            <div className="bg-green-900/20 rounded-2xl p-4 sm:p-6 border border-green-500/30 text-center">
              <BarChart3 className="w-10 sm:w-12 h-10 sm:h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Resultados Comprobados</h3>
              <p className="text-sm sm:text-base text-gray-300">11 años como Diamante, +2,847 personas impactadas, familia empresarial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Central - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-3 sm:px-4 py-2 text-sm border border-blue-500/30 mb-6">
                🏗️ Centro de Comando Empresarial
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  portal.4millones.com
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Tu hub personal para construir activos empresariales. Dashboard personalizado, herramientas de marketing, academia digital y red de mentores - todo en una plataforma integrada.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">Dashboard personal con métricas en tiempo real</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">Herramientas de marketing automatizadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">Academia con certificaciones empresariales</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">Red de mentores en 16 países</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">Soporte IA 24/7 personalizado</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2 group justify-center">
                  Acceder al Portal <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
                  <PlayCircle className="w-4 h-4" /> Ver Demo
                </button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700 relative">
                {/* Mockup del Portal - RESPONSIVE */}
                <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-600">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-2 sm:ml-4 text-xs text-gray-400">portal.4millones.com</div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3 sm:p-4 border border-blue-500/30">
                      <div className="text-xs sm:text-sm font-semibold text-blue-300 mb-2">Dashboard Personal</div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="bg-gray-800 rounded p-2 text-center">
                          <div className="text-sm sm:text-lg font-bold text-green-400">847</div>
                          <div className="text-xs text-gray-400">Contactos</div>
                        </div>
                        <div className="bg-gray-800 rounded p-2 text-center">
                          <div className="text-sm sm:text-lg font-bold text-blue-400">23</div>
                          <div className="text-xs text-gray-400">Activos</div>
                        </div>
                        <div className="bg-gray-800 rounded p-2 text-center">
                          <div className="text-sm sm:text-lg font-bold text-purple-400">16</div>
                          <div className="text-xs text-gray-400">Países</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-300">Catálogo Personalizado</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-300">Presentación Empresarial</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-300">Academia Digital</span>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-2 sm:p-3 flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-300">Red de Mentores</span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements - RESPONSIVE */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-2 sm:p-3">
                  <Zap className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-2 sm:p-3">
                  <Brain className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas del Ecosistema - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Herramientas Integradas del Ecosistema</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Cada herramienta trabaja en conjunto para facilitar tu crecimiento empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Catálogo Personalizado */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-6 sm:p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all group">
              <div className="bg-blue-500 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">catalogo.4millones.com</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Sistema de catálogos personalizados y escalables. Cada miembro tiene su propia tienda digital optimizada.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400" />
                  <span>Personalización automática</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400" />
                  <span>Escalabilidad continental</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400" />
                  <span>Analytics integrados</span>
                </div>
              </div>
              <button className="w-full bg-blue-500/20 border border-blue-500/50 px-4 py-3 rounded-full font-semibold hover:bg-blue-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                Ver Demo <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
            </div>

            {/* Presentación Empresarial */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-2xl p-6 sm:p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all group">
              <div className="bg-purple-500 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">oportunidad.4millones.com</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Presentación profesional del modelo empresarial. Sin jerga MLM tradicional, enfoque corporativo.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400" />
                  <span>Lenguaje empresarial profesional</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400" />
                  <span>Casos de éxito documentados</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400" />
                  <span>Calculadoras de potencial</span>
                </div>
              </div>
              <button className="w-full bg-purple-500/20 border border-purple-500/50 px-4 py-3 rounded-full font-semibold hover:bg-purple-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                Ver Presentación <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
            </div>

            {/* E-commerce */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-2xl p-6 sm:p-8 border border-green-500/30 hover:border-green-400/50 transition-all group">
              <div className="bg-green-500 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">ganocafe.online</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">E-commerce funcional con Google Ads activo. Tu tienda personal optimizada para conversión.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                  <span>Google Ads integrado</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                  <span>Optimización de conversión</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                  <span>Pagos internacionales</span>
                </div>
              </div>
              <button className="w-full bg-green-500/20 border border-green-500/50 px-4 py-3 rounded-full font-semibold hover:bg-green-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                Visitar Tienda <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
            </div>

            {/* Academia Digital */}
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 rounded-2xl p-6 sm:p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all group">
              <div className="bg-orange-500 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Academia Digital</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Formación empresarial desde fundamentos hasta arquitectura avanzada de ecosistemas.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400" />
                  <span>Certificaciones reconocidas</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400" />
                  <span>Masterclasses con Luis</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400" />
                  <span>Biblioteca de casos de éxito</span>
                </div>
              </div>
              <button className="w-full bg-orange-500/20 border border-orange-500/50 px-4 py-3 rounded-full font-semibold hover:bg-orange-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                Acceder Academia <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
            </div>

            {/* Red de Mentores */}
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 rounded-2xl p-6 sm:p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all group">
              <div className="bg-pink-500 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Red de Mentores</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Mentores regionales en 16 países. Conexiones reales que aceleran tu crecimiento.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-pink-400" />
                  <span>Mentores en cada país</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-pink-400" />
                  <span>Eventos virtuales semanales</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-pink-400" />
                  <span>Grupos de mentoría</span>
                </div>
              </div>
              <button className="w-full bg-pink-500/20 border border-pink-500/50 px-4 py-3 rounded-full font-semibold hover:bg-pink-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                Conocer Red <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
            </div>

            {/* IA & Automatización */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 rounded-2xl p-6 sm:p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all group">
              <div className="bg-indigo-500 p-2 sm:p-3 rounded-full w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">IA & Automatización</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Inteligencia artificial integrada para optimización automática y soporte 24/7.</p>
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-400" />
                  <span>Soporte IA 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-400" />
                  <span>Optimización automática</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-400" />
                  <span>Recomendaciones personalizadas</span>
                </div>
              </div>
              <button className="w-full bg-indigo-500/20 border border-indigo-500/50 px-4 py-3 rounded-full font-semibold hover:bg-indigo-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                Ver IA en Acción <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Tecnología de Vanguardia</h2>
            <p className="text-lg sm:text-xl text-gray-400">
              El mismo stack que usan las empresas más innovadoras del mundo
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-all">
              <div className="text-3xl sm:text-4xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Next.js 14</h3>
              <p className="text-xs sm:text-sm text-gray-400">Framework React de última generación para máximo rendimiento</p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 text-center border border-gray-700 hover:border-purple-500/50 transition-all">
              <div className="text-3xl sm:text-4xl mb-4">🚀</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Vercel</h3>
              <p className="text-xs sm:text-sm text-gray-400">Despliegue global instantáneo y optimización automática</p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 text-center border border-gray-700 hover:border-green-500/50 transition-all">
              <div className="text-3xl sm:text-4xl mb-4">🧠</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">IA Integrada</h3>
              <p className="text-xs sm:text-sm text-gray-400">Inteligencia artificial para personalización y soporte</p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 text-center border border-gray-700 hover:border-orange-500/50 transition-all">
              <div className="text-3xl sm:text-4xl mb-4">🔧</div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Automatización</h3>
              <p className="text-xs sm:text-sm text-gray-400">Procesos automatizados que escalan sin fricción</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-r from-black/50 to-gray-900/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Listo Para Acceder al Ecosistema?</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              Si eres un profesional que entiende que el futuro son los ecosistemas digitales,
              que buscas herramientas de clase mundial para construir tu activo empresarial...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2 justify-center">
                Acceder al Portal <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/vision" className="border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Ver la Visión 4 Millones
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
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

      {/* Footer - IMPROVED MOBILE */}
      <footer className="py-8 sm:py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 inline-block">
            Luis Cabrejo
          </Link>
          <p className="text-gray-400 text-xs sm:text-sm">
            Arquitecto de Ecosistemas Digitales. Transformando vidas desde 2013.
          </p>
        </div>
      </footer>
    </div>
  );
}

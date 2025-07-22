'use client';

import React from 'react';
import { ChevronDown, Play, Users, Globe, Zap, ArrowRight, Star, Check } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Luis Cabrejo
            </div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#historia" className="hover:text-blue-400 transition-colors">Mi Historia</a>
              <a href="#ecosistema" className="hover:text-blue-400 transition-colors">Ecosistema</a>
              <a href="#herramientas" className="hover:text-blue-400 transition-colors">Herramientas</a>
              <a href="#vision" className="hover:text-blue-400 transition-colors">Visión 4M</a>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg transition-all">
              Conectar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 text-sm border border-blue-500/30">
              ✨ Arquitecto de Ecosistemas Digitales
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Construyendo
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Activos Empresariales
              </span>
              en América
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              En 11 años transformé mi vida de la quiebra total a construir un activo empresarial que genera ingresos en todo el continente. Ahora ayudo a profesionales ambiciosos a crear sus propios ecosistemas digitales de negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2 group">
                Ver Mi Historia <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                <Play className="w-5 h-5" /> Conoce el Ecosistema
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">11</div>
                <div className="text-sm text-gray-400">Años Diamante</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">16</div>
                <div className="text-sm text-gray-400">Países Activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">4M</div>
                <div className="text-sm text-gray-400">Meta de Impacto</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-video bg-gray-800 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50"></div>
                <Play className="w-16 h-16 text-white relative z-10 cursor-pointer hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 left-4 text-sm bg-black/50 px-3 py-1 rounded-full">
                  &quot;De la quiebra a 4 millones&quot; - 3:42
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  &quot;Si vestía mal, tenía problemas dentales y vivía en estrato cero... pero aún así las personas me seguían, imagina lo que podemos lograr ahora con herramientas de clase mundial.&quot;
                </p>
                <div className="flex justify-center">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-gray-800"></div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-gray-400">+2,847 personas transformadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Reconocido por Líderes de la Industria</h2>
            <p className="text-gray-400">Profesionales de alto nivel que han validado el ecosistema</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Dr. Patricia González</div>
                  <div className="text-sm text-gray-400">Directora Médica, Ecopetrol</div>
                </div>
              </div>
              <p className="text-gray-300">&quot;Las herramientas digitales de Luis han revolucionado cómo veo los negocios. Es el único que combina tecnología real con resultados comprobados.&quot;</p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Ing. Carlos Mendoza</div>
                  <div className="text-sm text-gray-400">VP Tecnología, Banco de Bogotá</div>
                </div>
              </div>
              <p className="text-gray-300">&quot;Lo que más me impresiona es su enfoque empresarial. Nada de jerga tradicional, solo estrategia y tecnología de vanguardia.&quot;</p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Pastora María Elena</div>
                  <div className="text-sm text-gray-400">Líder Comunitaria, 15K seguidores</div>
                </div>
              </div>
              <p className="text-gray-300">&quot;Por fin alguien que entiende que queremos construir algo serio, no esquemas. Su plataforma es el futuro de los negocios colaborativos.&quot;</p>
            </div>
          </div>

          {/* Company Logos */}
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-500">ECOPETROL</div>
            <div className="text-2xl font-bold text-gray-500">BANCOLOMBIA</div>
            <div className="text-2xl font-bold text-gray-500">GANO EXCEL</div>
            <div className="text-2xl font-bold text-gray-500">VERCEL</div>
          </div>
        </div>
      </section>

      {/* The Ecosystem Section */}
      <section id="ecosistema" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">El Ecosistema Digital que Cambia Todo</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No es solo un &quot;negocio&quot; - es una arquitectura completa de herramientas, formación y comunidad que permite crear activos empresariales reales en América.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Herramientas Tecnológicas Propias</h3>
                  <p className="text-gray-400">Desarrolladas con Next.js, IA y automatización. No dependes de materiales corporativos genéricos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 p-3 rounded-full">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Academia de Formación Empresarial</h3>
                  <p className="text-gray-400">Desde fundamentos hasta arquitectura avanzada de ecosistemas. Certificaciones reconocidas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Red Continental de Socios</h3>
                  <p className="text-gray-400">16 países, mentores regionales, eventos virtuales semanales. Conexiones que importan.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    portal.4millones.com
                  </div>
                  <p className="text-gray-400 mt-2">Tu centro de comando empresarial</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">Dashboard Personal</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">Herramientas de Marketing</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">Academia Digital</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">Red de Mentores</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <span className="text-sm">Soporte IA 24/7</span>
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                  Acceder al Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 4M Section */}
      <section id="vision" className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6">La Visión: 4 Millones de Vidas Transformadas</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              No es solo un número. Es padres de familia recuperando su tiempo, profesionales construyendo legados,
              y una generación completa reescribiendo las reglas del bienestar económico en América Latina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/30 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-4">2025-2027</div>
              <h3 className="text-xl font-semibold mb-4">Fundación</h3>
              <p className="text-gray-400">100,000 profesionales usando las herramientas. Expansión a los 16 países. Primeros casos de éxito documentados.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-4">2027-2029</div>
              <h3 className="text-xl font-semibold mb-4">Escalamiento</h3>
              <p className="text-gray-400">1,000,000 de usuarios activos. Inteligencia artificial avanzada. Red de mentores en cada ciudad principal.</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-green-400 mb-4">2029-2032</div>
              <h3 className="text-xl font-semibold mb-4">Impacto Masivo</h3>
              <p className="text-gray-400">4,000,000 de beneficiarios. Gano Excel #1 mundial. Un nuevo modelo de bienestar económico en América.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black/50 to-gray-900/50 rounded-3xl p-12 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">¿Te Unes a Esta Visión?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Si eres un profesional que entiende que el futuro son los ecosistemas colaborativos,
              si buscas construir algo más grande que un &quot;trabajo&quot;, si quieres ser parte de la transformación
              económica más importante de América Latina...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all">
                Conoce la Oportunidad
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Agenda una Conversación
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Luis Cabrejo
              </div>
              <p className="text-gray-400 text-sm">
                Arquitecto de Ecosistemas Digitales. Transformando vidas desde 2013.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ecosistema</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>portal.4millones.com</div>
                <div>catalogo.4millones.com</div>
                <div>oportunidad.4millones.com</div>
                <div>ganocafe.online</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Conecta</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>LinkedIn</div>
                <div>Instagram</div>
                <div>Newsletter</div>
                <div>Discord</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Países Activos</h4>
              <div className="text-xs text-gray-400 leading-relaxed">
                México, Guatemala, El Salvador, Costa Rica, Honduras, Panamá, Colombia,
                Venezuela, Brasil, Ecuador, Perú, Bolivia, Chile, Argentina, Uruguay, Estados Unidos
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Luis Cabrejo. Construyendo el futuro del bienestar económico en América.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

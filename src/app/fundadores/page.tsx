// /src/app/fundadores/page.tsx - Página Fundadores Enriquecida
// Actualizado: Nov 25, 2025 - Contenido ORIGINAL (no duplicado de CTA)

'use client';

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Users,
  Target,
  Sparkles,
  CheckCircle2,
  CheckCircle,
  MessageCircle,
  TrendingUp,
  Calendar,
  Award,
  ArrowRight
} from 'lucide-react';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function FundadoresPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Lógica del Contador - Cierre: 04 de enero 2026
  useEffect(() => {
    const targetDate = new Date('2026-01-04T23:59:59-05:00').getTime();
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

  // Estilo de tarjeta reutilizable
  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)'
  };

  return (
    <div className="bg-slate-900 text-gray-300 overflow-x-hidden min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Fondo decorativo con gradientes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-green-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navigation onContactClick={() => setContactModalOpen(true)} />

      <div className="container mx-auto px-4 pt-28 pb-12 md:pt-36 md:pb-20">
        {/* ========================================
            HERO SECTION
        ======================================== */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-600/20 border border-purple-500/30 rounded-full px-6 py-3 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-200">
              Para Inconformes Inteligentes
            </span>
          </div>
        </div>

        <header className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            El método tradicional <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">quedó obsoleto</span>.
          </h1>
          <div className="space-y-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            <p>11 años construyendo redes en Gano Excel me enseñaron una verdad incómoda.</p>
            <p className="text-white font-semibold text-2xl">La tecnología correcta multiplica resultados. La incorrecta los frena.</p>
          </div>
        </header>

        <main className="max-w-5xl mx-auto">
          {/* ========================================
              VIDEO PLACEHOLDER
          ======================================== */}
          <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden cursor-pointer group mb-8"
               style={cardStyle}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 p-6 rounded-full group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* ========================================
              CONTADOR + CTA PRINCIPAL
          ======================================== */}
          <div className="text-center mb-20">
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

          {/* ========================================
              SECCIÓN: MI APRENDIZAJE DE 11 AÑOS
          ======================================== */}
          <section className="mb-20">
            <div className="rounded-2xl p-8 lg:p-12" style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(12px)'
            }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
                Lo que aprendí en 11 años como Diamante
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Lo que funciona en Gano Excel */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                    <CheckCircle size={24} />
                    Lo que hace a Gano Excel único:
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Patente mundial de Leow Soon Seng desde 1995</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Binario que paga cada semana sin falta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>Producto consumible con recompra natural</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>30 años de trayectoria sin escándalos financieros</span>
                    </li>
                  </ul>
                </div>

                {/* Lo que me faltaba */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <Zap size={24} />
                    Lo que me faltaba para escalar:
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">✗</span>
                      <span>Una app que trabaje mientras yo descanso</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">✗</span>
                      <span>Inteligencia artificial que resuelva dudas por mí</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">✗</span>
                      <span>Sistema para identificar prospectos serios automáticamente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">✗</span>
                      <span>Herramientas digitales que mi equipo pueda usar sin capacitación</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-slate-700">
                <p className="text-2xl font-bold text-white mb-4">
                  Entonces construí CreaTuActivo.
                </p>
                <p className="text-lg text-slate-300">
                  La app que hubiera querido tener desde el día uno de mi carrera en Gano Excel.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================
              SECCIÓN: LA EVOLUCIÓN DEL NEGOCIO
          ======================================== */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                La evolución que transforma industrias
              </h2>
              <p className="text-xl text-slate-400">
                Cada década, una tecnología redefine cómo hacemos negocios.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl p-8" style={cardStyle}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-red-400 text-4xl">📼</div>
                  <div>
                    <p className="text-sm text-slate-500 line-through">Blockbuster cerró en 2010</p>
                    <p className="text-lg font-bold text-white">Netflix vale $150 billones</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">La conveniencia venció al modelo tradicional de renta.</p>
              </div>

              <div className="rounded-xl p-8" style={cardStyle}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-green-400 text-4xl">🚕</div>
                  <div>
                    <p className="text-sm text-slate-500 line-through">Taxis dominaron por 100 años</p>
                    <p className="text-lg font-bold text-white">Uber transformó la movilidad</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">Una app conectó conductores y pasajeros sin intermediarios.</p>
              </div>

              <div className="rounded-xl p-8" style={cardStyle}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-400 text-4xl">🏨</div>
                  <div>
                    <p className="text-sm text-slate-500 line-through">Hoteles eran la única opción</p>
                    <p className="text-lg font-bold text-white">Airbnb creó un nuevo mercado</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">Cualquier persona puede monetizar su espacio con tecnología.</p>
              </div>

              <div className="rounded-xl p-8" style={cardStyle}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-yellow-400 text-4xl">💼</div>
                  <div>
                    <p className="text-sm text-slate-500 line-through">Network tradicional limitado</p>
                    <p className="text-lg font-bold text-white">CreaTuActivo potencia Gano Excel</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">El mismo producto extraordinario, ahora con tecnología de primer nivel.</p>
              </div>
            </div>

            {/* Analogía del Sistema */}
            <div className="rounded-2xl p-8 lg:p-12 text-center" style={{
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(30, 64, 175, 0.15) 100%)',
              border: '2px solid rgba(124, 58, 237, 0.3)'
            }}>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                Los primeros 9 años trabajé local en Colombia.<br />
                Los últimos 3 años, con tecnología digital, expandimos a 16 países.
              </h3>

              <p className="text-xl font-bold text-white mb-6">
                El trabajo digital logró en 3 años lo que 9 años presenciales no pudieron.
              </p>

              <div className="text-base lg:text-lg text-slate-300 space-y-4 leading-relaxed max-w-3xl mx-auto">
                <p>No fue suerte. Fue estrategia + tecnología + el producto correcto.</p>
                <p>CreaTuActivo nació de esa experiencia: <strong className="text-white">una plataforma diseñada específicamente para distribuidores de Gano Excel</strong> que quieren resultados reales.</p>
                <p className="text-lg lg:text-xl font-semibold text-white pt-4">
                  Mi sistema. Tu oportunidad.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================
              SECCIÓN: NEXUS - TU ASISTENTE IA
          ======================================== */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                NEXUS: Tu asistente de ventas con IA
              </h2>
              <p className="text-xl text-slate-400">
                Desarrollado con Claude de Anthropic. Disponible las 24 horas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-6 hover:scale-105 transition-transform duration-300" style={cardStyle}>
                <MessageCircle className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Maneja las objeciones</h3>
                <p className="text-slate-300 text-sm">
                  "¿Esto es pirámide?" "¿Funciona el café?" "¿Cuánto puedo ganar?" NEXUS responde con información verificada de Gano Excel.
                </p>
              </div>

              <div className="rounded-2xl p-6 hover:scale-105 transition-transform duration-300" style={cardStyle}>
                <Target className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Filtra los curiosos</h3>
                <p className="text-slate-300 text-sm">
                  Distingue entre quien pregunta por preguntar y quien realmente quiere emprender. Tú solo hablas con los interesados serios.
                </p>
              </div>

              <div className="rounded-2xl p-6 hover:scale-105 transition-transform duration-300" style={cardStyle}>
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Entrena a tu equipo</h3>
                <p className="text-slate-300 text-sm">
                  Cada persona en tu red tiene acceso al mismo NEXUS. Respuestas consistentes. Calidad uniforme. Sin horas de capacitación.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-xl text-center" style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <p className="text-xl text-white font-semibold mb-3">
                Mientras duermes, NEXUS está conversando con tus prospectos.
              </p>
              <p className="text-lg text-slate-300">
                Cuando despiertas, tienes una lista de personas listas para tomar acción.
              </p>
            </div>
          </section>

          {/* ========================================
              SECCIÓN: POR QUÉ AHORA ES DIFERENTE
          ======================================== */}
          <section className="mb-20">
            <div className="rounded-2xl p-8 lg:p-12" style={{
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.2)'
            }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
                ¿Por qué este momento es diferente?
              </h2>

              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Gano Excel sigue siendo el mismo.</span> Producto patentado, 30 años de historia, bonos puntuales cada semana.
                </p>

                <p>
                  <span className="text-white font-semibold">El plan de compensación sigue siendo el mismo.</span> Binario limpio, sin trampas, sin letras pequeñas.
                </p>

                <p className="text-white font-bold text-2xl pt-4">
                  Lo que cambió es CÓMO puedes construir.
                </p>

                <div className="rounded-xl p-6 space-y-4" style={{
                  background: 'rgba(15, 23, 42, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white mb-1">1. NEXUS responde por ti</p>
                      <p className="text-sm text-slate-400">IA conversacional entrenada específicamente para Gano Excel y el Sistema 4M.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white mb-1">2. CreaTuActivo organiza tu negocio</p>
                      <p className="text-sm text-slate-400">Academia, seguimiento de prospectos, métricas, comunidad. Todo en una sola app.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white mb-1">3. Eres parte de los primeros 150</p>
                      <p className="text-sm text-slate-400">Fundadores tienen acceso anticipado antes del lanzamiento público.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white mb-1">4. Tu equipo replica sin fricción</p>
                      <p className="text-sm text-slate-400">La tecnología hace el trabajo pesado. Tú te enfocas en las relaciones.</p>
                    </div>
                  </div>
                </div>

                <p className="text-center text-xl font-bold text-white pt-6">
                  El producto que amas. Las herramientas que necesitas.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================
              SECCIÓN: TIMELINE
          ======================================== */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Calendario de Fundadores
              </h2>
              <p className="text-slate-400 text-lg">
                150 espacios exclusivos. Cierre: 04 de enero 2026.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300" style={cardStyle}>
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Reclutamiento Privado</h3>
                <p className="text-sm text-slate-400 mb-3">10 Nov 2025 - 04 Ene 2026</p>
                <p className="text-slate-300">150 Fundadores seleccionados</p>
              </div>

              <div className="rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300" style={cardStyle}>
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Fase Constructores</h3>
                <p className="text-sm text-slate-400 mb-3">05 Ene - 01 Mar 2026</p>
                <p className="text-slate-300">Los fundadores construyen su primer nivel</p>
              </div>

              <div className="rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300" style={cardStyle}>
                <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Apertura General</h3>
                <p className="text-sm text-slate-400 mb-3">02 Mar 2026</p>
                <p className="text-slate-300">CreaTuActivo abre a toda Latinoamérica</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl text-center" style={{
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}>
              <p className="text-white font-semibold text-lg">
                <span className="text-yellow-400">Ventaja del Fundador:</span> Armas tu equipo con NEXUS activo mientras otros aún no tienen acceso.
              </p>
            </div>
          </section>

          {/* ========================================
              3 RAZONES PARA SER FUNDADOR
          ======================================== */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              3 Razones para ser <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fundador</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl" style={cardStyle}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tecnología de 11 años</h3>
                <p className="text-slate-400">
                  App CreaTuActivo, NEXUS con IA, tracking de prospectos, academia digital, y todas las herramientas que desarrollé en más de una década como Diamante.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl" style={cardStyle}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Comunidad selecta</h3>
                <p className="text-slate-400">
                  Únete a profesionales de 16 países que ya usan Gano Excel con CreaTuActivo. Red de empresarios con mentalidad de crecimiento.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl" style={cardStyle}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visión 4 Millones</h3>
                <p className="text-slate-400">
                  Participa en construir el movimiento que impactará 4 millones de vidas con productos Gano Excel para 2032.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================
              SECCIÓN DE ACTIVACIÓN - PAQUETES
          ======================================== */}
          <section id="activacion" className="text-center p-8 rounded-3xl mb-20"
                   style={{
                     background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                     backdropFilter: 'blur(12px)'
                   }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Activa tu <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Posición de Fundador</span>
            </h2>
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
              Selecciona tu inventario inicial de productos Gano Excel. Todos los paquetes incluyen acceso completo a CreaTuActivo y NEXUS.
            </p>

            {/* Paquetes */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Paquete Emprendedor */}
              <div className="p-6 rounded-2xl text-center" style={cardStyle}>
                <h3 className="text-xl font-bold text-white mb-4">Emprendedor</h3>
                <p className="text-slate-400 mb-6">Inventario inicial + acceso a CreaTuActivo para comenzar a validar el modelo.</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$200</div>
                  <div className="text-sm text-slate-400">$900.000 COP</div>
                </div>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Activar Ahora
                </button>
              </div>

              {/* Paquete Empresarial */}
              <div className="p-6 rounded-2xl text-center" style={cardStyle}>
                <h3 className="text-xl font-bold text-white mb-4">Empresarial</h3>
                <p className="text-slate-400 mb-6">Inventario completo + herramientas CreaTuActivo para operación profesional desde el inicio.</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$500</div>
                  <div className="text-sm text-slate-400">$2.250.000 COP</div>
                </div>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Activar Ahora
                </button>
              </div>

              {/* Paquete Visionario - Destacado */}
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
                <p className="text-slate-300 mb-6">Inventario premium + plataforma completa para máximo potencial y arranque acelerado.</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-white mb-2">$1000</div>
                  <div className="text-sm text-slate-300">$4.500.000 COP</div>
                </div>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform">
                  Activar Ahora
                </button>
              </div>
            </div>

            {/* Garantías */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Sin compromisos mensuales
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Acceso inmediato a NEXUS
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Solo 150 cupos disponibles
              </div>
            </div>
          </section>

          {/* ========================================
              CTA FINAL
          ======================================== */}
          <section className="mb-20">
            <div className="rounded-2xl p-8 lg:p-12 text-center" style={{
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.3)'
            }}>
              <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                11 años de aprendizaje. Tu oportunidad hoy.
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Gano Excel me cambió la vida. CreaTuActivo es cómo quiero ayudarte a cambiar la tuya.<br />
                Tecnología + Producto + Sistema probado.
              </p>
              <button
                onClick={() => setContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl px-10 py-5 rounded-2xl inline-flex items-center gap-3 shadow-lg hover:scale-105 transition-transform duration-300">
                Solicitar mi Espacio <ArrowRight size={24} />
              </button>
            </div>
          </section>

          {/* ========================================
              TESTIMONIO FINAL
          ======================================== */}
          <section className="text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-slate-300 italic mb-6">
              "Los primeros en actuar tienen la ventaja. Los que esperan, tienen las excusas."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                LC
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Luis Cabrejo</p>
                <p className="text-slate-400 text-sm">Diamante Gano Excel 11 años • Arquitecto CreaTuActivo</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Modal de Contacto */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="fundadores"
      />

      {/* Footer Unificado */}
      <Footer />
    </div>
  );
}

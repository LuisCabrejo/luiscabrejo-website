'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURACIÓN DE ESTILO ---
const THEME = {
  bg: 'bg-[#0F1115]',
  textMain: 'text-white',
  textMuted: 'text-[#94A3B8]',
  gold: 'text-[#C5A059]',
  goldBg: 'bg-[#C5A059]',
  borderGold: 'border-[#C5A059]',
};

// --- IMÁGENES DE FONDO ---
const IMAGES = {
  identity: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663274261693/IViPnJSDsbRprVwi.jpg',
  villain: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663274261693/LjZGwGLmzbxhANjP.jpg',
  pillars: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663274261693/xIXjDtzPltPpJgzT.jpg',
  tech: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663274261693/uGJrLWDOLWROfWzY.jpg',
  results: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663274261693/axuHYRrAwTxdEeho.jpg',
  family: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663274261693/bPnQlyDlAOBLnwEq.jpg',
  travel: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663274261693/TrJezuAKzustxxdb.jpg',
};

// --- TIPOS ---
interface SlideBase {
  id: number;
  type: string;
  backgroundImage?: string;
}

interface BlackSlide extends SlideBase {
  type: 'black';
  text?: string;
}

interface IdentitySlide extends SlideBase {
  type: 'identity';
  subtitle: string;
  title: string;
  highlight: string;
  description: string;
  highlightWord: string;
}

interface VillainSlide extends SlideBase {
  type: 'villain';
  subtitle: string;
  steps: { text: string; opacity: number }[];
  quote: string;
}

interface PillarsSlide extends SlideBase {
  type: 'pillars';
  title: string;
  pillars: { number: string; title: string; description: string; highlighted?: boolean }[];
}

interface TechSlide extends SlideBase {
  type: 'tech';
  badge: string;
  title: string;
  highlight: string;
  features: { number: string; title: string; description: string }[];
}

interface ResultsSlide extends SlideBase {
  type: 'results';
  title: string;
  cards: { image: string; caption: string }[];
}

interface CTASlide extends SlideBase {
  type: 'cta';
  question: string;
  highlight: string;
  options: { label: string; title: string; description: string; featured?: boolean }[];
}

interface FinalSlide extends SlideBase {
  type: 'final';
  word: string;
}

type Slide = BlackSlide | IdentitySlide | VillainSlide | PillarsSlide | TechSlide | ResultsSlide | CTASlide | FinalSlide;

// --- DATA DE DIAPOSITIVAS ---
const SLIDES: Slide[] = [
  // SLIDE 0: EL SILENCIO (Inicio MLK)
  {
    id: 0,
    type: 'black',
  },

  // SLIDE 1: IDENTIDAD
  {
    id: 1,
    type: 'identity',
    backgroundImage: IMAGES.identity,
    subtitle: 'Luis Cabrejo Parra',
    title: 'Arquitecto de',
    highlight: 'Activos',
    description: 'Diseñando sistemas para recuperar la propiedad de tu activo más valioso:',
    highlightWord: 'Tu Libertad',
  },

  // SLIDE 2: EL VILLANO (Plan por Defecto)
  {
    id: 2,
    type: 'villain',
    backgroundImage: IMAGES.villain,
    subtitle: 'El Plan por Defecto',
    steps: [
      { text: 'Trabajar', opacity: 40 },
      { text: 'Pagar', opacity: 60 },
      { text: 'Repetir', opacity: 100 },
    ],
    quote: '"La mayoría de las personas no viven 75 años, viven un año 75 veces."',
  },

  // SLIDE 3: APALANCAMIENTO (Socio)
  {
    id: 3,
    type: 'pillars',
    backgroundImage: IMAGES.pillars,
    title: 'Apalancamiento',
    pillars: [
      {
        number: '01',
        title: 'Infraestructura',
        description: 'Gano Excel pone el 90% del capital, la logística y el riesgo global.',
      },
      {
        number: '02',
        title: 'Producto',
        description: 'Café + Ciencia. Un hábito inevitable transformado en un activo recurrente.',
        highlighted: true,
      },
      {
        number: '03',
        title: 'La Red',
        description: 'Tú no vendes; tú conectas mercados a una plataforma de distribución masiva.',
      },
    ],
  },

  // SLIDE 4: TECNOLOGÍA (Queswa)
  {
    id: 4,
    type: 'tech',
    backgroundImage: IMAGES.tech,
    badge: 'Queswa Intelligence',
    title: 'Tu Ventaja',
    highlight: 'Injusta',
    features: [
      {
        number: '1',
        title: 'Filtro Inteligente',
        description: 'La IA prospecta y califica mientras tú disfrutas de tu tiempo.',
      },
      {
        number: '2',
        title: 'Seguimiento Infatigable',
        description: 'Cero olvidos, cero errores. El sistema nunca se rinde.',
      },
      {
        number: '3',
        title: 'Duplicación Masiva',
        description: 'Cualquier persona puede operar un sistema de alta tecnología.',
      },
    ],
  },

  // SLIDE 5: RESULTADOS (Soberanía)
  {
    id: 5,
    type: 'results',
    backgroundImage: IMAGES.results,
    title: 'Soberanía en Acción',
    cards: [
      { image: IMAGES.family, caption: 'Poder estar presente.' },
      { image: IMAGES.travel, caption: 'Poder elegir el destino.' },
    ],
  },

  // SLIDE 6: CTA (La Decisión)
  {
    id: 6,
    type: 'cta',
    question: '¿Qué camino vas a',
    highlight: 'diseñar',
    options: [
      {
        label: 'Opción 01',
        title: 'Consumidor',
        description: 'Salud y bienestar con el mejor producto del mundo.',
      },
      {
        label: 'Opción 02',
        title: 'Constructor',
        description: 'Ingresos extra apalancados en nuestra tecnología.',
      },
      {
        label: 'Opción 03',
        title: 'Soberano',
        description: 'Fundar tu propio activo de libertad definitiva.',
        featured: true,
      },
    ],
  },

  // SLIDE 7: FINAL (MLK Silence)
  {
    id: 7,
    type: 'final',
    word: 'Soberanía',
  },
];

// --- COMPONENTE PRINCIPAL ---
export default function PresentacionPrueba() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navegación
  const handleNavigation = useCallback((direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1));
    } else {
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter' || e.key === 'PageDown') {
        e.preventDefault();
        handleNavigation('next');
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        e.preventDefault();
        handleNavigation('prev');
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(SLIDES.length - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNavigation]);

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Click para avanzar
  const handleClick = (e: React.MouseEvent) => {
    const x = e.clientX;
    const isLeftSide = x < window.innerWidth / 2;

    if (isLeftSide) {
      handleNavigation('prev');
    } else {
      handleNavigation('next');
    }
  };

  const slide = SLIDES[currentSlide];

  // Componente de animación reveal
  const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay * 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );

  // Renders según tipo de slide
  const renderContent = () => {
    const bgImage = 'backgroundImage' in slide ? slide.backgroundImage : undefined;

    // Wrapper con imagen de fondo
    const SlideWrapper = ({ children }: { children: React.ReactNode }) => (
      <div className="relative w-full h-full flex items-center justify-center">
        {bgImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-[#0F1115]/85" />
          </>
        )}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8">
          {children}
        </div>
      </div>
    );

    switch (slide.type) {
      case 'black': {
        const s = slide as BlackSlide;
        return (
          <div className="flex items-center justify-center h-full bg-black">
            {s.text && (
              <Reveal>
                <p className={`text-2xl ${THEME.gold} tracking-[1.5em] uppercase font-serif italic`}>
                  {s.text}
                </p>
              </Reveal>
            )}
          </div>
        );
      }

      case 'identity': {
        const s = slide as IdentitySlide;
        return (
          <SlideWrapper>
            <Reveal delay={0}>
              <h2 className={`text-xl ${THEME.textMuted} uppercase tracking-[0.5em] mb-6 text-center`}>
                {s.subtitle}
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <h1
                className="text-7xl md:text-8xl font-bold mb-8 text-center"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.title} <span className={`${THEME.gold} italic`}>{s.highlight}</span>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <div className={`h-px w-24 ${THEME.goldBg} mb-8 mx-auto`} />
            </Reveal>
            <Reveal delay={3}>
              <p className={`text-2xl font-light max-w-3xl ${THEME.textMuted} leading-relaxed text-center`}>
                {s.description} <span className="text-white font-semibold">{s.highlightWord}</span>.
              </p>
            </Reveal>
          </SlideWrapper>
        );
      }

      case 'villain': {
        const s = slide as VillainSlide;
        return (
          <SlideWrapper>
            <Reveal delay={0}>
              <h3 className={`text-2xl ${THEME.textMuted} uppercase tracking-widest mb-16 text-center`}>
                {s.subtitle}
              </h3>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {s.steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <div className={`text-2xl ${THEME.gold}`}>→</div>}
                    <div
                      className={`text-6xl font-bold ${
                        step.opacity === 100 ? `${THEME.gold} underline decoration-1 underline-offset-8` : ''
                      }`}
                      style={{ opacity: step.opacity / 100 }}
                    >
                      {step.text}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </Reveal>
            <Reveal delay={2}>
              <p className={`mt-20 text-xl italic ${THEME.textMuted} text-center`}>
                {s.quote}
              </p>
            </Reveal>
          </SlideWrapper>
        );
      }

      case 'pillars': {
        const s = slide as PillarsSlide;
        return (
          <SlideWrapper>
            <Reveal delay={0}>
              <h2
                className={`text-8xl font-bold ${THEME.gold} mb-12 text-center`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.title}
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                {s.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`p-10 rounded-2xl backdrop-blur-lg bg-white/[0.03] border border-white/[0.05] ${
                      pillar.highlighted ? `border-b-4 ${THEME.borderGold}` : ''
                    }`}
                  >
                    <div className={`${THEME.gold} text-4xl mb-4`} style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pillar.number}
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{pillar.title}</h4>
                    <p className={`${THEME.textMuted} leading-relaxed`}>{pillar.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </SlideWrapper>
        );
      }

      case 'tech': {
        const s = slide as TechSlide;
        return (
          <SlideWrapper>
            <Reveal delay={0}>
              <div className="mb-10">
                <span className={`px-6 py-2 border ${THEME.borderGold} ${THEME.gold} rounded-full text-sm tracking-[0.3em] uppercase`}>
                  {s.badge}
                </span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-7xl font-bold mb-16 text-center">
                {s.title} <span className={`${THEME.textMuted} italic`}>{s.highlight}</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <div className="grid grid-cols-1 gap-8 text-left max-w-2xl">
                {s.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-6">
                    <div className={`w-12 h-12 rounded-full border ${THEME.borderGold} flex items-center justify-center ${THEME.gold} shrink-0`}>
                      {feature.number}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-1">{feature.title}</h4>
                      <p className={THEME.textMuted}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </SlideWrapper>
        );
      }

      case 'results': {
        const s = slide as ResultsSlide;
        return (
          <SlideWrapper>
            <Reveal delay={0}>
              <h2
                className={`text-6xl font-bold ${THEME.gold} mb-16 text-center`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.title}
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
                {s.cards.map((card, idx) => (
                  <div key={idx} className="group">
                    <div
                      className="aspect-video bg-cover bg-center rounded-xl border border-[#C5A059]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                    <p className="mt-6 text-2xl font-light text-center">{card.caption}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </SlideWrapper>
        );
      }

      case 'cta': {
        const s = slide as CTASlide;
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            <Reveal delay={0}>
              <h2 className="text-5xl font-light mb-16">
                {s.question} <span className={`${THEME.gold} italic`}>{s.highlight}</span>?
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                {s.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={`p-12 rounded-3xl transition cursor-pointer ${
                      option.featured
                        ? `${THEME.goldBg} text-black hover:scale-105 shadow-[0_0_50px_rgba(197,160,89,0.3)]`
                        : 'backdrop-blur-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/5'
                    }`}
                  >
                    <h4 className={`uppercase tracking-widest mb-4 ${option.featured ? 'opacity-70' : THEME.textMuted}`}>
                      {option.label}
                    </h4>
                    <h3 className="text-3xl font-bold mb-6">{option.title}</h3>
                    <p className={`text-sm ${option.featured ? 'font-semibold' : THEME.textMuted}`}>
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        );
      }

      case 'final': {
        const s = slide as FinalSlide;
        return (
          <div className="flex items-center justify-center h-full bg-black">
            <Reveal delay={0}>
              <h2
                className={`${THEME.gold} text-2xl tracking-[1.5em] uppercase italic`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.word}
              </h2>
            </Reveal>
          </div>
        );
      }

      default:
        return null;
    }
  };

  const progress = (currentSlide / (SLIDES.length - 1)) * 100;

  return (
    <div
      className={`w-full h-screen ${THEME.bg} overflow-hidden relative select-none`}
      onClick={handleClick}
      style={{ cursor: 'none' }}
    >
      {/* Barra de Progreso */}
      <motion.div
        className={`fixed top-0 left-0 h-1 ${THEME.goldBg} z-50`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />

      {/* Contenido de la diapositiva */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      {/* Controles Invisibles (hover para mostrar) */}
      <div className="fixed bottom-0 left-0 w-full h-20 z-50 flex justify-between px-10 items-center opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black/50 to-transparent">
        <button
          onClick={(e) => { e.stopPropagation(); handleNavigation('prev'); }}
          className="text-white/40 hover:text-white transition text-sm uppercase tracking-widest"
        >
          Anterior
        </button>
        <div className="text-white/40 text-xs font-mono">
          {currentSlide} / {SLIDES.length - 1}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); handleNavigation('next'); }}
          className="text-white/40 hover:text-white transition text-sm uppercase tracking-widest"
        >
          Siguiente
        </button>
      </div>

      {/* Ayuda de navegación (visible solo al inicio) */}
      {currentSlide === 0 && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#333] text-xs tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ← → NAVEGAR &nbsp;|&nbsp; F FULLSCREEN &nbsp;|&nbsp; CLICK AVANZAR
        </motion.div>
      )}
    </div>
  );
}

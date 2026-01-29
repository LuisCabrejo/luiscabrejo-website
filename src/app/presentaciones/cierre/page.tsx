'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Droplets,
  Clock,
  Shovel,
  Cpu,
  Home,
  TreeDeciduous,
  TrendingUp,
  Repeat,
  AlertTriangle,
  LucideIcon
} from 'lucide-react';

// --- CONFIGURACIÓN DE ESTILO ---
const THEME = {
  bg: 'bg-black',
  textMain: 'text-white',
  textMuted: 'text-[#94A3B8]',
  gold: 'text-[#C5A059]',
  danger: 'text-[#EF4444]',
};

// --- TIPOS ---
interface SlideBase {
  id: number;
  type: string;
  note?: string;
}

interface TitleSlide extends SlideBase {
  type: 'title' | 'big-text' | 'final';
  content: string;
  sub?: string;
  color?: 'gold' | 'danger' | 'white' | 'muted';
}

interface IconTextSlide extends SlideBase {
  type: 'icon-text';
  icon: LucideIcon;
  title: string;
  text: string;
  color?: 'gold' | 'muted';
}

interface SplitSlide extends SlideBase {
  type: 'split';
  left: { icon: LucideIcon; text: string; color: 'gold' | 'muted' };
  right: { text: string; color: 'gold' | 'white' | 'muted' };
}

interface ImageTextSlide extends SlideBase {
  type: 'image-text';
  title: string;
  sub: string;
  image: string;
  overlay?: boolean;
}

interface ChartSlide extends SlideBase {
  type: 'chart';
  title: string;
  sub: string;
  color?: 'gold' | 'white';
}

type Slide = TitleSlide | IconTextSlide | SplitSlide | ImageTextSlide | ChartSlide;

// --- DATA DE DIAPOSITIVAS (EL GUIÓN) ---
const SLIDES: Slide[] = [
  // BLOQUE 1: LA CONEXIÓN
  {
    id: 1,
    type: 'title',
    content: 'PROMESAS',
    sub: '14 AÑOS DESPUÉS...',
    note: 'Historia Buena Vista'
  },

  // BLOQUE 2: EL VILLANO
  {
    id: 2,
    type: 'icon-text',
    icon: Repeat,
    title: 'PLAN POR DEFECTO',
    text: 'Trabajar → Pagar → Ceros → Repetir',
    color: 'muted'
  },
  {
    id: 3,
    type: 'big-text',
    content: 'DEPENDENCIA',
    sub: 'LA TRAMPA DEL INGRESO LINEAL',
    color: 'danger'
  },

  // BLOQUE 3: LA RESONANCIA (OSCILACIONES)
  {
    id: 4,
    type: 'title',
    content: 'SOBERANÍA',
    color: 'gold',
    note: 'El destino'
  },

  // Oscilación 1: Dinero
  {
    id: 5,
    type: 'split',
    left: { icon: Zap, text: 'MOTOR', color: 'muted' },
    right: { text: 'Si tú paras, el dinero para', color: 'muted' }
  },
  {
    id: 6,
    type: 'split',
    left: { icon: Droplets, text: 'DUEÑO', color: 'gold' },
    right: { text: 'El agua fluye mientras duermes', color: 'white' },
    note: 'Analogía Acueducto'
  },

  // Oscilación 2: Tiempo
  {
    id: 7,
    type: 'icon-text',
    icon: Clock,
    title: 'POBREZA DE TIEMPO',
    text: 'No tener agenda propia',
    color: 'muted'
  },
  {
    id: 8,
    type: 'image-text',
    title: 'AUTONOMÍA',
    sub: 'No pedir permiso para vivir',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    overlay: true
  },

  // Oscilación 3: Método
  {
    id: 9,
    type: 'icon-text',
    icon: Shovel,
    title: 'ESFUERZO',
    text: 'Cavar con cuchara (Perseguir)',
    color: 'muted'
  },
  {
    id: 10,
    type: 'icon-text',
    icon: Cpu,
    title: 'APALANCAMIENTO',
    text: 'Excavadora Industrial (Sistemas + IA)',
    color: 'gold',
    note: 'Tecnología Queswa'
  },

  // Oscilación 4: Legado
  {
    id: 11,
    type: 'icon-text',
    icon: Home,
    title: 'ALQUILER',
    text: 'Tu empleo no es heredable',
    color: 'muted'
  },
  {
    id: 12,
    type: 'icon-text',
    icon: TreeDeciduous,
    title: 'LEGADO',
    text: 'Propiedad Privada Heredable',
    color: 'gold',
    note: 'Activo transferible'
  },

  // BLOQUE 4: LA VERDAD (LÓGICA)
  {
    id: 13,
    type: 'big-text',
    content: 'CERTEZA',
    sub: 'NO MIEDO. LÓGICA.',
    color: 'white',
    note: 'Costo operativo cero'
  },
  {
    id: 14,
    type: 'chart',
    title: '2.5 AÑOS',
    sub: 'Obediencia al Sistema',
    color: 'gold'
  },
  {
    id: 15,
    type: 'image-text',
    title: 'EL VEHÍCULO',
    sub: 'Resultados duplicables',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    overlay: true
  },
  {
    id: 16,
    type: 'image-text',
    title: 'TU VISTA',
    sub: 'Disponible para el conductor',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    overlay: false
  },

  // BLOQUE 5: EL CIERRE (ESPEJO)
  {
    id: 17,
    type: 'big-text',
    content: 'LOS ÚLTIMOS 5 AÑOS',
    sub: '¿QUIERES REPETIRLOS?',
    color: 'white',
    note: 'El espejo del tiempo'
  },
  {
    id: 18,
    type: 'final',
    content: 'DECIDE',
    sub: 'Soberanía o Dependencia',
    color: 'gold'
  }
];

// --- COMPONENTE PRINCIPAL ---
export default function PresentacionCierre() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Navegación con Teclado
  const handleNavigation = useCallback((direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1));
    } else {
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNavigation('next');
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
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
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Click para avanzar
  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isLeftSide = x < rect.width / 3;

    if (isLeftSide) {
      handleNavigation('prev');
    } else {
      handleNavigation('next');
    }
  };

  const slide = SLIDES[currentSlide];

  // Obtener color de texto según configuración
  const getTextColor = (color?: string) => {
    switch (color) {
      case 'gold': return THEME.gold;
      case 'danger': return THEME.danger;
      case 'muted': return THEME.textMuted;
      default: return THEME.textMain;
    }
  };

  // Renders según tipo de slide
  const renderContent = () => {
    switch (slide.type) {
      case 'title':
      case 'big-text':
      case 'final': {
        const s = slide as TitleSlide;
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 px-8">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter ${getTextColor(s.color)}`}>
              {s.content}
            </h1>
            {s.sub && (
              <p className={`text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] ${THEME.textMuted}`}>
                {s.sub}
              </p>
            )}
          </div>
        );
      }

      case 'icon-text': {
        const s = slide as IconTextSlide;
        const Icon = s.icon || AlertTriangle;
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 px-8">
            <Icon
              size={120}
              className={s.color === 'gold' ? 'text-[#C5A059]' : 'text-[#475569]'}
              strokeWidth={1}
            />
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${getTextColor(s.color)}`}>
              {s.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-light">
              {s.text}
            </p>
          </div>
        );
      }

      case 'split': {
        const s = slide as SplitSlide;
        const LeftIcon = s.left?.icon || Zap;
        return (
          <div className="flex flex-col md:flex-row h-full w-full">
            <div className="flex-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 p-10">
              <LeftIcon
                size={80}
                className={s.left.color === 'gold' ? 'text-[#C5A059]' : 'text-[#475569]'}
                strokeWidth={1}
              />
              <h2 className={`text-3xl md:text-4xl mt-6 font-bold ${getTextColor(s.left.color)}`}>
                {s.left.text}
              </h2>
            </div>
            <div className="flex-1 flex items-center justify-center p-10">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif leading-tight ${getTextColor(s.right.color)}`}>
                {s.right.text}
              </h2>
            </div>
          </div>
        );
      }

      case 'image-text': {
        const s = slide as ImageTextSlide;
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${s.image})` }}
            />

            {/* Overlay oscuro si está habilitado */}
            {s.overlay && (
              <div className="absolute inset-0 bg-black/60 z-10" />
            )}

            {/* Gradient overlay para legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />

            {/* Contenido de texto */}
            <div className="relative z-20 text-center p-10">
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${THEME.gold} drop-shadow-2xl`}>
                {s.title}
              </h1>
              <p className="text-xl md:text-2xl text-white tracking-[0.2em] uppercase drop-shadow-lg">
                {s.sub}
              </p>
            </div>
          </div>
        );
      }

      case 'chart': {
        const s = slide as ChartSlide;
        return (
          <div className="flex flex-col items-center justify-center h-full px-8">
            <TrendingUp size={150} className={THEME.gold} strokeWidth={1.5} />
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mt-8">
              {s.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#94A3B8] mt-4 uppercase tracking-[0.3em]">
              {s.sub}
            </p>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full h-screen ${THEME.bg} overflow-hidden relative select-none`}
      onClick={handleClick}
      style={{ cursor: 'none' }}
    >
      {/* Contenido de la diapositiva */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full flex items-center justify-center"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar Minimalista */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-[#C5A059]"
        initial={{ width: 0 }}
        animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
        transition={{ duration: 0.3 }}
      />

      {/* Indicador Discreto */}
      <div className="absolute bottom-4 right-6 text-[#333] text-xs font-mono">
        {currentSlide + 1} / {SLIDES.length}
      </div>

      {/* Controles táctiles invisibles para móvil */}
      <div className="absolute inset-y-0 left-0 w-1/4 z-30" />
      <div className="absolute inset-y-0 right-0 w-3/4 z-30" />

      {/* Ayuda de navegación (visible solo al inicio) */}
      {currentSlide === 0 && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#444] text-xs tracking-widest"
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

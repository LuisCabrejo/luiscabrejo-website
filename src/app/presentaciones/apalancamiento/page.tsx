'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ═══════════════════════════════════════════════════════════
   PALETA DE COLORES — DAN KOE MONOCROMÁTICO
   ═══════════════════════════════════════════════════════════ */
const C = {
  bg: '#0a0a0a',           // Negro profundo
  panel: '#1a1a1a',        // Negro panel
  white: '#ffffff',        // Blanco puro
  gray: '#b0b0b0',         // Gris claro
  darkGray: '#505050',     // Gris oscuro
  accent: '#ffffff',       // Acento blanco
  border: '#2a2a2a',       // Borde sutil
};

const TOTAL_SLIDES = 8;

/* ═══════════════════════════════════════════════════════════
   MAIN PRESENTATION COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function ApalancamientoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback(
    (n: number) => {
      if (n >= 0 && n < TOTAL_SLIDES) setCurrentSlide(n);
    },
    []
  );

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  // Toggle Fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, toggleFullscreen]);

  // Mobile touch navigation (tap)
  const handleScreenClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('[data-interactive]')) {
      return;
    }

    const screenWidth = window.innerWidth;
    const clickX = e.clientX;

    if (clickX < screenWidth / 3) {
      prev();
    } else if (clickX > (screenWidth * 2) / 3) {
      next();
    }
  }, [next, prev]);

  // Touch swipe navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-interactive]')) {
      return;
    }
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-interactive]')) {
      return;
    }
    touchEndX.current = e.changedTouches[0].clientX;

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        next();
      } else {
        prev();
      }
    }
  }, [next, prev]);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: C.bg, fontFamily: 'var(--font-roboto-mono), monospace' }}
      onClick={handleScreenClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Progress bar ── */}
      <div className="absolute top-0 left-0 w-full h-1 z-50" style={{ background: C.panel }}>
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%`,
            background: C.white,
            boxShadow: `0 0 12px ${C.white}80`,
          }}
        />
      </div>

      {/* ── Slides ── */}
      <div className="w-full h-full">
        {currentSlide === 0 && <SlideDiagnostico onNext={next} />}
        {currentSlide === 1 && <SlideOscilaciones onNext={next} />}
        {currentSlide === 2 && <SlideKernel onNext={next} />}
        {currentSlide === 3 && <SlideLey1 />}
        {currentSlide === 4 && <SlideLey2 />}
        {currentSlide === 5 && <SlideLey3 />}
        {currentSlide === 6 && <SlideLey4 />}
        {currentSlide === 7 && <SlideDeploy />}
      </div>

      {/* ── Fullscreen button (mobile) ── */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-50 md:hidden px-3 py-2 rounded-lg transition-all"
        style={{
          background: `${C.panel}80`,
          border: `1px solid ${C.border}`,
          color: C.white,
          backdropFilter: 'blur(8px)',
        }}
        aria-label="Toggle fullscreen"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
      </button>

      {/* ── Slide counter (bottom-right) ── */}
      <div
        className="absolute bottom-4 right-6 z-50 text-xs lg:text-sm font-mono"
        style={{ color: C.darkGray }}
      >
        {currentSlide + 1} / {TOTAL_SLIDES}
      </div>

      <style>{globalCSS}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 1: DIAGNÓSTICO
   ═══════════════════════════════════════════════════════════ */
function SlideDiagnostico({ onNext }: { onNext: () => void }) {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowError((v) => !v), 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-8 text-center px-4">
        <div
          className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded"
          style={{ color: C.darkGray, border: `1px solid ${C.border}` }}
        >
          // sistema_auditoria v1.0
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-rajdhani)', color: C.white }}
        >
          SISTEMA OPERATIVO ACTUAL:
          <br />
          <span style={{ color: C.gray }}>DETECTADO</span>
        </h1>

        <div
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider transition-opacity duration-200"
          style={{
            fontFamily: 'var(--font-rajdhani)',
            color: C.white,
            opacity: showError ? 1 : 0.2,
            textShadow: showError ? `0 0 30px ${C.white}80` : 'none',
          }}
        >
          ERROR: MODO &quot;YO YA SÉ&quot;
        </div>

        <div
          className="text-left text-sm sm:text-base lg:text-lg max-w-2xl w-full px-5 py-4 rounded"
          style={{
            background: C.panel,
            color: C.gray,
            border: `1px solid ${C.border}`,
            fontFamily: 'var(--font-roboto-mono)',
          }}
        >
          <p>&gt; Detectando patrones de comportamiento...</p>
          <p style={{ color: C.gray }}>&gt; WARNING: Sesgo cognitivo activo</p>
          <p style={{ color: C.white }}>&gt; CRITICAL: Modo &quot;Ya lo sé&quot; bloqueando aprendizaje</p>
          <p style={{ color: C.gray }}>&gt; Recomendación: Ejecutar auditoría de sistema</p>
        </div>

        <button
          onClick={onNext}
          className="mt-4 px-8 py-4 text-lg font-bold uppercase tracking-widest rounded transition-all hover:scale-105"
          style={{
            fontFamily: 'var(--font-rajdhani)',
            background: C.white,
            color: C.bg,
            boxShadow: `0 0 30px ${C.white}40`,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          [ EJECUTAR AUDITORÍA ]
        </button>
      </div>
    </SlideContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 2: OSCILACIONES — MITO VS REALIDAD
   ═══════════════════════════════════════════════════════════ */
const TOGGLES = [
  {
    mito: 'Ganar en 50 años',
    realidad: 'Construcción de Activos',
  },
  {
    mito: 'Trabajo Duro 24/7',
    realidad: 'Enfoque Sistémico',
  },
  {
    mito: 'Valores de Papel',
    realidad: 'Valores No Negociables',
  },
];

function SlideOscilaciones({ onNext }: { onNext: () => void }) {
  const [states, setStates] = useState([false, false, false]);
  const allActive = states.every(Boolean);

  const toggle = (i: number) =>
    setStates((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 text-center px-4">
        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-rajdhani)', color: C.white }}
        >
          <span style={{ color: C.gray }}>MITO VS REALIDAD</span>
        </h2>

        <p className="text-base lg:text-lg max-w-md" style={{ color: C.darkGray }}>
          Activa todos los interruptores para desbloquear el siguiente módulo.
        </p>

        <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-2xl">
          {TOGGLES.map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 rounded-lg cursor-pointer transition-all"
              style={{
                background: C.panel,
                border: `1px solid ${states[i] ? C.white : C.border}40`,
                boxShadow: states[i] ? `0 0 20px ${C.white}15` : 'none',
              }}
              onClick={() => toggle(i)}
            >
              <span
                className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider flex-1 text-left transition-all"
                style={{
                  fontFamily: 'var(--font-rajdhani)',
                  color: states[i] ? `${C.darkGray}` : C.gray,
                  textDecoration: states[i] ? 'line-through' : 'none',
                }}
              >
                {t.mito}
              </span>

              <div
                className="relative w-14 h-7 rounded-full transition-all flex-shrink-0"
                style={{
                  background: states[i] ? C.white : C.darkGray,
                }}
              >
                <div
                  className="absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300"
                  style={{
                    left: states[i] ? '30px' : '2px',
                    background: states[i] ? C.bg : C.panel,
                    boxShadow: `0 0 8px ${states[i] ? C.white : C.darkGray}60`,
                  }}
                />
              </div>

              <span
                className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider flex-1 text-right transition-all"
                style={{
                  fontFamily: 'var(--font-rajdhani)',
                  color: states[i] ? C.white : C.darkGray,
                }}
              >
                {t.realidad}
              </span>
            </div>
          ))}
        </div>

        {allActive && (
          <button
            onClick={onNext}
            className="mt-4 px-8 py-4 text-lg font-bold uppercase tracking-widest rounded transition-all hover:scale-105 animate-pulse"
            style={{
              fontFamily: 'var(--font-rajdhani)',
              background: C.white,
              color: C.bg,
              border: 'none',
              cursor: 'pointer',
              boxShadow: `0 0 30px ${C.white}40`,
            }}
          >
            [ SISTEMA VERIFICADO — CONTINUAR ]
          </button>
        )}
      </div>
    </SlideContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 3: INSTALACIÓN DEL KERNEL
   ═══════════════════════════════════════════════════════════ */
function SlideKernel({ onNext }: { onNext: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const terminalLines = [
    { text: '> Inicializando GanoExcel_System_Laws_v4.0...', delay: 0 },
    { text: '> Descargando módulo: DESVIAR_HABILIDADES.dll', delay: 600 },
    { text: '> Descargando módulo: ENSENAR_A_ENSENAR.dll', delay: 1200 },
    { text: '> Descargando módulo: EDIFICACION_VALORES.dll', delay: 1800 },
    { text: '> Descargando módulo: PROMOVER_VS_INVITAR.dll', delay: 2400 },
    { text: '> Compilando antídoto contra "YO YA SÉ"...', delay: 3000 },
    { text: '> Verificando integridad del sistema...', delay: 3600 },
    { text: '✓ ANTÍDOTO CARGADO: LAS 4 LEYES', delay: 4200 },
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    terminalLines.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setLines((prev) => [...prev, line.text]);
          setProgress(((i + 1) / terminalLines.length) * 100);
          if (i === terminalLines.length - 1) {
            setTimeout(() => setDone(true), 500);
          }
        }, line.delay)
      );
    });
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-rajdhani)', color: C.white }}
        >
          INSTALANDO <span style={{ color: C.gray }}>KERNEL</span>
        </h2>

        <div
          className="w-full max-w-2xl rounded-lg overflow-hidden"
          style={{ border: `1px solid ${C.border}`, background: C.bg }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{ background: C.panel, borderBottom: `1px solid ${C.border}` }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: C.darkGray }} />
            <div className="w-3 h-3 rounded-full" style={{ background: C.darkGray }} />
            <div className="w-3 h-3 rounded-full" style={{ background: C.white }} />
            <span className="ml-3 text-xs" style={{ color: C.darkGray }}>
              system_install.sh
            </span>
          </div>

          <div className="p-4 sm:p-6 text-sm sm:text-base lg:text-lg min-h-[280px]" style={{ fontFamily: 'var(--font-roboto-mono)' }}>
            {lines.map((line, i) => (
              <div
                key={i}
                className="mb-1.5"
                style={{
                  color: line.startsWith('✓') ? C.white : line.includes('Compilando') ? C.gray : C.gray,
                }}
              >
                {line}
              </div>
            ))}
            {!done && <span className="animate-pulse" style={{ color: C.white }}>█</span>}
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <div className="flex justify-between text-xs mb-1" style={{ color: C.darkGray }}>
            <span>Progreso de instalación</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: C.panel }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: C.white,
                boxShadow: `0 0 10px ${C.white}60`,
              }}
            />
          </div>
        </div>

        {done && (
          <button
            onClick={onNext}
            className="mt-4 px-8 py-4 text-lg font-bold uppercase tracking-widest rounded transition-all hover:scale-105"
            style={{
              fontFamily: 'var(--font-rajdhani)',
              background: C.white,
              color: C.bg,
              border: 'none',
              cursor: 'pointer',
              boxShadow: `0 0 30px ${C.white}40`,
            }}
          >
            [ EJECUTAR LEYES ]
          </button>
        )}
      </div>
    </SlideContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 4: LEY 1 — DESVIAR HABILIDADES (ROUTER)
   ═══════════════════════════════════════════════════════════ */
interface Particle {
  id: number;
  x: number;
  y: number;
  state: 'incoming' | 'stuck' | 'routed';
  speed: number;
}

function SlideLey1() {
  const [mode, setMode] = useState<'manual' | 'router'>('manual');
  const [load, setLoad] = useState(0);
  const [flow, setFlow] = useState(0);
  const [entered, setEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const idCounter = useRef(0);
  const flowCountRef = useRef(0);

  const USER_X = 30;
  const SYSTEM_X = 75;

  // Animación de entrada
  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let lastSpawn = 0;
    const animate = (timestamp: number) => {
      if (timestamp - lastSpawn > 400) {
        lastSpawn = timestamp;
        const p: Particle = {
          id: idCounter.current++,
          x: 0,
          y: 30 + Math.random() * 40,
          state: 'incoming',
          speed: 0.3 + Math.random() * 0.2,
        };
        particlesRef.current.push(p);
        if (particlesRef.current.length > 60) particlesRef.current.shift();
      }

      const modeNow = mode;
      particlesRef.current.forEach((p) => {
        if (p.state === 'incoming') {
          p.x += p.speed;
          if (p.x >= USER_X - 2) {
            if (modeNow === 'manual') {
              p.state = 'stuck';
            } else {
              p.state = 'routed';
              p.speed = 0.6;
              flowCountRef.current++;
            }
          }
        } else if (p.state === 'stuck') {
          if (modeNow === 'router') {
            p.state = 'routed';
            p.speed = 0.6 + Math.random() * 0.3;
            flowCountRef.current++;
          } else {
            p.x = USER_X - 2 + (Math.random() - 0.5) * 3;
            p.y += (Math.random() - 0.5) * 2;
          }
        } else if (p.state === 'routed') {
          p.x += p.speed;
          const targetY = 50;
          p.y += (targetY - p.y) * 0.05;
        }
      });

      particlesRef.current = particlesRef.current.filter((p) => p.x < 100);

      const stuck = particlesRef.current.filter((p) => p.state === 'stuck').length;
      setLoad(Math.min(stuck * 8, 100));
      setFlow(flowCountRef.current);

      if (containerRef.current) {
        const el = containerRef.current;
        el.querySelectorAll('.dot').forEach((d) => d.remove());
        particlesRef.current.forEach((p) => {
          const dot = document.createElement('div');
          dot.className = 'dot';
          dot.style.cssText = `position:absolute;width:6px;height:6px;border-radius:50%;left:${p.x}%;top:${p.y}%;transition:none;pointer-events:none;background:${
            p.state === 'stuck' ? C.darkGray : p.state === 'routed' ? C.white : C.gray
          };box-shadow:0 0 4px ${p.state === 'stuck' ? C.darkGray : p.state === 'routed' ? C.white : C.gray}60;`;
          el.appendChild(dot);
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mode]);

  // Color del protagonista: INICIA BLANCO, se oscurece con carga
  const getHeroColor = () => {
    if (mode === 'router') return C.white; // Blanco cuando delega
    // En modo manual: BLANCO → GRIS según carga acumulada
    if (load === 0) return C.white; // Empieza blanco
    if (load < 40) return C.gray; // Gris claro con algo de carga
    return C.darkGray; // Gris oscuro muy cargado
  };

  const getHeroGlow = () => {
    if (mode === 'router') return `0 0 40px ${C.white}60, 0 0 80px ${C.white}30`;
    if (load === 0) return `0 0 40px ${C.white}60, 0 0 80px ${C.white}30`;
    if (load < 40) return `0 0 30px ${C.gray}40`;
    return `0 0 20px ${C.darkGray}40`;
  };

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
        <LawTitle number={1} title="DESVIAR HABILIDADES" subtitle="EL ENRUTADOR" />

        <div className="flex gap-3 mb-2">
          <ModeButton
            label="MODO MANUAL"
            active={mode === 'manual'}
            onClick={() => { setMode('manual'); flowCountRef.current = 0; }}
          />
          <ModeButton
            label="MODO ENRUTADOR"
            active={mode === 'router'}
            onClick={() => setMode('router')}
          />
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-3xl rounded-lg overflow-hidden"
          data-interactive="true"
          style={{
            height: 'clamp(320px, 40vh, 500px)',
            background: C.panel,
            border: `1px solid ${C.border}`,
            backgroundImage: `
              linear-gradient(${C.border} 1px, transparent 1px),
              linear-gradient(90deg, ${C.border} 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        >
          {/* Círculo protagonista - ENTRADA RÁPIDA + COLOR DINÁMICO */}
          <div
            className="absolute rounded-full transition-all duration-300"
            style={{
              width: '50px',
              height: '50px',
              left: entered ? `${USER_X}%` : '-10%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: getHeroColor(),
              boxShadow: getHeroGlow(),
              border: `2px solid ${mode === 'router' ? C.white : C.darkGray}40`,
              transitionProperty: 'left, background, box-shadow, border',
              transitionDuration: entered ? '0.6s, 0.3s, 0.3s, 0.3s' : '0s',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />

          {/* Sistema - ENTRADA RÁPIDA + VIBRACIÓN en modo router */}
          <div
            className={`absolute flex items-center justify-center rounded-full text-xs font-bold uppercase transition-all${mode === 'router' ? ' system-vibrate' : ''}`}
            style={{
              width: '80px',
              height: '80px',
              left: entered ? `${SYSTEM_X}%` : '110%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: C.panel,
              border: `2px solid ${C.white}`,
              boxShadow: `0 0 25px ${C.white}30`,
              fontFamily: 'var(--font-rajdhani)',
              color: C.white,
              transitionProperty: 'left',
              transitionDuration: entered ? '0.7s' : '0s',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              transitionDelay: '0.1s',
            }}
          >
            SISTEMA
          </div>
        </div>

        <div className="flex gap-6 text-xs sm:text-sm lg:text-base" style={{ fontFamily: 'var(--font-roboto-mono)', color: C.gray }}>
          <span>
            CARGA COGNITIVA:{' '}
            <span style={{ color: load > 60 ? C.white : C.gray }}>{load}%</span>
          </span>
          <span>
            FLUJO AL SISTEMA: <span style={{ color: C.white }}>{flow}</span>
          </span>
        </div>

        <p className="text-xs sm:text-sm lg:text-base text-center max-w-md mt-1" style={{ color: C.darkGray }}>
          No seas el destino, sé el puente. Desvía el tráfico hacia la infraestructura del Sistema.
        </p>
      </div>
    </SlideContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 5: LEY 2 — ENSEÑAR A ENSEÑAR (FRACTAL)
   ═══════════════════════════════════════════════════════════ */
interface FNode {
  id: number;
  x: number;
  y: number;
  parentId: number | null;
  color: string;
}

function SlideLey2() {
  const [nodes, setNodes] = useState<FNode[]>([
    { id: 0, x: 50, y: 50, parentId: null, color: C.white },
  ]);
  const [heroState, setHeroState] = useState<'teaching' | 'multiplying'>('multiplying');
  const [entered, setEntered] = useState(false);
  const idRef = useRef(1);

  // Animación de entrada
  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const addLinear = () => {
    setHeroState('teaching'); // Gris cuando solo enseña
    const angle = Math.random() * Math.PI * 2;
    const dist = 8 + Math.random() * 12;
    const nx = Math.max(5, Math.min(95, 50 + Math.cos(angle) * dist));
    const ny = Math.max(5, Math.min(95, 50 + Math.sin(angle) * dist));
    setNodes((prev) => [
      ...prev,
      { id: idRef.current++, x: nx, y: ny, parentId: 0, color: C.gray },
    ]);
  };

  const multiply = () => {
    setHeroState('multiplying'); // Blanco cuando enseña a enseñar
    setNodes((prev) => {
      if (prev.length > 200) return prev;
      const newNodes: FNode[] = [];
      prev.forEach((node) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 5 + Math.random() * 10;
        const nx = Math.max(5, Math.min(95, node.x + Math.cos(angle) * dist));
        const ny = Math.max(5, Math.min(95, node.y + Math.sin(angle) * dist));
        newNodes.push({
          id: idRef.current++,
          x: nx,
          y: ny,
          parentId: node.id,
          color: C.darkGray,
        });
      });
      return [...prev, ...newNodes];
    });
  };

  const reset = () => {
    idRef.current = 1;
    setHeroState('multiplying');
    setNodes([{ id: 0, x: 50, y: 50, parentId: null, color: C.white }]);
  };

  const getHeroColor = () => heroState === 'teaching' ? C.gray : C.white;
  const getHeroGlow = () => heroState === 'teaching'
    ? `0 0 20px ${C.gray}40`
    : `0 0 40px ${C.white}60, 0 0 80px ${C.white}30`;

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
        <LawTitle number={2} title="ENSEÑAR A ENSEÑAR" subtitle="LA FRACTAL" />

        <div className="flex gap-3 mb-2">
          <ModeButton label="REINICIAR" active={false} onClick={reset} />
          <ModeButton label="SUMAR (+1)" active={false} onClick={addLinear} />
          <ModeButton label="ENSEÑAR A ENSEÑAR (×2)" active={false} onClick={multiply} />
        </div>

        <div
          className="relative w-full max-w-3xl rounded-lg overflow-hidden"
          data-interactive="true"
          style={{
            height: 'clamp(340px, 40vh, 500px)',
            background: C.panel,
            border: `1px solid ${C.border}`,
          }}
        >
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            {nodes.map((node) => {
              if (node.parentId === null) return null;
              const parent = nodes.find((n) => n.id === node.parentId);
              if (!parent) return null;
              return (
                <line
                  key={`line-${node.id}`}
                  x1={`${parent.x}%`}
                  y1={`${parent.y}%`}
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  stroke={C.white}
                  strokeOpacity={0.15}
                  strokeWidth={1}
                />
              );
            })}
          </svg>

          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute rounded-full transition-all duration-300"
              style={{
                width: node.id === 0 ? '50px' : '8px',
                height: node.id === 0 ? '50px' : '8px',
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: node.id === 0
                  ? (entered ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)')
                  : 'translate(-50%, -50%)',
                background: node.id === 0 ? getHeroColor() : node.color,
                boxShadow: node.id === 0
                  ? getHeroGlow()
                  : `0 0 6px ${node.color}80`,
                border: node.id === 0 ? `2px solid ${heroState === 'teaching' ? C.gray : C.white}40` : 'none',
                transitionProperty: node.id === 0 ? 'transform, background, box-shadow, border' : 'all',
                transitionDuration: node.id === 0 && !entered ? '0s' : '0.3s, 0.3s, 0.3s, 0.3s',
                transitionTimingFunction: node.id === 0 ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease',
              }}
            />
          ))}
        </div>

        <div className="flex gap-6 text-xs sm:text-sm lg:text-base" style={{ fontFamily: 'var(--font-roboto-mono)', color: C.gray }}>
          <span>
            NODOS: <span style={{ color: C.white }}>{nodes.length}</span>
          </span>
          <span>
            FACTOR: <span style={{ color: C.white }}>×{Math.ceil(Math.log2(nodes.length + 1))}</span>
          </span>
        </div>

        <p className="text-xs sm:text-sm lg:text-base text-center max-w-md mt-1" style={{ color: C.darkGray }}>
          Si solo &quot;Enseñas&quot;, sumas. Si &quot;Enseñas a Enseñar&quot;, multiplicas exponencialmente.
        </p>
      </div>
    </SlideContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 6: LEY 3 — EDIFICACIÓN + 7 VALORES
   SIMPLIFICADO: Círculo permanece arriba
   ═══════════════════════════════════════════════════════════ */
const BLOCKS = [
  { name: 'INTEGRIDAD', label: 'CIMENTACIÓN CRÍTICA' },
  { name: 'UNIDAD', label: 'COHESIÓN ESTRUCTURAL' },
  { name: 'CALIDAD', label: 'ESTÁNDAR GLOBAL' },
  { name: 'EXCELENCIA', label: 'TOLERANCIA CERO' },
  { name: 'COMPROMISO', label: 'CARGA PERMANENTE' },
  { name: 'INNOVACIÓN', label: 'ADAPTACIÓN CONTINUA' },
  { name: 'LIDERAZGO', label: 'CORONACIÓN' },
];

function SlideLey3() {
  const [placed, setPlaced] = useState<boolean[]>(new Array(7).fill(false));
  const [building, setBuilding] = useState(false);

  const startBuild = () => {
    if (building) return;
    setBuilding(true);

    BLOCKS.forEach((_, i) => {
      setTimeout(() => {
        setPlaced((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 800);
    });
  };

  // Color progresivo: gris → blanco según valores colocados
  const placedCount = placed.filter(Boolean).length;

  const getHeroColor = () => {
    if (!building) return C.white; // Botón blanco inicial
    if (placedCount === 0) return C.darkGray;
    if (placedCount < 3) return C.gray;
    if (placedCount < 7) return C.white;
    return C.white;
  };

  const getHeroGlow = () => {
    if (!building) return `0 0 30px ${C.white}40`;
    if (placedCount === 0) return `0 0 15px ${C.darkGray}30`;
    if (placedCount < 3) return `0 0 25px ${C.gray}40`;
    if (placedCount < 5) return `0 0 40px ${C.white}50, 0 0 80px ${C.white}30`;
    if (placedCount < 7) return `0 0 50px ${C.white}60, 0 0 100px ${C.white}40`;
    return `0 0 60px ${C.white}90, 0 0 120px ${C.white}60, 0 0 180px ${C.white}30`;
  };

  const getHeroSize = () => {
    if (placedCount === 7) return '55px';
    return '50px';
  };

  const getBorderOpacity = () => {
    if (!building) return '40';
    if (placedCount === 7) return '90';
    return '40';
  };

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
        <LawTitle number={3} title="EDIFICACIÓN Y VALORES" subtitle="LA ESTRUCTURA" />

        {/* Botón que se transforma en círculo */}
        {!building ? (
          <button
            onClick={startBuild}
            className="px-8 py-4 font-bold uppercase tracking-widest text-sm lg:text-base transition-all rounded-lg select-none hover:scale-105"
            style={{
              fontFamily: 'var(--font-rajdhani)',
              background: C.panel,
              color: C.gray,
              border: `2px solid ${C.border}`,
              cursor: 'pointer',
              boxShadow: `0 0 20px ${C.white}15`,
            }}
          >
            INICIAR SECUENCIA DE CONSTRUCCIÓN
          </button>
        ) : (
          <div
            className="rounded-full transition-all duration-700"
            style={{
              width: getHeroSize(),
              height: getHeroSize(),
              background: getHeroColor(),
              boxShadow: getHeroGlow(),
              border: `2px solid ${C.white}${getBorderOpacity()}`,
            }}
          />
        )}

        {/* GAP */}
        <div style={{ height: '20px' }} />

        <div
          className="relative w-full max-w-md"
          data-interactive="true"
          style={{ minHeight: 'clamp(300px, 35vh, 450px)' }}
        >
          {/* Torre de valores */}
          <div className="flex flex-col-reverse items-center gap-1 h-full justify-end">
            <div
              className="w-full h-0.5 rounded"
              style={{ background: C.border, marginBottom: '4px' }}
            />

            {BLOCKS.map((block, i) => (
              <div
                key={i}
                className="relative flex items-center justify-center transition-all duration-700"
                style={{
                  width: i === 0 ? '90%' : i === 6 ? '60%' : `${85 - i * 3}%`,
                  height: '42px',
                  background: i === 0 || i === 6 ? C.white : C.panel,
                  border: `1px solid ${i === 0 || i === 6 ? C.white : C.border}`,
                  borderRadius: '4px',
                  opacity: placed[i] ? 1 : 0,
                  transform: placed[i] ? 'translateY(0) scale(1)' : 'translateY(-60px) scale(0.9)',
                  transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: (i === 0 || i === 6) && placed[i] ? `0 0 30px ${C.white}30` : 'none',
                }}
              >
                <span
                  className="font-bold text-xs sm:text-sm lg:text-base tracking-wider uppercase"
                  style={{
                    fontFamily: 'var(--font-rajdhani)',
                    color: i === 0 || i === 6 ? C.bg : C.white,
                  }}
                >
                  {block.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm lg:text-base text-center max-w-md" style={{ color: C.darkGray }}>
          {!building
            ? 'Presiona el botón para iniciar la construcción'
            : 'La Edificación no es "halagar", es construir una estructura de confianza. Sin valores, la torre se cae.'}
        </p>
      </div>
    </SlideContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 7: LEY 4 — PROMOVER VS INVITAR (MAGNETISMO)
   ═══════════════════════════════════════════════════════════ */
interface Prospect {
  x: number;
  y: number;
  vx: number;
  vy: number;
  entered?: boolean;
}

function SlideLey4() {
  const [mode, setMode] = useState<'push' | 'pull'>('push');
  const [entered, setEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prospectsRef = useRef<Prospect[]>([]);
  const heroRef = useRef({ x: 50, y: 50 });
  const rafRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);

  // Animación de entrada
  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Inicializar con MUCHOS prospectos esparcidos
    prospectsRef.current = Array.from({ length: 50 }, (_, i) => ({
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      entered: true,
    }));
  }, []);

  useEffect(() => {
    const animate = (timestamp: number) => {
      const modeNow = mode;
      const hero = heroRef.current;

      // En modo pull, generar MUCHÍSIMOS prospectos continuamente (como crispetas)
      if (modeNow === 'pull') {
        if (timestamp - lastSpawnRef.current > 800) { // Cada 0.8 segundos (muy frecuente)
          lastSpawnRef.current = timestamp;
          if (prospectsRef.current.length < 150) { // MÁXIMO 150 (abundancia masiva)
            // Spawn múltiples prospectos a la vez
            for (let i = 0; i < 3; i++) { // 3 a la vez
              const side = Math.random();
              prospectsRef.current.push({
                x: side < 0.25 ? -5 : side < 0.5 ? 105 : side < 0.75 ? 10 + Math.random() * 80 : 10 + Math.random() * 80,
                y: side < 0.5 ? 10 + Math.random() * 80 : side < 0.75 ? -5 : 105,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                entered: true,
              });
            }
          }
        }
      }

      // Volver al centro en modo pull
      if (modeNow === 'pull') {
        hero.x += (50 - hero.x) * 0.05;
        hero.y += (50 - hero.y) * 0.05;
      }

      prospectsRef.current.forEach((p, index) => {
        p.entered = true;

        const dx = p.x - hero.x;
        const dy = p.y - hero.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (modeNow === 'push') {
          // REPULSIÓN - huyen pero NO desaparecen (rebotan en bordes)
          if (dist < 35) { // Mayor radio
            const force = ((35 - dist) / 35) * 0.7;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        } else {
          // ATRACCIÓN fuerte
          const force = 50 / (dist * dist + 120);
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }

        p.vx *= 0.98; // Menos fricción
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        // IMPORTANTE: En modo Push, los prospectos REBOTAN en los bordes (NO desaparecen)
        // Solo desaparecen si están MUY lejos (para que dure mucho tiempo)
        if (p.x < 2) { p.x = 2; p.vx *= -0.6; }
        if (p.x > 98) { p.x = 98; p.vx *= -0.6; }
        if (p.y < 2) { p.y = 2; p.vy *= -0.6; }
        if (p.y > 98) { p.y = 98; p.vy *= -0.6; }
      });

      // Solo eliminar si están EXTREMADAMENTE lejos (permite ejercicio largo)
      prospectsRef.current = prospectsRef.current.filter(
        p => p.x > -50 && p.x < 150 && p.y > -50 && p.y < 150
      );

      if (containerRef.current) {
        const el = containerRef.current;

        const heroEl = el.querySelector('.hero-node') as HTMLElement;
        if (heroEl) {
          heroEl.style.left = `${hero.x}%`;
          heroEl.style.top = `${hero.y}%`;
          heroEl.style.width = modeNow === 'pull' ? '50px' : '40px';
          heroEl.style.height = modeNow === 'pull' ? '50px' : '40px';
          heroEl.style.background = modeNow === 'push' ? C.darkGray : C.white;
          heroEl.style.boxShadow = modeNow === 'push'
            ? `0 0 20px ${C.darkGray}60`
            : `0 0 40px ${C.white}60, 0 0 80px ${C.white}40`;
          heroEl.style.border = modeNow === 'pull' ? `2px solid ${C.white}40` : 'none';
        }

        const dots = el.querySelectorAll('.prospect-dot') as NodeListOf<HTMLElement>;
        const visibleProspects = prospectsRef.current.slice(0, 150); // Mostrar hasta 150

        visibleProspects.forEach((p, i) => {
          if (dots[i]) {
            dots[i].style.left = `${p.x}%`;
            dots[i].style.top = `${p.y}%`;
            dots[i].style.opacity = p.entered ? '1' : '0';
            const dx = p.x - hero.x;
            const dy = p.y - hero.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (modeNow === 'push' && dist < 35) {
              dots[i].style.background = C.darkGray;
            } else if (modeNow === 'pull' && dist < 25) {
              dots[i].style.background = C.white;
            } else {
              dots[i].style.background = C.gray;
            }
          }
        });

        // Ocultar dots sobrantes
        for (let i = visibleProspects.length; i < dots.length; i++) {
          if (dots[i]) {
            dots[i].style.opacity = '0';
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mode]);

  const updateHeroPosition = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    heroRef.current.x = Math.max(5, Math.min(95, x));
    heroRef.current.y = Math.max(5, Math.min(95, y));
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (mode === 'push') {
      updateHeroPosition(e.clientX, e.clientY);
    }
  }, [mode, updateHeroPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (mode === 'push' && e.touches.length > 0) {
      e.preventDefault();
      updateHeroPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [mode, updateHeroPosition]);

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
        <LawTitle number={4} title="PROMOVER VS INVITAR" subtitle="EL MAGNETISMO" />

        <div className="flex gap-3 mb-2">
          <ModeButton
            label="MODO INVITAR (PERSEGUIR)"
            active={mode === 'push'}
            onClick={() => setMode('push')}
          />
          <ModeButton
            label="MODO PROMOVER (ATRAER)"
            active={mode === 'pull'}
            onClick={() => setMode('pull')}
          />
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-3xl rounded-lg overflow-hidden select-none"
          data-interactive="true"
          style={{
            height: 'clamp(340px, 40vh, 500px)',
            background: C.panel,
            border: `1px solid ${C.border}`,
            cursor: mode === 'push' ? 'none' : 'default',
            touchAction: 'none',
          }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {mode === 'pull' && (
            <>
              <div className="pulse-wave" style={{ animationDelay: '0s' }} />
              <div className="pulse-wave" style={{ animationDelay: '1s' }} />
            </>
          )}

          <div
            className="hero-node absolute rounded-full transition-colors duration-300"
            style={{
              transform: entered
                ? 'translate(-50%, -50%) scale(1)'
                : 'translate(-50%, -50%) scale(0)',
              zIndex: 10,
              pointerEvents: 'none',
              transitionProperty: 'transform, width, height, background, box-shadow, border',
              transitionDuration: '0.6s, 0.3s, 0.3s, 0.3s, 0.3s, 0.3s',
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1), ease, ease, ease, ease, ease',
            }}
          />

          {Array.from({ length: 150 }).map((_, i) => (
            <div
              key={i}
              className="prospect-dot absolute rounded-full"
              style={{
                width: '7px',
                height: '7px',
                transform: 'translate(-50%, -50%)',
                transition: 'background 0.3s, opacity 0.3s',
                pointerEvents: 'none',
                opacity: 0,
              }}
            />
          ))}
        </div>

        <p className="text-xs sm:text-sm lg:text-base text-center max-w-md" style={{ color: C.darkGray }}>
          {mode === 'push'
            ? '🖱️ Mueve el cursor para perseguir. Observa cómo huyen.'
            : 'No persigas. Crea un campo de atracción (Community-Led Growth).'}
        </p>
      </div>
    </SlideContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 8: DEPLOY — CIERRE
   ═══════════════════════════════════════════════════════════ */

function SlideDeploy() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-4">
        <div
          className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded"
          style={{ color: C.white, border: `1px solid ${C.white}40` }}
        >
          ✓ SISTEMA COMPILADO CON ÉXITO
        </div>

        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-rajdhani)', color: C.white }}
        >
          SISTEMA LISTO PARA
          <br />
          <span style={{ color: C.gray }}>DESPLIEGUE</span>
        </h2>

        {/* CONTENEDOR PARA CUBO */}
        <div
          className="relative"
          style={{
            width: '600px',
            height: '300px',
            maxWidth: '95vw',
            maxHeight: '35vh',
          }}
        >
          {/* VIDEO DEL CUBO RUBIK */}
          <video
            src="/video/cubo-rubicon.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 1s ease 0.6s, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
            }}
          />
        </div>

        <button
          className="mt-4 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl font-bold uppercase tracking-widest rounded transition-all hover:scale-105"
          style={{
            fontFamily: 'var(--font-rajdhani)',
            background: C.white,
            color: C.bg,
            border: 'none',
            cursor: 'pointer',
            boxShadow: `0 0 40px ${C.white}40`,
            opacity: entered ? 1 : 0,
            transform: entered ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            transitionDelay: '1s',
          }}
        >
          INICIAR MIGRACIÓN A MODO EMPRESARIO
        </button>

        <div
          className="mt-6 text-xs lg:text-sm tracking-widest"
          style={{
            color: C.darkGray,
            opacity: entered ? 1 : 0,
            transition: 'opacity 0.6s ease',
            transitionDelay: '1.2s',
          }}
        >
          ARQUITECTURA POR{' '}
          <span style={{ color: C.white }}>LUIS CABREJO</span>
          {' '}// DIAMANTE 11 AÑOS
        </div>
      </div>
    </SlideContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SHARED COMPONENTS
   ═══════════════════════════════════════════════════════════ */
function SlideContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex items-center justify-center" style={{ background: C.bg }}>
      {children}
    </div>
  );
}

function LawTitle({ number, title, subtitle }: { number: number; title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <div className="text-sm lg:text-base tracking-[0.3em] uppercase mb-2" style={{ color: C.gray, fontFamily: 'var(--font-roboto-mono)' }}>
        // LEY_{number}.exe — {subtitle}
      </div>
      <h2
        className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
        style={{ fontFamily: 'var(--font-rajdhani)', color: C.white }}
      >
        LEY {number}: <span style={{ color: C.gray }}>{title}</span>
      </h2>
    </div>
  );
}

function ModeButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 sm:px-6 py-2.5 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider transition-all"
      style={{
        fontFamily: 'var(--font-rajdhani)',
        background: active ? `${C.white}20` : 'transparent',
        color: active ? C.white : C.darkGray,
        border: `1px solid ${active ? C.white : C.border}`,
        cursor: 'pointer',
        boxShadow: active ? `0 0 15px ${C.white}20` : 'none',
      }}
    >
      {label}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════
   GLOBAL CSS
   ═══════════════════════════════════════════════════════════ */
const globalCSS = `
  .pulse-wave {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid ${C.white};
    opacity: 0;
    animation: ripple 2s infinite ease-out;
    pointer-events: none;
  }

  @keyframes ripple {
    0% {
      width: 50px;
      height: 50px;
      opacity: 0.7;
      border-width: 3px;
    }
    100% {
      width: 400px;
      height: 400px;
      opacity: 0;
      border-width: 0px;
    }
  }

  /* Vibración del sistema cuando trabaja */
  .system-vibrate {
    animation: system-shake 0.15s infinite;
  }

  @keyframes system-shake {
    0%, 100% {
      transform: translate(-50%, -50%) translate(0, 0);
    }
    25% {
      transform: translate(-50%, -50%) translate(1px, -1px);
    }
    50% {
      transform: translate(-50%, -50%) translate(-1px, 1px);
    }
    75% {
      transform: translate(-50%, -50%) translate(1px, 1px);
    }
  }
`;

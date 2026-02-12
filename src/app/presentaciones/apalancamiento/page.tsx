'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ═══════════════════════════════════════════════════════════
   PALETA DE COLORES — INGENIERÍA INDUSTRIAL DARK MODE
   ═══════════════════════════════════════════════════════════ */
const C = {
  bg: '#1a252f',
  panel: '#243442',
  cyan: '#009FDF',
  orange: '#E57200',
  gold: '#f1c40f',
  white: '#ffffff',
  gray: '#bdc3c7',
  darkGray: '#7f8c8d',
  red: '#e74c3c',
  green: '#2ecc71',
  purple: '#9b59b6',
};

const TOTAL_SLIDES = 8;

/* ═══════════════════════════════════════════════════════════
   MAIN PRESENTATION COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function ApalancamientoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: C.bg, fontFamily: 'var(--font-roboto-mono), monospace' }}
    >
      {/* ── Progress bar ── */}
      <div className="absolute top-0 left-0 w-full h-1 z-50" style={{ background: C.panel }}>
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%`,
            background: `linear-gradient(90deg, ${C.cyan}, ${C.gold})`,
            boxShadow: `0 0 12px ${C.cyan}80`,
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

      {/* ── Slide counter (bottom-right) ── */}
      <div
        className="absolute bottom-4 right-6 z-50 text-xs lg:text-sm font-mono"
        style={{ color: `${C.darkGray}80` }}
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
        {/* Top badge */}
        <div
          className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded"
          style={{ color: C.darkGray, border: `1px solid ${C.darkGray}40` }}
        >
          // sistema_auditoria v1.0
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-rajdhani)', color: C.white }}
        >
          SISTEMA OPERATIVO ACTUAL:
          <br />
          <span style={{ color: C.cyan }}>DETECTADO</span>
        </h1>

        {/* Error blink */}
        <div
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider transition-opacity duration-200"
          style={{
            fontFamily: 'var(--font-rajdhani)',
            color: C.orange,
            opacity: showError ? 1 : 0.2,
            textShadow: showError ? `0 0 30px ${C.orange}80` : 'none',
          }}
        >
          ERROR: MODO &quot;YO YA SÉ&quot;
        </div>

        {/* Terminal output */}
        <div
          className="text-left text-sm sm:text-base lg:text-lg max-w-2xl w-full px-5 py-4 rounded"
          style={{
            background: `${C.panel}cc`,
            color: C.gray,
            border: `1px solid ${C.cyan}20`,
            fontFamily: 'var(--font-roboto-mono)',
          }}
        >
          <p>&gt; Detectando patrones de comportamiento...</p>
          <p style={{ color: C.orange }}>&gt; WARNING: Sesgo cognitivo activo</p>
          <p style={{ color: C.red }}>&gt; CRITICAL: Modo &quot;Ya lo sé&quot; bloqueando aprendizaje</p>
          <p style={{ color: C.cyan }}>&gt; Recomendación: Ejecutar auditoría de sistema</p>
        </div>

        {/* CTA */}
        <button
          onClick={onNext}
          className="mt-4 px-8 py-4 text-lg font-bold uppercase tracking-widest rounded transition-all hover:scale-105"
          style={{
            fontFamily: 'var(--font-rajdhani)',
            background: `linear-gradient(135deg, ${C.cyan}, ${C.cyan}cc)`,
            color: C.bg,
            boxShadow: `0 0 30px ${C.cyan}40`,
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
          OSCILACIONES: <span style={{ color: C.cyan }}>MITO VS REALIDAD</span>
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
                border: `1px solid ${states[i] ? C.cyan : C.orange}30`,
                boxShadow: states[i] ? `0 0 20px ${C.cyan}15` : 'none',
              }}
              onClick={() => toggle(i)}
            >
              {/* Mito */}
              <span
                className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider flex-1 text-left transition-all"
                style={{
                  fontFamily: 'var(--font-rajdhani)',
                  color: states[i] ? `${C.orange}40` : C.orange,
                  textDecoration: states[i] ? 'line-through' : 'none',
                }}
              >
                {t.mito}
              </span>

              {/* Toggle switch */}
              <div
                className="relative w-14 h-7 rounded-full transition-all flex-shrink-0"
                style={{
                  background: states[i] ? C.cyan : `${C.orange}60`,
                }}
              >
                <div
                  className="absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300"
                  style={{
                    left: states[i] ? '30px' : '2px',
                    background: C.white,
                    boxShadow: `0 0 8px ${states[i] ? C.cyan : C.orange}60`,
                  }}
                />
              </div>

              {/* Realidad */}
              <span
                className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider flex-1 text-right transition-all"
                style={{
                  fontFamily: 'var(--font-rajdhani)',
                  color: states[i] ? C.cyan : `${C.cyan}40`,
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
              background: `linear-gradient(135deg, ${C.green}, ${C.cyan})`,
              color: C.bg,
              border: 'none',
              cursor: 'pointer',
              boxShadow: `0 0 30px ${C.green}40`,
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
          INSTALANDO <span style={{ color: C.gold }}>KERNEL</span>
        </h2>

        {/* Terminal */}
        <div
          className="w-full max-w-2xl rounded-lg overflow-hidden"
          style={{ border: `1px solid ${C.cyan}30`, background: '#0d1117' }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{ background: C.panel, borderBottom: `1px solid ${C.cyan}20` }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: C.red }} />
            <div className="w-3 h-3 rounded-full" style={{ background: C.gold }} />
            <div className="w-3 h-3 rounded-full" style={{ background: C.green }} />
            <span className="ml-3 text-xs" style={{ color: C.darkGray }}>
              system_install.sh
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-6 text-sm sm:text-base lg:text-lg min-h-[280px]" style={{ fontFamily: 'var(--font-roboto-mono)' }}>
            {lines.map((line, i) => (
              <div
                key={i}
                className="mb-1.5"
                style={{
                  color: line.startsWith('✓') ? C.green : line.includes('Compilando') ? C.gold : C.gray,
                }}
              >
                {line}
              </div>
            ))}
            {!done && <span className="animate-pulse" style={{ color: C.cyan }}>█</span>}
          </div>
        </div>

        {/* Progress bar */}
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
                background: done
                  ? `linear-gradient(90deg, ${C.green}, ${C.cyan})`
                  : `linear-gradient(90deg, ${C.cyan}, ${C.gold})`,
                boxShadow: `0 0 10px ${C.cyan}60`,
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
              background: `linear-gradient(135deg, ${C.green}, ${C.cyan})`,
              color: C.bg,
              border: 'none',
              cursor: 'pointer',
              boxShadow: `0 0 30px ${C.green}40`,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const idCounter = useRef(0);
  const flowCountRef = useRef(0);

  // Position constants
  const USER_X = 30; // % from left
  const SYSTEM_X = 75; // % from left

  useEffect(() => {
    let lastSpawn = 0;
    const animate = (timestamp: number) => {
      // Spawn particles
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

      // Update particles
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
            // Release stuck particles toward the system
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

      // Remove off-screen
      particlesRef.current = particlesRef.current.filter((p) => p.x < 100);

      // Calculate load — drops in router mode
      const stuck = particlesRef.current.filter((p) => p.state === 'stuck').length;
      setLoad(Math.min(stuck * 8, 100));
      setFlow(flowCountRef.current);

      // Render
      if (containerRef.current) {
        const el = containerRef.current;
        // Clear old dots
        el.querySelectorAll('.dot').forEach((d) => d.remove());
        particlesRef.current.forEach((p) => {
          const dot = document.createElement('div');
          dot.className = 'dot';
          dot.style.cssText = `position:absolute;width:6px;height:6px;border-radius:50%;left:${p.x}%;top:${p.y}%;transition:none;pointer-events:none;background:${
            p.state === 'stuck' ? C.red : p.state === 'routed' ? C.cyan : C.white
          };box-shadow:0 0 4px ${p.state === 'stuck' ? C.red : p.state === 'routed' ? C.cyan : C.white}60;`;
          el.appendChild(dot);
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mode]);

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
        <LawTitle number={1} title="DESVIAR HABILIDADES" subtitle="EL ENRUTADOR" />

        {/* Mode buttons */}
        <div className="flex gap-3 mb-2">
          <ModeButton
            label="MODO MANUAL"
            active={mode === 'manual'}
            color={C.orange}
            onClick={() => { setMode('manual'); flowCountRef.current = 0; }}
          />
          <ModeButton
            label="MODO ENRUTADOR"
            active={mode === 'router'}
            color={C.cyan}
            onClick={() => setMode('router')}
          />
        </div>

        {/* Simulation area */}
        <div
          ref={containerRef}
          className="relative w-full max-w-3xl rounded-lg overflow-hidden"
          style={{
            height: 'clamp(320px, 40vh, 500px)',
            background: `${C.panel}`,
            border: `1px solid ${mode === 'manual' ? C.orange : C.cyan}30`,
            backgroundImage: `
              linear-gradient(${C.cyan}08 1px, transparent 1px),
              linear-gradient(90deg, ${C.cyan}08 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        >
          {/* User node */}
          <div
            className={`absolute flex items-center justify-center rounded-full text-xs font-bold uppercase transition-all duration-300${load > 80 && mode === 'manual' ? ' animate-pulse' : ''}`}
            style={{
              width: '60px',
              height: '60px',
              left: `${USER_X}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: mode === 'manual' ? (load > 80 ? C.red : load > 40 ? C.orange : C.green) : C.green,
              boxShadow: `0 0 ${load > 80 ? 40 : 15}px ${mode === 'manual' ? (load > 80 ? C.red : load > 40 ? C.orange : C.green) : C.green}80`,
              fontFamily: 'var(--font-rajdhani)',
              color: C.bg,
            }}
          >
            {load > 80 && mode === 'manual' ? '¡ERROR!' : 'TÚ'}
          </div>

          {/* System node */}
          <div
            className="absolute flex items-center justify-center rounded-full text-xs font-bold uppercase"
            style={{
              width: '80px',
              height: '80px',
              left: `${SYSTEM_X}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: C.cyan,
              boxShadow: `0 0 25px ${C.cyan}60`,
              fontFamily: 'var(--font-rajdhani)',
              color: C.bg,
            }}
          >
            SISTEMA
          </div>
        </div>

        {/* Metrics */}
        <div className="flex gap-6 text-xs sm:text-sm lg:text-base" style={{ fontFamily: 'var(--font-roboto-mono)', color: C.gray }}>
          <span>
            CARGA COGNITIVA:{' '}
            <span style={{ color: load > 60 ? C.red : C.green }}>{load}%</span>
          </span>
          <span>
            FLUJO AL SISTEMA: <span style={{ color: C.cyan }}>{flow}</span>
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
  const idRef = useRef(1);

  const addLinear = () => {
    const angle = Math.random() * Math.PI * 2;
    const dist = 8 + Math.random() * 12;
    const nx = Math.max(5, Math.min(95, 50 + Math.cos(angle) * dist));
    const ny = Math.max(5, Math.min(95, 50 + Math.sin(angle) * dist));
    setNodes((prev) => [
      ...prev,
      { id: idRef.current++, x: nx, y: ny, parentId: 0, color: '#3498db' },
    ]);
  };

  const multiply = () => {
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
          color: C.purple,
        });
      });
      return [...prev, ...newNodes];
    });
  };

  const reset = () => {
    idRef.current = 1;
    setNodes([{ id: 0, x: 50, y: 50, parentId: null, color: C.white }]);
  };

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
        <LawTitle number={2} title="ENSEÑAR A ENSEÑAR" subtitle="LA FRACTAL" />

        {/* Buttons */}
        <div className="flex gap-3 mb-2">
          <ModeButton label="REINICIAR" active={false} color={C.darkGray} onClick={reset} />
          <ModeButton label="SUMAR (+1)" active={false} color="#3498db" onClick={addLinear} />
          <ModeButton label="ENSEÑAR A ENSEÑAR (×2)" active={false} color={C.purple} onClick={multiply} />
        </div>

        {/* Network area */}
        <div
          className="relative w-full max-w-3xl rounded-lg overflow-hidden"
          style={{
            height: 'clamp(340px, 40vh, 500px)',
            background: C.panel,
            border: `1px solid ${C.cyan}20`,
          }}
        >
          {/* Lines */}
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

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute rounded-full transition-all duration-300"
              style={{
                width: node.id === 0 ? '14px' : '8px',
                height: node.id === 0 ? '14px' : '8px',
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
                background: node.color,
                boxShadow: `0 0 6px ${node.color}80`,
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="flex gap-6 text-xs sm:text-sm lg:text-base" style={{ fontFamily: 'var(--font-roboto-mono)', color: C.gray }}>
          <span>
            NODOS: <span style={{ color: C.cyan }}>{nodes.length}</span>
          </span>
          <span>
            FACTOR: <span style={{ color: C.purple }}>×{Math.ceil(Math.log2(nodes.length + 1))}</span>
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
   ═══════════════════════════════════════════════════════════ */
const BLOCKS = [
  { name: 'INTEGRIDAD', label: 'CIMENTACIÓN CRÍTICA', color: `linear-gradient(135deg, #27ae60, #2ecc71)`, textDark: false },
  { name: 'UNIDAD', label: 'COHESIÓN ESTRUCTURAL', color: C.panel, textDark: false },
  { name: 'CALIDAD', label: 'ESTÁNDAR GLOBAL', color: C.panel, textDark: false },
  { name: 'EXCELENCIA', label: 'TOLERANCIA CERO', color: C.panel, textDark: false },
  { name: 'COMPROMISO', label: 'CARGA PERMANENTE', color: C.panel, textDark: false },
  { name: 'INNOVACIÓN', label: 'ADAPTACIÓN CONTINUA', color: C.panel, textDark: false },
  { name: 'LIDERAZGO', label: 'CORONACIÓN', color: `linear-gradient(135deg, #f39c12, #f1c40f)`, textDark: true },
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

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
        <LawTitle number={3} title="EDIFICACIÓN Y VALORES" subtitle="LA ESTRUCTURA" />

        {/* Build button */}
        <button
          onClick={startBuild}
          disabled={building}
          className="px-8 py-4 font-bold uppercase tracking-widest text-sm lg:text-base transition-all rounded-lg select-none"
          style={{
            fontFamily: 'var(--font-rajdhani)',
            background: building ? `${C.green}20` : C.panel,
            color: building ? C.green : C.cyan,
            border: `2px solid ${building ? C.green : C.cyan}60`,
            cursor: building ? 'default' : 'pointer',
            boxShadow: building ? 'none' : `0 0 20px ${C.cyan}15`,
          }}
        >
          {building ? '✓ CONSTRUYENDO...' : 'INICIAR SECUENCIA DE CONSTRUCCIÓN'}
        </button>

        {/* Tower */}
        <div
          className="relative w-full max-w-md flex flex-col-reverse items-center gap-1"
          style={{ minHeight: 'clamp(340px, 40vh, 500px)', justifyContent: 'flex-start' }}
        >
          {/* Ground line */}
          <div
            className="w-full h-0.5 rounded"
            style={{ background: `${C.cyan}30`, marginBottom: '4px' }}
          />

          {BLOCKS.map((block, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center transition-all duration-700"
              style={{
                width: i === 0 ? '90%' : i === 6 ? '60%' : `${85 - i * 3}%`,
                height: '42px',
                background: typeof block.color === 'string' && block.color.startsWith('linear') ? block.color : block.color,
                border: `1px solid ${i === 0 ? '#2ecc71' : i === 6 ? C.gold : C.cyan}40`,
                borderRadius: '4px',
                opacity: placed[i] ? 1 : 0,
                transform: placed[i] ? 'translateY(0) scale(1)' : 'translateY(-60px) scale(0.9)',
                transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: i === 6 && placed[i] ? `0 0 30px ${C.gold}50` : 'none',
              }}
            >
              <span
                className="font-bold text-xs sm:text-sm lg:text-base tracking-wider uppercase"
                style={{
                  fontFamily: 'var(--font-rajdhani)',
                  color: block.textDark ? C.bg : C.white,
                }}
              >
                {block.name}
              </span>

              {/* Tech label */}
              {placed[i] && (
                <span
                  className="absolute -right-2 sm:right-[-120px] text-[10px] tracking-wider transition-opacity duration-500"
                  style={{
                    color: C.darkGray,
                    fontFamily: 'var(--font-roboto-mono)',
                    opacity: placed[i] ? 0.7 : 0,
                    display: 'none',
                  }}
                  data-desktop="true"
                >
                  // {block.label}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm lg:text-base text-center max-w-md" style={{ color: C.darkGray }}>
          La Edificación no es &quot;halagar&quot;, es construir una estructura de confianza. Sin valores, la torre se cae.
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
}

function SlideLey4() {
  const [mode, setMode] = useState<'push' | 'pull'>('push');
  const containerRef = useRef<HTMLDivElement>(null);
  const prospectsRef = useRef<Prospect[]>([]);
  const heroRef = useRef({ x: 50, y: 50 });
  const mouseRef = useRef({ x: 50, y: 50 });
  const rafRef = useRef<number>(0);

  // Initialize prospects
  useEffect(() => {
    prospectsRef.current = Array.from({ length: 35 }, () => ({
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const modeNow = mode;
      const hero = heroRef.current;

      if (modeNow === 'push') {
        hero.x += (mouseRef.current.x - hero.x) * 0.08;
        hero.y += (mouseRef.current.y - hero.y) * 0.08;
      } else {
        hero.x += (50 - hero.x) * 0.05;
        hero.y += (50 - hero.y) * 0.05;
      }

      prospectsRef.current.forEach((p) => {
        const dx = p.x - hero.x;
        const dy = p.y - hero.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (modeNow === 'push') {
          // Repulsion
          if (dist < 25) {
            const force = ((25 - dist) / 25) * 0.8;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        } else {
          // Attraction
          const force = 30 / (dist * dist + 80);
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }

        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;

        // Boundaries
        if (p.x < 2) { p.x = 2; p.vx *= -0.5; }
        if (p.x > 98) { p.x = 98; p.vx *= -0.5; }
        if (p.y < 2) { p.y = 2; p.vy *= -0.5; }
        if (p.y > 98) { p.y = 98; p.vy *= -0.5; }
      });

      // Render
      if (containerRef.current) {
        const el = containerRef.current;
        // Hero
        const heroEl = el.querySelector('.hero-node') as HTMLElement;
        if (heroEl) {
          heroEl.style.left = `${hero.x}%`;
          heroEl.style.top = `${hero.y}%`;
          heroEl.style.background = modeNow === 'push' ? C.red : C.gold;
          heroEl.style.boxShadow = `0 0 ${modeNow === 'pull' ? 40 : 15}px ${modeNow === 'push' ? C.red : C.gold}80`;
        }

        // Prospects
        const dots = el.querySelectorAll('.prospect-dot') as NodeListOf<HTMLElement>;
        prospectsRef.current.forEach((p, i) => {
          if (dots[i]) {
            dots[i].style.left = `${p.x}%`;
            dots[i].style.top = `${p.y}%`;
            const dx = p.x - hero.x;
            const dy = p.y - hero.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (modeNow === 'push' && dist < 25) {
              dots[i].style.background = C.red;
            } else if (modeNow === 'pull' && dist < 20) {
              dots[i].style.background = C.gold;
            } else {
              dots[i].style.background = C.gray;
            }
          }
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mode !== 'push') return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
  };

  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
        <LawTitle number={4} title="PROMOVER VS INVITAR" subtitle="EL MAGNETISMO" />

        {/* Mode buttons */}
        <div className="flex gap-3 mb-2">
          <ModeButton
            label="MODO INVITAR (PERSEGUIR)"
            active={mode === 'push'}
            color={C.orange}
            onClick={() => setMode('push')}
          />
          <ModeButton
            label="MODO PROMOVER (ATRAER)"
            active={mode === 'pull'}
            color={C.gold}
            onClick={() => setMode('pull')}
          />
        </div>

        {/* Simulation */}
        <div
          ref={containerRef}
          className="relative w-full max-w-3xl rounded-lg overflow-hidden"
          style={{
            height: 'clamp(340px, 40vh, 500px)',
            background: C.panel,
            border: `1px solid ${mode === 'push' ? C.orange : C.gold}30`,
            cursor: mode === 'push' ? 'crosshair' : 'default',
          }}
          onMouseMove={handleMouseMove}
        >
          {/* Pulse waves (pull mode) */}
          {mode === 'pull' && (
            <>
              <div className="pulse-wave" style={{ animationDelay: '0s' }} />
              <div className="pulse-wave" style={{ animationDelay: '1s' }} />
            </>
          )}

          {/* Hero node */}
          <div
            className="hero-node absolute rounded-full flex items-center justify-center text-xs font-bold uppercase transition-colors duration-300"
            style={{
              width: '40px',
              height: '40px',
              transform: 'translate(-50%, -50%)',
              fontFamily: 'var(--font-rajdhani)',
              color: C.bg,
              zIndex: 10,
            }}
          >
            {mode === 'push' ? 'TÚ' : '★'}
          </div>

          {/* Prospect dots */}
          {Array.from({ length: 35 }).map((_, i) => (
            <div
              key={i}
              className="prospect-dot absolute rounded-full"
              style={{
                width: '7px',
                height: '7px',
                transform: 'translate(-50%, -50%)',
                transition: 'background 0.3s',
                pointerEvents: 'none',
              }}
            />
          ))}
        </div>

        <p className="text-xs sm:text-sm lg:text-base text-center max-w-md" style={{ color: C.darkGray }}>
          {mode === 'push'
            ? 'Mueve el cursor para perseguir. Observa cómo huyen.'
            : 'No persigas. Crea un campo de atracción (Community-Led Growth).'}
        </p>
      </div>
    </SlideContainer>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 8: DEPLOY — CIERRE
   ═══════════════════════════════════════════════════════════ */
const LAWS_SUMMARY = [
  { num: 1, title: 'DESVIAR HABILIDADES', color: C.cyan },
  { num: 2, title: 'ENSEÑAR A ENSEÑAR', color: C.purple },
  { num: 3, title: 'EDIFICACIÓN + VALORES', color: C.green },
  { num: 4, title: 'PROMOVER VS INVITAR', color: C.gold },
];

function LawIcon({ num, color, size = 24 }: { num: number; color: string; size?: number }) {
  const props = { width: size, height: size, fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (num) {
    case 1: // Router / redirect arrows
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M13 5l7 7-7 7" /><path d="M6 5l7 7-7 7" />
        </svg>
      );
    case 2: // Network / fractal nodes
      return (
        <svg {...props} viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" />
          <path d="M12 7.5v4M10.5 13l-4 4M13.5 13l4 4" />
        </svg>
      );
    case 3: // Building / structure
      return (
        <svg {...props} viewBox="0 0 24 24">
          <rect x="4" y="14" width="16" height="7" rx="1" /><rect x="6" y="8" width="12" height="6" rx="1" /><rect x="8" y="3" width="8" height="5" rx="1" />
        </svg>
      );
    case 4: // Magnet / attraction
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M6 3v6a6 6 0 0 0 12 0V3" /><path d="M6 3h3v6" /><path d="M15 3h3v6" />
        </svg>
      );
    default:
      return null;
  }
}

function SlideDeploy() {
  return (
    <SlideContainer>
      <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-4">
        <div
          className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded"
          style={{ color: C.green, border: `1px solid ${C.green}40` }}
        >
          ✓ SISTEMA COMPILADO CON ÉXITO
        </div>

        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-rajdhani)', color: C.white }}
        >
          SISTEMA LISTO PARA
          <br />
          <span style={{ color: C.gold }}>DESPLIEGUE</span>
        </h2>

        {/* Laws grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl">
          {LAWS_SUMMARY.map((law) => (
            <div
              key={law.num}
              className="flex items-center gap-3 px-4 py-3 lg:px-5 lg:py-4 rounded-lg"
              style={{
                background: `${C.panel}`,
                border: `1px solid ${law.color}30`,
              }}
            >
              <LawIcon num={law.num} color={law.color} size={28} />
              <div className="text-left">
                <div className="text-[10px] lg:text-xs tracking-wider" style={{ color: law.color, fontFamily: 'var(--font-roboto-mono)' }}>
                  LEY {law.num}
                </div>
                <div
                  className="text-xs sm:text-sm lg:text-base font-bold uppercase"
                  style={{ fontFamily: 'var(--font-rajdhani)', color: C.white }}
                >
                  {law.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="mt-4 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl font-bold uppercase tracking-widest rounded transition-all hover:scale-105"
          style={{
            fontFamily: 'var(--font-rajdhani)',
            background: `linear-gradient(135deg, ${C.gold}, ${C.orange})`,
            color: C.bg,
            border: 'none',
            cursor: 'pointer',
            boxShadow: `0 0 40px ${C.gold}40`,
          }}
        >
          INICIAR MIGRACIÓN A MODO EMPRESARIO
        </button>

        {/* Footer */}
        <div className="mt-6 text-xs lg:text-sm tracking-widest" style={{ color: C.darkGray }}>
          ARQUITECTURA POR{' '}
          <span style={{ color: C.gold }}>LUIS CABREJO</span>
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
      <div className="text-sm lg:text-base tracking-[0.3em] uppercase mb-2" style={{ color: C.cyan, fontFamily: 'var(--font-roboto-mono)' }}>
        // LEY_{number}.exe — {subtitle}
      </div>
      <h2
        className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
        style={{ fontFamily: 'var(--font-rajdhani)', color: C.white }}
      >
        LEY {number}: <span style={{ color: C.gold }}>{title}</span>
      </h2>
    </div>
  );
}

function ModeButton({
  label,
  active,
  color,
  onClick,
}: {
  label: string;
  active: boolean;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 sm:px-6 py-2.5 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider transition-all"
      style={{
        fontFamily: 'var(--font-rajdhani)',
        background: active ? `${color}20` : 'transparent',
        color: active ? color : C.darkGray,
        border: `1px solid ${active ? color : C.darkGray}40`,
        cursor: 'pointer',
        boxShadow: active ? `0 0 15px ${color}20` : 'none',
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
  .nav-btn:hover {
    background: rgba(0, 159, 223, 0.15) !important;
    border-color: rgba(0, 159, 223, 0.6) !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(0, 159, 223, 0.2);
  }

  .pulse-wave {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid ${C.gold};
    opacity: 0;
    animation: ripple 2s infinite ease-out;
    pointer-events: none;
  }

  @keyframes ripple {
    0% {
      width: 40px;
      height: 40px;
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
`;

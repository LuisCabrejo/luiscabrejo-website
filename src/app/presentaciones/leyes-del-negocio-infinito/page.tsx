'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ═══════════════════════════════════════════════════════════
   PALETA DE COLORES — CLINICAL & QUIET LUXURY (LC BRAND)
   ═══════════════════════════════════════════════════════════ */
const C = {
  bg: '#050505',           // Carbono absoluto
  panel: '#111111',        // Panel gris profundo
  white: '#ffffff',        // Blanco puro
  gray: '#94A3B8',         // Gris técnico (Slate)
  darkGray: '#334155',     // Gris sutil para tarjeta de presentación
  gold: '#FFD700',         // Oro Champaña (Soberanía)
  border: '#1E293B',       // Borde quirúrgico
};

const TOTAL_SLIDES = 7;

export default function AcademiaLiderazgoPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((n: number) => {
    if (n >= 0 && n < TOTAL_SLIDES) setCurrentSlide(n);
  }, []);

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
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

  const handleScreenClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('[data-interactive]')) {
      return;
    }
    const screenWidth = window.innerWidth;
    if (e.clientX < screenWidth / 3) prev();
    else if (e.clientX > (screenWidth * 2) / 3) next();
  }, [next, prev]);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden select-none"
      style={{ background: C.bg, fontFamily: 'monospace' }}
      onClick={handleScreenClick}
    >
      {/* Barra de progreso superior */}
      <div className="absolute top-0 left-0 w-full h-1 z-50" style={{ background: C.panel }}>
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%`,
            background: C.gold,
            boxShadow: `0 0 15px ${C.gold}`,
          }}
        />
      </div>

      {/* Navegación de Diapositivas */}
      <div className="w-full h-full">
        {currentSlide === 0 && <SlideIntro onNext={next} />}
        {currentSlide === 1 && <SlideRiquezaEstatus />}
        {currentSlide === 2 && <SlideLeyesInfinitas />}
        {currentSlide === 3 && <SlideAccountability />}
        {currentSlide === 4 && <SlideRitmoConstructor />}
        {currentSlide === 5 && <SlideLiderImparable />}
        {currentSlide === 6 && <SlideCierreDeploy />}
      </div>

      {/* Contador de estado */}
      <div className="absolute bottom-6 right-8 z-50 text-xs font-mono tracking-widest" style={{ color: C.darkGray }}>
        [ S_ID: 0{currentSlide + 1} // 0{TOTAL_SLIDES} ]
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 0: INTRODUCCIÓN MINIMALISTA MULTI-PAÍS
   ═══════════════════════════════════════════════════════════ */
function SlideIntro({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 relative bg-[#050505]" onClick={onNext}>
      <div className="flex flex-col gap-3 max-w-5xl">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none">
          LEYES DEL<br />
          <span style={{ color: '#FFD700', textShadow: '0 0 50px rgba(255, 215, 0, 0.15)' }}>
            NEGOCIO INFINITO
          </span>
        </h1>
      </div>

      {/* Tarjeta de Presentación Integrada en la Base */}
      <div className="absolute bottom-16 border-t pt-6 w-full max-w-md font-mono text-xs md:text-sm tracking-[0.2em]" style={{ borderColor: C.border, color: C.darkGray }}>
        DISEÑO E INFRAESTRUCTURA POR <span className="text-white font-bold">LUIS CABREJO PARRA</span> // DIAMANTE GANO EXCEL
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 1: PILAR 1 — RIQUEZA VS ESTATUS
   ═══════════════════════════════════════════════════════════ */
function SlideRiquezaEstatus() {
  const [activeTab, setActiveTab] = useState<'ninguno' | 'estatus' | 'riqueza'>('ninguno');

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-20 gap-8 relative">
      <div className="text-center">
        <span className="text-xs font-mono tracking-[0.3em]" style={{ color: C.gold }}>// PILAR_01 // EL ENFOQUE CORRECTO</span>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mt-1">Riqueza vs. Estatus</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl" data-interactive="true">
        {/* Tarjeta Estatus */}
        <div
          onClick={() => setActiveTab('estatus')}
          className="p-10 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[160px]"
          style={{
            background: C.panel,
            borderColor: activeTab === 'estatus' ? C.white : C.border,
            opacity: activeTab === 'riqueza' ? 0.2 : 1,
          }}
        >
          <h3 className="text-2xl font-bold tracking-wider text-white font-mono uppercase">// EL JUEGO DEL ESTATUS</h3>
          <span className="text-xs font-mono uppercase mt-4 tracking-widest text-red-400 font-bold">[ ALIMENTA EL EGO // ESTANCAMIENTO INVISIBLE ]</span>
        </div>

        {/* Tarjeta Riqueza */}
        <div
          onClick={() => setActiveTab('riqueza')}
          className="p-10 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[160px]"
          style={{
            background: C.panel,
            borderColor: activeTab === 'riqueza' ? C.gold : C.border,
            opacity: activeTab === 'estatus' ? 0.2 : 1,
          }}
        >
          <h3 className="text-2xl font-bold tracking-wider font-mono uppercase" style={{ color: C.gold }}>// EL JUEGO DE LA RIQUEZA</h3>
          <span className="text-xs font-mono uppercase mt-4 tracking-widest font-bold" style={{ color: C.gold }}>[ COMPRA TU LIBERTAD // ENFOQUE SISTÉMICO ]</span>
        </div>
      </div>

      <div className="text-sm md:text-base font-mono text-center max-w-3xl text-slate-400 px-4">
        El estatus te da títulos corporativos vacíos; la riqueza compra tu soberanía legal sobre el tiempo.
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 2: PILAR 2 — LAS 3 LEYES DEL NEGOCIO INFINITO
   ═══════════════════════════════════════════════════════════ */
function SlideLeyesInfinitas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const leyes = [
    { num: '01', title: 'LA LEY DE LA DIRECCIÓN', sub: 'Juicio estratégico > Esfuerzo bruto' },
    { num: '02', title: 'LA LEY DEL TIEMPO', sub: 'Interés compuesto de una década' },
    { num: '03', title: 'LA LEY DEL ECOSISTEMA', sub: 'Dinámica de suma positiva regional' }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 gap-12">
      <div className="text-center">
        <span className="text-xs font-mono tracking-[0.3em]" style={{ color: C.gold }}>// PILAR_02 // ARQUITECTURA DE LA RED EXPONENCIAL</span>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mt-1">Las 3 Leyes del Negocio Infinito</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl" data-interactive="true">
        {leyes.map((ley, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="p-8 rounded-xl border transition-all duration-300 flex flex-col justify-center gap-2 min-h-[140px]"
            style={{
              background: C.panel,
              borderColor: hoveredIndex === i ? C.gold : C.border,
              transform: hoveredIndex === i ? 'translateY(-4px)' : 'translateY(0)'
            }}
          >
            <div className="text-3xl font-black font-mono" style={{ color: hoveredIndex === i ? C.gold : C.darkGray }}>
              {ley.num}
            </div>
            <h4 className="text-lg font-bold tracking-wide text-white font-mono uppercase">{ley.title}</h4>
            <div className="text-xs font-mono uppercase tracking-wider" style={{ color: C.gold }}>{ley.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 3: PILAR 3 — RESPONSABILIDAD RADICAL
   ═══════════════════════════════════════════════════════════ */
function SlideAccountability() {
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 gap-8">
      <div className="text-center">
        <span className="text-xs font-mono tracking-[0.3em]" style={{ color: C.gold }}>// PILAR_03 // COMPROMISO ABSOLUTO</span>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mt-1">Responsabilidad Radical</h2>
      </div>

      <div className="flex flex-col items-center gap-6 w-full max-w-2xl" data-interactive="true">
        {/* Toggle Selector */}
        <div
          onClick={() => setToggleState(!toggleState)}
          className="flex items-center justify-between p-4 rounded-xl border w-full cursor-pointer transition-all duration-300"
          style={{ background: C.panel, borderColor: toggleState ? C.gold : C.border }}
        >
          <span className="text-xs font-mono tracking-wider text-slate-400 uppercase font-bold">[ ENFOQUE: {toggleState ? 'EMPRESARIO (ACCOUNTABILITY)' : 'AMATEUR (EVASIÓN)'} ]</span>
          <div className="w-14 h-7 rounded-full relative transition-colors" style={{ background: toggleState ? C.gold : C.darkGray }}>
            <div className="w-6 h-6 rounded-full absolute top-0.5 transition-all duration-300" style={{ left: toggleState ? '30px' : '2px', background: C.bg }} />
          </div>
        </div>

        {/* Contenedor de Citas y Efectos */}
        <div className="w-full p-8 rounded-xl border min-h-[220px] flex flex-col justify-between transition-all duration-500" style={{ background: C.panel, borderColor: C.border }}>
          {!toggleState ? (
            <div className="space-y-4">
              <div className="text-red-400 font-mono text-xs tracking-widest font-bold">// EL MARCO DE LA EVASIÓN</div>
              <p className="text-xl md:text-2xl italic text-slate-300 font-light">&quot;Si usted arranca a usted le va bien... A usted le queda fácil, usted conoce mucha gente.&quot;</p>
              <div className="text-xs text-slate-500 font-mono">Efecto: Traslada la responsabilidad del éxito al entorno o al nuevo socio. Bloqueo inmediato de escala.</div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="font-mono text-xs tracking-widest font-bold" style={{ color: C.gold }}>// ACCOUNTABILITY EXTREMA</div>
              <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">&quot;Si usted arranca, yo me hago 100% responsable de enseñarle el camino. Mi nombre está en la línea.&quot;</p>
              <div className="text-xs font-mono" style={{ color: C.gray }}>Efecto: Señalización creíble ante el mercado. Captura inmediata de confianza y apalancamiento masivo.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 4: PILAR 4 — EL RITMO DEL CONSTRUCTOR
   ═══════════════════════════════════════════════════════════ */
function SlideRitmoConstructor() {
  const [sliderVal, setSliderVal] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 gap-8">
      <div className="text-center">
        <span className="text-xs font-mono tracking-[0.3em]" style={{ color: C.gold }}>// PILAR_04 // PARADOJA DE RENDIMIENTO SISTÉMICO</span>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mt-1">El Ritmo del Constructor</h2>
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-6" data-interactive="true">
        <div className="p-6 rounded-xl border flex flex-col gap-4" style={{ background: C.panel, borderColor: C.border }}>
          <div className="flex justify-between text-xs font-mono text-slate-400">
            <span>[ MACRO-TIEMPO: AÑOS ]</span>
            <span style={{ color: C.gold }}>CALIBRACIÓN DE VELOCIDAD</span>
            <span>[ MICRO-TIEMPO: HOY ]</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderVal}
            onChange={(e) => setSliderVal(Number(e.target.value))}
            className="w-full accent-white bg-slate-800 h-2 rounded-lg cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border flex flex-col justify-between min-h-[180px]" style={{ background: C.panel, borderColor: C.border }}>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest font-bold text-white mb-2">// IMPACIENCIA EN EL MICRO-TIEMPO</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Velocidad obsesiva en la acción diaria. El constructor ejecuta sprints volcánicos e inmediatos para romper la inercia antes de que la inspiración caduque.</p>
            </div>
            <div className="h-2 rounded-full overflow-hidden bg-slate-900 mt-4">
              <div className="h-full bg-white transition-all duration-300" style={{ width: `${sliderVal}%` }} />
            </div>
          </div>

          <div className="p-6 rounded-xl border flex flex-col justify-between min-h-[180px]" style={{ background: C.panel, borderColor: C.border }}>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest font-bold mb-2" style={{ color: C.gold }}>// PACIENCIA EN EL MACRO-TIEMPO</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Paciencia para sembrar a largo plazo. El verdadero crecimiento toma tiempo, pero el efecto compuesto multiplica tu organización de forma indestructible.</p>
            </div>
            <div className="h-2 rounded-full overflow-hidden bg-slate-900 mt-4">
              <div className="h-full transition-all duration-300" style={{ width: `${100 - sliderVal}%`, background: C.gold }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 5: PILAR 5 — EL LÍDER IMPARABLE
   ═══════════════════════════════════════════════════════════ */
function SlideLiderImparable() {
  const [constValue, setConstValue] = useState(20);
  const [sellValue, setSellValue] = useState(20);

  const isImparable = constValue > 70 && sellValue > 70;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 gap-8">
      <div className="text-center">
        <span className="text-xs font-mono tracking-[0.3em]" style={{ color: C.gold }}>// PILAR_05 // LA TRÍADA DE LA VENTAJA ABSOLUTA</span>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mt-1">El Líder Imparable</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl" data-interactive="true">
        <div className="p-6 rounded-xl border flex flex-col justify-between gap-4" style={{ background: C.panel, borderColor: C.border }}>
          <div>
            <h4 className="font-mono text-sm font-bold text-white uppercase mb-2">// APRENDER A CONSTRUIR</h4>
            <p className="text-xs leading-relaxed" style={{ color: C.gray }}>La habilidad de estructurar proyectos, solidificar infraestructuras duplicables y blindar sistemas operativos que corran 24/7 sin tu presencia.</p>
          </div>
          <div className="space-y-2">
            <input type="range" min="0" max="100" value={constValue} onChange={(e) => setConstValue(Number(e.target.value))} className="w-full accent-white" />
            <div className="text-right text-xs font-mono text-slate-500">MÓDULO: {constValue}%</div>
          </div>
        </div>

        <div
          className="p-6 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-500 min-h-[220px]"
          style={{
            background: isImparable ? C.white : C.panel,
            borderColor: isImparable ? C.gold : C.border,
            boxShadow: isImparable ? `0 0 50px ${C.gold}40` : 'none'
          }}
        >
          {isImparable ? (
            <div>
              <h3 className="text-3xl font-black font-mono text-black uppercase tracking-tighter">[ IMPARABLE ]</h3>
              <p className="text-xs text-slate-900 font-mono uppercase mt-2 font-bold tracking-widest">Soberanía de Red Conquistada</p>
            </div>
          ) : (
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">// MATRIZ DE ESCALA</div>
              <p className="text-sm text-slate-400">Sincroniza los reguladores de Construcción y Venta por encima del 70%.</p>
            </div>
          )}
        </div>

        <div className="p-6 rounded-xl border flex flex-col justify-between gap-4" style={{ background: C.panel, borderColor: C.border }}>
          <div>
            <h4 className="font-mono text-sm font-bold uppercase mb-2" style={{ color: C.gold }}>// APRENDER A VENDER</h4>
            <p className="text-xs leading-relaxed" style={{ color: C.gray }}>La capacidad maestra de comunicar visiones a gran escala, inspirar con certeza científica, persuadir y movilizar el talento humano.</p>
          </div>
          <div className="space-y-2">
            <input type="range" min="0" max="100" value={sellValue} onChange={(e) => setSellValue(Number(e.target.value))} className="w-full accent-amber-400" />
            <div className="text-right text-xs font-mono text-slate-500">MÓDULO: {sellValue}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SLIDE 6: DEPLOY — CUBIERTA FINAL & SELLO LC
   ═══════════════════════════════════════════════════════════ */
function SlideCierreDeploy() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 gap-6 relative">
      <div className="text-xs font-mono tracking-[0.4em] uppercase p-2 border rounded" style={{ color: C.gold, borderColor: C.border, background: C.panel }}>
        ✓ COMPILACIÓN INTEGRAL COMPLETADA
      </div>

      <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
        DECIDE EN ESTE INSTANTE:<br />
        <span style={{ color: C.gray }}>¿SOBERANÍA O DEPENDENCIA?</span>
      </h2>

      <div className="text-sm md:text-base max-w-xl text-slate-400 font-mono tracking-wide leading-relaxed">
        El mercado global premia la autenticidad e inyecta ríos de capital líquido a las arquitecturas puras de sistemas. El esfuerzo animal sin dirección ha muerto.
      </div>

      {/* Tarjeta de Presentación Integrada en la Base */}
      <div className="absolute bottom-16 border-t pt-6 w-full max-w-md font-mono text-xs md:text-sm tracking-[0.2em]" style={{ borderColor: C.border, color: C.darkGray }}>
        DISEÑO E INFRAESTRUCTURA POR <span className="text-white font-bold">LUIS CABREJO PARRA</span> // DIAMANTE GANO EXCEL
      </div>
    </div>
  );
}

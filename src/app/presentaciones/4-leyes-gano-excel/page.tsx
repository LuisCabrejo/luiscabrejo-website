'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════ */

const TOTAL_SCENES = 8;

const K = {
  void: '#000000',
  white: '#FFFFFF',
  dimWhite: '#D0D0D0',
  faintWhite: 'rgba(255,255,255,0.08)',
  glow: 'rgba(255,255,255,0.15)',
  gold: '#C5A059',
};

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ═══════════════════════════════════════════════════════════
   SCENE 0 — THE HERO
   White circle fades into void, "tú eres el sistema"
   ═══════════════════════════════════════════════════════════ */

function SceneHero({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <AnimatePresence>
        {active && (
          <>
            {/* Glow ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: [0, 0.6, 0.3], scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.5, ease: EASE_OUT }}
              className="absolute rounded-full"
              style={{
                width: 140,
                height: 140,
                boxShadow: `0 0 60px 20px ${K.glow}, 0 0 120px 40px rgba(255,255,255,0.05)`,
              }}
            />
            {/* Hero circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 1.2, ease: EASE_OUT }}
              className="rounded-full border-2 border-white"
              style={{
                width: 80,
                height: 80,
                background: 'transparent',
                boxShadow: `0 0 30px 8px ${K.glow}`,
              }}
            />
            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 0.8, ease: EASE_OUT }}
              className="absolute bottom-[18%] text-center font-light tracking-[0.2em] lowercase"
              style={{ color: K.dimWhite, fontSize: 'clamp(14px, 2.5vw, 20px)' }}
            >
              tú eres el sistema
            </motion.p>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCENE 1 — THE TRAP
   Grid cage constricts around the hero circle
   ═══════════════════════════════════════════════════════════ */

function SceneTrap({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <AnimatePresence>
        {active && (
          <>
            {/* Cage lines — concentric rectangles */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.8 + i * 0.4 }}
                animate={{ opacity: 0.3 + i * 0.1, scale: 0.4 + i * 0.2 }}
                exit={{ opacity: 0, scale: 2 }}
                transition={{ duration: 1.4, delay: i * 0.15, ease: EASE_OUT }}
                className="absolute border border-white/20 rounded-sm"
                style={{
                  width: `${30 + i * 15}%`,
                  height: `${30 + i * 15}%`,
                  maxWidth: 400 + i * 100,
                  maxHeight: 400 + i * 100,
                }}
              />
            ))}

            {/* Compressed hero */}
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 0.6], opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, delay: 0.5, ease: EASE_OUT }}
              className="rounded-full border-2 border-white/60"
              style={{
                width: 60,
                height: 60,
                boxShadow: `0 0 20px 5px rgba(255,255,255,0.08)`,
              }}
            />

            {/* Text sequence */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
              className="absolute bottom-[22%] text-center font-light tracking-[0.15em] lowercase"
              style={{ color: K.dimWhite, fontSize: 'clamp(14px, 2.5vw, 20px)' }}
            >
              operador manual
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: EASE_OUT }}
              className="absolute bottom-[15%] text-center font-extralight tracking-[0.1em] lowercase"
              style={{ color: K.dimWhite, fontSize: 'clamp(11px, 1.8vw, 15px)' }}
            >
              el sistema depende de ti
            </motion.p>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCENE 2 — LEY 1: DESVIAR HABILIDADES
   Canvas particles flow through bottleneck
   ═══════════════════════════════════════════════════════════ */

function SceneDesviar({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<
    { x: number; y: number; vx: number; vy: number; r: number; released: boolean; alpha: number }[]
  >([]);
  const phaseRef = useRef<'blocked' | 'flowing'>('blocked');
  const timeRef = useRef(0);

  useEffect(() => {
    if (!active) {
      phaseRef.current = 'blocked';
      timeRef.current = 0;
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    // Init particles
    const W = canvas.getBoundingClientRect().width;
    const H = canvas.getBoundingClientRect().height;
    const cx = W / 2;
    const gapY = H * 0.5; // bottleneck Y position

    particlesRef.current = Array.from({ length: 40 }, () => ({
      x: cx + (Math.random() - 0.5) * W * 0.6,
      y: gapY - 40 - Math.random() * H * 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: Math.random() * 0.2 + 0.1,
      r: Math.random() * 2 + 1.5,
      released: false,
      alpha: Math.random() * 0.5 + 0.5,
    }));

    // After 2s, open the bottleneck
    const timer = setTimeout(() => {
      phaseRef.current = 'flowing';
    }, 2000);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const bottleneckY = h * 0.5;
      const gapWidth = phaseRef.current === 'blocked' ? 8 : w * 0.5;
      const wallColor = phaseRef.current === 'blocked' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.08)';

      // Draw bottleneck walls
      ctx.strokeStyle = wallColor;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, bottleneckY);
      ctx.lineTo(w / 2 - gapWidth / 2, bottleneckY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w / 2 + gapWidth / 2, bottleneckY);
      ctx.lineTo(w, bottleneckY);
      ctx.stroke();

      // Draw hero circle (router) on right side when flowing
      if (phaseRef.current === 'flowing') {
        const heroX = w * 0.82;
        const heroY = bottleneckY;
        ctx.beginPath();
        ctx.arc(heroX, heroY, 16, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.shadowColor = K.glow;
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Update & draw particles
      for (const p of particlesRef.current) {
        if (phaseRef.current === 'blocked') {
          // Particles bounce above bottleneck
          p.vy += 0.02;
          if (p.y + p.vy > bottleneckY - 6) {
            p.vy *= -0.5;
            p.y = bottleneckY - 6;
          }
          p.x += p.vx;
          p.y += p.vy;
          // Horizontal bounds
          if (p.x < 20) p.vx = Math.abs(p.vx);
          if (p.x > w - 20) p.vx = -Math.abs(p.vx);
          // Keep above bottleneck
          if (p.y < 20) p.vy = Math.abs(p.vy) * 0.5;
        } else {
          // Flowing through
          if (!p.released) {
            p.released = true;
            p.vx = (Math.random() - 0.5) * 0.5;
            p.vy = Math.random() * 1.5 + 1;
          }
          p.vy += 0.05;
          p.x += p.vx;
          p.y += p.vy;
          // Reset if off screen
          if (p.y > h + 10) {
            p.y = bottleneckY - 20;
            p.x = w / 2 + (Math.random() - 0.5) * gapWidth * 0.6;
            p.vy = Math.random() * 1 + 0.5;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha * 0.7})`;
        ctx.fill();
      }

      timeRef.current++;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {active && (
        <>
          <canvas
            ref={canvasRef}
            data-interactive
            className="absolute inset-0 w-full h-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-[8%] left-0 right-0 text-center"
          >
            <p
              className="font-medium tracking-[0.25em] uppercase"
              style={{ color: K.white, fontSize: 'clamp(11px, 1.5vw, 14px)', opacity: 0.5 }}
            >
              ley 1
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE_OUT }}
            className="absolute bottom-[18%] text-center font-light tracking-[0.15em] lowercase"
            style={{ color: K.dimWhite, fontSize: 'clamp(14px, 2.5vw, 20px)' }}
          >
            desvía tus habilidades al sistema
          </motion.p>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCENE 3 — LEY 2: ENSEÑAR A ENSEÑAR
   1 dot → 3 dots → 9 dots → radial burst
   ═══════════════════════════════════════════════════════════ */

function SceneEnsenar({ active }: { active: boolean }) {
  const [phase, setPhase] = useState(0); // 0=1dot, 1=3dots, 2=9dots, 3=burst

  useEffect(() => {
    if (!active) {
      setPhase(0);
      return;
    }
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setPhase(2), 2800);
    const t3 = setTimeout(() => setPhase(3), 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [active]);

  const dotR = 6;

  // Positions for 3 dots (triangle)
  const three = [
    { x: 0, y: -40 },
    { x: -35, y: 25 },
    { x: 35, y: 25 },
  ];

  // Positions for 9 dots (3 clusters of 3)
  const nine = three.flatMap((parent, _i) => [
    { x: parent.x, y: parent.y - 22 },
    { x: parent.x - 18, y: parent.y + 14 },
    { x: parent.x + 18, y: parent.y + 14 },
  ]);

  // Burst positions (radial)
  const burst = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const dist = 100 + Math.random() * 40;
    return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
  });

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-[8%] left-0 right-0 text-center"
            >
              <p
                className="font-medium tracking-[0.25em] uppercase"
                style={{ color: K.white, fontSize: 'clamp(11px, 1.5vw, 14px)', opacity: 0.5 }}
              >
                ley 2
              </p>
            </motion.div>

            <svg
              viewBox="-180 -180 360 360"
              className="w-[min(70vw,350px)] h-[min(70vw,350px)]"
            >
              {/* Phase 0: single dot */}
              {phase === 0 && (
                <motion.circle
                  cx={0}
                  cy={0}
                  r={dotR}
                  fill="none"
                  stroke={K.white}
                  strokeWidth={1.5}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: EASE_OUT }}
                  style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}
                />
              )}

              {/* Phase 1: 3 dots */}
              {phase === 1 &&
                three.map((pos, i) => (
                  <motion.circle
                    key={`t-${i}`}
                    cx={pos.x}
                    cy={pos.y}
                    r={dotR}
                    fill="none"
                    stroke={K.white}
                    strokeWidth={1.5}
                    initial={{ opacity: 0, cx: 0, cy: 0 }}
                    animate={{ opacity: 1, cx: pos.x, cy: pos.y }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: EASE_OUT }}
                    style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.2))' }}
                  />
                ))}

              {/* Phase 1: connecting lines */}
              {phase === 1 && (
                <motion.path
                  d={`M${three[0].x},${three[0].y} L${three[1].x},${three[1].y} L${three[2].x},${three[2].y} Z`}
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth={0.8}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: EASE_OUT }}
                />
              )}

              {/* Phase 2: 9 dots */}
              {phase === 2 &&
                nine.map((pos, i) => (
                  <motion.circle
                    key={`n-${i}`}
                    cx={pos.x}
                    cy={pos.y}
                    r={dotR * 0.7}
                    fill="none"
                    stroke={K.white}
                    strokeWidth={1.2}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.06, ease: EASE_OUT }}
                    style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.15))' }}
                  />
                ))}

              {/* Phase 3: radial burst */}
              {phase === 3 &&
                burst.map((pos, i) => (
                  <motion.circle
                    key={`b-${i}`}
                    cx={0}
                    cy={0}
                    r={dotR * 0.5}
                    fill={K.white}
                    fillOpacity={0.6}
                    initial={{ cx: 0, cy: 0, opacity: 1 }}
                    animate={{ cx: pos.x, cy: pos.y, opacity: 0.3 }}
                    transition={{ duration: 1.2, delay: i * 0.04, ease: EASE_OUT }}
                    style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.2))' }}
                  />
                ))}
            </svg>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: EASE_OUT }}
              className="absolute bottom-[18%] text-center font-light tracking-[0.15em] lowercase"
              style={{ color: K.dimWhite, fontSize: 'clamp(14px, 2.5vw, 20px)' }}
            >
              enseña a enseñar, no a depender
            </motion.p>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCENE 4 — LEY 3: EDIFICACIÓN + VALORES
   Isometric blocks stack, hero circle climbs
   ═══════════════════════════════════════════════════════════ */

function SceneEdificacion({ active }: { active: boolean }) {
  const blocks = [
    { x: 0, y: 0, label: 'respeto' },
    { x: -30, y: -50, label: 'lealtad' },
    { x: 30, y: -100, label: 'servicio' },
    { x: 0, y: -150, label: 'edificación' },
  ];

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-[8%] left-0 right-0 text-center"
            >
              <p
                className="font-medium tracking-[0.25em] uppercase"
                style={{ color: K.white, fontSize: 'clamp(11px, 1.5vw, 14px)', opacity: 0.5 }}
              >
                ley 3
              </p>
            </motion.div>

            <div className="relative" style={{ width: 260, height: 320 }}>
              {/* Blocks stacking */}
              {blocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 + i * 0.4, ease: EASE_OUT }}
                  className="absolute flex items-center justify-center"
                  style={{
                    left: '50%',
                    bottom: 40,
                    transform: `translateX(calc(-50% + ${block.x}px)) translateY(${block.y}px)`,
                    width: 90,
                    height: 40,
                    border: '1.5px solid rgba(255,255,255,0.3)',
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <span
                    className="text-[10px] tracking-[0.15em] lowercase font-light"
                    style={{ color: K.dimWhite }}
                  >
                    {block.label}
                  </span>
                </motion.div>
              ))}

              {/* Climbing hero circle */}
              <motion.div
                initial={{ opacity: 0, x: '-50%', y: 0 }}
                animate={{
                  opacity: 1,
                  y: [0, -50, -100, -150, -195],
                  x: ['-50%', 'calc(-50% - 30px)', 'calc(-50% + 30px)', '-50%', '-50%'],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3.5, delay: 0.8, ease: EASE_OUT }}
                className="absolute rounded-full border-[1.5px] border-white"
                style={{
                  width: 24,
                  height: 24,
                  left: '50%',
                  bottom: 52,
                  boxShadow: `0 0 15px 4px ${K.glow}`,
                }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: EASE_OUT }}
              className="absolute bottom-[18%] text-center font-light tracking-[0.15em] lowercase"
              style={{ color: K.dimWhite, fontSize: 'clamp(14px, 2.5vw, 20px)' }}
            >
              construye sobre valores, no ego
            </motion.p>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCENE 5 — LEY 4: PROMOVER VS INVITAR
   Canvas: push repulsion → pull attraction toggle
   ═══════════════════════════════════════════════════════════ */

function ScenePromover({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const modeRef = useRef<'push' | 'pull'>('push');
  const [mode, setMode] = useState<'push' | 'pull'>('push');
  const orbitersRef = useRef<
    { x: number; y: number; vx: number; vy: number; r: number }[]
  >([]);

  useEffect(() => {
    if (!active) {
      modeRef.current = 'push';
      setMode('push');
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const rect = canvas.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;
    const cx = W / 2;
    const cy = H / 2;

    // Init orbiting circles
    orbitersRef.current = Array.from({ length: 8 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 60;
      return {
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        r: Math.random() * 3 + 2,
      };
    });

    // Toggle mode after 3s
    const timer = setTimeout(() => {
      modeRef.current = 'pull';
      setMode('pull');
    }, 3000);

    const animate = () => {
      const r = canvas.getBoundingClientRect();
      const w = r.width;
      const h = r.height;
      const heroCx = w / 2;
      const heroCy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Draw hero center circle
      ctx.beginPath();
      ctx.arc(heroCx, heroCy, 20, 0, Math.PI * 2);
      ctx.strokeStyle = modeRef.current === 'push' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.8)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      if (modeRef.current === 'pull') {
        ctx.shadowColor = K.glow;
        ctx.shadowBlur = 20;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Update orbiters
      for (const o of orbitersRef.current) {
        const dx = heroCx - o.x;
        const dy = heroCy - o.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = modeRef.current === 'push' ? -120 / (dist * dist) * 80 : 50 / (dist * dist) * 80;
        const ax = (dx / dist) * force;
        const ay = (dy / dist) * force;

        o.vx += ax * 0.02;
        o.vy += ay * 0.02;

        // Damping
        o.vx *= 0.98;
        o.vy *= 0.98;

        // Tangential velocity for orbiting in pull mode
        if (modeRef.current === 'pull') {
          const tangX = -dy / dist;
          const tangY = dx / dist;
          o.vx += tangX * 0.15;
          o.vy += tangY * 0.15;

          // Constrain orbit distance
          if (dist < 50) {
            o.vx += (dx / dist) * -0.5;
            o.vy += (dy / dist) * -0.5;
          }
          if (dist > 140) {
            o.vx += (dx / dist) * 0.3;
            o.vy += (dy / dist) * 0.3;
          }
        }

        o.x += o.vx;
        o.y += o.vy;

        // Bounce off walls
        if (o.x < 10) { o.x = 10; o.vx *= -0.5; }
        if (o.x > w - 10) { o.x = w - 10; o.vx *= -0.5; }
        if (o.y < 10) { o.y = 10; o.vy *= -0.5; }
        if (o.y > h - 10) { o.y = h - 10; o.vy *= -0.5; }

        // Draw line from hero to orbiter in pull mode
        if (modeRef.current === 'pull' && dist < 160) {
          ctx.beginPath();
          ctx.moveTo(heroCx, heroCy);
          ctx.lineTo(o.x, o.y);
          ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - dist / 160)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${modeRef.current === 'pull' ? 0.7 : 0.3})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  const toggleMode = useCallback(() => {
    const next = modeRef.current === 'push' ? 'pull' : 'push';
    modeRef.current = next;
    setMode(next);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {active && (
        <>
          <canvas
            ref={canvasRef}
            data-interactive
            className="absolute inset-0 w-full h-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-[8%] left-0 right-0 text-center"
          >
            <p
              className="font-medium tracking-[0.25em] uppercase"
              style={{ color: K.white, fontSize: 'clamp(11px, 1.5vw, 14px)', opacity: 0.5 }}
            >
              ley 4
            </p>
          </motion.div>

          {/* Mode toggle */}
          <button
            data-interactive
            onClick={toggleMode}
            className="absolute top-[14%] left-1/2 -translate-x-1/2 px-5 py-2 rounded-full border transition-all duration-500 text-xs tracking-[0.2em] uppercase"
            style={{
              borderColor: mode === 'push' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)',
              color: mode === 'push' ? K.dimWhite : K.white,
              background: mode === 'push' ? 'transparent' : 'rgba(255,255,255,0.05)',
              boxShadow: mode === 'pull' ? `0 0 20px 4px ${K.glow}` : 'none',
            }}
          >
            {mode === 'push' ? 'invitar' : 'promover'}
          </button>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE_OUT }}
            className="absolute bottom-[18%] text-center font-light tracking-[0.15em] lowercase"
            style={{ color: K.dimWhite, fontSize: 'clamp(14px, 2.5vw, 20px)' }}
          >
            {mode === 'push' ? 'invitar repele' : 'promover atrae'}
          </motion.p>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCENE 6 — THE SYSTEM
   4 orbital icons around center circle
   ═══════════════════════════════════════════════════════════ */

function SceneSystem({ active }: { active: boolean }) {
  const laws = [
    { label: 'desviar', angle: 0 },
    { label: 'enseñar', angle: 90 },
    { label: 'edificar', angle: 180 },
    { label: 'promover', angle: 270 },
  ];

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <AnimatePresence>
        {active && (
          <>
            <div className="relative" style={{ width: 300, height: 300 }}>
              {/* Center circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: EASE_OUT }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
                style={{
                  width: 50,
                  height: 50,
                  boxShadow: `0 0 30px 10px ${K.glow}`,
                }}
              />

              {/* Orbit path */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
                style={{ width: 220, height: 220 }}
              />

              {/* Orbital icons */}
              {laws.map((law, i) => {
                const rad = (law.angle * Math.PI) / 180;
                const orbR = 110;
                const x = 150 + Math.cos(rad) * orbR;
                const y = 150 + Math.sin(rad) * orbR;

                return (
                  <motion.div
                    key={law.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.2, ease: EASE_OUT }}
                    className="absolute flex flex-col items-center gap-1"
                    style={{
                      left: x,
                      top: y,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className="rounded-full border border-white/40"
                      style={{
                        width: 28,
                        height: 28,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 0 10px 2px ${K.glow}`,
                      }}
                    >
                      <span className="text-white/70 text-[11px] font-semibold">{i + 1}</span>
                    </div>
                    <span
                      className="text-[9px] tracking-[0.15em] lowercase font-light whitespace-nowrap"
                      style={{ color: K.dimWhite }}
                    >
                      {law.label}
                    </span>
                  </motion.div>
                );
              })}

              {/* Connecting lines */}
              <svg
                viewBox="0 0 300 300"
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: 'none' }}
              >
                {laws.map((law, i) => {
                  const rad = (law.angle * Math.PI) / 180;
                  const orbR = 110;
                  const x = 150 + Math.cos(rad) * orbR;
                  const y = 150 + Math.sin(rad) * orbR;
                  return (
                    <motion.line
                      key={`line-${i}`}
                      x1={150}
                      y1={150}
                      x2={x}
                      y2={y}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth={0.5}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.2, ease: EASE_OUT }}
                    />
                  );
                })}
              </svg>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: EASE_OUT }}
              className="absolute bottom-[18%] text-center font-light tracking-[0.15em] lowercase"
              style={{ color: K.dimWhite, fontSize: 'clamp(14px, 2.5vw, 20px)' }}
            >
              las 4 leyes del sistema
            </motion.p>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCENE 7 — LAUNCH / CTA
   Concentric rings expand, gold CTA
   ═══════════════════════════════════════════════════════════ */

function SceneLaunch({ active }: { active: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <AnimatePresence>
        {active && (
          <>
            {/* Expanding concentric rings */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0, 1 + i * 0.5],
                }}
                transition={{
                  duration: 3,
                  delay: 0.3 + i * 0.3,
                  ease: EASE_OUT,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="absolute rounded-full border border-white/20"
                style={{
                  width: 60,
                  height: 60,
                }}
              />
            ))}

            {/* Center hero with gold accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: EASE_OUT }}
              className="rounded-full border-2"
              style={{
                width: 60,
                height: 60,
                borderColor: K.gold,
                boxShadow: `0 0 40px 12px rgba(197, 160, 89, 0.15)`,
              }}
            />

            {/* CTA text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1, ease: EASE_OUT }}
              className="absolute bottom-[25%] text-center font-light tracking-[0.2em] lowercase"
              style={{ color: K.gold, fontSize: 'clamp(16px, 3vw, 24px)' }}
            >
              activa tu sistema
            </motion.p>

            {/* Link */}
            <motion.a
              href="/fundadores"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: EASE_OUT }}
              className="absolute bottom-[16%] text-center font-light tracking-[0.15em] lowercase hover:opacity-80 transition-opacity"
              style={{ color: K.dimWhite, fontSize: 'clamp(11px, 1.8vw, 14px)' }}
            >
              luiscabrejo.com/fundadores
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   Navigation, film grain, fullscreen
   ═══════════════════════════════════════════════════════════ */

export default function LeyesDanKoe() {
  const [scene, setScene] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const next = useCallback(() => setScene((s) => Math.min(s + 1, TOTAL_SCENES - 1)), []);
  const prev = useCallback(() => setScene((s) => Math.max(s - 1, 0)), []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  // Tap navigation
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('[data-interactive]')) return;
      const w = window.innerWidth;
      const x = e.clientX;
      if (x < w / 3) prev();
      else if (x > (w * 2) / 3) next();
    },
    [next, prev],
  );

  // Swipe navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-interactive]')) return;
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-interactive]')) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    },
    [next, prev],
  );

  // Fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const scenes = [
    SceneHero,
    SceneTrap,
    SceneDesviar,
    SceneEnsenar,
    SceneEdificacion,
    ScenePromover,
    SceneSystem,
    SceneLaunch,
  ];

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-screen h-screen overflow-hidden select-none cursor-default"
      style={{ background: K.void, fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
    >
      {/* Film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Scenes */}
      {scenes.map((SceneComponent, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: scene === i ? 1 : 0, pointerEvents: scene === i ? 'auto' : 'none' }}
        >
          <SceneComponent active={scene === i} />
        </div>
      ))}

      {/* Scene counter — bottom right */}
      <div
        className="fixed bottom-4 right-5 z-50 text-[11px] tracking-[0.2em] font-light"
        style={{ color: K.dimWhite, opacity: 0.4 }}
      >
        {scene + 1} / {TOTAL_SCENES}
      </div>

      {/* Fullscreen button — top right */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-50 p-2 rounded opacity-30 hover:opacity-60 transition-opacity"
        aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={K.dimWhite} strokeWidth="1.5">
          {isFullscreen ? (
            <>
              <polyline points="6 1 1 1 1 6" />
              <polyline points="12 1 17 1 17 6" />
              <polyline points="6 17 1 17 1 12" />
              <polyline points="12 17 17 17 17 12" />
            </>
          ) : (
            <>
              <polyline points="1 6 1 1 6 1" />
              <polyline points="17 6 17 1 12 1" />
              <polyline points="1 12 1 17 6 17" />
              <polyline points="17 12 17 17 12 17" />
            </>
          )}
        </svg>
      </button>

      {/* Progress bar — top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px]" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full"
          style={{ background: `linear-gradient(90deg, ${K.white}, ${K.dimWhite})` }}
          animate={{ width: `${((scene + 1) / TOTAL_SCENES) * 100}%` }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        />
      </div>
    </div>
  );
}

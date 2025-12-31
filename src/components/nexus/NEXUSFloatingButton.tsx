'use client';
import React, { useState, useEffect } from 'react';
import NEXUSWidget from './NEXUSWidget';

// Configuración de tiempos para el tooltip (en milisegundos)
const TOOLTIP_CONFIG = {
  scrollDelayMs: 5000,        // Aparece 5 segundos después de scroll
  visibleDurationMs: 5000,    // Visible por 5 segundos
  reappearDelayMs: 120000,    // Reaparece después de 2 minutos
};

// 🎨 Quiet Luxury Color Palette
const QUIET_LUXURY = {
  gold: '#D4AF37',
  goldMuted: '#C9A962',
  goldDark: '#B8962F',
  bgDeep: '#0a0a0f',
  bgSurface: '#12121a',
  bgCard: '#1a1a24',
  textPrimary: '#f5f5f5',
  textSecondary: '#a0a0a8',
  textMuted: '#6b6b75',
  // 🆕 Botón flotante: Blanco puro para máximo contraste en móvil
  buttonBg: '#FFFFFF',
  buttonIcon: '#1a1a24',  // Icono oscuro sobre fondo blanco
};

const NEXUSFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // 🎯 TOOLTIP: Lógica de aparición/desaparición automática
  useEffect(() => {
    // Si el usuario ya abrió el widget, no mostrar más el tooltip
    if (hasInteracted || isOpen) return;

    let initialTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;
    let reappearTimeout: NodeJS.Timeout;

    // Función para mostrar tooltip y programar ocultamiento
    const showAndScheduleHide = () => {
      if (hasInteracted || isOpen) return;

      setShowTooltip(true);

      // Ocultar después del tiempo de visibilidad
      hideTimeout = setTimeout(() => {
        setShowTooltip(false);

        // Programar reaparición si no hay interacción
        reappearTimeout = setTimeout(() => {
          showAndScheduleHide();
        }, TOOLTIP_CONFIG.reappearDelayMs);

      }, TOOLTIP_CONFIG.visibleDurationMs);
    };

    // Mostrar tooltip automáticamente después del delay inicial
    initialTimeout = setTimeout(() => {
      showAndScheduleHide();
    }, TOOLTIP_CONFIG.scrollDelayMs);

    return () => {
      if (initialTimeout) clearTimeout(initialTimeout);
      if (hideTimeout) clearTimeout(hideTimeout);
      if (reappearTimeout) clearTimeout(reappearTimeout);
    };
  }, [hasInteracted, isOpen]);

  const handleButtonClick = () => {
    setHasInteracted(true); // Marcar que el usuario interactuó
    setShowTooltip(false);  // Ocultar tooltip
    setIsOpen(true);
  };

  return (
    <>
      {/* 🎨 Quiet Luxury TOOLTIP - Alineado con navegación */}
      {!isOpen && (
        <div
          className={`fixed bottom-24 right-3 sm:right-5 lg:right-7 z-40 transition-all duration-500 ${
            showTooltip
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div
            className="pl-4 pr-2 py-2.5 rounded-xl shadow-xl flex items-center gap-2"
            style={{
              background: QUIET_LUXURY.bgSurface,
              border: `1px solid ${QUIET_LUXURY.gold}`,
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.2)`
            }}
          >
            <span
              className="text-sm font-medium whitespace-nowrap"
              style={{ color: QUIET_LUXURY.textPrimary }}
            >
              Habla con <span style={{ color: QUIET_LUXURY.gold, fontWeight: 600 }}>Queswa</span> 🪢
            </span>
            {/* Botón para cerrar el tooltip */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
                setHasInteracted(true); // No vuelve a aparecer
              }}
              className="ml-1 p-1 rounded-full transition-colors"
              style={{ color: QUIET_LUXURY.textMuted }}
              onMouseEnter={(e) => e.currentTarget.style.color = QUIET_LUXURY.gold}
              onMouseLeave={(e) => e.currentTarget.style.color = QUIET_LUXURY.textMuted}
              aria-label="Cerrar sugerencia"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* 🎨 Quiet Luxury Floating Button - Blanco con icono oscuro */}
      <button
        className="fixed bottom-6 right-4 sm:right-6 lg:right-8 w-14 h-14 rounded-2xl z-40 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
        style={{
          background: QUIET_LUXURY.buttonBg,
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(212, 175, 55, 0.3)`
        }}
        onClick={handleButtonClick}
        aria-label="Abrir chat con Queswa"
      >
        <div className="relative">
          {/* 🎨 Icono Queswa - Rayo estilizado en oscuro sobre blanco */}
          <svg className="w-7 h-7" style={{ color: QUIET_LUXURY.buttonIcon }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>

          {/* 🎨 Quiet Luxury pulse - dorado sobre blanco */}
          <div
            className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
            style={{ background: QUIET_LUXURY.gold }}
          >
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-60"
              style={{ background: QUIET_LUXURY.gold }}
            ></div>
          </div>
        </div>
      </button>

      {/* Widget */}
      <NEXUSWidget
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default NEXUSFloatingButton;

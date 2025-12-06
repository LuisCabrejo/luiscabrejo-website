'use client';
import React, { useState, useEffect } from 'react';
import NEXUSWidget from './NEXUSWidget';

// Configuración de tiempos para el tooltip (en milisegundos)
const TOOLTIP_CONFIG = {
  initialDelayMs: 5000,       // Aparece 5 segundos después de cargar
  visibleDurationMs: 8000,    // Visible por 8 segundos
  reappearDelayMs: 60000,     // Reaparece después de 1 minuto si no hay clic
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
    }, TOOLTIP_CONFIG.initialDelayMs);

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
      {/* 🎯 TOOLTIP INTELIGENTE - Aparece automáticamente, desaparece y reaparece */}
      {!isOpen && (
        <div
          className={`fixed bottom-24 right-3 z-40 transition-all duration-500 ${
            showTooltip
              ? 'opacity-100 translate-y-0 animate-bounce'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
            <span className="text-sm font-semibold whitespace-nowrap">💬 Habla con NEXUS</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-40 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        style={{
          background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)'
        }}
        onClick={handleButtonClick}
        aria-label="Abrir chat con NEXUS IA"
      >
        <div className="relative">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>

          {/* Notification pulse */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
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

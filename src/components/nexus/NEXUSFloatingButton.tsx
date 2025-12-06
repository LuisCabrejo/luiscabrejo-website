'use client';
import React, { useState } from 'react';
import NEXUSWidget from './NEXUSWidget';

const NEXUSFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Badge pulsante - Call to Action */}
      {!isOpen && (
        <div className="fixed bottom-24 right-3 z-40 animate-bounce">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-pulse">
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
        onClick={() => setIsOpen(true)}
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

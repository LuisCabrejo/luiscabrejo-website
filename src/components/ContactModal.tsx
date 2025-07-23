'use client';

import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: string;
}

export default function ContactModal({ isOpen, onClose, formType = 'conectar' }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert('Por favor completa nombre y email');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, formType }),
      });

      if (response.ok) {
        setStatus('sent');
        setTimeout(() => {
          setName('');
          setEmail('');
          setMessage('');
          setStatus('idle');
          onClose();
        }, 3000);
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Conectar</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {status === 'sent' ? (
          <div className="text-center py-8">
            <div className="text-green-400 text-2xl mb-4">✅</div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">¡Mensaje Enviado!</h3>
            <p className="text-gray-300">Te responderé en 24 horas.</p>
          </div>
        ) : status === 'error' ? (
          <div className="text-center py-8">
            <div className="text-red-400 text-2xl mb-4">❌</div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Error</h3>
            <p className="text-gray-300 mb-4">Hubo un problema. Inténtalo de nuevo.</p>
            <button
              onClick={() => setStatus('idle')}
              className="bg-blue-500 px-4 py-2 rounded text-white"
            >
              Reintentar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Nombre *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === 'loading'}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Mensaje</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === 'loading'}
                rows={3}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white resize-none"
                placeholder="Tu mensaje..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

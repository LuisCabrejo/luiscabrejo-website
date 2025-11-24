'use client';

import React, { useState } from 'react';
import { X, Mail, User, Phone, MapPin, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: string;
}

export default function ContactModal({ isOpen, onClose, formType = 'conectar' }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  // Configuración específica por tipo de formulario
  const getFormConfig = () => {
    switch (formType) {
      case 'fundadores':
        return {
          title: 'Visión 4 Millones',
          subtitle: 'Luis Cabrejo',
          description: 'Me interesa ser parte de la Visión 4 Millones y contribuir a esta transformación.',
          defaultMessage: 'Cuéntame sobre tu situación actual y qué te gustaría lograr...',
          showPhone: true,
          showCountry: true,
          submitText: 'Enviar Mensaje'
        };
      case 'historia':
        return {
          title: 'Mi Historia Te Inspiró',
          subtitle: 'Luis Cabrejo',
          description: 'Después de conocer mi historia, quieres saber más sobre el ecosistema empresarial.',
          defaultMessage: 'Cuéntame qué parte de mi historia más te conectó y qué te gustaría lograr...',
          showPhone: true,
          showCountry: true,
          submitText: 'Enviar Mensaje'
        };
      case 'ecosistema':
        return {
          title: 'Interés en el Ecosistema',
          subtitle: 'Luis Cabrejo',
          description: 'Te interesa conocer más sobre las herramientas digitales y tecnología avanzada.',
          defaultMessage: 'Cuéntame qué herramientas del ecosistema te llamaron más la atención...',
          showPhone: true,
          showCountry: true,
          submitText: 'Enviar Mensaje'
        };
      case 'vision':
        return {
          title: 'Visión 4 Millones',
          subtitle: 'Luis Cabrejo',
          description: 'Te interesa ser parte de la visión de transformar 4 millones de vidas para 2032.',
          defaultMessage: 'Cuéntame cómo te ves participando en la visión de 4 millones...',
          showPhone: true,
          showCountry: true,
          submitText: 'Enviar Mensaje'
        };
      case 'general':
      case 'conectar':
      default:
        return {
          title: 'Conectar',
          subtitle: 'Luis Cabrejo',
          description: 'Conéctate conmigo para explorar oportunidades empresariales.',
          defaultMessage: 'Cuéntame sobre tu situación actual y qué te gustaría lograr...',
          showPhone: true,
          showCountry: true,
          submitText: 'Enviar Mensaje'
        };
    }
  };

  const config = getFormConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert('Por favor completa nombre y email');
      return;
    }

    if (formType === 'fundadores' && !phone) {
      alert('Por favor completa el teléfono');
      return;
    }

    setStatus('loading');

    try {
      const payload = {
        name,
        email,
        message: message || config.defaultMessage,
        formType,
        ...(config.showPhone && { phone }),
        ...(config.showCountry && { country })
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('sent');
        setTimeout(() => {
          setName('');
          setEmail('');
          setPhone('');
          setCountry('');
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="rounded-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
        style={{
          background: 'rgba(23, 31, 42, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)'
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">{config.title}</h2>
            {config.subtitle && (
              <p className="text-sm text-slate-400 mt-1">{config.subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Description para fundadores */}
        {config.description && (
          <div className="mb-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-blue-200">{config.description}</p>
          </div>
        )}

        {status === 'sent' ? (
          <div className="text-center py-8">
            <div className="text-green-400 text-2xl mb-4">✅</div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">¡Mensaje Enviado!</h3>
            <p className="text-gray-300">
              Luis se comunicará contigo en las próximas 24 horas.
            </p>
          </div>
        ) : status === 'error' ? (
          <div className="text-center py-8">
            <div className="text-red-400 text-2xl mb-4">❌</div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Error</h3>
            <p className="text-gray-300 mb-4">Hubo un problema. Inténtalo de nuevo.</p>
            <button
              onClick={() => setStatus('idle')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all"
            >
              Reintentar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <User className="w-4 h-4" />
                Nombre Completo *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === 'loading'}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <Mail className="w-4 h-4" />
                Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="tu@email.com"
              />
            </div>

            {/* Teléfono - Todos los formularios */}
            {config.showPhone && (
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <Phone className="w-4 h-4" />
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="+57 300 123 4567"
                />
              </div>
            )}

            {/* País - Solo países donde operan */}
            {config.showCountry && (
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <MapPin className="w-4 h-4" />
                  País
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="">Selecciona tu país</option>
                  <option value="CA">🇨🇦 Canadá (+1)</option>
                  <option value="US">🇺🇸 Estados Unidos (+1)</option>
                  <option value="MX">🇲🇽 México (+52)</option>
                  <option value="PR">🇵🇷 Puerto Rico (+1)</option>
                  <option value="DO">🇩🇴 República Dominicana (+1)</option>
                  <option value="HN">🇭🇳 Honduras (+504)</option>
                  <option value="GT">🇬🇹 Guatemala (+502)</option>
                  <option value="CR">🇨🇷 Costa Rica (+506)</option>
                  <option value="SV">🇸🇻 El Salvador (+503)</option>
                  <option value="PA">🇵🇦 Panamá (+507)</option>
                  <option value="CO">🇨🇴 Colombia (+57)</option>
                  <option value="BR">🇧🇷 Brasil (+55)</option>
                  <option value="EC">🇪🇨 Ecuador (+593)</option>
                  <option value="PE">🇵🇪 Perú (+51)</option>
                  <option value="BO">🇧🇴 Bolivia (+591)</option>
                  <option value="CL">🇨🇱 Chile (+56)</option>
                </select>
              </div>
            )}

            {/* Mensaje */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4" />
                Mensaje
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === 'loading'}
                rows={4}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                placeholder={config.defaultMessage}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {status === 'loading' ? 'Enviando...' : config.submitText}
            </button>

            {/* Footer universal */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-green-400">
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <span>Envío seguro con confirmación automática por email</span>
              </div>
              <div className="text-xs text-slate-400">
                También puedes escribir directamente a{' '}
                <a href="mailto:luiscabrejo@creatuactivo.com" className="text-blue-400 hover:text-blue-300 underline">
                  luiscabrejo@creatuactivo.com
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

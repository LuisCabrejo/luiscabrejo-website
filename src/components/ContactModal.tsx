'use client';

import React, { useState } from 'react';
import { X, Mail, User, Phone, MapPin, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: 'conectar' | 'oportunidad' | 'portal' | 'test';
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export default function ContactModal({ isOpen, onClose, formType = 'conectar' }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email) {
      setErrorMessage('Por favor completa nombre y email');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      console.log('📤 Enviando formulario...', { formData, formType });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: getFormTitle(),
        }),
      });

      console.log('📥 Respuesta recibida:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.text();
        console.error('❌ Error del servidor:', errorData);
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('✅ Resultado exitoso:', result);

      setStatus('sent');

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          message: '',
        });
        setStatus('idle');
        onClose();
      }, 5000);

    } catch (error) {
      console.error('❌ Error enviando formulario:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje');
      setStatus('error');
    }
  };

  const openMailto = () => {
    const subject = `${getFormTitle()} - ${formData.name}`;
    const body = `Hola Luis,

Me interesa conectar contigo. Aquí están mis datos:

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || 'No proporcionado'}
País: ${formData.country || 'No proporcionado'}
Formulario: ${getFormTitle()}

Mensaje:
${formData.message || 'Me gustaría conocer más sobre tu ecosistema digital.'}

Enviado desde: luiscabrejo.com
Fecha: ${new Date().toLocaleString()}

Saludos,
${formData.name}`;

    const mailtoLink = `mailto:contacto@luiscabrejo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const getFormTitle = () => {
    switch (formType) {
      case 'oportunidad':
        return 'Conocer la Oportunidad';
      case 'portal':
        return 'Acceder al Portal';
      case 'test':
        return 'Test de Formulario';
      default:
        return 'Conectar';
    }
  };

  const getFormDescription = () => {
    switch (formType) {
      case 'oportunidad':
        return 'Quiero conocer más sobre el ecosistema empresarial y las oportunidades disponibles.';
      case 'portal':
        return 'Me interesa acceder a las herramientas del portal 4millones.com.';
      case 'test':
        return 'Formulario de prueba para verificar que la integración funciona correctamente.';
      default:
        return 'Conecta conmigo para explorar cómo podemos construir tu ecosistema digital empresarial.';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-gray-700 max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {getFormTitle()}
            </h2>
            <p className="text-sm text-gray-400 mt-1">Luis Cabrejo</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {status === 'sent' ? (
            // Success State
            <div className="text-center py-8">
              <div className="bg-green-500/20 rounded-full p-3 w-fit mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">¡Mensaje Enviado! ✅</h3>
              <p className="text-gray-300 mb-4">
                Tu mensaje ha sido enviado exitosamente. Recibirás una copia de confirmación en tu email.
              </p>
              <p className="text-sm text-gray-400">
                Luis te responderá en las próximas 24 horas.
              </p>
            </div>
          ) : status === 'error' ? (
            // Error State with Manual Options
            <div className="text-center py-8">
              <div className="bg-red-500/20 rounded-full p-3 w-fit mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-400">Error de Conexión</h3>
              <p className="text-gray-300 mb-4 text-sm">
                {errorMessage}
              </p>
              <p className="text-gray-300 mb-6 text-sm">
                Tienes estas opciones alternativas:
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setStatus('idle')}
                  className="w-full bg-blue-500/20 border border-blue-500/50 px-4 py-3 rounded-lg text-sm hover:bg-blue-500/30 transition-all"
                >
                  🔄 Intentar de Nuevo
                </button>

                <button
                  onClick={openMailto}
                  className="w-full bg-green-500/20 border border-green-500/50 px-4 py-3 rounded-lg text-sm hover:bg-green-500/30 transition-all"
                >
                  📧 Abrir Cliente de Email
                </button>

                <div className="text-xs text-gray-400 mt-4">
                  O escribe directamente a:
                  <a href="mailto:contacto@luiscabrejo.com" className="text-blue-400 hover:underline ml-1">
                    contacto@luiscabrejo.com
                  </a>
                </div>
              </div>
            </div>
          ) : (
            // Form State
            <>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {getFormDescription()}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={status === 'loading'}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="+57 300 123 4567"
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    País
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    disabled={status === 'loading'}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                  >
                    <option value="">Selecciona tu país</option>
                    <option value="Colombia">Colombia</option>
                    <option value="México">México</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Panamá">Panamá</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Perú">Perú</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Chile">Chile</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    disabled={status === 'loading'}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
                    placeholder="Cuéntame sobre tu situación actual y qué te gustaría lograr..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Enviar {getFormTitle()}
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-xs text-gray-400 text-center">
                  ✅ Envío seguro con confirmación automática por email<br/>
                  📧 También puedes escribir directamente a{' '}
                  <a href="mailto:contacto@luiscabrejo.com" className="text-blue-400 hover:underline">
                    contacto@luiscabrejo.com
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

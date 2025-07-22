'use client';

import React, { useState } from 'react';
import { X, Mail, User, Phone, MapPin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: 'conectar' | 'oportunidad' | 'portal';
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

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
    setIsLoading(true);
    setStatus('idle');

    try {
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

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        // Reset form after 3 seconds
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
        }, 3000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Error de conexión. Intenta de nuevo.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getFormTitle = () => {
    switch (formType) {
      case 'oportunidad':
        return 'Conocer la Oportunidad';
      case 'portal':
        return 'Acceder al Portal';
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
            disabled={isLoading}
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {status === 'success' ? (
            // Success State
            <div className="text-center py-8">
              <div className="bg-green-500/20 rounded-full p-3 w-fit mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">¡Mensaje Enviado!</h3>
              <p className="text-gray-300 mb-4">
                Gracias por conectar conmigo. Te responderé en las próximas 24 horas.
              </p>
              <p className="text-sm text-gray-400">
                Revisa tu email para más información...
              </p>
            </div>
          ) : (
            // Form State
            <>
              <p className="text-gray-300 mb-6 leading-relaxed">
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
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre completo"
                    disabled={isLoading}
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
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                    disabled={isLoading}
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
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+57 300 123 4567"
                    disabled={isLoading}
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
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isLoading}
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
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntame sobre tu situación actual y qué te gustaría lograr..."
                    disabled={isLoading}
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-red-300 text-sm">{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      {getFormTitle()}
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-xs text-gray-400 text-center">
                  Al enviar este formulario, recibirás una respuesta personalizada en las próximas 24 horas.
                  También puedes escribirme directamente a{' '}
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

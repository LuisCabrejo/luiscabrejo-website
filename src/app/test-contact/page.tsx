'use client';

import { useState } from 'react';
import ContactModal from '@/components/ContactModal';
import Link from 'next/link';

export default function TestContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <Link href="/" className="text-blue-400 hover:underline mb-8 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mb-8">
          🧪 Test ContactModal + API
        </h1>

        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <p className="text-gray-300 mb-8">
            Esta página prueba la integración completa del ContactModal con la API route.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all text-lg"
          >
            🚀 Probar Formulario
          </button>

          <div className="mt-8 text-sm text-gray-400">
            <p><strong>Qué debe pasar:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Modal se abre correctamente</li>
              <li>Formulario envía sin errores</li>
              <li>Muestra "Mensaje Enviado" ✅</li>
              <li>Email llega a luiscabrejo7@gmail.com</li>
              <li>Usuario recibe confirmación</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <p className="text-blue-300 text-sm">
              <strong>💡 Tip:</strong> Abre las herramientas de desarrollador (F12)
              y ve a la pestaña "Console" para ver los logs detallados.
            </p>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        formType="test"
      />
    </div>
  );
}

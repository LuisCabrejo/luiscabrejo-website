'use client';

import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TestApiPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testApi = async () => {
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      console.log('🧪 Iniciando test de API...');

      const testData = {
        name: 'Usuario Test',
        email: 'test@example.com',
        phone: '+57 300 123 4567',
        country: 'Colombia',
        message: 'Este es un mensaje de prueba para verificar la API',
        formType: 'test'
      };

      console.log('📤 Enviando datos:', testData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      console.log('📥 Respuesta recibida:');
      console.log('- Status:', response.status);
      console.log('- Status Text:', response.statusText);
      console.log('- Headers:', Object.fromEntries(response.headers.entries()));

      const responseText = await response.text();
      console.log('- Response Text:', responseText);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}\n\nResponse: ${responseText}`);
      }

      try {
        const jsonResult = JSON.parse(responseText);
        setResult(jsonResult);
        console.log('✅ API Test exitoso:', jsonResult);
      } catch (parseError) {
        throw new Error(`Error parsing JSON: ${parseError}\n\nResponse was: ${responseText}`);
      }

    } catch (err) {
      console.error('❌ Error en test de API:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🧪 Test API Contact Route
          </h1>

          <p className="text-gray-300 mb-8">
            Esta página diagnostica directamente la API route <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">/api/contact</code>
          </p>

          <div className="space-y-6">
            <button
              onClick={testApi}
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Testeando API...
                </>
              ) : (
                'Testear API Route'
              )}
            </button>

            {error && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-red-400">Error Detectado</h3>
                </div>
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono bg-black/30 p-3 rounded">
                  {error}
                </pre>
              </div>
            )}

            {result && (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="font-semibold text-green-400">API Funcionando ✅</h3>
                </div>
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono bg-black/30 p-3 rounded">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )}

            <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
              <h3 className="font-semibold mb-3">📊 Información de Debugging</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <div><strong>Environment:</strong> {process.env.NODE_ENV}</div>
                <div><strong>API Endpoint:</strong> <code className="bg-gray-700 px-1 rounded">/api/contact</code></div>
                <div><strong>Expected Response:</strong> JSON con success: true</div>
                <div><strong>Common Issues:</strong></div>
                <ul className="ml-4 list-disc text-xs text-gray-400">
                  <li>Route file no está en src/app/api/contact/route.ts</li>
                  <li>Variable RESEND_API_KEY no configurada</li>
                  <li>Error de sintaxis en route.ts</li>
                  <li>Next.js devolviendo HTML de error en lugar de JSON</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-blue-400">🔧 Comandos de Debugging</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <div><strong>Test con curl:</strong></div>
                <pre className="bg-black/30 p-2 rounded text-xs overflow-x-auto">
{`curl -X POST http://localhost:3000/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

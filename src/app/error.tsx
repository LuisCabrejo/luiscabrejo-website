'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Error</h1>
        <h2 className="text-2xl font-semibold text-purple-300 mb-6">
          Algo salió mal
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Lo sentimos, ha ocurrido un error inesperado.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="bg-slate-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-600 transition-all"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

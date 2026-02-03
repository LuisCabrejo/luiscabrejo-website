'use client';

/**
 * LuisCabrejo.com - Offline Page
 * Se muestra cuando el usuario pierde conexión
 */

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a5 5 0 01-1.414-7.072m0 0L9.879 9.879M3 3l18 18"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-white mb-4">
          Sin conexión
        </h1>

        {/* Description */}
        <p className="text-gray-400 mb-8">
          Parece que perdiste la conexión a internet.
          <br />
          Verifica tu conexión e intenta de nuevo.
        </p>

        {/* Retry Button */}
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Reintentar
        </button>

        {/* Contact info */}
        <p className="mt-12 text-sm text-gray-500">
          ¿Necesitas ayuda urgente?
          <br />
          <a
            href="https://wa.me/573102066593"
            className="text-gray-400 hover:text-white transition-colors"
          >
            WhatsApp: +57 310 206 6593
          </a>
        </p>
      </div>
    </div>
  );
}

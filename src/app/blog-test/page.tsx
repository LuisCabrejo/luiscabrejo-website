'use client';

import React from 'react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const articles = [
  {
    slug: 'como-ser-distribuidor-gano-excel-colombia-2025',
    title: 'Cómo Ser Distribuidor Gano Excel Colombia 2025: Guía Completa',
    description: 'Guía paso a paso para convertirte en distribuidor Gano Excel en Colombia. Requisitos, costos, paquetes y proceso completo explicado por un Diamante de 11 años.',
    date: '24 Nov 2025',
    category: 'Guías',
    readTime: '12 min',
  },
  {
    slug: 'testimonio-11-anos-diamante-gano-excel-colombia',
    title: 'Testimonio: 11 Años como Diamante Gano Excel en 16 Países',
    description: 'Mi historia real desde la quiebra hasta construir un negocio en 16 países. Los fracasos, las lecciones y cómo la tecnología cambió todo.',
    date: '24 Nov 2025',
    category: 'Testimonios',
    readTime: '15 min',
  },
];

export default function BlogTestPage() {
  return (
    <div className="bg-slate-900 text-gray-300 overflow-x-hidden min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Fondo decorativo con gradientes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-green-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navigation />

      <div className="container mx-auto px-4 pt-28 pb-12 md:pt-36 md:pb-20">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Blog Gano Excel
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Network Marketing Real
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Artículos honestos sobre Gano Excel, network marketing y tecnología.
            <br />
            Por <strong className="text-purple-400">Luis Cabrejo</strong>, Diamante 11 años en 16 países.
          </p>
        </header>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 sm:p-8 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-purple-400">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-400">{article.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {article.description}
                </p>

                {/* Date */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <span className="text-sm text-gray-400">{article.date}</span>
                  <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    Leer artículo →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State for Future Articles */}
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Más artículos próximamente. Mientras tanto:
            </p>
            <Link
              href="/fundadores"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-xl transition-all"
            >
              Conoce el Programa Fundadores →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

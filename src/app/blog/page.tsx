/**
 * Copyright © 2026 luiscabrejo.com
 * Todos los derechos reservados.
 *
 * THE ARCHITECT'S SUITE - Bimetallic System v3.0
 * Gold (#C5A059): CTAs, prices, achievements
 * Titanium (#94A3B8): Icons, navigation, structural borders
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

interface ArticleCard {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

const articles: ArticleCard[] = [
  {
    slug: 'el-fin-del-rechazo',
    title: 'El Fin del Rechazo: Cómo la IA está Creando Networkers Millonarios',
    description: 'Descubre el sistema de Network Marketing con IA que automatiza el 80% del trabajo, elimina el rechazo y te permite construir un activo real sin perseguir a nadie.',
    date: '4 Dic 2025',
    category: 'Tecnología',
    readTime: '10 min',
  },
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

export default function BlogPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="bg-[#0F1115] text-[#A3A3A3] overflow-x-hidden min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* BIMETALLIC: Atmospheric spotlights */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#94A3B8] rounded-full opacity-[0.06] blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#C5A059] rounded-full opacity-[0.04] blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-[#94A3B8] rounded-full opacity-[0.03] blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navigation onContactClick={() => setContactModalOpen(true)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

      <div className="container mx-auto px-4 pt-28 pb-12 md:pt-36 md:pb-20">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#94A3B8]/5 to-[#C5A059]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog Gano Excel
              <span className="block mt-2 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#E5E5E5] bg-clip-text text-transparent">
                Network Marketing Real
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#A3A3A3] max-w-3xl mx-auto">
              Artículos honestos sobre Gano Excel, network marketing y tecnología.
              <br />
              Por <strong className="text-[#C5A059]">Luis Cabrejo</strong>, Diamante 11 años en 16 países.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-[#C5A059]/40 transition-all hover:shadow-xl hover:shadow-[#C5A059]/10"
            >
              {/* Category and Read Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-[#C5A059]">
                  {article.category}
                </span>
                <span className="text-sm text-[#64748B]">{article.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                {article.title}
              </h2>

              {/* Description */}
              <p className="text-[#A3A3A3] mb-4 leading-relaxed">
                {article.description}
              </p>

              {/* Date */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-sm text-[#64748B]">{article.date}</span>
                <span className="text-sm font-semibold text-[#94A3B8] group-hover:text-[#C5A059] transition-colors">
                  Leer artículo →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State for Future Articles */}
        <div className="mt-12 text-center">
          <p className="text-[#64748B] mb-6">
            Más artículos próximamente. Mientras tanto:
          </p>
          <Link
            href="/fundadores"
            className="inline-flex items-center px-6 py-3 bg-[#C5A059] text-[#0F1115] rounded-full font-semibold hover:bg-[#D4AF37] hover:shadow-xl transition-all"
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

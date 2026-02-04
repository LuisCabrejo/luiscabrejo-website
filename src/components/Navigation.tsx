/**
 * Copyright © 2026 LuisCabrejo.com
 * Personal Brand Site - Luis Cabrejo
 *
 * THE ARCHITECT'S SUITE - Bimetallic System v3.0
 * Gold (#C5A059): CTAs, achievements, key highlights
 * Titanium (#94A3B8): Structural elements, navigation, muted text
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  onContactClick?: () => void;
}

const blogArticles = [
  {
    title: 'El Fin del Rechazo (IA + Network Marketing)',
    slug: '/blog/el-fin-del-rechazo',
  },
  {
    title: 'Guía: Cómo Ser Distribuidor Gano Excel',
    slug: '/blog/como-ser-distribuidor-gano-excel-colombia-2025',
  },
  {
    title: 'Testimonio: 11 Años como Diamante',
    slug: '/blog/testimonio-11-anos-diamante-gano-excel-colombia',
  },
];

export default function Navigation({ onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#0F1115]/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-0.5 group">
              {/* Monograma - más pequeño en móvil para reducir altura */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 translate-y-0.5">
                <Image
                  src="/logos/logo-luiscabrejo-profile.png"
                  alt="Luis Cabrejo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Nombre en Serif (Playfair Display) - Quiet Luxury */}
              <span className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl md:text-2xl font-medium text-white tracking-wide leading-none group-hover:text-[#C5A059] transition-colors">
                Luis Cabrejo
              </span>
            </Link>

            <div className="hidden md:flex space-x-8 text-sm items-center">
              <Link href="/fundadores" className="text-[#E5E5E5] hover:text-[#C5A059] transition-colors font-semibold">
                Programa Fundadores
              </Link>

              {/* Blog Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setBlogDropdownOpen(true)}
                onMouseLeave={() => setBlogDropdownOpen(false)}
              >
                <Link
                  href="/blog"
                  className="text-[#E5E5E5] hover:text-[#C5A059] transition-colors flex items-center gap-1"
                >
                  Blog
                  <ChevronDown className={`w-4 h-4 transition-transform ${blogDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {blogDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-72">
                    <div className="bg-[#1A1D23]/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl overflow-hidden">
                      {blogArticles.map((article) => (
                        <Link
                          key={article.slug}
                          href={article.slug}
                          className="block px-4 py-3 text-sm text-[#A3A3A3] hover:bg-[#15171C] hover:text-[#C5A059] transition-colors border-b border-white/5 last:border-b-0"
                        >
                          {article.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/historia" className="text-[#E5E5E5] hover:text-[#C5A059] transition-colors">
                Mi Historia
              </Link>
              <Link href="/ecosistema" className="text-[#E5E5E5] hover:text-[#C5A059] transition-colors">
                Ecosistema
              </Link>
              <Link href="/vision" className="text-[#E5E5E5] hover:text-[#C5A059] transition-colors">
                Vision 4M
              </Link>
            </div>

            {onContactClick && (
              <button
                onClick={onContactClick}
                className="hidden md:block bg-[#C5A059] text-[#0F1115] px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:shadow-[0_0_20px_-5px_rgba(197,160,89,0.5)] transition-all font-semibold"
              >
                Conectar
              </button>
            )}

            <button
              className="md:hidden p-2 text-[#E5E5E5]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay oscuro */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Menú móvil pantalla completa */}
      <div
        className={`fixed inset-0 z-[70] md:hidden bg-[#0F1115] transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header del menú móvil */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <Link href="/" className="flex items-center gap-0.5" onClick={closeMobileMenu}>
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/logos/logo-luiscabrejo-profile.png"
                alt="Luis Cabrejo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-[family-name:var(--font-playfair)] text-lg font-medium text-white tracking-wide leading-none">
              Luis Cabrejo
            </span>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="p-2 text-[#A3A3A3] hover:text-[#C5A059] transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido del menú */}
        <div className="px-6 py-8 space-y-6 overflow-y-auto h-[calc(100vh-64px)]">
          <Link
            href="/fundadores"
            className="block text-xl font-bold text-[#C5A059] hover:text-[#D4AF37] transition-colors"
            onClick={closeMobileMenu}
          >
            Programa Fundadores
          </Link>

          {/* Blog Section with Articles */}
          <div className="space-y-3">
            <Link
              href="/blog"
              className="block text-xl font-medium text-[#E5E5E5] hover:text-[#C5A059] transition-colors"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <div className="ml-4 space-y-3">
              {blogArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="block text-base text-[#64748B] hover:text-[#C5A059] transition-colors"
                  onClick={closeMobileMenu}
                >
                  • {article.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/historia"
            className="block text-xl font-medium text-[#E5E5E5] hover:text-[#C5A059] transition-colors"
            onClick={closeMobileMenu}
          >
            Mi Historia
          </Link>
          <Link
            href="/ecosistema"
            className="block text-xl font-medium text-[#E5E5E5] hover:text-[#C5A059] transition-colors"
            onClick={closeMobileMenu}
          >
            Ecosistema
          </Link>
          <Link
            href="/vision"
            className="block text-xl font-medium text-[#E5E5E5] hover:text-[#C5A059] transition-colors"
            onClick={closeMobileMenu}
          >
            Vision 4M
          </Link>

          {onContactClick && (
            <button
              onClick={handleContactClick}
              className="w-full bg-[#C5A059] text-[#0F1115] px-6 py-4 rounded-full hover:bg-[#D4AF37] hover:shadow-[0_0_20px_-5px_rgba(197,160,89,0.5)] transition-all font-semibold text-lg mt-8"
            >
              Conectar
            </button>
          )}
        </div>
      </div>
    </>
  );
}

/**
 * Copyright © 2026 LuisCabrejo.com
 * Personal Brand Site - Luis Cabrejo
 *
 * THE ARCHITECT'S SUITE - Bimetallic System v3.0
 * Gold (#C5A059): CTAs, achievements, key highlights
 * Titanium (#94A3B8): Structural elements, navigation, muted text
 */

'use client';

import React, { useState } from 'react';
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

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0F1115]/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/logos/logo-luiscabrejo-profile.png"
                alt="Luis Cabrejo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent group-hover:from-[#D4AF37] group-hover:to-[#C5A059] transition-all">
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
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1115]/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/fundadores"
              className="block text-lg font-bold text-[#E5E5E5] hover:text-[#C5A059] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programa Fundadores
            </Link>

            {/* Blog Section with Articles */}
            <div>
              <Link
                href="/blog"
                className="block text-lg font-medium text-[#E5E5E5] hover:text-[#C5A059] transition-colors mb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="ml-4 space-y-2">
                {blogArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={article.slug}
                    className="block text-sm text-[#64748B] hover:text-[#C5A059] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {article.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/historia"
              className="block text-lg font-medium text-[#E5E5E5] hover:text-[#C5A059] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mi Historia
            </Link>
            <Link
              href="/ecosistema"
              className="block text-lg font-medium text-[#E5E5E5] hover:text-[#C5A059] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ecosistema
            </Link>
            <Link
              href="/vision"
              className="block text-lg font-medium text-[#E5E5E5] hover:text-[#C5A059] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vision 4M
            </Link>
            {onContactClick && (
              <button
                onClick={handleContactClick}
                className="w-full bg-[#C5A059] text-[#0F1115] px-6 py-3 rounded-full hover:bg-[#D4AF37] hover:shadow-[0_0_20px_-5px_rgba(197,160,89,0.5)] transition-all font-semibold mt-4"
              >
                Conectar
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

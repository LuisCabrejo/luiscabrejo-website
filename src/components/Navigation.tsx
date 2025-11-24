'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onContactClick?: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Luis Cabrejo
          </Link>

          <div className="hidden md:flex space-x-8 text-sm">
            <Link href="/fundadores" className="text-white hover:text-purple-400 transition-colors font-semibold">
              Programa Fundadores
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/historia" className="text-white hover:text-blue-400 transition-colors">
              Mi Historia
            </Link>
            <Link href="/ecosistema" className="text-white hover:text-blue-400 transition-colors">
              Ecosistema
            </Link>
            <Link href="/vision" className="text-white hover:text-blue-400 transition-colors">
              Vision 4M
            </Link>
          </div>

          {onContactClick && (
            <button
              onClick={onContactClick}
              className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Conectar
            </button>
          )}

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/fundadores"
              className="block text-lg font-bold text-white hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programa Fundadores
            </Link>
            <Link
              href="/blog"
              className="block text-lg font-medium text-white hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/historia"
              className="block text-lg font-medium text-white hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mi Historia
            </Link>
            <Link
              href="/ecosistema"
              className="block text-lg font-medium text-white hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ecosistema
            </Link>
            <Link
              href="/vision"
              className="block text-lg font-medium text-white hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vision 4M
            </Link>
            {onContactClick && (
              <button
                onClick={handleContactClick}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium mt-4"
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

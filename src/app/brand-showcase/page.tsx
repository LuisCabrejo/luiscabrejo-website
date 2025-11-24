'use client'

import React from 'react'
import Logo from '@/components/Logo'
import { LogoInline, LogoGradientAnimated, LogoGold } from '@/components/Logo'
import Link from 'next/link'

/**
 * BRAND SHOWCASE - Página de demostración de branding
 *
 * Esta página muestra todos los elementos de branding:
 * - Paleta de colores
 * - Tipografía
 * - Logos
 * - Componentes UI
 * - Gradientes
 *
 * URL: /brand-showcase
 * Uso: Referencia interna para desarrolladores y diseñadores
 */

export default function BrandShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Brand Showcase
          </h1>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Volver al sitio
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Introducción */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Luis Cabrejo / CreaTuActivo.com</h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            Guía de referencia visual para todos los elementos de branding del ecosistema CreaTuActivo.com
          </p>
        </section>

        {/* Paleta de Colores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🎨 Paleta de Colores</h2>

          {/* Colores Primarios */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Colores Primarios</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#667eea' }}></div>
                <div className="font-semibold">Morado Principal</div>
                <div className="text-sm text-gray-400">#667eea</div>
                <div className="text-xs text-gray-500 mt-1">Botones, logos, CTAs</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#5568d3' }}></div>
                <div className="font-semibold">Morado Hover</div>
                <div className="text-sm text-gray-400">#5568d3</div>
                <div className="text-xs text-gray-500 mt-1">Hover states</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#764ba2' }}></div>
                <div className="font-semibold">Morado Oscuro</div>
                <div className="text-sm text-gray-400">#764ba2</div>
                <div className="text-xs text-gray-500 mt-1">Gradientes</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#3b82f6' }}></div>
                <div className="font-semibold">Azul Tech</div>
                <div className="text-sm text-gray-400">#3b82f6</div>
                <div className="text-xs text-gray-500 mt-1">Links, secundario</div>
              </div>

            </div>
          </div>

          {/* Colores Secundarios */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Colores Secundarios</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#10b981' }}></div>
                <div className="font-semibold">Verde Éxito</div>
                <div className="text-sm text-gray-400">#10b981</div>
                <div className="text-xs text-gray-500 mt-1">Checks, success</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#ffd700' }}></div>
                <div className="font-semibold">Dorado Premium</div>
                <div className="text-sm text-gray-400">#ffd700</div>
                <div className="text-xs text-gray-500 mt-1">Diamante, VIP</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#06b6d4' }}></div>
                <div className="font-semibold">Cyan Tech</div>
                <div className="text-sm text-gray-400">#06b6d4</div>
                <div className="text-xs text-gray-500 mt-1">Innovación</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#ef4444' }}></div>
                <div className="font-semibold">Rojo Error</div>
                <div className="text-sm text-gray-400">#ef4444</div>
                <div className="text-xs text-gray-500 mt-1">Errores, alertas</div>
              </div>

            </div>
          </div>

          {/* Grises y Backgrounds */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Backgrounds y Grises</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3 border border-gray-600" style={{ backgroundColor: '#0f172a' }}></div>
                <div className="font-semibold">Slate 900</div>
                <div className="text-sm text-gray-400">#0f172a</div>
                <div className="text-xs text-gray-500 mt-1">BG principal</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3" style={{ backgroundColor: '#1e293b' }}></div>
                <div className="font-semibold">Slate 800</div>
                <div className="text-sm text-gray-400">#1e293b</div>
                <div className="text-xs text-gray-500 mt-1">Cards, secciones</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3 flex items-center justify-center text-gray-900" style={{ backgroundColor: '#d1d5db' }}>
                  <span className="font-bold">Aa</span>
                </div>
                <div className="font-semibold">Gray 300</div>
                <div className="text-sm text-gray-400">#d1d5db</div>
                <div className="text-xs text-gray-500 mt-1">Texto principal</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="w-full h-24 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: '#9ca3af' }}>
                  <span className="font-bold text-gray-900">Aa</span>
                </div>
                <div className="font-semibold">Gray 400</div>
                <div className="text-sm text-gray-400">#9ca3af</div>
                <div className="text-xs text-gray-500 mt-1">Texto secundario</div>
              </div>

            </div>
          </div>
        </section>

        {/* Gradientes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🌈 Gradientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="rounded-xl p-8 h-32 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600">
              <span className="font-bold text-xl">Purple → Blue (Principal)</span>
            </div>

            <div className="rounded-xl p-8 h-32 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400">
              <span className="font-bold text-xl">Blue → Purple (Texto)</span>
            </div>

            <div className="rounded-xl p-8 h-32 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              <span className="font-bold text-xl">Cyan → Blue → Purple (Tech)</span>
            </div>

            <div className="rounded-xl p-8 h-32 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-200 text-gray-900">
              <span className="font-bold text-xl">Gold (Premium)</span>
            </div>

          </div>
        </section>

        {/* Logos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🏷️ Logotipos</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Logo variant="square" size={80} />
              <div className="mt-4 font-semibold">Square (Principal)</div>
              <div className="text-sm text-gray-400">Uso general</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Logo variant="gradient" size={80} />
              <div className="mt-4 font-semibold">Gradient</div>
              <div className="text-sm text-gray-400">Hero sections</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <Logo variant="circular" size={80} />
              <div className="mt-4 font-semibold">Circular</div>
              <div className="text-sm text-gray-400">Footer, icons</div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <LogoGold size={80} />
              <div className="mt-4 font-semibold">Gold</div>
              <div className="text-sm text-gray-400">Premium</div>
            </div>

          </div>

          <div className="mt-8 bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Logo Animado</h3>
            <div className="flex justify-center">
              <LogoGradientAnimated size={100} />
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">Gradiente con animación suave</p>
          </div>
        </section>

        {/* Tipografía */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">📝 Tipografía</h2>

          <div className="bg-gray-800 rounded-xl p-8 space-y-8">

            <div>
              <div className="text-6xl font-bold mb-2">Heading 1 (H1)</div>
              <div className="text-sm text-gray-400">text-6xl font-bold - Hero principal</div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">Heading 2 (H2)</div>
              <div className="text-sm text-gray-400">text-4xl font-bold - Secciones principales</div>
            </div>

            <div>
              <div className="text-2xl font-semibold mb-2">Heading 3 (H3)</div>
              <div className="text-sm text-gray-400">text-2xl font-semibold - Subsecciones</div>
            </div>

            <div>
              <div className="text-xl font-semibold mb-2">Heading 4 (H4)</div>
              <div className="text-sm text-gray-400">text-xl font-semibold - Títulos de cards</div>
            </div>

            <div>
              <div className="text-lg mb-2">Paragraph Large (Lead)</div>
              <div className="text-sm text-gray-400">text-lg - Texto introductorio importante</div>
            </div>

            <div>
              <div className="text-base mb-2">Paragraph Normal (Body)</div>
              <div className="text-sm text-gray-400">text-base - Texto de párrafos estándar</div>
            </div>

            <div>
              <div className="text-sm mb-2">Small Text</div>
              <div className="text-xs text-gray-400">text-sm - Texto secundario, disclaimers</div>
            </div>

          </div>
        </section>

        {/* Botones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🔘 Botones</h2>

          <div className="bg-gray-800 rounded-xl p-8 space-y-6">

            {/* Primary */}
            <div>
              <div className="mb-2 text-sm text-gray-400">Primary (CTA Principal)</div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all">
                Ver Programa Fundadores
              </button>
            </div>

            {/* Secondary */}
            <div>
              <div className="mb-2 text-sm text-gray-400">Secondary (Outline)</div>
              <button className="border border-purple-400/50 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/10 transition-all">
                Conocer Más
              </button>
            </div>

            {/* Small */}
            <div>
              <div className="mb-2 text-sm text-gray-400">Small</div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all">
                Conectar
              </button>
            </div>

            {/* Ghost */}
            <div>
              <div className="mb-2 text-sm text-gray-400">Ghost (Texto con hover)</div>
              <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Saber más →
              </button>
            </div>

          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">📇 Cards</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Card Standard</h3>
              <p className="text-gray-400 mb-4">
                Diseño de card estándar con background semi-transparente y borde sutil.
              </p>
              <div className="text-sm text-gray-500">
                bg-gray-800/50 border-gray-700
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">Card con Hover</h3>
              <p className="text-gray-400 mb-4">
                Card interactiva con efecto hover scale y shadow.
              </p>
              <div className="text-sm text-gray-500">
                hover:scale-105 hover:shadow-2xl
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-3">Card Destacada</h3>
              <p className="text-gray-400 mb-4">
                Card con gradiente de fondo para destacar contenido importante.
              </p>
              <div className="text-sm text-purple-300">
                bg-gradient-to-br border-purple-500/30
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Card Glassmorphism</h3>
              <p className="text-gray-400 mb-4">
                Efecto vidrio con backdrop blur y transparencias.
              </p>
              <div className="text-sm text-blue-300">
                backdrop-blur-sm border-opacity-30
              </div>
            </div>

          </div>
        </section>

        {/* Badges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🏷️ Badges</h2>

          <div className="bg-gray-800 rounded-xl p-8 flex flex-wrap gap-4">

            <span className="inline-block bg-purple-500/20 rounded-full px-4 py-2 text-sm border border-purple-500/30">
              💎 Diamante 11 años
            </span>

            <span className="inline-block bg-blue-500/20 rounded-full px-4 py-2 text-sm border border-blue-500/30">
              🚀 Nuevo
            </span>

            <span className="inline-block bg-green-500/20 rounded-full px-4 py-2 text-sm border border-green-500/30">
              ✓ Verificado
            </span>

            <span className="inline-block bg-yellow-500/20 rounded-full px-4 py-2 text-sm border border-yellow-500/30 text-yellow-200">
              ⭐ Premium
            </span>

            <span className="inline-block bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full px-4 py-2 text-sm border border-purple-400/50">
              🔥 Fundadores 2025
            </span>

          </div>
        </section>

        {/* Texto con Gradiente */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">✨ Texto con Gradiente</h2>

          <div className="bg-gray-800 rounded-xl p-8 space-y-6">

            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Luis Cabrejo
              </div>
              <div className="text-sm text-gray-400">
                bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent mb-2">
                CreaTuActivo.com
              </div>
              <div className="text-sm text-gray-400">
                bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent mb-2">
                Diamante Premium
              </div>
              <div className="text-sm text-gray-400">
                Gradiente dorado para contenido premium
              </div>
            </div>

          </div>
        </section>

        {/* Jerarquía de Marcas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🏢 Jerarquía de Marcas</h2>

          <div className="bg-gray-800 rounded-xl p-8">
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    Luis Cabrejo
                  </div>
                  <div className="text-gray-400">
                    Marca personal - Mentor, Diamante 11 años, Arquitecto de Ecosistemas Digitales
                  </div>
                  <div className="text-sm text-purple-400 mt-2">
                    Colores: Blue-Purple gradient (profesional)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent mb-2">
                    CreaTuActivo.com
                  </div>
                  <div className="text-gray-400">
                    Plataforma principal - Ecosistema tecnológico para construir activos empresariales
                  </div>
                  <div className="text-sm text-purple-400 mt-2">
                    Colores: Full spectrum (Blue, Purple, Green, Gold)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    Gano Excel
                  </div>
                  <div className="text-gray-400">
                    Productos - Compañía de productos (socio de distribución)
                  </div>
                  <div className="text-sm text-yellow-400 mt-2">
                    Colores: Purple (MLM), Gold (Diamante status)
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-gray-700 pt-12">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Brand Guidelines v1.0
            </div>
            <p className="text-gray-400 mb-6">
              Documentación completa en: <code className="text-purple-400">BRAND-GUIDELINES.md</code>
            </p>
            <Link href="/" className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
              Volver al Sitio Principal
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}

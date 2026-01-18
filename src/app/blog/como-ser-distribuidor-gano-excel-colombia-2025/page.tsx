/**
 * Copyright © 2026 luiscabrejo.com
 * Todos los derechos reservados.
 *
 * Artículo: Cómo Ser Distribuidor Gano Excel Colombia 2025
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

const metadata = {
  title: 'Cómo Ser Distribuidor Gano Excel Colombia 2025: Guía Completa Paso a Paso',
  description: 'Guía completa para convertirte en distribuidor Gano Excel en Colombia. Requisitos, inversión desde $200 USD, proceso de registro y todo lo que necesitas saber. Por Luis Cabrejo, Diamante 11 años.',
  keywords: [
    'como ser distribuidor gano excel',
    'distribuidor gano excel colombia',
    'requisitos gano excel',
    'cuanto cuesta ser distribuidor gano excel',
    'afiliacion gano excel',
    'paquetes gano excel colombia',
    'como registrarse gano excel',
    'oportunidad negocio gano excel',
    'luis cabrejo gano excel',
    'gano excel 2025',
  ],
  openGraph: {
    title: 'Cómo Ser Distribuidor Gano Excel Colombia 2025 - Guía Completa',
    description: 'Requisitos, inversión y proceso completo explicado por Luis Cabrejo, Diamante 11 años. Desde $200 USD.',
    url: 'https://luiscabrejo.com/blog/como-ser-distribuidor-gano-excel-colombia-2025',
    type: 'article',
    images: [{
      url: '/images/og-como-ser-distribuidor.jpg',
      width: 1200,
      height: 630,
      alt: 'Guía Cómo Ser Distribuidor Gano Excel Colombia 2025',
    }],
  },
  alternates: {
    canonical: 'https://luiscabrejo.com/blog/como-ser-distribuidor-gano-excel-colombia-2025',
  },
};

export default function ArticlePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cómo Ser Distribuidor Gano Excel Colombia 2025: Guía Completa Paso a Paso',
    description: 'Guía completa para convertirte en distribuidor Gano Excel en Colombia. Requisitos, inversión, proceso de registro y todo lo que necesitas saber.',
    image: 'https://luiscabrejo.com/images/og-como-ser-distribuidor.jpg',
    author: {
      '@type': 'Person',
      name: 'Luis Cabrejo',
      url: 'https://luiscabrejo.com',
      jobTitle: 'Diamante Gano Excel',
    },
    publisher: {
      '@type': 'Person',
      name: 'Luis Cabrejo',
    },
    datePublished: '2025-11-24',
    dateModified: '2025-11-24',
  };

  // FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta ser distribuidor Gano Excel en Colombia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La inversión inicial varía según el paquete: Consumidor Inteligente desde $88 USD (50 PV), Distribuidor ESP2 $500 USD, o Distribuidor ESP3 $1,000 USD. Con el Programa Fundadores puedes comenzar desde $200 USD con acceso a tecnología CreaTuActivo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué requisitos necesito para ser distribuidor Gano Excel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Requisitos básicos: Ser mayor de 18 años, tener documento de identidad válido, cuenta bancaria o medio de pago, y realizar la inversión inicial en productos. No se requiere experiencia previa en network marketing.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo toma activarse como distribuidor Gano Excel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El proceso de registro y activación toma entre 1-3 días hábiles. Una vez aprobado tu registro y procesado el pago, recibes tu código de distribuidor y acceso al sistema.',
        },
      },
    ],
  };

  return (
    <>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="min-h-screen bg-[#0F1115] overflow-x-hidden">
        {/* BIMETALLIC: Atmospheric spotlights */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#94A3B8] rounded-full opacity-[0.06] blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#C5A059] rounded-full opacity-[0.04] blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Navigation onContactClick={() => setContactModalOpen(true)} />
        <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

        {/* Hero */}
        <div className="relative overflow-hidden border-b border-white/10 pt-24 sm:pt-32">
          <div className="absolute inset-0 bg-gradient-to-r from-[#94A3B8]/5 to-[#C5A059]/5"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="mb-6 flex items-center justify-between">
              <Link href="/blog" className="text-sm text-[#C5A059] hover:text-[#D4AF37] transition-colors">
                ← Volver al Blog
              </Link>
              <span className="text-sm text-[#64748B]">12 min lectura</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Cómo Ser Distribuidor Gano Excel Colombia 2025: <span className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent">Guía Completa Paso a Paso</span>
            </h1>
            <p className="text-lg text-[#A3A3A3] mb-6">
              Todo lo que necesitas saber para convertirte en distribuidor Gano Excel en Colombia: requisitos, inversión, proceso y opciones de paquetes.
            </p>
            <div className="flex items-center space-x-4 text-sm text-[#64748B]">
              <span>Por <strong className="text-[#C5A059]">Luis Cabrejo</strong></span>
              <span>•</span>
              <span>24 Nov 2025</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-[#A3A3A3] leading-relaxed">
              Si estás leyendo esto, probablemente ya conoces Gano Excel o has escuchado sobre la oportunidad de construir un negocio distribuyendo sus productos de café y ganoderma. Tal vez ya probaste el café, te gustó, y ahora te preguntas: <strong className="text-white">"¿Cómo me convierto en distribuidor?"</strong>
            </p>
            <p className="text-[#A3A3A3] leading-relaxed">
              Durante 11 años como <strong className="text-[#C5A059]">Diamante Gano Excel</strong>, he ayudado a cientos de personas en 16 países a dar sus primeros pasos en este negocio. En este artículo te voy a explicar <strong className="text-white">exactamente</strong> cómo convertirte en distribuidor en Colombia, cuánto cuesta, qué opciones tienes, y qué esperar del proceso.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Tabla de Contenidos</h2>
            <ul className="space-y-2 text-[#A3A3A3]">
              <li><a href="#que-es-distribuidor" className="hover:text-[#C5A059] transition-colors">1. ¿Qué es ser distribuidor Gano Excel?</a></li>
              <li><a href="#requisitos" className="hover:text-[#C5A059] transition-colors">2. Requisitos para ser distribuidor</a></li>
              <li><a href="#paquetes" className="hover:text-[#C5A059] transition-colors">3. Paquetes e inversión inicial</a></li>
              <li><a href="#proceso" className="hover:text-[#C5A059] transition-colors">4. Proceso de registro paso a paso</a></li>
              <li><a href="#comparativa" className="hover:text-[#C5A059] transition-colors">5. Comparativa: Registro tradicional vs Programa Fundadores</a></li>
              <li><a href="#faq" className="hover:text-[#C5A059] transition-colors">6. Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="que-es-distribuidor" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">¿Qué es Ser Distribuidor Gano Excel?</h2>
            <p className="text-[#A3A3A3] leading-relaxed mb-4">
              Ser distribuidor Gano Excel significa que eres un <strong className="text-white">empresario independiente</strong> autorizado para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#A3A3A3] mb-6">
              <li><strong className="text-white">Comprar productos a precio mayorista</strong> (descuento del 25% al 40%)</li>
              <li><strong className="text-white">Revender productos</strong> con margen de ganancia</li>
              <li><strong className="text-white">Reclutar y capacitar</strong> a otros distribuidores</li>
              <li><strong className="text-white">Ganar comisiones y bonos</strong> por las ventas de tu red</li>
              <li><strong className="text-white">Construir ingresos residuales</strong> escalables</li>
            </ul>
            <div className="bg-[#15171C] border-l-4 border-[#94A3B8] p-6 rounded-r-lg">
              <p className="text-[#A3A3A3]">
                <strong className="text-[#94A3B8]">Importante:</strong> No eres empleado de Gano Excel. Eres un distribuidor independiente, lo que significa que trabajas bajo tu propio riesgo y ritmo. Gano Excel te provee los productos y el plan de compensación, pero tú construyes tu propio negocio.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="requisitos" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Requisitos para Ser Distribuidor</h2>
            <p className="text-[#A3A3A3] leading-relaxed mb-4">
              Los requisitos básicos son bastante accesibles:
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">Requisitos Obligatorios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-lg p-5">
                <h4 className="text-lg font-bold text-[#C5A059] mb-2">1. Edad Legal</h4>
                <p className="text-[#A3A3A3]">Ser mayor de 18 años (en Colombia y la mayoría de países)</p>
              </div>
              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-lg p-5">
                <h4 className="text-lg font-bold text-[#C5A059] mb-2">2. Documentación</h4>
                <p className="text-[#A3A3A3]">Cédula de ciudadanía o documento de identidad válido</p>
              </div>
              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-lg p-5">
                <h4 className="text-lg font-bold text-[#C5A059] mb-2">3. Medio de Pago</h4>
                <p className="text-[#A3A3A3]">Cuenta bancaria, tarjeta de crédito o medio de pago digital</p>
              </div>
              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-lg p-5">
                <h4 className="text-lg font-bold text-[#C5A059] mb-2">4. Inversión Inicial</h4>
                <p className="text-[#A3A3A3]">Capital para comprar tu primer paquete de productos</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">Lo que NO Necesitas</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#A3A3A3] mb-6">
              <li>❌ Experiencia previa en ventas o network marketing</li>
              <li>❌ Título universitario o formación específica</li>
              <li>❌ Local comercial físico</li>
              <li>❌ Inventario grande (puedes empezar con paquete pequeño)</li>
              <li>❌ Empleados o equipo (tú eres el equipo al inicio)</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="paquetes" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6"><span className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent">Paquetes e Inversión Inicial</span></h2>
            <p className="text-[#A3A3A3] leading-relaxed mb-6">
              Gano Excel ofrece diferentes niveles de entrada según tu presupuesto y objetivos. Aquí están las opciones oficiales:
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Paquetes Oficiales Gano Excel</h3>

            {/* Package 1 */}
            <div className="bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Consumidor Inteligente</h4>
                <span className="text-2xl font-bold text-emerald-400">~$88 USD</span>
              </div>
              <p className="text-[#A3A3A3] mb-4">
                <strong className="text-white">50 PV mínimo</strong> (Puntos de Volumen)
              </p>
              <div className="bg-[#0F1115] rounded-lg p-4 mb-4">
                <p className="text-sm text-[#64748B] mb-2"><strong>Incluye:</strong></p>
                <ul className="text-sm text-[#A3A3A3] space-y-1">
                  <li>• Productos Gano Excel (café, té, suplementos)</li>
                  <li>• Descuento del 25% en compras</li>
                  <li>• Código de distribuidor básico</li>
                </ul>
              </div>
              <p className="text-sm text-[#64748B]">
                <strong>Para quién es:</strong> Personas que quieren consumir productos con descuento y tal vez vender a algunos conocidos sin gran compromiso.
              </p>
            </div>

            {/* Package 2 */}
            <div className="bg-[#15171C] border border-[#94A3B8]/50 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Distribuidor ESP2</h4>
                <span className="text-2xl font-bold text-[#94A3B8]">$500 USD</span>
              </div>
              <p className="text-[#A3A3A3] mb-4">
                <strong className="text-white">Paquete empresarial estándar</strong>
              </p>
              <div className="bg-[#0F1115] rounded-lg p-4 mb-4">
                <p className="text-sm text-[#64748B] mb-2"><strong>Incluye:</strong></p>
                <ul className="text-sm text-[#A3A3A3] space-y-1">
                  <li>• Variedad de productos Gano Excel</li>
                  <li>• Descuento del 30-35% en compras</li>
                  <li>• Acceso completo al plan de compensación</li>
                  <li>• Material de capacitación oficial</li>
                </ul>
              </div>
              <p className="text-sm text-[#64748B]">
                <strong>Para quién es:</strong> Personas que quieren construir un negocio serio con ingresos mensuales significativos.
              </p>
            </div>

            {/* Package 3 */}
            <div className="bg-[#15171C] border border-[#C5A059]/50 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Distribuidor ESP3</h4>
                <span className="text-2xl font-bold text-[#C5A059]">$1,000 USD</span>
              </div>
              <p className="text-[#A3A3A3] mb-4">
                <strong className="text-white">Paquete premium para inicio acelerado</strong>
              </p>
              <div className="bg-[#0F1115] rounded-lg p-4 mb-4">
                <p className="text-sm text-[#64748B] mb-2"><strong>Incluye:</strong></p>
                <ul className="text-sm text-[#A3A3A3] space-y-1">
                  <li>• Mayor variedad y volumen de productos</li>
                  <li>• Descuento del 35-40% en compras</li>
                  <li>• Acceso premium al plan de compensación</li>
                  <li>• Bonos de inicio más altos</li>
                </ul>
              </div>
              <p className="text-sm text-[#64748B]">
                <strong>Para quién es:</strong> Emprendedores con capital que quieren maximizar resultados desde el inicio.
              </p>
            </div>
          </section>

          {/* CTA Mid-Article */}
          <div className="bg-[#15171C] border-l-4 border-[#C5A059] rounded-r-xl p-6 sm:p-8 my-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">💎 Consejo de Diamante</h3>
            <p className="text-[#A3A3A3] mb-4 leading-relaxed">
              Muchas personas me preguntan: "¿Con cuál paquete debería empezar?" Mi respuesta siempre es: <strong className="text-white">Depende de tu presupuesto y tu nivel de compromiso.</strong> Si tienes el capital, ESP2 o ESP3 te dan acceso completo desde el día 1. Pero si tu presupuesto es limitado, puedes empezar como Consumidor Inteligente y escalar cuando generes ganancias.
            </p>
            <p className="text-[#A3A3A3] mb-4">
              Lo que SÍ te puedo decir es esto: <strong className="text-[#C5A059]">El éxito no depende del tamaño del paquete inicial, sino de tu consistencia y sistema de trabajo.</strong>
            </p>
            <Link
              href="/fundadores"
              className="inline-flex items-center text-[#C5A059] hover:text-[#D4AF37] font-semibold transition-colors"
            >
              Ver Programa Fundadores con Tecnología →
            </Link>
          </div>

          {/* Section 4 */}
          <section id="proceso" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Proceso de Registro Paso a Paso</h2>
            <p className="text-[#A3A3A3] leading-relaxed mb-6">
              Aquí está el proceso estándar para registrarte como distribuidor Gano Excel en Colombia:
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-[#1A1D23]/50 border-l-4 border-[#C5A059] rounded-r-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center font-bold text-[#0F1115]">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">Contactar a un Patrocinador</h4>
                    <p className="text-[#A3A3A3]">
                      En network marketing, necesitas un "patrocinador" (sponsor) que te registre en el sistema. Este puede ser la persona que te recomendó Gano Excel, o puedes buscar un líder experimentado como yo. Tu patrocinador te guiará en el proceso y será tu mentor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#1A1D23]/50 border-l-4 border-[#94A3B8] rounded-r-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#94A3B8] rounded-full flex items-center justify-center font-bold text-[#0F1115]">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">Elegir tu Paquete Inicial</h4>
                    <p className="text-[#A3A3A3]">
                      Decide qué nivel de inversión se ajusta a tu presupuesto: Consumidor ($88), ESP2 ($500) o ESP3 ($1,000). Tu patrocinador te explicará las diferencias y te ayudará a elegir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#1A1D23]/50 border-l-4 border-emerald-500 rounded-r-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">Completar Formulario de Afiliación</h4>
                    <p className="text-[#A3A3A3] mb-3">
                      Tu patrocinador te enviará el formulario oficial de Gano Excel (digital o físico). Deberás proporcionar:
                    </p>
                    <ul className="text-sm text-[#A3A3A3] space-y-1">
                      <li>• Nombre completo y documento de identidad</li>
                      <li>• Dirección de envío para productos</li>
                      <li>• Teléfono y correo electrónico</li>
                      <li>• Datos bancarios para recibir comisiones</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-[#1A1D23]/50 border-l-4 border-[#C5A059] rounded-r-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center font-bold text-[#0F1115]">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">Realizar el Pago</h4>
                    <p className="text-[#A3A3A3]">
                      Paga el monto del paquete elegido. Opciones comunes: transferencia bancaria, tarjeta de crédito, o pago digital. Tu patrocinador te indicará las opciones disponibles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-[#1A1D23]/50 border-l-4 border-red-500 rounded-r-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center font-bold text-white">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">Activación y Recepción de Código</h4>
                    <p className="text-[#A3A3A3]">
                      Una vez procesado el pago (1-3 días hábiles), recibirás tu <strong className="text-white">código de distribuidor único</strong> y acceso al sistema. Con este código ya puedes hacer compras, vender productos y reclutar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-[#1A1D23]/50 border-l-4 border-[#94A3B8] rounded-r-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#94A3B8] rounded-full flex items-center justify-center font-bold text-[#0F1115]">
                    6
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">Capacitación Inicial</h4>
                    <p className="text-[#A3A3A3]">
                      Tu patrocinador te conectará con capacitaciones, material de apoyo, y el equipo. Aquí aprendes sobre productos, plan de compensación, y estrategias de venta.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#15171C] border border-[#94A3B8]/30 rounded-xl p-6">
              <p className="text-[#A3A3A3]">
                <strong className="text-[#94A3B8]">Tiempo total del proceso:</strong> Entre 3-7 días desde el primer contacto hasta que estás operando activamente, dependiendo de la rapidez del procesamiento de pagos y envío de productos.
              </p>
            </div>
          </section>

          {/* Section 5 - Comparativa */}
          <section id="comparativa" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Comparativa: Registro Tradicional vs <span className="bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent">Programa Fundadores</span></h2>
            <p className="text-[#A3A3A3] leading-relaxed mb-6">
              Existe una diferencia importante entre el <strong className="text-white">registro tradicional</strong> con Gano Excel y unirte al <strong className="text-[#C5A059]">Programa Fundadores</strong> que yo ofrezco. Aquí está la comparación honesta:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#1A1D23]/50">
                    <th className="border border-white/10 p-4 text-left text-white">Criterio</th>
                    <th className="border border-white/10 p-4 text-left text-white">Registro Tradicional</th>
                    <th className="border border-white/10 p-4 text-left text-[#C5A059]">Programa Fundadores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white/10 p-4 text-[#A3A3A3] font-semibold">Inversión Mínima</td>
                    <td className="border border-white/10 p-4 text-[#A3A3A3]">$88 USD (Consumidor)</td>
                    <td className="border border-white/10 p-4 text-[#C5A059]">$200 USD (EMPRENDEDOR)</td>
                  </tr>
                  <tr className="bg-[#1A1D23]/30">
                    <td className="border border-white/10 p-4 text-[#A3A3A3] font-semibold">Acceso a Tecnología</td>
                    <td className="border border-white/10 p-4 text-[#A3A3A3]">❌ No incluida</td>
                    <td className="border border-white/10 p-4 text-emerald-400">✅ Sistema CreaTuActivo + IA NEXUS</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 p-4 text-[#A3A3A3] font-semibold">Mentor Diamante</td>
                    <td className="border border-white/10 p-4 text-[#A3A3A3]">⚠️ Depende del patrocinador</td>
                    <td className="border border-white/10 p-4 text-emerald-400">✅ Luis Cabrejo (11 años Diamante)</td>
                  </tr>
                  <tr className="bg-[#1A1D23]/30">
                    <td className="border border-white/10 p-4 text-[#A3A3A3] font-semibold">Herramientas Digitales</td>
                    <td className="border border-white/10 p-4 text-[#A3A3A3]">❌ Debes crear las tuyas</td>
                    <td className="border border-white/10 p-4 text-emerald-400">✅ Portal personalizado + automatización</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 p-4 text-[#A3A3A3] font-semibold">Chatbot IA para Prospectos</td>
                    <td className="border border-white/10 p-4 text-[#A3A3A3]">❌ No disponible</td>
                    <td className="border border-white/10 p-4 text-emerald-400">✅ NEXUS IA (conversión 24/7)</td>
                  </tr>
                  <tr className="bg-[#1A1D23]/30">
                    <td className="border border-white/10 p-4 text-[#A3A3A3] font-semibold">Capacitación</td>
                    <td className="border border-white/10 p-4 text-[#A3A3A3]">✅ Eventos generales Gano Excel</td>
                    <td className="border border-white/10 p-4 text-emerald-400">✅ Eventos + Sistema 4M propietario</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 p-4 text-[#A3A3A3] font-semibold">Soporte</td>
                    <td className="border border-white/10 p-4 text-[#A3A3A3]">⚠️ Básico (grupo general)</td>
                    <td className="border border-white/10 p-4 text-emerald-400">✅ WhatsApp directo + comunidad privada</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-[#15171C] border border-[#C5A059]/50 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">¿Para Quién es el Programa Fundadores?</h3>
              <p className="text-[#A3A3A3] mb-4">
                El Programa Fundadores es para personas que:
              </p>
              <ul className="space-y-2 text-[#A3A3A3] mb-6">
                <li>✅ Ya conocen el network marketing pero lo dejaron porque era complicado sin herramientas</li>
                <li>✅ Quieren construir un negocio serio con tecnología que facilita el proceso</li>
                <li>✅ Buscan un mentor con experiencia comprobada (11 años como Diamante)</li>
                <li>✅ Entienden que la tecnología es una ventaja competitiva real</li>
              </ul>
              <Link
                href="/fundadores"
                className="inline-flex items-center px-6 py-3 bg-[#C5A059] text-[#0F1115] rounded-full font-semibold hover:bg-[#D4AF37] hover:shadow-xl transition-all"
              >
                Conocer Programa Fundadores →
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Preguntas Frecuentes</h2>

            <div className="space-y-6">
              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#C5A059] mb-3">¿Cuánto cuesta ser distribuidor Gano Excel en Colombia?</h3>
                <p className="text-[#A3A3A3]">
                  La inversión inicial varía según el paquete: Consumidor Inteligente desde $88 USD (50 PV), Distribuidor ESP2 $500 USD, o Distribuidor ESP3 $1,000 USD. Con el Programa Fundadores puedes comenzar desde $200 USD con acceso a tecnología CreaTuActivo.
                </p>
              </div>

              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#C5A059] mb-3">¿Qué requisitos necesito para ser distribuidor Gano Excel?</h3>
                <p className="text-[#A3A3A3]">
                  Requisitos básicos: Ser mayor de 18 años, tener documento de identidad válido, cuenta bancaria o medio de pago, y realizar la inversión inicial en productos. No se requiere experiencia previa en network marketing.
                </p>
              </div>

              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#C5A059] mb-3">¿Cuánto tiempo toma activarse como distribuidor Gano Excel?</h3>
                <p className="text-[#A3A3A3]">
                  El proceso de registro y activación toma entre 1-3 días hábiles. Una vez aprobado tu registro y procesado el pago, recibes tu código de distribuidor y acceso al sistema.
                </p>
              </div>

              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#C5A059] mb-3">¿Necesito experiencia en ventas o network marketing?</h3>
                <p className="text-[#A3A3A3]">
                  No. Aunque la experiencia ayuda, no es un requisito. Gano Excel y tu patrocinador te capacitarán en productos, ventas y estrategias. Lo más importante es tu actitud de aprendizaje y tu consistencia.
                </p>
              </div>

              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#C5A059] mb-3">¿Puedo hacer el negocio desde mi casa?</h3>
                <p className="text-[#A3A3A3]">
                  Sí, completamente. El 90% de mi negocio lo construí desde casa usando tecnología y comunicación digital. No necesitas local físico, puedes trabajar desde cualquier lugar con internet.
                </p>
              </div>

              <div className="bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#C5A059] mb-3">¿Cuánto puedo ganar como distribuidor Gano Excel?</h3>
                <p className="text-[#A3A3A3]">
                  Los ingresos varían enormemente según tu esfuerzo, consistencia y sistema de trabajo. Algunos distribuidores ganan $200-500 USD/mes extras, otros construyen negocios de $5,000+ USD/mes. No hay garantía de ingresos, todo depende de tu trabajo y duplicación.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-[#15171C] border border-[#C5A059]/30 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ¿Listo para Convertirte en Distribuidor Gano Excel?
            </h2>
            <p className="text-lg text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
              Únete al Programa Fundadores y construye tu negocio con un Diamante de 11 años + tecnología que hace fácil lo que antes era complicado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fundadores"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A059] text-[#0F1115] rounded-full font-bold hover:bg-[#D4AF37] transition-all shadow-xl"
              >
                Ver Programa Fundadores
              </Link>
              <a
                href="https://wa.me/573203415438"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 bg-[#1A1D23]/50 border border-white/10 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-4">Sobre el Autor</h3>
            <p className="text-[#A3A3A3] mb-4">
              <strong className="text-[#C5A059]">Luis Cabrejo</strong> es Diamante Gano Excel desde hace 11 años, con presencia en 16 países de América. Fundador de <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:underline">CreaTuActivo.com</a>, ecosistema tecnológico para distribuidores de network marketing. Ha capacitado a más de 2,847 personas en la construcción de negocios MLM con tecnología.
            </p>
            <Link href="/historia" className="text-[#C5A059] hover:text-[#D4AF37] font-semibold transition-colors">
              Leer mi historia completa →
            </Link>
          </div>
        </div>

        <Footer />
      </article>
    </>
  );
}

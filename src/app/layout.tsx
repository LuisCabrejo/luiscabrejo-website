import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import NexusProvider from "@/components/NexusProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Tipografía Serif para marca personal (Quiet Luxury)
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// URL Base Canónica
const baseUrl = 'https://luiscabrejo.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Luis Cabrejo: Estrategia & Liderazgo Gano Excel | Mentor Diamante',
    template: '%s | Luis Cabrejo',
  },
  description: '¿Estancado en tu rango? Análisis honesto del Plan de Compensación Gano Excel y estrategias avanzadas de construcción de redes. Mentoría Diamante con 12 años de coherencia.',

  // ESTRATEGIA DE PALABRAS CLAVE: "DOLOR Y SOLUCIÓN"
  keywords: [
    // 1. Búsquedas de Dolor (El "Rescue")
    'por que fracaso en redes de mercadeo',
    'como prospectar sin molestar',
    'estancamiento en multinivel',
    'gano excel es piramide',
    'verdad sobre gano excel',

    // 2. Búsquedas de Validación/Autoridad
    'plan de compensacion gano excel explicado',
    'luis cabrejo diamante',
    'mentoria gano excel',
    'lideres gano excel colombia',
    'estrategia rango diamante',

    // 3. Búsquedas de Solución (El "Next Level")
    'sistemas de distribucion',
    'automatizacion multinivel',
    'ingresos residuales reales',
    'creatuactivo',
    'construccion de activos'
  ],

  authors: [{ name: 'Luis Cabrejo', url: baseUrl }],
  creator: 'Luis Cabrejo',
  publisher: 'Luis Cabrejo',

  openGraph: {
    type: 'profile', // Cambiado a Profile para marca personal
    firstName: 'Luis',
    lastName: 'Cabrejo',
    username: 'luiscabrejo',
    gender: 'male',
    locale: 'es_CO',
    url: baseUrl,
    siteName: 'Luis Cabrejo - Mentor Empresarial',
    title: 'Luis Cabrejo: La Verdad sobre Construir en Gano Excel',
    description: 'No más listas de 100 ni perseguir amigos. Descubre la metodología de arquitectura de activos que me llevó a Diamante y cómo puedes aplicarla.',
    images: [
      {
        url: '/images/og-image.jpg', // Asegúrate que esta imagen sea TÚ (cara), no un logo
        width: 1200,
        height: 630,
        alt: 'Luis Cabrejo - Estratega de Negocios Gano Excel',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Luis Cabrejo | Mentoría Gano Excel & Activos Digitales',
    description: '¿Cansado de la "motivación barata"? Hablemos de números, estrategia y sistemas de distribución reales.',
    images: ['/images/og-image.jpg'],
    creator: '@luiscabrejo', // Si tienes Twitter, si no, @creatuactivo
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: baseUrl,
  },

  verification: {
    google: 'DQHUrBjPBwHbzbzvOREAeL_M8Z38CkS2UbTM2jkqoM4', // Tu código actual
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SCHEMA.ORG: PERSONA (AUTORIDAD)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Luis Cabrejo',
    alternateName: 'Luis Cabrejo Diamante',
    jobTitle: 'Mentor de Negocios & Estratega Corporativo',
    description: 'Empresario Diamante con 12 años de experiencia en Gano Excel. Especialista en transformar redes de mercadeo tradicionales en sistemas de distribución automatizados.',
    url: baseUrl,
    image: `${baseUrl}/images/luis-cabrejo-diamante.jpg`,
    email: 'contacto@luiscabrejo.com',
    sameAs: [
      'https://linkedin.com/in/luiscabrejo',
      'https://instagram.com/luiscabrejo',
      'https://facebook.com/luiscabrejo',
      'https://creatuactivo.com'
    ],
    knowsAbout: [
      'Plan de Compensación Gano Excel',
      'Estrategias de Retención',
      'Liderazgo Organizacional',
      'Arquitectura de Negocios',
      'Desarrollo de Activos',
      'Mentoría Ejecutiva'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Gano Excel International'
    },
    brand: {
      '@type': 'Brand',
      name: 'CreaTuActivo'
    }
  };

  // SCHEMA.ORG: MENTORÍA (PRODUCTO/SERVICIO)
  // Esto ayuda a aparecer cuando alguien busca "mentoria gano excel"
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mentoría Empresarial para Networkers',
    provider: {
      '@id': `${baseUrl}/#person`
    },
    description: 'Diagnóstico y reestructuración de negocios de mercadeo en red. Transición de modelo manual a digital.',
    areaServed: 'Latin America',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Programas de Liderazgo',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultoría Estratégica 1:1'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistema CreaTuActivo (SaaS)'
          }
        }
      ]
    }
  };

  return (
    <html lang="es">
      <head>
        {/* PWA Manifest & Icons */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Luis Cabrejo" />

        {/* JSON-LD Inyectado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('[SW] Registered:', registration.scope);
                    })
                    .catch(function(error) {
                      console.log('[SW] Registration failed:', error);
                    });
                });
              }
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
        {/* Queswa: Aquí actúa como "Asistente del Mentor" */}
        <NexusProvider />
      </body>
    </html>
  );
}

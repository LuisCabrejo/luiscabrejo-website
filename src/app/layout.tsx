import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://luiscabrejo.com'),
  title: {
    default: 'Gano Excel con Tecnología e IA 2025 - Luis Cabrejo Diamante | Ingresos Residuales',
    template: '%s | Luis Cabrejo',
  },
  description: 'Reactiva tu negocio Gano Excel con tecnología IA. Luis Cabrejo, Diamante 11 años. Sistema simple para construir ingresos residuales en América. 16 países activos.',
  keywords: [
    // Segmento 1: Reactivación (550K ex-distribuidores)
    'gano excel con tecnologia',
    'gano excel 2025',
    'como volver a gano excel',
    'sistema automatizado gano excel',
    'gano excel facil',
    'reactivar gano excel',
    // Segmento 2: Gano Excel directo
    'distribuidor gano excel colombia',
    'lider gano excel',
    'luis cabrejo gano excel',
    'diamante gano excel',
    'como ser distribuidor gano excel',
    // Segmento 3: Ingresos pasivos genérico
    'ingresos residuales colombia',
    'ingresos pasivos',
    'segunda fuente de ingresos',
    'negocio desde casa america',
    'network marketing tecnologia',
    // Brand
    'CreaTuActivo',
    'NEXUS IA',
  ],
  authors: [{ name: 'Luis Cabrejo' }],
  creator: 'Luis Cabrejo',
  publisher: 'Luis Cabrejo',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://luiscabrejo.com',
    siteName: 'Luis Cabrejo',
    title: 'Reactiva tu Negocio Gano Excel con Tecnología e IA - Luis Cabrejo Diamante',
    description: 'Sistema simple con IA para construir ingresos residuales. Luis Cabrejo, Diamante 11 años. 16 países activos. Descubre cómo la tecnología hace fácil lo que antes era complicado.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luis Cabrejo - Gano Excel con Tecnología CreaTuActivo 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gano Excel + Tecnología IA 2025 - Luis Cabrejo Diamante',
    description: 'Sistema automatizado para ingresos residuales. 11 años Diamante, 16 países. La tecnología hace fácil lo que antes era complicado.',
    images: ['/images/og-image.jpg'],
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
    canonical: 'https://luiscabrejo.com',
  },
  verification: {
    google: 'DQHUrBjPBwHbzbzvOREAeL_M8Z38CkS2UbTM2jkqoM4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD para datos estructurados (SEO)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Luis Cabrejo',
    alternateName: 'Luis Cabrejo Diamante Gano Excel',
    jobTitle: 'Arquitecto de Ecosistemas Digitales',
    description: '11 años como Diamante Gano Excel, fundador de CreaTuActivo.com, desarrollador de ecosistemas digitales con IA. Presencia en 16 países de América.',
    url: 'https://luiscabrejo.com',
    image: 'https://luiscabrejo.com/images/luis-cabrejo-diamante.jpg',
    email: 'luiscabrejo@creatuactivo.com',
    sameAs: [
      'https://linkedin.com/in/luiscabrejo',
      'https://instagram.com/luiscabrejo',
      'https://creatuactivo.com',
      'https://app.creatuactivo.com',
      'https://ganocafe.online',
    ],
    knowsAbout: [
      'Network Marketing',
      'Gano Excel',
      'Ecosistemas Digitales',
      'Inteligencia Artificial',
      'Next.js',
      'Multinivel',
      'Emprendimiento Digital',
      'Marketing de Redes',
      'Desarrollo de Software',
      'Automatización',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Gano Excel',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'CreaTuActivo',
      url: 'https://creatuactivo.com',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Distribuidor Diamante Gano Excel',
      occupationLocation: {
        '@type': 'Place',
        name: 'América Latina',
        address: {
          '@type': 'PostalAddress',
          addressCountry: ['CO', 'MX', 'GT', 'SV', 'CR', 'HN', 'PA', 'VE', 'BR', 'EC', 'PE', 'BO', 'CL', 'AR', 'UY', 'US'],
        },
      },
      skills: 'Network Marketing, Liderazgo, Desarrollo de Ecosistemas Digitales, Gano Excel',
    },
    award: ['Diamante Gano Excel 11 años', 'Líder en 16 países'],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CreaTuActivo',
    alternateName: 'CreaTuActivo.com',
    url: 'https://creatuactivo.com',
    logo: 'https://luiscabrejo.com/images/creatuactivo-logo.png',
    description: 'Ecosistema tecnológico para distribuidores de network marketing. Plataforma con IA conversacional NEXUS, herramientas de automatización y metodología empresarial.',
    founder: {
      '@type': 'Person',
      name: 'Luis Cabrejo',
      url: 'https://luiscabrejo.com',
    },
    foundingDate: '2013',
    sameAs: [
      'https://luiscabrejo.com',
      'https://app.creatuactivo.com',
      'https://ganocafe.online',
    ],
    areaServed: {
      '@type': 'Place',
      name: 'América Latina',
    },
    serviceType: [
      'Plataforma tecnológica para network marketing',
      'IA conversacional',
      'Automatización de negocios MLM',
      'Herramientas digitales para distribuidores',
    ],
    knowsAbout: [
      'Network Marketing',
      'Gano Excel',
      'Inteligencia Artificial',
      'Desarrollo de Software',
      'Ecosistemas Digitales',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Luis Cabrejo',
    url: 'https://luiscabrejo.com',
    description: 'Sitio oficial de Luis Cabrejo - Arquitecto de Ecosistemas Digitales, Diamante Gano Excel 11 años, creador de CreaTuActivo.com',
    publisher: {
      '@type': 'Person',
      name: 'Luis Cabrejo',
    },
    inLanguage: 'es-CO',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://luiscabrejo.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="es">
      <head>
        {/* JSON-LD para Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

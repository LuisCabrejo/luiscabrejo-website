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
    default: 'Luis Cabrejo - Arquitecto de Ecosistemas Digitales | CreaTuActivo.com',
    template: '%s | Luis Cabrejo',
  },
  description: 'Luis Cabrejo: 11 años como Diamante en multinivel, creador de CreaTuActivo.com, desarrollador de ecosistemas digitales con IA. De la quiebra a 16 países, visión 4M en América.',
  keywords: [
    'Luis Cabrejo',
    'CreaTuActivo',
    'ecosistemas digitales',
    'multinivel',
    'Gano Excel',
    'Next.js',
    'IA conversacional',
    'NEXUS',
    'arquitecto digital',
    'emprendimiento',
    'activo patrimonial',
  ],
  authors: [{ name: 'Luis Cabrejo' }],
  creator: 'Luis Cabrejo',
  publisher: 'Luis Cabrejo',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://luiscabrejo.com',
    siteName: 'Luis Cabrejo',
    title: 'Luis Cabrejo - Arquitecto de Ecosistemas Digitales',
    description: '11 años como Diamante, creador de CreaTuActivo.com. De la quiebra a 16 países con tecnología propietaria y visión 4M.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luis Cabrejo - Arquitecto de Ecosistemas Digitales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Cabrejo - Arquitecto de Ecosistemas Digitales',
    description: '11 años como Diamante, creador de CreaTuActivo.com. Visión 4M en América.',
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
    // google: 'tu-codigo-de-verificacion-aqui', // Agregar después de crear property en GSC
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
    jobTitle: 'Arquitecto de Ecosistemas Digitales',
    description: '11 años como Diamante en multinivel, creador de CreaTuActivo.com, desarrollador de plataformas empresariales con IA',
    url: 'https://luiscabrejo.com',
    sameAs: [
      'https://creatuactivo.com',
      'https://app.creatuactivo.com',
    ],
    knowsAbout: [
      'Ecosistemas Digitales',
      'Inteligencia Artificial',
      'Next.js',
      'Multinivel',
      'Emprendimiento Digital',
      'Marketing de Redes',
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
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Luis Cabrejo',
    url: 'https://luiscabrejo.com',
    description: 'Sitio oficial de Luis Cabrejo - Arquitecto de Ecosistemas Digitales, creador de CreaTuActivo.com',
    publisher: {
      '@type': 'Person',
      name: 'Luis Cabrejo',
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

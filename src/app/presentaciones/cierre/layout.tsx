import type { Metadata } from 'next';

// URL Base Canónica para esta ruta específica
const pageUrl = 'https://luiscabrejo.com/presentaciones/cierre';

export const metadata: Metadata = {
  title: 'Presentación de Cierre: Soberanía vs. Dependencia',
  description: 'Análisis industrial del "plan por defecto" vs. la construcción de activos. Descubre la infraestructura de apalancamiento para construir soberanía financiera. Una decisión: ¿Repetir o Reconstruir?',

  keywords: [
    'soberanía financiera',
    'dependencia económica',
    'infraestructura de apalancamiento',
    'ingreso manual',
    'flujo perpetuo',
    'red antifrágil',
    'certeza',
    'plan de compensación',
    'cierre de ventas',
    'presentación de negocio',
    'Luis Cabrejo',
  ],

  // Open Graph (para Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'DECIDE: Soberanía o Dependencia | Presentación de Cierre',
    description: 'No más "plan por defecto". Descubre la infraestructura de apalancamiento para construir soberanía financiera. ¿Repetir o Reconstruir?',
    url: pageUrl,
    siteName: 'Luis Cabrejo',
    images: [
      {
        url: `/presentaciones/cierre/opengraph-image`, // Next.js lo resuelve automáticamente
        width: 1200,
        height: 630,
        alt: 'Infraestructura de Apalancamiento - Luis Cabrejo | DECIDE: Soberanía o Dependencia',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'DECIDE: Soberanía o Dependencia | La Presentación Final',
    description: 'Análisis industrial del "plan por defecto" vs. la construcción de activos. ¿Estás listo para la soberanía financiera?',
    images: [`/presentaciones/cierre/opengraph-image`], // Next.js lo resuelve automáticamente
    creator: '@luiscabrejo',
  },

  // Canonical URL
  alternates: {
    canonical: pageUrl,
  },
};

export default function CierreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

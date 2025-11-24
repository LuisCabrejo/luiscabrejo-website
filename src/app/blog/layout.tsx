import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog Gano Excel y Network Marketing - Luis Cabrejo',
    template: '%s | Blog Luis Cabrejo',
  },
  description: 'Artículos sobre Gano Excel, network marketing y tecnología para distribuidores. Consejos de Luis Cabrejo, Diamante 11 años. Testimonios reales, guías prácticas y estrategias probadas.',
  keywords: [
    'blog gano excel',
    'articulos network marketing',
    'luis cabrejo blog',
    'consejos gano excel',
    'guias distribuidor',
    'testimonios mlm',
    'estrategias network marketing',
  ],
  alternates: {
    canonical: 'https://luiscabrejo.com/blog',
  },
  openGraph: {
    title: 'Blog Gano Excel y Network Marketing - Luis Cabrejo',
    description: 'Artículos sobre Gano Excel, network marketing y tecnología. Por Luis Cabrejo, Diamante 11 años en 16 países.',
    url: 'https://luiscabrejo.com/blog',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Luis Cabrejo Blog',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

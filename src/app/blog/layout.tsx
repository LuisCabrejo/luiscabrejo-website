import type { Metadata } from 'next';
import Footer from '@/components/Footer';

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
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'Luis Cabrejo Blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

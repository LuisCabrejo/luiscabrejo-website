import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mi Historia: De la Quiebra a Diamante Gano Excel en 16 Países',
  description: 'Luis Cabrejo: Cómo pasé de la quiebra a construir un negocio Gano Excel en 16 países. 11 años como Diamante, +2,847 vidas transformadas. Historia real de network marketing.',
  keywords: [
    'testimonio gano excel',
    'diamante gano excel colombia',
    'historia exito network marketing',
    'luis cabrejo testimonio',
    'de cero a diamante gano excel',
    'historia mlm real',
    'creatuactivo historia',
    'quiebra a exito network marketing',
    'como ser diamante gano excel',
    'experiencia distribuidor gano excel'
  ],
  openGraph: {
    title: 'De la Quiebra a Diamante Gano Excel: La Historia de Luis Cabrejo',
    description: '11 años como Diamante, 16 países, +2,847 vidas transformadas. Historia real de network marketing.',
    url: 'https://luiscabrejo.com/historia',
    type: 'article',
    locale: 'es_CO',
    siteName: 'Luis Cabrejo',
    images: [{
      url: '/images/luis-cabrejo-diamante.jpg',
      width: 1200,
      height: 630,
      alt: 'Luis Cabrejo - Historia Diamante Gano Excel'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'De la Quiebra a Diamante Gano Excel en 16 Países',
    description: '11 años construyendo un negocio MLM real. Mi historia completa.',
    images: ['/images/luis-cabrejo-diamante.jpg'],
  },
  alternates: {
    canonical: 'https://luiscabrejo.com/historia'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function HistoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

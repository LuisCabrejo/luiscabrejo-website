import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visión 4 Millones: Transformar Vidas con Gano Excel y CreaTuActivo',
  description: 'La visión de Luis Cabrejo: impactar 4 millones de vidas en América con Gano Excel y CreaTuActivo.com. De 16 países a una revolución continental del bienestar y prosperidad.',
  keywords: [
    'vision 4 millones',
    'luis cabrejo vision',
    'gano excel america',
    'creatuactivo vision',
    'transformacion vidas network marketing',
    'impacto social mlm',
    'bienestar america latina',
    'revolucion gano excel',
    'mision creatuactivo',
    'prosperidad network marketing'
  ],
  openGraph: {
    title: 'Visión 4 Millones - Luis Cabrejo',
    description: 'Transformar 4 millones de vidas en América con Gano Excel y CreaTuActivo.com. Únete a la revolución.',
    url: 'https://luiscabrejo.com/vision',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Luis Cabrejo',
    images: [{
      url: '/images/vision-4m-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Visión 4 Millones - Luis Cabrejo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visión 4 Millones',
    description: 'Impactar 4 millones de vidas en América. Gano Excel + CreaTuActivo.',
    images: ['/images/vision-4m-og.jpg'],
  },
  alternates: {
    canonical: 'https://luiscabrejo.com/vision'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

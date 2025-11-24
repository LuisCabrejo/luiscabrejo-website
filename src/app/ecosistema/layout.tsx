import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CreaTuActivo.com: Ecosistema Tecnológico para Distribuidores Gano Excel',
  description: 'Plataforma tecnológica propietaria con IA conversacional NEXUS, portales personalizados y metodología CreaTuActivo para distribuidores network marketing. Creado por Luis Cabrejo, Diamante Gano Excel.',
  keywords: [
    'creatuactivo',
    'tecnologia network marketing',
    'herramientas distribuidor mlm',
    'ia para gano excel',
    'nexus chatbot',
    'plataforma network marketing',
    'app.creatuactivo.com',
    'ecosistema digital mlm',
    'tecnologia para distribuidores',
    'luis cabrejo creatuactivo'
  ],
  openGraph: {
    title: 'CreaTuActivo.com - Ecosistema Tecnológico para Network Marketing',
    description: 'IA conversacional NEXUS + metodología probada + portales personalizados. La revolución tecnológica del MLM.',
    url: 'https://luiscabrejo.com/ecosistema',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Luis Cabrejo',
    images: [{
      url: '/images/creatuactivo-ecosistema-og.jpg',
      width: 1200,
      height: 630,
      alt: 'CreaTuActivo.com Ecosistema Tecnológico'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreaTuActivo.com - Tecnología + IA para Network Marketing',
    description: 'El ecosistema digital que transforma distribuidores en empresarios.',
    images: ['/images/creatuactivo-ecosistema-og.jpg'],
  },
  alternates: {
    canonical: 'https://luiscabrejo.com/ecosistema'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function EcosistemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

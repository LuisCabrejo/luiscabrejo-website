import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programa Fundadores Gano Excel Colombia 2025 - Luis Cabrejo Diamante',
  description: 'Únete como Fundador con Luis Cabrejo, Diamante Gano Excel 11 años. Paquetes desde $200 USD. Tecnología CreaTuActivo + IA NEXUS. Inscripción 2025 Colombia.',
  keywords: [
    'fundadores gano excel',
    'distribuidor gano excel colombia',
    'luis cabrejo gano excel',
    'como ser distribuidor gano excel',
    'paquetes gano excel colombia',
    'gano excel 2025',
    'oportunidad negocio gano excel',
    'creatuactivo',
    'diamante gano excel colombia',
    'programa fundadores network marketing',
    'mlm colombia',
    'gano itouch colombia'
  ],
  openGraph: {
    title: 'Programa Fundadores Gano Excel 2025 - Luis Cabrejo Diamante',
    description: 'Paquetes desde $200 USD. Tecnología CreaTuActivo + IA NEXUS. 11 años experiencia Diamante.',
    url: 'https://luiscabrejo.com/fundadores',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Luis Cabrejo',
    images: [{
      url: '/images/fundadores-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Programa Fundadores Gano Excel - Luis Cabrejo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programa Fundadores Gano Excel 2025',
    description: 'Únete con Luis Cabrejo, Diamante 11 años. CreaTuActivo + IA.',
    images: ['/images/fundadores-og.jpg'],
  },
  alternates: {
    canonical: 'https://luiscabrejo.com/fundadores'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function FundadoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

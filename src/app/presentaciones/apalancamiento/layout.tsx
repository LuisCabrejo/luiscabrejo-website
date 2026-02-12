import type { Metadata } from 'next';
import { Rajdhani, Roboto_Mono } from 'next/font/google';

const rajdhani = Rajdhani({
  variable: '--font-rajdhani',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Las 4 Leyes del Sistema Gano Excel | El Código Fuente del Apalancamiento',
  description:
    'Presentación interactiva: Las 4 Leyes del Sistema Gano Excel y Gano iTouch — Desviar Habilidades, Enseñar a Enseñar, Edificación y Valores, Promover vs Invitar. Transforma de Operador Manual a Arquitecto de Sistemas con el Sistema 4M de Luis Cabrejo.',
  keywords: [
    'las 4 leyes del sistema',
    'Gano Excel',
    'Gano iTouch',
    '4 leyes del sistema Gano Excel',
    'sistema 4M',
    'apalancamiento network marketing',
    'desviar habilidades',
    'enseñar a enseñar',
    'edificación y valores',
    'promover vs invitar',
    'Luis Cabrejo',
    'Diamante Gano Excel',
    'network marketing Colombia',
    'sistema de duplicación',
  ],
  openGraph: {
    title: 'Las 4 Leyes del Sistema Gano Excel — El Código Fuente del Apalancamiento',
    description:
      'Presentación interactiva con simulaciones: Las 4 Leyes del Sistema para Gano Excel y Gano iTouch. Desviar Habilidades, Enseñar a Enseñar, Edificación + Valores, Promover vs Invitar.',
    url: 'https://luiscabrejo.com/presentaciones/apalancamiento',
    locale: 'es_CO',
    type: 'website',
    siteName: 'Luis Cabrejo — Diamante Gano Excel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las 4 Leyes del Sistema Gano Excel | Presentación Interactiva',
    description:
      'Simulaciones interactivas: Las 4 Leyes del Sistema Gano Excel y Gano iTouch — Del Operador Manual al Arquitecto de Sistemas.',
  },
  alternates: {
    canonical: 'https://luiscabrejo.com/presentaciones/apalancamiento',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ApalancamientoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${rajdhani.variable} ${robotoMono.variable}`}>
      {children}
    </div>
  );
}

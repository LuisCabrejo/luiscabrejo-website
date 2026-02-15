import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las 4 Leyes del Sistema Gano Excel | Presentación Visual Interactiva',
  description:
    'Presentación visual interactiva: Las 4 Leyes del Sistema Gano Excel y Gano iTouch — Desviar Habilidades, Enseñar a Enseñar, Edificación y Valores, Promover vs Invitar. De Operador Manual a Arquitecto de Sistemas.',
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
    title: 'Las 4 Leyes del Sistema Gano Excel — Presentación Visual Interactiva',
    description:
      'Las 4 Leyes del Sistema para Gano Excel y Gano iTouch. Desviar Habilidades, Enseñar a Enseñar, Edificación + Valores, Promover vs Invitar.',
    url: 'https://luiscabrejo.com/presentaciones/4-leyes-gano-excel',
    locale: 'es_CO',
    type: 'website',
    siteName: 'Luis Cabrejo — Diamante Gano Excel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las 4 Leyes del Sistema Gano Excel | Presentación Visual',
    description:
      'Las 4 Leyes del Sistema Gano Excel y Gano iTouch — Del Operador Manual al Arquitecto de Sistemas.',
  },
  alternates: {
    canonical: 'https://luiscabrejo.com/presentaciones/4-leyes-gano-excel',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LeyesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

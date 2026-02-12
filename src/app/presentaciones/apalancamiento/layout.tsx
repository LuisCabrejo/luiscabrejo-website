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
  title: 'El Código Fuente del Apalancamiento | Luis Cabrejo',
  description:
    'Presentación interactiva: Las 4 Leyes del Sistema para transformar de Operador Manual a Arquitecto de Sistemas.',
  openGraph: {
    title: 'El Código Fuente del Apalancamiento',
    description: 'Las 4 Leyes del Sistema — Presentación Interactiva',
    locale: 'es_CO',
    type: 'website',
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

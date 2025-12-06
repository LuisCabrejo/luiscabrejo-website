import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'El Fin del Rechazo: Cómo la IA está Creando Networkers Millonarios',
  description: 'Descubre el sistema de Network Marketing con IA que automatiza el 80% del trabajo, elimina el rechazo y te permite construir un activo real sin perseguir a nadie. Liderazgo por Luis Cabrejo.',
  keywords: [
    "network marketing con inteligencia artificial",
    "éxito en redes de mercadeo",
    "multinivel con ia",
    "dejar de perseguir prospectos",
    "sistemas automatizados para mlm",
    "liderazgo network marketing",
    "Luis Cabrejo",
    "CreaTuActivo",
    "Gano Excel",
    "networker millonario",
    "NEXUS IA",
    "Sistema 4M"
  ],
  authors: [{ name: 'Luis Cabrejo' }],
  openGraph: {
    title: 'El Fin del Rechazo: Network Marketing con Inteligencia Artificial',
    description: 'El sistema que está creando la primera generación de networkers millonarios sin perseguir amigos ni familia.',
    url: 'https://luiscabrejo.com/blog/el-fin-del-rechazo',
    siteName: 'LuisCabrejo.com',
    locale: 'es_CO',
    type: 'article',
    publishedTime: '2025-12-03T00:00:00.000Z',
    authors: ['Luis Cabrejo'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Fin del Rechazo: Network Marketing con IA | Luis Cabrejo',
    description: 'Automatiza tu prospección y elimina el rechazo para siempre con el sistema que está revolucionando el MLM.',
    creator: '@luiscabrejo',
  },
  alternates: {
    canonical: 'https://luiscabrejo.com/blog/el-fin-del-rechazo',
  },
}

export default function FinDelRechazoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

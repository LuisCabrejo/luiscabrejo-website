import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Presentaciones | Luis Cabrejo',
  description: 'Presentaciones ejecutivas de Luis Cabrejo',
  robots: {
    index: false, // No indexar presentaciones
    follow: false,
  },
};

export default function PresentacionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Layout limpio SIN NexusProvider (burbuja de chat)
  // para que las presentaciones sean fullscreen sin distracciones
  return (
    <div className="presentation-mode">
      {children}
    </div>
  );
}

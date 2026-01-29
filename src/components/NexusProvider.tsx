'use client';

import { usePathname } from 'next/navigation';
import { NEXUSFloatingButton } from './nexus';

// Rutas donde NO se muestra la burbuja de chat
const HIDDEN_PATHS = [
  '/presentaciones',
];

export default function NexusProvider() {
  const pathname = usePathname();

  // No mostrar en páginas de presentación
  const shouldHide = HIDDEN_PATHS.some(path => pathname?.startsWith(path));

  if (shouldHide) {
    return null;
  }

  return <NEXUSFloatingButton />;
}

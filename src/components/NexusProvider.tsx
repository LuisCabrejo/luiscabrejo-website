'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const UnifiedQueswaOrb = dynamic(
  () => import('./UnifiedQueswaOrb'),
  { ssr: false, loading: () => null }
);

// Rutas donde NO se muestra el orbe
const HIDDEN_PATHS = ['/presentaciones'];

export default function NexusProvider() {
  const pathname = usePathname();
  if (HIDDEN_PATHS.some(path => pathname?.startsWith(path))) return null;
  return <UnifiedQueswaOrb />;
}

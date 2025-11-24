'use client'

import Image from 'next/image'

interface LogoProps {
  variant?: 'circular' | 'gradient' | 'hexagon' | 'shield' | 'minimal' | 'gold' | 'square' | 'tech'
  size?: number
  className?: string
  priority?: boolean
}

/**
 * Componente Logo LC - Luis Cabrejo
 *
 * @param variant - Estilo del logo (default: 'square')
 * @param size - Tamaño en píxeles (default: 40)
 * @param className - Clases CSS adicionales
 * @param priority - Prioridad de carga Next.js Image
 *
 * @example
 * // Logo simple en header
 * <Logo variant="gradient" size={50} />
 *
 * @example
 * // Logo grande en hero
 * <Logo variant="shield" size={200} priority />
 *
 * @example
 * // Logo circular en footer
 * <Logo variant="circular" size={30} />
 */
export default function Logo({
  variant = 'square',
  size = 40,
  className = '',
  priority = false
}: LogoProps) {
  const logoPath = `/logos/LC-${variant}.svg`

  return (
    <Image
      src={logoPath}
      alt="LC - Luis Cabrejo"
      width={size}
      height={size}
      className={className}
      priority={priority}
    />
  )
}

/**
 * Logo SVG inline - Para máximo control y animaciones
 */
export function LogoInline({
  size = 40,
  className = '',
  color = '#667eea'
}: { size?: number; className?: string; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="5" y="5" width="170" height="170" rx="25" fill={color}/>
      <text
        x="90"
        y="125"
        fontFamily="Arial, sans-serif"
        fontSize="85"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
      >
        LC
      </text>
    </svg>
  )
}

/**
 * Logo con gradiente animado
 */
export function LogoGradientAnimated({
  size = 40,
  className = ''
}: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="animatedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}}>
            <animate
              attributeName="stop-color"
              values="#667eea; #764ba2; #667eea"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}}>
            <animate
              attributeName="stop-color"
              values="#764ba2; #667eea; #764ba2"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="170" height="170" rx="20" fill="url(#animatedGrad)"/>
      <text
        x="90"
        y="120"
        fontFamily="Arial, sans-serif"
        fontSize="80"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
      >
        LC
      </text>
    </svg>
  )
}

/**
 * Logo Dorado Premium
 */
export function LogoGold({
  size = 40,
  className = ''
}: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ffd700', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#ffed4e', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="90" cy="90" r="85" fill="#1a202c" stroke="url(#goldGrad)" strokeWidth="6"/>
      <text
        x="90"
        y="115"
        fontFamily="Arial, sans-serif"
        fontSize="72"
        fontWeight="700"
        fill="url(#goldGrad)"
        textAnchor="middle"
      >
        LC
      </text>
    </svg>
  )
}

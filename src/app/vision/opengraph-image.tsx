import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Visión 4M - Luis Cabrejo'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background decorations */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: 100,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -50,
            width: 450,
            height: 450,
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10,
            padding: '60px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(34, 197, 94, 0.2)',
              border: '1px solid rgba(34, 197, 94, 0.5)',
              borderRadius: '999px',
              padding: '10px 28px',
              marginBottom: '30px',
            }}
          >
            <span style={{ color: '#86efac', fontSize: '22px', fontWeight: 600 }}>
              🎯 Meta de Impacto Global
            </span>
          </div>

          {/* Big Number */}
          <h1
            style={{
              fontSize: '140px',
              fontWeight: 800,
              background: 'linear-gradient(90deg, #22c55e 0%, #14b8a6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1,
              marginBottom: '10px',
            }}
          >
            4M
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            Visión de Impacto
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: '26px',
              color: '#94a3b8',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            4 Millones de vidas transformadas a través del emprendimiento digital y el network marketing con tecnología
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '60px',
              marginTop: '40px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '32px', fontWeight: 700, color: '#22c55e' }}>2,847+</span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>Vidas Impactadas</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '32px', fontWeight: 700, color: '#14b8a6' }}>16</span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>Países</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '32px', fontWeight: 700, color: '#06b6d4' }}>15</span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>Diamantes Meta 2026</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
            Luis Cabrejo
          </span>
          <span style={{ color: '#94a3b8' }}>|</span>
          <span
            style={{
              fontSize: '20px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #22c55e 0%, #14b8a6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            luiscabrejo.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

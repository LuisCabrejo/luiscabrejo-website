import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Presentación Cierre - Luis Cabrejo | Soberanía o Dependencia'
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
          background: '#000000',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle gold gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent 0%, #C5A059 50%, transparent 100%)',
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
              background: 'rgba(197, 160, 89, 0.15)',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              borderRadius: '999px',
              padding: '8px 24px',
              marginBottom: '40px',
            }}
          >
            <span style={{ color: '#C5A059', fontSize: '18px', fontWeight: 600, letterSpacing: '0.2em' }}>
              PRESENTACIÓN EJECUTIVA
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#C5A059',
              lineHeight: 1.1,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            DECIDE
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '36px',
              fontWeight: 300,
              color: '#94A3B8',
              letterSpacing: '0.15em',
              marginBottom: '50px',
            }}
          >
            SOBERANÍA O DEPENDENCIA
          </p>

          {/* Key concepts */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '10px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#475569', fontSize: '32px' }}>💧</span>
              <span style={{ color: '#64748b', fontSize: '16px', letterSpacing: '0.1em' }}>ACTIVOS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#475569', fontSize: '32px' }}>⏰</span>
              <span style={{ color: '#64748b', fontSize: '16px', letterSpacing: '0.1em' }}>AUTONOMÍA</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#475569', fontSize: '32px' }}>🌳</span>
              <span style={{ color: '#64748b', fontSize: '16px', letterSpacing: '0.1em' }}>LEGADO</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#475569', fontSize: '32px' }}>🤖</span>
              <span style={{ color: '#64748b', fontSize: '16px', letterSpacing: '0.1em' }}>SISTEMAS</span>
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
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '999px',
              padding: '12px 24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #C5A059 0%, #8B7355 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                fontSize: '18px',
                fontWeight: 700,
              }}
            >
              LC
            </div>
            <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
              Luis Cabrejo
            </span>
            <span style={{ color: '#C5A059', fontSize: '18px' }}>
              | Diamante 11 Años
            </span>
          </div>
        </div>

        {/* Bottom progress bar accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: '#C5A059',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Infraestructura de Apalancamiento - Luis Cabrejo | DECIDE: Soberanía o Dependencia'
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
            background: 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)',
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
              background: 'rgba(255, 215, 0, 0.15)',
              border: '1px solid rgba(255, 215, 0, 0.4)',
              borderRadius: '999px',
              padding: '8px 24px',
              marginBottom: '40px',
            }}
          >
            <span style={{ color: '#FFD700', fontSize: '18px', fontWeight: 600, letterSpacing: '0.2em' }}>
              INFRAESTRUCTURA DE APALANCAMIENTO
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#FFD700',
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

          {/* Key concepts - Industrial Engineering Oscillations */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '10px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#FFD700', fontSize: '28px' }}>⚡</span>
              <span style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '0.1em', fontWeight: 600 }}>FLUJO</span>
              <span style={{ color: '#64748b', fontSize: '11px', letterSpacing: '0.05em' }}>PERPETUO</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#FFD700', fontSize: '28px' }}>⚙️</span>
              <span style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '0.1em', fontWeight: 600 }}>CONTROL</span>
              <span style={{ color: '#64748b', fontSize: '11px', letterSpacing: '0.05em' }}>HIDRÁULICO</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#FFD700', fontSize: '28px' }}>🔗</span>
              <span style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '0.1em', fontWeight: 600 }}>RED</span>
              <span style={{ color: '#64748b', fontSize: '11px', letterSpacing: '0.05em' }}>ANTIFRÁGIL</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#FFD700', fontSize: '28px' }}>📐</span>
              <span style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '0.1em', fontWeight: 600 }}>CERTEZA</span>
              <span style={{ color: '#64748b', fontSize: '11px', letterSpacing: '0.05em' }}>2.5 AÑOS</span>
            </div>
          </div>
        </div>

        {/* Footer with actual logo */}
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
            <img
              src="https://luiscabrejo.com/logos/logo-luiscabrejo-profile.png"
              alt="LC"
              width="50"
              height="50"
              style={{
                borderRadius: '50%',
              }}
            />
            <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
              Luis Cabrejo
            </span>
            <span style={{ color: '#FFD700', fontSize: '18px' }}>
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
            background: '#FFD700',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

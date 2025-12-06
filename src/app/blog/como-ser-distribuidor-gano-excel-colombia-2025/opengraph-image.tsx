import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Cómo Ser Distribuidor Gano Excel Colombia 2025 - Guía Completa'
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
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background decorations */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
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
              border: '1px solid rgba(34, 197, 94, 0.4)',
              borderRadius: '999px',
              padding: '8px 24px',
              marginBottom: '30px',
            }}
          >
            <span style={{ color: '#86efac', fontSize: '20px', fontWeight: 600 }}>
              📚 Guía Completa 2025
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '20px',
              maxWidth: '950px',
            }}
          >
            Cómo Ser Distribuidor Gano Excel Colombia
          </h1>

          {/* Subtitle with gradient */}
          <p
            style={{
              fontSize: '38px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #22c55e 0%, #14b8a6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '30px',
            }}
          >
            Paso a Paso desde $200 USD
          </p>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginTop: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#22c55e', fontSize: '24px' }}>✓</span>
              <span style={{ color: '#94a3b8', fontSize: '20px' }}>Requisitos</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#22c55e', fontSize: '24px' }}>✓</span>
              <span style={{ color: '#94a3b8', fontSize: '20px' }}>Paquetes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#22c55e', fontSize: '24px' }}>✓</span>
              <span style={{ color: '#94a3b8', fontSize: '20px' }}>Proceso</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#22c55e', fontSize: '24px' }}>✓</span>
              <span style={{ color: '#94a3b8', fontSize: '20px' }}>Tecnología</span>
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
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '999px',
              padding: '12px 24px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px',
                fontWeight: 700,
              }}
            >
              LC
            </div>
            <span style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
              Luis Cabrejo
            </span>
            <span style={{ color: '#a78bfa', fontSize: '18px' }}>
              | Diamante 11 Años
            </span>
          </div>
        </div>

        {/* Corner brand */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '50px',
          }}
        >
          <span
            style={{
              fontSize: '22px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
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

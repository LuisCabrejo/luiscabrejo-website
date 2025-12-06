import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Programa Fundadores CreaTuActivo - Luis Cabrejo'
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
          background: 'linear-gradient(135deg, #0f172a 0%, #312e81 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background decorations */}
        <div
          style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 350,
            height: 350,
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
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
              background: 'rgba(168, 85, 247, 0.2)',
              border: '1px solid rgba(168, 85, 247, 0.5)',
              borderRadius: '999px',
              padding: '10px 28px',
              marginBottom: '30px',
            }}
          >
            <span style={{ color: '#e9d5ff', fontSize: '22px', fontWeight: 600 }}>
              🚀 Acceso Exclusivo 2025-2026
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 800,
              background: 'linear-gradient(90deg, #a78bfa 0%, #f472b6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Programa Fundadores
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '36px',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            CreaTuActivo.com
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
            Sistema 4M: Tecnología + IA + Network Marketing = Ingresos Residuales
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '40px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '36px', fontWeight: 700, color: '#a78bfa' }}>$200</span>
              <span style={{ fontSize: '16px', color: '#94a3b8' }}>USD Inicio</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '36px', fontWeight: 700, color: '#60a5fa' }}>NEXUS</span>
              <span style={{ fontSize: '16px', color: '#94a3b8' }}>IA Incluida</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '36px', fontWeight: 700, color: '#34d399' }}>16</span>
              <span style={{ fontSize: '16px', color: '#94a3b8' }}>Países</span>
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
          <span style={{ color: '#94a3b8', fontSize: '18px' }}>
            | Diamante 11 Años
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

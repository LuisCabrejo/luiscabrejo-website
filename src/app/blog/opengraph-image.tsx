import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Blog Gano Excel y Network Marketing - Luis Cabrejo'
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
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
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
          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Blog Gano Excel
          </h1>

          {/* Gradient subtitle */}
          <p
            style={{
              fontSize: '52px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '30px',
            }}
          >
            Network Marketing Real
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
            Artículos honestos sobre Gano Excel, network marketing y tecnología
          </p>

          {/* Article types */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            <div
              style={{
                background: 'rgba(59, 130, 246, 0.2)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '999px',
                padding: '10px 24px',
              }}
            >
              <span style={{ color: '#93c5fd', fontSize: '18px', fontWeight: 600 }}>
                📚 Guías
              </span>
            </div>
            <div
              style={{
                background: 'rgba(168, 85, 247, 0.2)',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                borderRadius: '999px',
                padding: '10px 24px',
              }}
            >
              <span style={{ color: '#d8b4fe', fontSize: '18px', fontWeight: 600 }}>
                💬 Testimonios
              </span>
            </div>
            <div
              style={{
                background: 'rgba(34, 197, 94, 0.2)',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '999px',
                padding: '10px 24px',
              }}
            >
              <span style={{ color: '#86efac', fontSize: '18px', fontWeight: 600 }}>
                🤖 Tecnología
              </span>
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
      </div>
    ),
    {
      ...size,
    }
  )
}

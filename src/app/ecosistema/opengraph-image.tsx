import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Ecosistema CreaTuActivo - Luis Cabrejo'
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
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 600,
            height: 300,
            background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
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
              background: 'rgba(139, 92, 246, 0.2)',
              border: '1px solid rgba(139, 92, 246, 0.5)',
              borderRadius: '999px',
              padding: '10px 28px',
              marginBottom: '30px',
            }}
          >
            <span style={{ color: '#c4b5fd', fontSize: '22px', fontWeight: 600 }}>
              🌐 Plataforma Tecnológica Integrada
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '68px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Ecosistema
          </h1>

          {/* Gradient subtitle */}
          <p
            style={{
              fontSize: '52px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '30px',
            }}
          >
            CreaTuActivo.com
          </p>

          {/* Sites grid */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px 30px',
              }}
            >
              <span style={{ fontSize: '28px', marginBottom: '8px' }}>☕</span>
              <span style={{ fontSize: '16px', color: '#ffffff', fontWeight: 600 }}>ganocafe.online</span>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>E-commerce</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px 30px',
              }}
            >
              <span style={{ fontSize: '28px', marginBottom: '8px' }}>🤖</span>
              <span style={{ fontSize: '16px', color: '#ffffff', fontWeight: 600 }}>NEXUS IA</span>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Chatbot 24/7</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px 30px',
              }}
            >
              <span style={{ fontSize: '28px', marginBottom: '8px' }}>📱</span>
              <span style={{ fontSize: '16px', color: '#ffffff', fontWeight: 600 }}>App Móvil</span>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Gestión</span>
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
              background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)',
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

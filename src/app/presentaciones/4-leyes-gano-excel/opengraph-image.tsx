import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Las 4 Leyes del Sistema Gano Excel - Presentación Visual Interactiva | Luis Cabrejo'
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
        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Hero circle with glow */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.6)',
            boxShadow: '0 0 60px 20px rgba(255,255,255,0.08), 0 0 120px 40px rgba(255,255,255,0.03)',
            marginBottom: 50,
            display: 'flex',
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontSize: 56,
            fontWeight: 300,
            color: '#ffffff',
            letterSpacing: '0.15em',
            textTransform: 'lowercase',
            marginBottom: 20,
          }}
        >
          las 4 leyes del sistema
        </h1>

        {/* 4 law dots */}
        <div
          style={{
            display: 'flex',
            gap: 60,
            marginBottom: 50,
          }}
        >
          {[
            { n: '1', label: 'desviar' },
            { n: '2', label: 'enseñar' },
            { n: '3', label: 'edificar' },
            { n: '4', label: 'promover' },
          ].map((law) => (
            <div
              key={law.n}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 12px 3px rgba(255,255,255,0.06)',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 600 }}>
                  {law.n}
                </span>
              </div>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: '0.15em' }}>
                {law.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <img
            src="https://luiscabrejo.com/logos/logo-luiscabrejo-profile.png"
            alt="LC"
            width="40"
            height="40"
            style={{ borderRadius: '50%', opacity: 0.8 }}
          />
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, fontWeight: 400, letterSpacing: '0.1em' }}>
            Luis Cabrejo
          </span>
          <span style={{ color: 'rgba(197,160,89,0.6)', fontSize: 14 }}>
            | Gano Excel
          </span>
        </div>

        {/* Top thin line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

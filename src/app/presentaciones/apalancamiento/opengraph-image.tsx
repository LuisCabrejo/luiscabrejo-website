import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Las 4 Leyes del Sistema Gano Excel - El Código Fuente del Apalancamiento | Luis Cabrejo'
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
          background: '#1a252f',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top progress bar — cyan to gold gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #009FDF, #f1c40f)',
          }}
        />

        {/* Grid background hint */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(#009FDF 1px, transparent 1px), linear-gradient(90deg, #009FDF 1px, transparent 1px)',
            backgroundSize: '60px 60px',
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
            padding: '50px 60px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0, 159, 223, 0.15)',
              border: '1px solid rgba(0, 159, 223, 0.4)',
              borderRadius: '4px',
              padding: '8px 24px',
              marginBottom: '32px',
            }}
          >
            <span style={{ color: '#009FDF', fontSize: '16px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              // presentación interactiva
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            Las 4 Leyes del Sistema
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              fontWeight: 300,
              color: '#7f8c8d',
              letterSpacing: '0.12em',
              marginBottom: '40px',
              textTransform: 'uppercase',
            }}
          >
            El Código Fuente del Apalancamiento
          </p>

          {/* 4 Laws icons */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
            }}
          >
            {[
              { label: 'DESVIAR', sub: 'HABILIDADES', color: '#009FDF' },
              { label: 'ENSEÑAR', sub: 'A ENSEÑAR', color: '#9b59b6' },
              { label: 'EDIFICACIÓN', sub: 'VALORES', color: '#2ecc71' },
              { label: 'PROMOVER', sub: 'VS INVITAR', color: '#f1c40f' },
            ].map((law, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ color: law.color, fontSize: '32px', fontWeight: 800 }}>
                  {i + 1}
                </span>
                <span style={{ color: law.color, fontSize: '13px', letterSpacing: '0.1em', fontWeight: 700 }}>
                  {law.label}
                </span>
                <span style={{ color: '#7f8c8d', fontSize: '11px', letterSpacing: '0.05em' }}>
                  {law.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with logo */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
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
              padding: '10px 24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <img
              src="https://luiscabrejo.com/logos/logo-luiscabrejo-profile.png"
              alt="LC"
              width="44"
              height="44"
              style={{ borderRadius: '50%' }}
            />
            <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>
              Luis Cabrejo
            </span>
            <span style={{ color: '#f1c40f', fontSize: '16px' }}>
              | Gano Excel — Diamante 11 Años
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #009FDF, #f1c40f)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Mi Historia - Luis Cabrejo, Diamante Gano Excel'
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
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background decorations */}
        <div
          style={{
            position: 'absolute',
            top: 50,
            left: -100,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(234, 179, 8, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -50,
            right: -50,
            width: 350,
            height: 350,
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
              background: 'rgba(234, 179, 8, 0.2)',
              border: '1px solid rgba(234, 179, 8, 0.5)',
              borderRadius: '999px',
              padding: '10px 28px',
              marginBottom: '30px',
            }}
          >
            <span style={{ color: '#fde047', fontSize: '22px', fontWeight: 600 }}>
              📖 Historia Real Sin Filtros
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '68px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Mi Historia
          </h1>

          {/* Gradient subtitle */}
          <p
            style={{
              fontSize: '42px',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '30px',
            }}
          >
            De la Quiebra a Diamante
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
            Quebrado a los 40, Diamante a los 43. 11 años construyendo un negocio en 16 países con Gano Excel.
          </p>

          {/* Timeline highlights */}
          <div
            style={{
              display: 'flex',
              gap: '50px',
              marginTop: '40px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '32px', fontWeight: 700, color: '#ef4444' }}>40</span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>Años Quebrado</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#64748b', fontSize: '24px' }}>→</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '32px', fontWeight: 700, color: '#fbbf24' }}>2.5</span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>Años a Diamante</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#64748b', fontSize: '24px' }}>→</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '32px', fontWeight: 700, color: '#22c55e' }}>11</span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>Años Exitoso</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
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

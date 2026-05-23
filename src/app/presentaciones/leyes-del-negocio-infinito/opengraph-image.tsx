import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Leyes del Negocio Infinito - Diseño e Infraestructura | Luis Cabrejo Parra'
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
          background: '#050505', // Carbono absoluto de tu paleta
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Barra de progreso superior en Oro Champaña */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: '#FFD700',
            boxShadow: '0 0 20px #FFD700',
          }}
        />

        {/* Retícula sutil de fondo (Quiet Luxury) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.02,
            backgroundImage:
              'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Bloque Central de Contenido */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10,
            padding: '40px 60px',
            marginTop: '-20px',
          }}
        >
          {/* Badge Quirúrgico */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 215, 0, 0.08)',
              border: '1px solid rgba(255, 215, 0, 0.25)',
              borderRadius: '4px',
              padding: '8px 24px',
              marginBottom: '28px',
            }}
          >
            <span style={{ color: '#FFD700', fontSize: '14px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              // conferencia maestra
            </span>
          </div>

          {/* Título Principal */}
          <h1
            style={{
              fontSize: '68px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '12px',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}
          >
            Leyes del Negocio Infinito
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: '24px',
              fontWeight: 300,
              color: '#94A3B8',
              letterSpacing: '0.15em',
              marginBottom: '48px',
              textTransform: 'uppercase',
            }}
          >
            Arquitectura de Activos y Libertad
          </p>

          {/* Desglose de los 5 Pilares de la Conferencia */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1000px',
            }}
          >
            {[
              { label: 'RIQUEZA', sub: 'VS ESTATUS' },
              { label: '3 LEYES', sub: 'SISTÉMICAS' },
              { label: 'RESPONSABILIDAD', sub: 'RADICAL' },
              { label: 'EL RITMO', sub: 'CONSTRUCTOR' },
              { label: 'LÍDER', sub: 'IMPARABLE' },
            ].map((pilar, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#111111',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  minWidth: '165px',
                  gap: '4px',
                }}
              >
                <span style={{ color: '#FFD700', fontSize: '24px', fontWeight: 800, marginBottom: '2px' }}>
                  0{i + 1}
                </span>
                <span style={{ color: '#ffffff', fontSize: '11px', letterSpacing: '0.08em', fontWeight: 700, textTransform: 'uppercase' }}>
                  {pilar.label}
                </span>
                <span style={{ color: '#94A3B8', fontSize: '9px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {pilar.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tarjeta de Identidad en el Footer */}
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
              gap: '14px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '999px',
              padding: '10px 28px',
              border: '1px solid #1E293B',
            }}
          >
            <img
              src="https://luiscabrejo.com/logos/logo-luiscabrejo-profile.png"
              alt="LC"
              width="40"
              height="40"
              style={{ borderRadius: '50%' }}
            />
            <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, letterSpacing: '0.05em' }}>
              Luis Cabrejo Parra
            </span>
            <span style={{ color: '#FFD700', fontSize: '14px', fontWeight: 500, letterSpacing: '0.05em' }}>
              | Gano Excel — Diamante
            </span>
          </div>
        </div>

        {/* Barra de cierre inferior */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '5px',
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

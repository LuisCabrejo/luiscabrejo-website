import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y tratamiento de datos personales de LuisCabrejo.com',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Política de Privacidad
            </h1>
            <p className="text-gray-400 text-lg">
              Última actualización: 20 de noviembre de 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">1. Información General</h2>
              <p className="text-gray-300 mb-4">
                LuisCabrejo.com (en adelante, "el Sitio") es operado por Luis Cabrejo,
                arquitecto de ecosistemas digitales. Esta política de privacidad describe
                cómo recopilamos, usamos y protegemos tu información personal.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">2. Información que Recopilamos</h2>
              <p className="text-gray-300 mb-4">
                Recopilamos la siguiente información cuando interactúas con nuestro sitio:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>
                  <strong>Información de contacto:</strong> Nombre, correo electrónico,
                  teléfono y país (cuando nos contactas a través de formularios).
                </li>
                <li>
                  <strong>Información de navegación:</strong> Páginas visitadas, tiempo
                  de permanencia y origen de la visita.
                </li>
                <li>
                  <strong>Información técnica:</strong> Dirección IP, tipo de navegador,
                  dispositivo y sistema operativo.
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">3. Uso de la Información</h2>
              <p className="text-gray-300 mb-4">
                Utilizamos tu información personal para:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>Responder a tus consultas y solicitudes de información</li>
                <li>Enviarte comunicaciones relacionadas con CreaTuActivo.com</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Prevenir fraudes y garantizar la seguridad del sitio</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">4. Almacenamiento de Datos</h2>
              <p className="text-gray-300 mb-4">
                Tus datos personales son almacenados en:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>
                  <strong>Supabase:</strong> Base de datos segura para información de contacto
                </li>
                <li>
                  <strong>Resend:</strong> Servicio de email transaccional
                </li>
                <li>
                  <strong>Vercel:</strong> Infraestructura de hosting
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Todos estos servicios cumplen con estándares internacionales de seguridad
                y protección de datos.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">5. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-300 mb-4">
                Utilizamos cookies y tecnologías similares para:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>Recordar tus preferencias y configuraciones</li>
                <li>Analizar el tráfico y uso del sitio</li>
                <li>Mejorar la funcionalidad y rendimiento</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede
                afectar la funcionalidad del sitio.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">6. Compartir Información</h2>
              <p className="text-gray-300 mb-4">
                No vendemos ni alquilamos tu información personal a terceros.
                Solo compartimos información en los siguientes casos:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>Con tu consentimiento explícito</li>
                <li>Con proveedores de servicios que nos ayudan a operar el sitio</li>
                <li>Cuando sea requerido por ley o autoridad competente</li>
                <li>Para proteger nuestros derechos legales</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">7. Tus Derechos</h2>
              <p className="text-gray-300 mb-4">
                Tienes derecho a:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li><strong>Acceder</strong> a tu información personal</li>
                <li><strong>Rectificar</strong> datos incorrectos o incompletos</li>
                <li><strong>Eliminar</strong> tu información (derecho al olvido)</li>
                <li><strong>Oponerte</strong> al procesamiento de tus datos</li>
                <li><strong>Portabilidad</strong> de tus datos</li>
                <li><strong>Revocar</strong> el consentimiento en cualquier momento</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Para ejercer estos derechos, contáctanos en:{' '}
                <a
                  href="mailto:contacto@luiscabrejo.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  contacto@luiscabrejo.com
                </a>
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">8. Seguridad</h2>
              <p className="text-gray-300 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger
                tu información personal contra acceso no autorizado, pérdida o destrucción.
                Esto incluye:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>Cifrado SSL/TLS en todas las comunicaciones</li>
                <li>Autenticación y control de acceso</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Backups regulares de datos</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">9. Menores de Edad</h2>
              <p className="text-gray-300 mb-4">
                Este sitio no está dirigido a menores de 18 años. No recopilamos
                intencionalmente información de menores. Si eres padre o tutor y crees
                que tu hijo nos ha proporcionado información, contáctanos para eliminarla.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">10. Enlaces a Terceros</h2>
              <p className="text-gray-300 mb-4">
                Este sitio puede contener enlaces a sitios de terceros (como CreaTuActivo.com).
                No somos responsables de las prácticas de privacidad de estos sitios.
                Te recomendamos revisar sus políticas de privacidad.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">11. Cambios a esta Política</h2>
              <p className="text-gray-300 mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos
                de cambios significativos publicando la nueva política en esta página y
                actualizando la fecha de "Última actualización".
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">12. Contacto</h2>
              <p className="text-gray-300 mb-4">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos
                tu información personal, contáctanos:
              </p>
              <div className="text-gray-300 space-y-2">
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:contacto@luiscabrejo.com"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    contacto@luiscabrejo.com
                  </a>
                </p>
                <p><strong>Sitio web:</strong> https://luiscabrejo.com</p>
                <p><strong>Responsable:</strong> Luis Cabrejo</p>
              </div>
            </div>

            <div className="bg-blue-900/20 rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-2xl font-bold mb-4">13. Ley Aplicable</h2>
              <p className="text-gray-300 mb-4">
                Esta política de privacidad se rige por las leyes de Colombia y cumple con:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                <li>Ley 1581 de 2012 (Protección de Datos Personales en Colombia)</li>
                <li>Decreto 1377 de 2013</li>
                <li>GDPR (para usuarios en la Unión Europea)</li>
              </ul>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center">
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Volver al Inicio
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 Luis Cabrejo. Arquitecto de Ecosistemas Digitales.</p>
            <p className="mt-2">
              Construyendo el futuro del bienestar económico en América.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

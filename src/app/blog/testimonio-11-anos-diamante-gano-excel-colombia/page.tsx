import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Testimonio: 11 Años como Diamante Gano Excel en 16 Países - Luis Cabrejo',
  description: 'Mi historia real desde los 40 años hasta construir un negocio Gano Excel en 16 países. Los fracasos, lecciones aprendidas y cómo la tecnología cambió todo. Testimonio honesto de un Diamante.',
  keywords: [
    'testimonio gano excel',
    'luis cabrejo gano excel',
    'diamante gano excel colombia',
    'historia exito gano excel',
    'testimonio distribuidor',
    'de cero a diamante',
    'network marketing colombia',
    'exito mlm colombia',
    'lider gano excel',
    'caso real gano excel',
  ],
  openGraph: {
    title: 'Testimonio: 11 Años como Diamante Gano Excel - Luis Cabrejo',
    description: 'De los 40 años quebrado a construir un negocio en 16 países. Historia real, sin filtros. Los fracasos que nadie te cuenta.',
    url: 'https://luiscabrejo.com/blog/testimonio-11-anos-diamante-gano-excel-colombia',
    type: 'article',
    images: [{
      url: '/images/og-testimonio-luis-cabrejo.jpg',
      width: 1200,
      height: 630,
      alt: 'Luis Cabrejo Testimonio Diamante Gano Excel',
    }],
  },
  alternates: {
    canonical: 'https://luiscabrejo.com/blog/testimonio-11-anos-diamante-gano-excel-colombia',
  },
};

export default function TestimonioPage() {
  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Testimonio: 11 Años como Diamante Gano Excel en 16 Países',
    description: 'Historia real de Luis Cabrejo: de quebrado a los 40 años hasta construir un negocio Gano Excel en 16 países de América. Testimonio honesto de un Diamante.',
    image: 'https://luiscabrejo.com/images/og-testimonio-luis-cabrejo.jpg',
    author: {
      '@type': 'Person',
      name: 'Luis Cabrejo',
      url: 'https://luiscabrejo.com',
      jobTitle: 'Diamante Gano Excel',
    },
    publisher: {
      '@type': 'Person',
      name: 'Luis Cabrejo',
    },
    datePublished: '2025-11-24',
    dateModified: '2025-11-24',
  };

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="min-h-screen bg-slate-900 overflow-x-hidden">
        {/* Fondo decorativo con gradientes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <Navigation />

        {/* Hero */}
        <div className="relative overflow-hidden border-b border-slate-700/50 pt-24 sm:pt-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="mb-6 flex items-center justify-between">
              <Link href="/blog" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                ← Volver al Blog
              </Link>
              <span className="text-sm text-gray-400">15 min lectura</span>
            </div>
            <span className="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Testimonio Real
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              11 Años como Diamante Gano Excel: Quebrado a los 40, Exitoso a los 43
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Mi historia real sin filtros. Cómo invertí $1,000 USD con emoción y seguridad, crecí a 30 personas en 3 meses, lloré en el primer año, y alcancé Diamante en 2.5 años.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Por <Link href="/historia" className="text-purple-400 hover:underline font-semibold">Luis Cabrejo</Link></span>
              <span>•</span>
              <span>24 Nov 2025</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-gray-300 leading-relaxed text-lg">
              La mayoría de testimonios en network marketing te cuentan solo la parte bonita: los viajes, los cheques grandes, los reconocimientos en escenario. Yo te voy a contar la historia completa, <strong className="text-white">incluyendo las partes feas.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed">
              Porque si estás considerando Gano Excel, mereces saber la verdad. No para desanimarte, sino para que sepas exactamente qué esperar. Esta es mi historia real, verificable, honesta.
            </p>
          </div>

          {/* Timeline Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">11</div>
              <div className="text-sm text-gray-300">Años como Diamante</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">16</div>
              <div className="text-sm text-gray-300">Países Activos</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-slate-800/50 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2.5</div>
              <div className="text-sm text-gray-300">Años a Diamante</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/50 to-slate-800/50 border border-yellow-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$1K</div>
              <div className="text-sm text-gray-300">Inversión Inicial</div>
            </div>
          </div>

          {/* Section 1: Contexto - 40 Años */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">40 Años: Quebrado, Pero No Derrotado</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A los 15 años, estaba seguro de que sería millonario. A los 30, no lo era, pero tampoco estaba mal: tenía un vehículo, vivía en un conjunto residencial digno.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Pero a los 40 años, quebré.</strong> Perdí todo.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              14 años de matrimonio con Liliana. Le había prometido 3 cosas cuando nos casamos: una casa de campo, que pudiera comprar lo que quisiera sin pedir permiso, y 3 hijos. A los 14 años de casados, solo había cumplido una: teníamos 3 hijos hermosos. Las otras dos promesas seguían pendientes.
            </p>

            <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-300 font-semibold mb-2">
                <strong className="text-red-400">Mi trayectoria antes de Gano Excel:</strong>
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-white">14 años</strong> en venta de vehículos</li>
                <li>• <strong className="text-white">Formación:</strong> Profesor técnico industrial (electricidad y electrónica)</li>
                <li>• <strong className="text-white">ADN:</strong> Siempre independiente, nunca empleado tradicional</li>
                <li>• <strong className="text-white">A los 40:</strong> Quiebra total, pérdida de todo lo construido</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Durante la pandemia, decidí volver a estudiar. Computación, desarrollo web, inteligencia artificial. Me enamoré de la tecnología. Pero eso vino después. Primero tuve que encontrar Gano Excel.
            </p>
          </section>

          {/* Section 2: La Decisión */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">La Inversión que Cambió Todo: $1,000 USD</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cuando conocí Gano Excel, no llegué con miedo. <strong className="text-white">Llegué emocionado y seguro.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Invertí en el paquete <strong className="text-purple-400">VISIONARIO</strong> ($1,000 USD). ¿Por qué? Porque si iba a hacer esto, iba a hacerlo en serio. No tenía tiempo para medias tintas.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              El contexto: tenía 2 negocios tradicionales funcionando. Le dedicaba a Gano Excel <strong className="text-white">1-2 horas nocturnas</strong>. No era mi única fuente de ingresos, era mi apuesta al futuro.
            </p>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-blue-400">Mi mentalidad en ese momento:</strong>
              </p>
              <p className="text-gray-300 italic">
                "Imaginaba esto como una bola de nieve que empiezas a rodar desde la cima de una montaña. Al principio cuesta moverla, pero una vez toma velocidad, nada la detiene."
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Esa analogía mental me mantuvo enfocado durante los meses difíciles. Sabía que solo necesitaba empujar la bola hasta que ganara momentum.
            </p>
          </section>

          {/* Section 3: Los Primeros 3 Meses */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Los Primeros 3 Meses: Crecimiento Acelerado</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              A diferencia de muchos testimonios que hablan de años de estancamiento, mi crecimiento inicial fue rápido:
            </p>

            <div className="space-y-6 mb-8">
              {/* Mes 1 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">✅ Mes 1: La Primera Duplicación</h3>
                <p className="text-gray-300 mb-3">
                  Empecé con 2 personas. Al final del primer mes: <strong className="text-white">5 personas en total.</strong>
                </p>
                <p className="text-sm text-gray-400 italic">
                  Ya estaba viendo duplicación. La bola de nieve comenzaba a moverse.
                </p>
              </div>

              {/* Mes 2 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">✅ Mes 2: Explosión Inicial</h3>
                <p className="text-gray-300 mb-3">
                  De 5 a <strong className="text-white">20 personas.</strong> Crecimiento de 4x en un mes.
                </p>
                <p className="text-sm text-gray-400 italic">
                  El sistema estaba funcionando. La gente estaba duplicando.
                </p>
              </div>

              {/* Mes 3 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">✅ Mes 3: Confirmación del Modelo</h3>
                <p className="text-gray-300 mb-3">
                  De 20 a <strong className="text-white">30 personas.</strong> El momentum era imparable.
                </p>
                <p className="text-sm text-gray-400 italic">
                  La bola de nieve estaba rodando montaña abajo. Ya no dependía solo de mí.
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              ¿Significa que fue fácil? <strong className="text-white">No.</strong> Significa que el sistema funcionaba. Pero lo que vino después fue la verdadera prueba.
            </p>
          </section>

          {/* CTA Mid-Article */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-l-4 border-purple-500 rounded-r-xl p-6 sm:p-8 my-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">💎 Reflexión de Diamante</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              El crecimiento rápido al inicio NO garantiza el éxito. La verdadera prueba es el <strong className="text-white">primer año completo.</strong> La mayoría de distribuidores renuncian entre el mes 6 y el mes 12, justo cuando el negocio está a punto de despegar.
            </p>
            <p className="text-gray-300">
              Los primeros 3 meses son emoción. El primer año es <strong className="text-purple-300">determinación.</strong>
            </p>
          </div>

          {/* Section 4: El Primer Año */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">El Primer Año: Lágrimas, Esfuerzo y Persistencia</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Después del crecimiento inicial, llegó la realidad. <strong className="text-white">El primer año fue muy duro.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Hubo lágrimas. Hubo noches de duda. Hubo momentos donde pensé: <em className="text-gray-400">"¿Por qué es tan difícil?"</em>
            </p>

            <div className="bg-slate-800/50 border-2 border-red-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Las Dificultades Reales del Primer Año:</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">1. Personas que renunciaban:</strong> De las 30 personas iniciales, muchas desaparecieron. No todos tienen la mentalidad empresarial.
                </li>
                <li>
                  <strong className="text-white">2. Equilibrio con negocios tradicionales:</strong> Administrar 2 negocios tradicionales + Gano Excel en 1-2 horas nocturnas era agotador físicamente.
                </li>
                <li>
                  <strong className="text-white">3. Escepticismo familiar:</strong> No todo el mundo creía en el network marketing. Las opiniones negativas duelen más cuando vienen de familia.
                </li>
                <li>
                  <strong className="text-white">4. Aprendizaje constante:</strong> Tuve que aprender liderazgo, motivación, sistemas, comunicación. Todo mientras construía.
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Pero seguí. <strong className="text-white">Sistema + persistencia + evolución constante.</strong> Esas fueron las claves. Y trabajar en equipo. Y la bendición de Dios.
            </p>
          </section>

          {/* Section 5: El Camino a Diamante */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">2.5 Años Después: Diamante</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              En <strong className="text-white">30 meses</strong> (2.5 años), alcancé el rango de <strong className="text-purple-400">Diamante</strong> en Gano Excel.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              No fue magia. Fue <strong className="text-white">trabajo "con las uñas"</strong>, sin recursos extraordinarios, pero con un sistema que funcionaba.
            </p>

            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-purple-400">Datos interesantes:</strong>
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Trabajábamos <strong className="text-white">2 horas diarias promedio</strong></li>
                <li>• No teníamos oficina de Gano Excel en Villavicencio (mi ciudad)</li>
                <li>• Todo era trabajo remoto antes de que fuera cool</li>
                <li>• El sistema + la persistencia + la evolución constante = resultados</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              El día que logré Diamante, mi vida cambió. <strong className="text-white">Pasé de quebrado a extraordinario en 2.5 años.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pero lo más importante: <strong className="text-purple-400">mi esposa Liliana también llegó a Diamante.</strong> No solo yo. Ella duplicó el modelo. Eso es la verdadera prueba de que el sistema funciona.
            </p>
          </section>

          {/* Section 6: La Familia Power Couple */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Power Couple: Dos Diamantes, Una Visión</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mi esposa, <strong className="text-white">Liliana Moreno</strong>, no solo me apoyó. Se convirtió en <strong className="text-purple-400">Diamante</strong> también.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              25 años de matrimonio sólido. Dos diamantes en la misma familia. Eso es duplicación real. Eso es trabajo en equipo.
            </p>

            <div className="bg-pink-900/20 border-l-4 border-pink-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-pink-400">Y la historia continúa:</strong>
              </p>
              <p className="text-gray-300">
                Nuestra hija, <strong className="text-white">Jieth Cabrejo Moreno</strong>, actualmente tiene el rango de <strong className="text-yellow-400">ORO</strong> en Gano Excel. Su proyección: <strong className="text-purple-400">Diamante en 2026.</strong>
              </p>
              <p className="text-gray-300 mt-3">
                Tres generaciones. Un legado empresarial familiar. Eso es lo que se puede construir con network marketing bien hecho.
              </p>
            </div>
          </section>

          {/* Section 7: Los Viajes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Los Viajes: Recompensas del Esfuerzo</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Gano Excel nos ha llevado a conocer el mundo. No como turistas, sino como <strong className="text-white">líderes empresariales.</strong>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800/50 border border-blue-500/30 rounded-xl p-4 text-center">
                <div className="text-blue-400 font-bold mb-1">🇪🇺 Europa</div>
                <p className="text-xs text-gray-400">Eventos corporativos</p>
              </div>
              <div className="bg-slate-800/50 border border-blue-500/30 rounded-xl p-4 text-center">
                <div className="text-blue-400 font-bold mb-1">🇲🇾 Malasia</div>
                <p className="text-xs text-gray-400">Casa matriz Gano Excel</p>
              </div>
              <div className="bg-slate-800/50 border border-blue-500/30 rounded-xl p-4 text-center">
                <div className="text-blue-400 font-bold mb-1">🇰🇷 Corea del Sur</div>
                <p className="text-xs text-gray-400">Convención internacional</p>
              </div>
              <div className="bg-slate-800/50 border border-blue-500/30 rounded-xl p-4 text-center">
                <div className="text-blue-400 font-bold mb-1">🇸🇬 Singapur</div>
                <p className="text-xs text-gray-400">Evento regional</p>
              </div>
              <div className="bg-slate-800/50 border border-blue-500/30 rounded-xl p-4 text-center">
                <div className="text-blue-400 font-bold mb-1">🇳🇱 Holanda</div>
                <p className="text-xs text-gray-400">Capacitación corporativa</p>
              </div>
              <div className="bg-slate-800/50 border border-blue-500/30 rounded-xl p-4 text-center">
                <div className="text-blue-400 font-bold mb-1">+7 Países</div>
                <p className="text-xs text-gray-400">América y Asia</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Estos viajes no son vacaciones. Son recordatorios de que <strong className="text-white">el esfuerzo vale la pena.</strong> Son conexiones con líderes de otros países. Son inspiración para seguir creciendo.
            </p>
          </section>

          {/* Section 8: La Verdad sobre Gano Excel */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">La Verdad que Nadie Te Dice sobre Gano Excel</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Después de 11 años como Diamante, esto es lo que he aprendido:
            </p>

            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">1. El Network Marketing es DIFÍCIL para la Mayoría</h3>
                <p className="text-gray-300">
                  El 90% de personas fracasan en network marketing. No porque Gano Excel sea malo, sino porque <strong className="text-white">no tienen un sistema.</strong> Yo tuve éxito porque construí tecnología que simplificó el proceso.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">2. La Tecnología es Tu Única Ventaja</h3>
                <p className="text-gray-300">
                  Durante la pandemia, mientras el mundo se detenía, yo dije: <em className="text-white">"La pandemia fue una bendición para mí."</em> ¿Por qué? Porque me obligó a digitalizar todo. Lancé <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ganocafe.online</a>. Lo que no hicimos en 9 años, lo hicimos en 2 con tecnología.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">3. Inspiración: David Vélez y Peter Thiel</h3>
                <p className="text-gray-300 mb-3">
                  David Vélez (fundador de Nubank) demostró que la tecnología puede simplificar lo complejo. Peter Thiel enseñó en <em className="text-white">"Zero to One"</em> que la innovación real crea monopolios temporales.
                </p>
                <p className="text-gray-300">
                  Por eso creé <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">CreaTuActivo.com</a>: la <strong className="text-white">primera aplicación que simplifica el MLM</strong> para que cualquiera pueda hacerlo.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">4. Los Números Reales (2025)</h3>
                <p className="text-gray-300 mb-3">
                  <strong className="text-white">16 países</strong> con presencia activa en América. <strong className="text-white">+2,847 vidas transformadas</strong> (no todos activos hoy, pero todos pasaron por mi sistema). <strong className="text-white">11 años consecutivos</strong> como Diamante.
                </p>
                <p className="text-gray-300">
                  No te voy a mentir con cifras de ingresos porque cada persona es diferente. Lo que sí te puedo decir: <strong className="text-purple-300">el negocio me dio libertad financiera y de tiempo.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Por qué CreaTuActivo.com */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Por Qué Creé CreaTuActivo.com</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Después de ver a miles de distribuidores fracasar porque el network marketing tradicional es <strong className="text-white">demasiado difícil</strong>, tomé una decisión:
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg font-semibold">
              <em className="text-purple-300">"Voy a crear la primera aplicación que haga el MLM simple para cualquiera."</em>
            </p>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">El Ecosistema Completo:</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">• <a href="https://luiscabrejo.com" className="text-blue-400 hover:underline">luiscabrejo.com</a></strong> - Mi marca personal, mi historia
                </li>
                <li>
                  <strong className="text-white">• <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">CreaTuActivo.com</a></strong> - La plataforma empresarial, el sistema
                </li>
                <li>
                  <strong className="text-white">• <a href="https://app.creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">App CreaTuActivo</a></strong> - Herramientas de automatización con IA
                </li>
                <li>
                  <strong className="text-white">• <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">ganocafe.online</a></strong> - E-commerce funcional de productos
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              5 años estudiando. WordPress, Next.js, Inteligencia Artificial, automatización. Soy obstinado. No te imaginas las horas dedicadas, días completos estudiando para crear esto.
            </p>
          </section>

          {/* Final Thoughts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">¿Lo Haría de Nuevo?</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              <strong className="text-white">Sin dudarlo.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pero no de la misma forma. Si empezara hoy, usaría <strong className="text-purple-400">CreaTuActivo.com</strong> desde el día 1. No perdería años descubriendo lo que ya descubrí.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Por eso existe el <Link href="/fundadores" className="text-purple-400 hover:underline font-semibold">Programa Fundadores</Link>. Para que tú no tengas que pasar por el mismo dolor que yo pasé.
            </p>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ¿Estás Listo para Escribir Tu Propia Historia?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              No te prometo que será fácil. Te prometo que tendrás las herramientas, el sistema y la mentoría para que sea <strong>posible.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fundadores"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl"
              >
                Conocer Programa Fundadores
              </Link>
              <a
                href="https://wa.me/573102066593"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Hablar Conmigo por WhatsApp
              </a>
            </div>
          </div>

          {/* Author Bio - Interlinking to /historia */}
          <div className="mt-12 bg-slate-800/50 border-l-4 border-purple-500 rounded-r-xl p-6 sm:p-8">
            <p className="text-gray-300 text-sm mb-4">
              <strong className="text-white">Sobre el autor:</strong> Soy Luis Cabrejo, líder de network marketing en 16 países de América con 11 años como Diamante Gano Excel. Esta es mi historia específica con Gano Excel.
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Si quieres conocer mi trayectoria completa como emprendedor y arquitecto de ecosistemas digitales, visita <Link href="/historia" className="text-purple-400 hover:underline font-semibold">mi página de historia personal</Link>.
            </p>
            <p className="text-gray-300 text-sm">
              Nos vemos del otro lado,<br />
              <strong className="text-purple-400">Luis Cabrejo</strong><br />
              <span className="text-gray-400">Diamante Gano Excel | Fundador CreaTuActivo.com</span>
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12 border-t border-slate-700/50 pt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog/como-ser-distribuidor-gano-excel-colombia-2025"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-2">Cómo Ser Distribuidor Gano Excel Colombia 2025</h4>
                <p className="text-sm text-gray-400">Guía completa paso a paso: requisitos, inversión y proceso</p>
              </Link>

              <Link
                href="/historia"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-2">Mi Historia Completa: De la Quiebra a 4 Millones</h4>
                <p className="text-sm text-gray-400">La trayectoria completa de Luis Cabrejo como emprendedor y líder</p>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </article>
    </>
  );
}

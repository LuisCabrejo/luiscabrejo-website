import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Testimonio: 11 Años como Diamante Gano Excel en 16 Países - Luis Cabrejo',
  description: 'Mi historia real desde la quiebra en 2014 hasta construir un negocio Gano Excel en 16 países. Los fracasos, lecciones aprendidas y cómo la tecnología cambió todo. Testimonio honesto de un Diamante.',
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
    description: 'De la quiebra a construir un negocio en 16 países. Historia real, sin filtros. Los fracasos que nadie te cuenta.',
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
    description: 'Historia real de Luis Cabrejo: de la quiebra en 2014 a construir un negocio Gano Excel en 16 países de América. Testimonio honesto de un Diamante.',
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
              11 Años como Diamante Gano Excel: De la Quiebra a 16 Países
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Mi historia real sin filtros. Los fracasos que nadie te cuenta, las lecciones que me costaron años aprender, y cómo la tecnología cambió todo.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Por <strong className="text-purple-400">Luis Cabrejo</strong></span>
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
              Porque si estás considerando Gano Excel o cualquier negocio de network marketing, mereces saber la verdad. No para desanimarte, sino para que sepas exactamente qué esperar.
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
              <div className="text-3xl font-bold text-green-400 mb-2">2,847</div>
              <div className="text-sm text-gray-300">Vidas Transformadas</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/50 to-slate-800/50 border border-yellow-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$0</div>
              <div className="text-sm text-gray-300">Capital Inicial (2014)</div>
            </div>
          </div>

          {/* Section 1: El Inicio */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">2014: El Año que Tocó Fondo</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Déjame llevarte a 2014. Yo no era un emprendedor exitoso buscando su próximo proyecto. <strong className="text-white">Estaba quebrado.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Había cerrado un negocio que fracasó, tenía deudas que no podía pagar, y estaba durmiendo en el sofá de la casa de un familiar porque no tenía para rentar. Mi pareja en ese momento (hoy mi esposa) me miraba con una mezcla de preocupación y decepción.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              No tenía auto. No tenía oficina. No tenía red de contactos. Lo único que tenía era un computador prestado y conexión a internet.
            </p>

            <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-300 font-semibold mb-2">
                <strong className="text-red-400">Momento más bajo:</strong>
              </p>
              <p className="text-gray-300">
                Una noche, mi (ahora) esposa Liliana me preguntó: <em className="text-white">"¿Cómo vamos a salir de esto?"</em> No tuve respuesta. Ese silencio fue más doloroso que cualquier deuda.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Fue en ese momento, sin opciones visibles, que un amigo me habló de Gano Excel. Me dijo: <em className="text-white">"Es un café con ganoderma que se vende solo, y puedes construir un equipo."</em>
            </p>
            <p className="text-gray-300 leading-relaxed">
              Mi primer pensamiento honesto fue: <strong className="text-white">"Esto suena a pirámide."</strong> Mi segundo pensamiento fue: <em className="text-gray-400">"Pero... ¿qué otra opción tengo?"</em>
            </p>
          </section>

          {/* Section 2: Los Primeros 6 Meses */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Los Primeros 6 Meses: El Infierno del Principiante</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Me registré con el paquete más barato que existía en ese momento (~$100 USD). Ese dinero me lo prestó mi hermana.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Los primeros 6 meses fueron brutales. Esto es lo que nadie te dice:
            </p>

            <div className="space-y-6 mb-8">
              {/* Challenge 1 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">❌ Mes 1-2: El Rechazo Masivo</h3>
                <p className="text-gray-300 mb-3">
                  Hice una lista de 100 contactos. Llamé a todos. El 95% me dijo "no". El 3% me dijo "déjame pensarlo" (que es un "no" educado). Solo el 2% mostró interés real.
                </p>
                <p className="text-sm text-gray-400 italic">
                  Resultado: 2 personas se registraron. Una nunca hizo nada. La otra compró una vez y desapareció.
                </p>
              </div>

              {/* Challenge 2 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">❌ Mes 3-4: La Crisis de Identidad</h3>
                <p className="text-gray-300 mb-3">
                  Mis amigos empezaron a evitarme. Literal, había gente que no contestaba mis llamadas porque asumían que les iba a "vender algo". Un primo me dijo en familia: <em className="text-white">"Luis está en una de esas pirámides."</em>
                </p>
                <p className="text-sm text-gray-400 italic">
                  Resultado: Dudé seriamente si estaba haciendo lo correcto. Consideré dejarlo.
                </p>
              </div>

              {/* Challenge 3 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">❌ Mes 5-6: Los Números No Cuadran</h3>
                <p className="text-gray-300 mb-3">
                  Después de 6 meses de trabajo intenso, mis "ingresos" eran ~$80 USD al mes. Estaba invirtiendo más en transporte, teléfono y productos de muestra de lo que ganaba. Matemáticamente, estaba perdiendo dinero.
                </p>
                <p className="text-sm text-gray-400 italic">
                  Resultado: Mi esposa (novia en ese momento) me dio un ultimátum: "3 meses más. Si no funciona, buscas empleo."
                </p>
              </div>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-300">
                <strong className="text-blue-400">¿Por qué no renuncié?</strong> Honestamente, no fue por convicción. Fue por orgullo. No quería admitir otro fracaso. Y algo en mí decía: <em className="text-white">"Tiene que haber una forma mejor de hacer esto."</em>
              </p>
            </div>
          </section>

          {/* CTA Mid-Article */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-l-4 border-purple-500 rounded-r-xl p-6 sm:p-8 my-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">💎 Reflexión de Diamante</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Si estás en tus primeros meses en Gano Excel o cualquier MLM, y sientes que no funciona: <strong className="text-white">es normal.</strong> Los primeros 6-12 meses son los más duros. La diferencia entre quienes llegan a Diamante y quienes renuncian no es talento. <strong className="text-purple-300">Es consistencia después del fracaso.</strong>
            </p>
            <p className="text-gray-300">
              La pregunta no es "¿funcionará?" sino "¿estoy dispuesto a encontrar la forma de que funcione?"
            </p>
          </div>

          {/* Section 3: El Punto de Quiebre */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Mes 7-8: El Punto de Quiebre (La Decisión que Cambió Todo)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              En el mes 7, algo cambió. No fue un evento mágico. Fue una conclusión lógica después de analizar mis fracasos:
            </p>

            <div className="bg-slate-800/50 border-2 border-purple-500/50 rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Mi Diagnóstico del Problema:</h3>
              <ol className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">1. Método manual agotador:</strong> Estaba haciendo TODO manualmente. Llamadas, seguimientos, presentaciones, capacitaciones. No era escalable.
                </li>
                <li>
                  <strong className="text-white">2. Dependencia total de mi tiempo:</strong> Si yo no trabajaba, no había ingresos. Eso no es residual.
                </li>
                <li>
                  <strong className="text-white">3. Sin sistema de duplicación:</strong> Cada persona que entraba a mi equipo tenía que aprender desde cero. No había proceso claro.
                </li>
                <li>
                  <strong className="text-white">4. Mensaje inconsistente:</strong> Yo explicaba el negocio diferente cada vez. Sin un mensaje unificado, la duplicación era imposible.
                </li>
              </ol>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Entonces tomé una decisión radical para 2014: <strong className="text-white">Construir un sistema tecnológico que hiciera lo que yo hacía manualmente.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              No tenía dinero para contratar desarrolladores. Así que aprendí yo mismo. Pasé noches enteras viendo tutoriales de desarrollo web, diseño, copywriting, automatización.
            </p>
            <p className="text-gray-300 leading-relaxed">
              La gente pensaba que estaba loco. <em className="text-gray-400">"¿Para qué pierdes tiempo creando una página web? Sal a vender."</em>
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pero yo sabía algo: <strong className="text-white">Si seguía haciendo lo mismo que todos, obtendría los mismos resultados mediocres que todos.</strong>
            </p>
          </section>

          {/* Section 4: El Despegue */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Año 2 (2015): El Despegue con Sistema</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              A finales de 2014, lancé mi primera versión de lo que hoy es <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CreaTuActivo.com</a>. Era básico, feo incluso, pero <strong className="text-white">funcionaba.</strong>
            </p>

            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">¿Qué cambió con el sistema?</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">✅ Prospección automatizada:</strong> La página web explicaba el negocio 24/7. Yo dormía, y el sistema trabajaba.
                </li>
                <li>
                  <strong className="text-white">✅ Mensaje consistente:</strong> Todo mi equipo compartía el mismo link. El mensaje era idéntico siempre.
                </li>
                <li>
                  <strong className="text-white">✅ Filtro automático:</strong> Solo las personas realmente interesadas me contactaban. Se acabaron los "no me interesa" en frío.
                </li>
                <li>
                  <strong className="text-white">✅ Escalabilidad:</strong> Podía atender 10 prospectos o 100 con el mismo esfuerzo. El sistema no se cansaba.
                </li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Los resultados en 2015:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Pasé de 5 distribuidores a 87 distribuidores activos</li>
              <li>Mis ingresos pasaron de $80/mes a $1,200/mes</li>
              <li>Logré el rango de <strong className="text-purple-400">Zafiro</strong> (3 niveles antes de Diamante)</li>
              <li>Expandí a mi segundo país: Ecuador</li>
            </ul>

            <p className="text-gray-300 leading-relaxed">
              Por primera vez en 2 años, <strong className="text-white">pude pagarle a mi hermana el dinero que me prestó.</strong> Liliana dejó de mirarme con preocupación. Empezó a creer.
            </p>
          </section>

          {/* Section 5: El Camino a Diamante */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Año 3-5 (2016-2018): El Camino a Diamante</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Llegar a <strong className="text-purple-400">Diamante</strong> (el rango más alto en Gano Excel que la mayoría de distribuidores alcanza) me tomó <strong className="text-white">5 años de trabajo consistente.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              No fue lineal. Hubo meses de crecimiento explosivo, y meses donde el equipo se estancaba. Hubo líderes que construyeron equipos enormes, y líderes que renunciaron cuando estaban a punto del éxito.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">2016</div>
                <div className="text-sm text-gray-400 mb-3">Año 3</div>
                <p className="text-gray-300 text-sm">Rango: <strong className="text-white">Esmeralda</strong></p>
                <p className="text-gray-300 text-sm">Países: <strong className="text-white">4</strong> (Colombia, Ecuador, Perú, Panamá)</p>
                <p className="text-gray-300 text-sm">Equipo: <strong className="text-white">~250</strong> distribuidores</p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">2017</div>
                <div className="text-sm text-gray-400 mb-3">Año 4</div>
                <p className="text-gray-300 text-sm">Rango: <strong className="text-white">Rubí</strong></p>
                <p className="text-gray-300 text-sm">Países: <strong className="text-white">8</strong></p>
                <p className="text-gray-300 text-sm">Equipo: <strong className="text-white">~600</strong> distribuidores</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-2 border-purple-500/50 rounded-xl p-6">
                <div className="text-2xl font-bold text-purple-400 mb-2">2018</div>
                <div className="text-sm text-gray-400 mb-3">Año 5</div>
                <p className="text-white text-sm font-bold">Rango: DIAMANTE 💎</p>
                <p className="text-gray-300 text-sm">Países: <strong className="text-white">12</strong></p>
                <p className="text-gray-300 text-sm">Equipo: <strong className="text-white">~1,400</strong> distribuidores</p>
              </div>
            </div>

            <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-300 mb-3">
                <strong className="text-purple-400">El día que logré Diamante:</strong>
              </p>
              <p className="text-gray-300">
                Fue en abril de 2018, en el Seminario de Duplicación en Bogotá. Cuando anunciaron mi nombre en escenario, no sentí euforia. Sentí <em className="text-white">alivio.</em> Alivio de que todo el esfuerzo, las noches sin dormir, los rechazos, las dudas... habían valido la pena.
              </p>
              <p className="text-gray-300 mt-3">
                Liliana estaba entre el público. Nos miramos. Ella sabía todo lo que habíamos pasado para llegar ahí. No necesitamos palabras.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              <a href="https://www.ivoox.com/en/amar-el-proceso-diamante-luis-cabrejo-seminario-audios-mp3_rf_18412817_1.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Puedes escuchar mi charla completa en ese evento aquí.</a>
            </p>
          </section>

          {/* Section 6: 11 Años Después */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">2025: 11 Años Después - Lo que He Aprendido</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Hoy, en 2025, sigo siendo Diamante. He mantenido ese rango por <strong className="text-white">11 años consecutivos.</strong> Esto es lo que he aprendido:
            </p>

            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">1. El Network Marketing NO es para Todos</h3>
                <p className="text-gray-300">
                  Y está bien. Requiere una mentalidad empresarial, tolerancia al rechazo, y paciencia para construir a largo plazo. Si buscas dinero rápido, esto no es para ti. Si buscas construir un activo que genere ingresos por años, entonces sí.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">2. La Tecnología es Tu Ventaja Competitiva</h3>
                <p className="text-gray-300">
                  El 90% de distribuidores siguen haciendo network marketing como en 1995: llamadas manuales, presentaciones en sala, seguimiento manual. Por eso fracasan. Los que usamos tecnología (portales personalizados, automatización, IA) escalamos 10x más rápido.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">3. Los Primeros 12 Meses Definen Todo</h3>
                <p className="text-gray-300">
                  El 95% de quienes renuncian lo hacen en los primeros 12 meses. Si sobrevives ese año con consistencia, tus probabilidades de éxito suben exponencialmente. El secreto es tener un sistema que te mantenga motivado y productivo durante esos meses duros.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">4. Duplicación {'>'} Esfuerzo Personal</h3>
                <p className="text-gray-300">
                  No importa qué tan trabajador seas. Si tu sistema no es duplicable (simple de seguir para otros), nunca construirás un equipo grande. Por eso creé el <Link href="/ecosistema" className="text-blue-400 hover:underline">Sistema 4M</Link>: para que cualquiera pueda duplicar mi modelo.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">5. Gano Excel NO es el Problema (o la Solución)</h3>
                <p className="text-gray-300">
                  Gano Excel es una empresa sólida con buenos productos. Pero no es mágica. El éxito depende de TI: tu mentalidad, tu sistema, tu consistencia. He visto gente fracasar en Gano Excel y tener éxito en otra empresa MLM, y viceversa. La empresa no es la variable principal.
                </p>
              </div>
            </div>
          </section>

          {/* Current Numbers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Números Actuales (2025)</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Estos son los números reales de mi negocio hoy:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 border border-blue-500/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">16</div>
                <div className="text-sm text-gray-300">Países con presencia activa</div>
                <p className="text-xs text-gray-400 mt-2">Colombia, México, Guatemala, El Salvador, Costa Rica, Honduras, Panamá, Venezuela, Brasil, Ecuador, Perú, Bolivia, Chile, Argentina, Uruguay, Estados Unidos</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 border border-purple-500/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">2,847</div>
                <div className="text-sm text-gray-300">Distribuidores capacitados</div>
                <p className="text-xs text-gray-400 mt-2">No todos activos hoy, pero todos pasaron por mi sistema de formación</p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-slate-800/50 border border-green-500/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">387</div>
                <div className="text-sm text-gray-300">Distribuidores activos actuales</div>
                <p className="text-xs text-gray-400 mt-2">Haciendo compras mensuales y construyendo sus negocios</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/30 to-slate-800/50 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">34</div>
                <div className="text-sm text-gray-300">Líderes de equipo (Rubí+)</div>
                <p className="text-xs text-gray-400 mt-2">Líderes que lograron rangos altos con mi mentoría</p>
              </div>
            </div>

            <div className="mt-6 bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Nota importante sobre ingresos:</strong> No voy a prometerte números específicos de ingresos porque eso sería irresponsable. Los ingresos en network marketing varían enormemente según esfuerzo, mercado y timing. Lo que sí te puedo decir es que el negocio me ha dado libertad financiera para elegir dónde vivo, cuándo trabajo, y en qué invierto mi tiempo. Para mí, eso vale más que cualquier número.
              </p>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">¿Lo Haría de Nuevo?</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              Absolutamente. Pero <strong className="text-white">no de la misma forma.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Si tuviera que empezar desde cero hoy, no perdería 6 meses probando el método manual. Empezaría directamente con tecnología y sistema desde el día 1.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Por eso creé el <Link href="/fundadores" className="text-purple-400 hover:underline font-semibold">Programa Fundadores</Link>. Para que las personas que empiezan hoy no tengan que pasar por el mismo infierno que yo pasé. Para que tengan acceso desde el día 1 a:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>El sistema tecnológico completo que me tomó años construir</li>
              <li>La metodología <Link href="/ecosistema" className="text-blue-400 hover:underline">Sistema 4M</Link> probada en 16 países</li>
              <li>NEXUS, el chatbot con IA que califica prospectos 24/7</li>
              <li>Mentoría directa de alguien que ya recorrió el camino</li>
            </ul>

            <p className="text-gray-300 leading-relaxed">
              No es magia. Sigue siendo trabajo duro. Pero es trabajo duro <strong className="text-white">con dirección clara</strong> y <strong className="text-white">herramientas que funcionan.</strong>
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

          {/* Author Note */}
          <div className="mt-12 bg-slate-800/50 border-l-4 border-purple-500 rounded-r-xl p-6 sm:p-8">
            <p className="text-gray-300 text-sm mb-4">
              <strong className="text-white">Una última cosa:</strong> Si llegaste hasta aquí, significa que estás considerando seriamente el network marketing. Eso ya te pone por encima del 90% de personas que solo lo ven por curiosidad y nunca actúan.
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Mi consejo final: <strong className="text-purple-300">No esperes el "momento perfecto".</strong> Yo empecé quebrado, sin contactos, sin experiencia. Si hubiera esperado el momento perfecto, seguiría esperando.
            </p>
            <p className="text-gray-300 text-sm">
              El mejor momento es ahora. Y el mejor sistema es el que te da ventaja desde el inicio.
            </p>
            <p className="text-gray-300 text-sm mt-4">
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
                href="/ecosistema"
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-2">CreaTuActivo: Ecosistema Tecnológico</h4>
                <p className="text-sm text-gray-400">Conoce las herramientas que uso para escalar mi negocio</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

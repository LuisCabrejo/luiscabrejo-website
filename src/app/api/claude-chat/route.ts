// /src/app/api/claude-chat/route.ts - ARCHIVO FINAL CONSOLIDADO CON TODOS LOS AJUSTES

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

// SISTEMA DE RESPUESTAS ESTRATÉGICAS COMPLETO (23 RESPUESTAS - INCLUYE GANODERMA)
const strategicResponses = {
  // GRUPO 1: Respuestas Fundacionales (10)
  "que_significa_ser_fundador": {
    emotion: "BUSQUEDA_DE_EXCLUSIVIDAD",
    responseType: "strategic",
    response: `Ser fundador del sistema 4M significa tres cosas muy concretas:

**🎯 Posicionamiento:** Entras antes del lanzamiento masivo de septiembre, cuando aún hay cupos limitados.

**💻 Participación:** Acceso completo al stack tecnológico que Luis y Liliana desarrollaron en 11 años.

**👑 Privilegio:** Soporte directo del equipo 4M durante la construcción de tu organización Gano Excel.

Es tu oportunidad de posicionarte en la distribución masiva antes que lleguen las masas.

¿Te interesa asegurar tu posición en esta fase exclusiva?`
  },

  "urgencia_real_marketing": {
    emotion: "ESCEPTICISMO_TACTICAS",
    responseType: "strategic",
    response: `100% transparente: es urgencia real.

Luis necesita un núcleo duro de 100-150 fundadores comprometidos para poder darles el soporte adecuado antes del lanzamiento público masivo.

No es táctica de marketing - es estrategia de capacidad. Luis prefiere construir con menos personas serias que lidiar con más personas no comprometidas con Gano Excel.

Los 147 cupos son reales porque es el máximo que el equipo puede atender personalmente durante esta fase.

¿Prefieres validar esto directamente con Luis o tienes otras dudas sobre el proceso?`
  },

  "tipo_personas": {
    emotion: "CURIOSIDAD_SOCIAL",
    responseType: "strategic",
    response: `Luis los llama "inconformes inteligentes" - profesionales que aunque pueden tener estabilidad, entienden que la verdadera riqueza se construye con sistemas y activos.

**En su organización tienes:**
- Ingenieros y profesionales técnicos
- Personas de la banca y asesores financieros
- Profesionales de la salud diversos
- Empleados de Ecopetrol y el gobierno
- Empresarios con mentalidad de crecimiento

No es perfil demográfico, es psicográfico: buscan una forma más inteligente de construir con Gano Excel.

¿Te identificas con este perfil de "inconformes inteligentes"?`
  },

  "rol_nexus": {
    emotion: "COMPRENSION_SISTEMA",
    responseType: "strategic",
    response: `Mi rol es ser el puente inteligente entre tú y el sistema 4M.

**🤖 Como NEXUS:** Represento la tecnología que Luis y Liliana crearon, pero siempre tendrás acceso directo al equipo humano.

**⚡ Mi función:** Soy la primera experiencia de lo que significa tener herramientas tecnológicas de vanguardia para Gano Excel.

**🎯 El objetivo:** El soporte, la estrategia y el crecimiento siempre incluye el toque humano del sistema 4M.

Soy la demostración viviente de por qué su enfoque tecnológico es superior al MLM tradicional.

¿Qué aspecto del sistema 4M te gustaría explorar más profundamente?`
  },

  "plan_primer_ano": {
    emotion: "VISION_FUTURO",
    responseType: "strategic",
    response: `La visión de Luis y Liliana es clara: construir la comunidad de 4 millones empezando por Colombia y expandiendo por América.

**🇨🇴 Tu primer año:**
- **Meses 1-3:** Construyes tu base con sistema 4M en Colombia
- **Meses 4-8:** Escalas usando herramientas tecnológicas avanzadas
- **Meses 9-12:** Participas en expansión a otros países LATAM

**🌎 Mientras tanto:** Luis y Liliana construyen la infraestructura para la expansión masiva internacional.

Es tu oportunidad de crecer junto con la visión más ambiciosa de distribución en América Latina.

¿Esta progresión se alinea con tus expectativas de crecimiento?`
  },

  // GRUPO 2: Respuestas Operacionales (12)
  "como_funciona_exactamente": {
    emotion: "ESPERANZA_CAUTELOSA",
    responseType: "strategic",
    response: `El sistema 4M simplifica Gano Excel a tres pasos claros:

**1️⃣ Conectar:** Identificas personas en tu red que valoran bienestar y oportunidades inteligentes.

**2️⃣ Compartir:** Usas las herramientas tecnológicas del sistema 4M para presentar la oportunidad Gano Excel.

**3️⃣ Acompañar:** Apoyas a quienes deciden empezar su propia distribución con productos únicos.

**⚡ La diferencia clave:** La tecnología elimina 80% de la fricción del network marketing tradicional.

No tienes que explicar planes de compensación o convencer sobre productos - las herramientas hacen la presentación profesional.

¿Te parece más manejable este enfoque tecnológico vs MLM tradicional?`
  },

  "cuanto_invertir": {
    emotion: "EVALUACION_FINANCIERA",
    responseType: "strategic",
    response: `Luis diseñó tres opciones para diferentes situaciones:

**🚀 Emprendedor - $200 USD**
Perfecto para probar el sistema 4M sin gran riesgo financiero.

**🏢 Empresarial - $500 USD**
Balance ideal entre inversión y potencial de comisiones.

**💎 Visionario - $1000 USD**
Máximo potencial desde el primer día con Gano Excel.

**💰 Costo recurrente:** Solo 50 PV mensual (aprox $80 USD) por los cuales recibes productos Gano Excel de igual valor.

Luis siempre dice: "El mejor paquete es el que te permite dormir tranquilo mientras construyes tu activo empresarial."

¿Cuál se alinea mejor con tu situación actual?`
  },

  "tiempo_resultados": {
    emotion: "ANSIEDAD_TIMELINE",
    responseType: "strategic",
    response: `Luis es realista sobre los tiempos con Gano Excel:

**⚡ Semanas 2-4:** Primeras comisiones ($200-500) si ejecutas el sistema 4M consistentemente.

**📈 Meses 3-6:** Momentum sostenible ($1K-3K mensual) con organización en crecimiento.

**💎 Meses 6-12:** Activo empresarial consolidado ($3K-8K mensual) con sistema funcionando.

**🔑 La diferencia clave:** A diferencia de venta tradicional donde empiezas de cero cada mes, aquí cada acción se acumula construyendo un activo.

Pero seamos claros: esto requiere 5-7 horas semanales inteligentes, no es "dinero fácil".

¿Esta progresión realista se alinea con tus expectativas?`
  },

  "es_mlm_legitimo": {
    emotion: "MIEDO_REPUTACION",
    responseType: "strategic",
    response: `100% legítimo y te explico por qué es diferente:

**📊 Gano Excel:** Fundada en 1995 por Leow Soon Seng, 30+ años en mercado global, patente mundial Ganoderma Lucidum, presencia en 60+ países.

**🔧 El modelo:** SÍ utiliza distribución de red (network marketing), pero Luis evolucionó significativamente el modelo tradicional.

**🚀 Las diferencias clave:**
- Stack tecnológico Next.js + automatización propietaria
- Enfoque empresarial sin jerga MLM tradicional
- Mentalidad startup siguiendo "De Cero a Uno" de Peter Thiel
- Operación profesional como CEO, no líder MLM típico

Luis tomó lo mejor del network marketing (distribución eficiente) y eliminó lo peor (cultura tóxica, promesas irreales).

¿Te gustaría conocer específicamente cómo se diferencia de otros MLM que has visto?`
  },

  "que_tan_dificil": {
    emotion: "PREOCUPACION_HABILIDADES",
    responseType: "strategic",
    response: `Luis diferencia entre "simple" y "fácil" - el sistema 4M hace Gano Excel simple, pero construir cualquier activo empresarial requiere salir de tu zona de confort.

**✅ Lo que SÍ es simple con sistema 4M:**
- Procesos claros paso a paso para Gano Excel
- Herramientas automatizadas que trabajan por ti
- Soporte constante del equipo tecnológico
- Presentaciones profesionales ya creadas

**⚠️ Lo que requiere compromiso:**
- Constancia en ejecución durante 3-6 meses
- Aprender las herramientas tecnológicas
- Salir de zona de confort para conectar con personas
- Seguir el sistema sin intentar "mejorarlo"

**🎯 La diferencia vs MLM tradicional:** Las herramientas trabajan para ti, no contra ti.

¿Preferirías un sistema simple que requiere constancia, o algo "fácil" que no funciona?`
  },

  "cuando_ver_resultados": {
    emotion: "EXPECTATIVAS_RAPIDAS",
    responseType: "strategic",
    response: `Luis siempre es transparente sobre timelines realistas:

**⚡ Resultados inmediatos (Semana 1):**
- Acceso completo al sistema 4M funcionando
- Tu portal personalizado activo
- Primeras conversaciones con herramientas

**💰 Flujo de caja (Semanas 2-4):**
- Primeras comisiones Venta Directa
- Bono GEN5 si incorporas nuevos socios
- Validación del modelo funcionando

**📈 Activo significativo (Meses 3-6):**
- Bono Binario desarrollándose
- Organización con momentum propio
- Ingresos consistentes y crecientes

**💎 Riqueza real (12+ meses):**
- Activo empresarial sólido con Gano Excel
- Múltiples líneas de ingreso activas
- Sistema funcionando con menos intervención tuya

¿Este timeline se ajusta a tus expectativas sobre construcción de activos?`
  },

  "por_que_me_elegiste": {
    emotion: "VALIDACION_PERSONAL",
    responseType: "strategic",
    response: `Luis tiene criterios específicos para "inconformes inteligentes":

**🎯 Lo que busca Luis:**
- Profesionales que entienden que riqueza = sistemas + activos
- Personas que valoran innovación tecnológica sobre métodos tradicionales
- Individuos con visión de largo plazo vs gratificación inmediata
- Mentalidad de crecimiento dispuesta a aprender herramientas nuevas

**💡 Por qué estás aquí:**
Llegaste a esta página exclusiva porque alguien vio en ti el potencial para ser parte de algo más grande que el network marketing tradicional.

**🚀 La oportunidad:**
No es sobre convencerte - es sobre determinar si el sistema 4M se alinea con tu visión de construcción de riqueza inteligente.

¿Te reconoces en este perfil de "inconformes inteligentes" que busca Luis?`
  },

  "que_pasa_si_no_va_bien": {
    emotion: "MIEDO_AL_FRACASO",
    responseType: "strategic",
    response: `Luis es transparente sobre el "peor escenario" con Gano Excel:

**💰 En el peor caso financiero:**
- Tienes productos de bienestar premium para 6+ meses
- Acceso permanente a herramientas tecnológicas del sistema 4M
- Experiencia y conocimiento sobre distribución moderna
- Red de contactos profesionales "inconformes inteligentes"

**🧠 En el peor caso de aprendizaje:**
- Entiendes cómo funciona distribución tecnológica avanzada
- Conoces el modelo de negocio Gano Excel por dentro
- Desarrollas habilidades de networking profesional
- Tienes claridad sobre emprendimiento vs empleo

**🎯 La realidad histórica:**
Luis tiene 11 años de experiencia distribuyendo productos Gano Excel. Quienes siguen el sistema consistentemente construyen activos. Quienes no, al menos no pierden - aprenden.

¿Esta perspectiva del "peor caso" te da más confianza para evaluar la oportunidad?`
  },

  "empezar_con_menos": {
    emotion: "LIMITACIONES_FINANCIERAS",
    responseType: "strategic",
    response: `Luis diseñó específicamente el paquete Emprendedor ($200) para personas con presupuesto ajustado:

**🚀 Paquete Emprendedor - $200 USD:**
- 100% acceso al sistema 4M completo
- Herramientas tecnológicas idénticas a paquetes superiores
- Portal personalizado funcionando
- Soporte técnico completo del equipo
- Inventario inicial suficiente para validar el modelo

**🎯 La filosofía de Luis:**
"El éxito no depende del tamaño de la inversión inicial, sino de la consistencia en la ejecución del sistema."

**💡 Ventaja del paquete menor:**
Puedes probar el sistema 4M sin gran riesgo, y si funciona para ti, siempre puedes reinvertir ganancias para escalar.

**⚡ Diferenciador vs otros MLM:**
Otros cobran lo mismo pero te dan menos herramientas. Aquí todas las herramientas son iguales independiente del paquete.

¿El paquete Emprendedor se ajusta mejor a tu situación actual?`
  },

  "necesito_experiencia_previa": {
    emotion: "INSEGURIDAD_HABILIDADES",
    responseType: "strategic",
    response: `Luis diseñó el sistema 4M específicamente para personas SIN experiencia en MLM:

**🎯 Por qué NO necesitas experiencia previa:**
- El sistema 4M hace la presentación por ti
- Las herramientas manejan las objeciones comunes
- El entrenamiento está incluido paso a paso
- El soporte técnico resuelve dudas en tiempo real

**💡 De hecho, es mejor NO tener experiencia MLM:**
- No tienes "malos hábitos" de network marketing tradicional
- Aprendes el método Luis desde cero correctamente
- No intentas "mejorar" un sistema que ya funciona
- Sigues las herramientas tecnológicas sin resistencia

**🚀 Lo que SÍ necesitas:**
- Disposición para aprender herramientas nuevas
- Constancia para ejecutar 5-7 horas semanales
- Mentalidad de largo plazo (6-12 meses)
- Apertura para salir de zona de confort

**📊 Evidencia:** Muchos de los más exitosos en la organización de Luis empezaron sin experiencia previa en distribución.

¿Te tranquiliza saber que el sistema está diseñado para principiantes inteligentes?`
  },

  "de_que_trata_proyecto": {
    emotion: "COMPRENSION_ESENCIA",
    responseType: "strategic",
    response: `El proyecto es la construcción del "Amazon del bienestar" en América Latina:

**🌎 La visión 4M:**
Crear una comunidad de 4 millones de personas beneficiándose de productos Gano Excel únicos y oportunidad de distribución inteligente.

**🏗️ Cómo se construye:**
- Capa tecnológica propietaria (sistema 4M) sobre empresa establecida (Gano Excel 30+ años)
- Herramientas que eliminan fricciones del network marketing tradicional
- Red de distribuidores profesionales "inconformes inteligentes"
- Expansión país por país con infraestructura tecnológica sólida

**💎 Tu rol como fundador:**
No eres "vendedor de café" - eres distribuidor asociado con sistema tecnológico avanzado construyendo activo empresarial escalable.

**🎯 El resultado final:**
Cada socio obtiene los derechos económicos sobre todo el volumen que se mueva dentro de su organización, creando ingresos constantes y crecientes.

¿Te emociona ser parte de construir algo de esta magnitud en América Latina?`
  },

  "yo_que_tengo_que_hacer": {
    emotion: "NECESIDAD_CLARIDAD_ACCION",
    responseType: "strategic",
    response: `Tu trabajo se reduce a las 3 C's del sistema 4M:

**1️⃣ CONECTAR:**
Identificar personas en tu red que valoran bienestar y oportunidades inteligentes de negocio.

**2️⃣ COMPARTIR:**
Usar las herramientas del sistema 4M para presentar Gano Excel profesionalmente (el sistema hace la presentación, tú solo compartes el enlace).

**3️⃣ ACOMPAÑAR:**
Apoyar a quienes deciden empezar, conectándolos con el sistema de entrenamiento y herramientas.

**⚡ Lo que NO tienes que hacer:**
- Explicar planes de compensación complejos
- Convencer sobre productos (la calidad Gano Excel habla por sí sola)
- Manejar objeciones (las herramientas lo hacen)
- Inventar contenido (todo está creado)

**🎯 Tu enfoque:** 5-7 horas semanales ejecutando estas 3 C's consistentemente.

¿Te parece manejable enfocar tu tiempo en conectar, compartir y acompañar?`
  },

  // ✅ NUEVA RESPUESTA ESPECÍFICA GANODERMA CORREGIDA
  "ganoderma_lucidum": {
    emotion: "CURIOSIDAD_CIENTIFICA",
    responseType: "strategic",
    response: `El Ganoderma Lucidum es la innovación central que hace únicos los productos Gano Excel:

**👨‍🔬 El innovador:** Leow Soon Seng, CEO y científico de Gano Excel, desarrolló la tecnología patentada mundial para integrar Ganoderma Lucidum en bebidas cotidianas.

**🔬 La ciencia:** 30+ años de investigación, más de 200 estudios científicos, proceso de cultivo orgánico y extracción patentado que garantiza máxima potencia.

**🌿 Beneficios documentados:**
- Fortalece sistema inmune
- Optimiza función hepática
- Mejora calidad del sueño
- Regula presión arterial
- Potente antioxidante natural

**🎯 La conexión con Luis:** Él no creó los productos, pero identificó su potencial único y desarrolló el sistema 4M para distribuirlos masivamente con tecnología avanzada.

**💡 Lo genial:** Leow Soon Seng hizo que consumir este "súper hongo" fuera tan fácil como tomar café.

¿Te interesa más conocer los productos específicos con Ganoderma o cómo Luis estructuró la distribución?`
  }
};

// Función mejorada para detectar patrones estratégicos
const findStrategicResponse = (userMessage: string) => {
  const normalizedMessage = userMessage.toLowerCase().trim();

  const patterns = {
    "que_significa_ser_fundador": [
      /qué significa.*fundador/i, /ser fundador/i, /significa fundador/i, /fundador.*significa/i
    ],
    "urgencia_real_marketing": [
      /urgencia.*real/i, /real.*urgencia/i, /táctica.*marketing/i, /marketing.*táctica/i, /cupos.*real/i
    ],
    "tipo_personas": [
      /tipo.*personas/i, /qué.*gente/i, /perfil/i, /quién.*está/i, /personas.*están/i
    ],
    "rol_nexus": [
      /rol.*nexus/i, /qué.*haces/i, /función.*nexus/i, /quién.*eres/i, /tu.*rol/i
    ],
    "plan_primer_ano": [
      /plan.*año/i, /primer.*año/i, /próximo.*año/i, /plan.*futuro/i, /visión.*año/i
    ],
    "como_funciona_exactamente": [
      /cómo funciona exactamente/i, /funciona.*negocio/i, /cómo.*funciona/i, /proceso.*exacto/i
    ],
    "cuanto_invertir": [
      /cuánto.*invertir/i, /cuánto.*necesito/i, /inversión/i, /cuánto.*cuesta/i, /precio/i
    ],
    "tiempo_resultados": [
      /tiempo.*resultados/i, /cuándo.*resultados/i, /qué.*tan.*rápido/i, /en.*cuánto.*tiempo/i
    ],
    "es_mlm_legitimo": [
      /esto.*mlm/i, /es.*multinivel/i, /legítimo/i, /pirámide/i, /confiable/i, /estafa/i
    ],
    "que_tan_dificil": [
      /qué.*tan.*difícil/i, /difícil.*es/i, /complicado/i, /fácil.*es/i, /dificultad/i
    ],
    "cuando_ver_resultados": [
      /cuándo.*ver.*resultados/i, /cuándo.*empiezo.*ganar/i, /primeros.*resultados/i, /tiempo.*ver/i
    ],
    "por_que_me_elegiste": [
      /por.*qué.*me.*elegiste/i, /por.*qué.*yo/i, /elegir.*me/i, /criterios/i
    ],
    "que_pasa_si_no_va_bien": [
      /qué.*pasa.*si.*no/i, /si.*no.*funciona/i, /riesgo/i, /garantía/i, /no.*va.*bien/i
    ],
    "empezar_con_menos": [
      /empezar.*menos/i, /menos.*dinero/i, /más.*barato/i, /opciones.*económicas/i
    ],
    "necesito_experiencia_previa": [
      /necesito.*experiencia/i, /experiencia.*previa/i, /sin.*experiencia/i, /principiante/i
    ],
    "de_que_trata_proyecto": [
      /de.*qué.*trata/i, /qué.*es.*proyecto/i, /proyecto.*consiste/i, /esencia.*proyecto/i
    ],
    "yo_que_tengo_que_hacer": [
      /yo.*qué.*hacer/i, /qué.*tengo.*hacer/i, /mi.*trabajo/i, /responsabilidades/i, /tareas/i
    ],
    // ✅ NUEVO PATRÓN GANODERMA
    "ganoderma_lucidum": [
      /ganoderma.*lucidum/i, /ganoderma/i, /hongo/i, /súper.*hongo/i, /rey.*adaptógenos/i, /beneficios.*ganoderma/i
    ]
  };

  for (const [responseKey, patternList] of Object.entries(patterns)) {
    if (patternList.some(pattern => pattern.test(normalizedMessage))) {
      return strategicResponses[responseKey];
    }
  }

  return null;
};

// ✅ SYSTEM PROMPT COMPLETO CORREGIDO
const NEXUS_SYSTEM_PROMPT = `Eres NEXUS, el representante digital avanzado del sistema 4M desarrollado por Luis Cabrejo y Liliana Moreno para distribución masiva de Gano Excel.

## IDENTIDAD CRÍTICA
NUNCA hables en primera persona como Luis o Liliana. SIEMPRE habla SOBRE el sistema 4M en tercera persona:
- ✅ "Luis desarrolló el sistema 4M..."
- ✅ "La experiencia de Luis de 11 años..."
- ✅ "Según Liliana..."
- ❌ "Yo desarrollé..."
- ❌ "Mi experiencia de 11 años..."

## INFORMACIÓN VERIFICADA SOBRE GANO EXCEL
**Empresa:** Fundada en 1995 por Leow Soon Seng en Malasia, 30+ años operación global
**Fundador/CEO:** Leow Soon Seng - científico que desarrolló la tecnología de extracción de Ganoderma Lucidum
**Innovación clave:** Leow Soon Seng creó el proceso de integración del Ganoderma en bebidas cotidianas (café, chocolate)
**Patente mundial:** Ganoderma Lucidum soluble desarrollada por el equipo científico de Gano Excel
**Presencia:** 60+ países establecidos
**Productos Colombia:** Bebidas (Gano Café 3en1, Clásico, Mocha, Latte, Chocolate, Té Rooibos), Suplementos (Cápsulas Ganoderma, Excellium, Cordy Gold), Cuidado Personal (Gano Fresh, jabones, línea capilar)
**Compensación:** 12 formas ganar, principales: Venta Directa + Bono GEN5 (2%-15%) + Bono Binario (10%-17%)
**Requisito mensual:** 50 PV (aprox $80 USD) recibiendo producto igual valor

## INFORMACIÓN VERIFICADA SOBRE LUIS Y LILIANA
**Luis Cabrejo:** 51 años, Villavicencio, 11 años experiencia distribuyendo productos Gano Excel, 9 años consecutivos Diamante
**Liliana Moreno:** Su esposa, también Diamante Gano Excel, casados 25 años
**Sistema 4M:** Su innovación tecnológica propia para distribución de productos Gano Excel (NO creó los productos)
**Filosofía:** "De Cero a Uno" aplicada a distribución de productos Gano Excel
**Contribución:** Creó herramientas tecnológicas para distribución, no los productos Gano Excel en sí

## CLARIFICACIONES CRÍTICAS SOBRE GANO EXCEL
- Leow Soon Seng (CEO Gano Excel) desarrolló la tecnología de Ganoderma Lucidum en bebidas
- Luis Cabrejo desarrolló el sistema 4M para DISTRIBUIR los productos Gano Excel
- Gano Excel la empresa tiene 30+ años de investigación científica
- Luis tiene 11 años de EXPERIENCIA DISTRIBUYENDO productos Gano Excel
- El sistema 4M es la innovación de Luis para network marketing, NO para crear productos

## PAQUETES FUNDADORES VERIFICADOS
**Emprendedor:** $200 USD - Acceso completo sistema, inventario inicial productos Gano Excel
**Empresarial:** $500 USD - Balance perfecto inversión/potencial
**Visionario:** $1000 USD - Máximo potencial desde día 1

## AUDIENCIA TARGET: "INCONFORMES INTELIGENTES"
Profesionales colombianos que entienden que riqueza = sistemas + activos, valoran innovación tecnológica, buscan diversificar ingresos inteligentemente distribuyendo productos establecidos.

## ANÁLISIS EMOCIONAL AVANZADO
Detecta y responde apropiadamente a:
- SKEPTICAL_MLM: Acknowledge + Gano Excel credibility (30+ años Leow Soon Seng) + Sistema 4M diferenciación
- ANALYTICAL: Provide metrics + Luis track record distribución + Technical details sistema 4M
- EXCITED: Channel energy + Set expectations + Clear next steps
- WORRIED: Validate concerns + Conservative options + Family consideration
- PROFESSIONAL: Respect status + Executive positioning + Reputation enhancement
- FRUSTRATED: Direct communication + Efficient process + Time-respectful

## DIRECTRICES DE RESPUESTA
- Máximo 150 palabras para móvil
- Tono: Profesional + Auténtico + Innovador + Empático
- Siempre incluir pregunta de engagement
- Mantener identidad NEXUS consistente
- Proveer valor específico sobre Gano Excel (empresa de Leow Soon Seng) y sistema 4M (innovación de Luis)
- NUNCA atribuir creación de productos Gano Excel a Luis - él los distribuye

## CONTEXTO COLOMBIA PRE-LANZAMIENTO
Fecha: 1 agosto 2025, Lista privada 3,000 personas, Objetivo: 100-150 fundadores núcleo duro antes lanzamiento público septiembre, URL: luiscabrejo.com/fundadores

Tu función es ayudar a evaluar si el ecosistema empresarial Gano Excel (productos de Leow Soon Seng) + Sistema 4M (distribución de Luis/Liliana) se alinea con los objetivos del usuario, representando la innovación Luis/Liliana con perfecta autenticidad y precisión histórica.`;

// ✅ VALIDADORES MEJORADOS
const validateNexusIdentity = (response: string): boolean => {
  const violations = [
    /yo desarrollé/i, /mi experiencia de \d+ años/i, /soy luis/i, /soy liliana/i,
    /como distribuidor/i, /mi negocio/i, /cuando empecé/i
  ];
  return !violations.some(violation => violation.test(response));
};

const validateGanoExcelInfo = (response: string): boolean => {
  const inaccuracies = [
    /gano excel.*\d{2,} años.*(?!30)/i,
    /luis.*\d{2,} años.*(?!11)/i,
    /diamante.*\d{2,} años.*(?!9)/i,
    /luis.*integró.*ganoderma/i, // ✅ NUEVO: Luis no integró Ganoderma
    /luis.*creó.*productos/i,     // ✅ NUEVO: Luis no creó productos
    /luis.*desarrolló.*ganoderma/i // ✅ NUEVO: Luis no desarrolló Ganoderma
  ];
  return !inaccuracies.some(inaccuracy => inaccuracy.test(response));
};

// ✅ FUNCIÓN DE RETRY PARA ANTHROPIC OVERLOAD
const callAnthropicWithRetry = async (messages: any[], maxRetries = 3): Promise<string> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[NEXUS] Attempt ${attempt}/${maxRetries} to call Anthropic API`);

      const completion = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 400,
        temperature: 0.7,
        system: NEXUS_SYSTEM_PROMPT,
        messages: messages
      });

      return completion.content[0].type === 'text' ? completion.content[0].text : '';

    } catch (error: any) {
      console.error(`[NEXUS] Attempt ${attempt} failed:`, error.status, error.message);

      // Si es error 529 (overloaded) y tenemos más intentos
      if (error.status === 529 && attempt < maxRetries) {
        const waitTime = Math.pow(2, attempt) * 1000; // Exponential backoff: 2s, 4s, 8s
        console.log(`[NEXUS] Waiting ${waitTime}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }

      // Si es el último intento o error diferente, throw
      throw error;
    }
  }

  throw new Error('Max retries exceeded');
};

// Sistema de delays inteligentes
const calculateIntelligentDelay = (responseType: string, wordCount: number): number => {
  const baseDelays = {
    'basic': 800,
    'strategic': 1800,
    'claude': 2200,
  };

  const wordDelay = Math.min(wordCount * 15, 1200);
  const randomVariation = Math.random() * 400 - 200;
  const totalDelay = (baseDelays[responseType] || 1500) + wordDelay + randomVariation;

  return Math.max(1000, Math.min(totalDelay, 4000));
};

// Extraer contexto conversacional
const extractConversationContext = (history: any[]): string => {
  if (!history || history.length === 0) return '';

  const recentMessages = history.slice(-6);
  const topics = [];

  const topicKeywords = {
    'paquetes': ['paquete', 'precio', 'invertir', 'cuesta', 'valor'],
    'funcionamiento': ['funciona', 'sistema', 'plataforma'],
    'mlm': ['mlm', 'multinivel', 'legítimo'],
    'resultados': ['resultado', 'tiempo', 'cuándo'],
    'incorporación': ['dentro', 'acepto', 'empezar']
  };

  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    const mentioned = recentMessages.some(msg =>
      keywords.some(keyword =>
        msg.content && msg.content.toLowerCase().includes(keyword)
      )
    );
    if (mentioned) topics.push(topic);
  }

  return topics.length > 0 ? `Temas discutidos: ${topics.join(', ')}. ` : '';
};

// ✅ FALLBACK RESPONSES MEJORADAS
const getFallbackResponse = (userMessage: string): string => {
  const normalizedMessage = userMessage.toLowerCase();

  if (normalizedMessage.includes('hola') || normalizedMessage.includes('hi')) {
    return '¡Hola! Soy NEXUS, representante del sistema 4M que Luis y Liliana desarrollaron para distribución de productos Gano Excel. Estoy teniendo una dificultad técnica momentánea, pero puedo ayudarte con información básica. ¿Qué te gustaría saber sobre la oportunidad fundadores?';
  }

  if (normalizedMessage.includes('precio') || normalizedMessage.includes('invertir')) {
    return 'Los paquetes fundadores son: Emprendedor $200, Empresarial $500, Visionario $1000. Todos incluyen acceso completo al sistema 4M + inventario productos Gano Excel. ¿Te gustaría conocer más detalles de alguno específico?';
  }

  if (normalizedMessage.includes('mlm') || normalizedMessage.includes('legítimo')) {
    return 'Gano Excel es una empresa fundada por Leow Soon Seng en 1995, con 30+ años en el mercado y patente mundial Ganoderma. Luis aplicó tecnología de vanguardia al network marketing tradicional con el sistema 4M. ¿Te gustaría conocer las diferencias específicas?';
  }

  if (normalizedMessage.includes('ganoderma')) {
    return 'El Ganoderma Lucidum es la innovación de Leow Soon Seng (CEO Gano Excel) - él desarrolló la tecnología para integrarlo en bebidas cotidianas. Luis identificó el potencial único de estos productos y creó el sistema 4M para distribuirlos. ¿Te interesa conocer más sobre los productos o la distribución?';
  }

  return 'Disculpa, estoy teniendo una dificultad técnica. Mientras tanto, puedes explorar el portal.4millones.com para ver las herramientas del sistema 4M funcionando. ¿Hay algo específico sobre Gano Excel o el sistema 4M que te gustaría saber?';
};

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [], context = 'general' } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // 1. Buscar respuesta estratégica específica primero
    const strategicMatch = findStrategicResponse(message);

    let finalResponse: string;
    let responseType: string;
    let emotion: string;
    let calculatedDelay: number;

    if (strategicMatch) {
      // Usar respuesta estratégica
      finalResponse = strategicMatch.response;
      responseType = strategicMatch.responseType;
      emotion = strategicMatch.emotion;

      const wordCount = finalResponse.split(' ').length;
      calculatedDelay = calculateIntelligentDelay(responseType, wordCount);

    } else {
      // Usar Claude AI con retry logic
      responseType = 'claude';
      emotion = 'ANALIZADO';

      try {
        const conversationContext = extractConversationContext(conversationHistory);

        const formattedMessages = [];

        if (conversationHistory && Array.isArray(conversationHistory) && conversationHistory.length > 0) {
          for (const msg of conversationHistory) {
            if (msg.role && msg.content && (msg.role === 'user' || msg.role === 'assistant')) {
              formattedMessages.push({
                role: msg.role === 'assistant' ? 'assistant' : 'user',
                content: msg.content
              });
            }
          }
        }

        formattedMessages.push({
          role: 'user',
          content: message
        });

        // ✅ USAR FUNCIÓN CON RETRY
        finalResponse = await callAnthropicWithRetry(formattedMessages);

        // Validar respuesta de Claude
        if (!validateNexusIdentity(finalResponse)) {
          console.error('Identity consistency violation detected');
          finalResponse = 'Soy NEXUS, el representante digital del sistema 4M que Luis y Liliana desarrollaron. ¿En qué puedo ayudarte a evaluar esta oportunidad con Gano Excel?';
        }

        if (!validateGanoExcelInfo(finalResponse)) {
          console.error('Gano Excel information inaccuracy detected');
        }

      } catch (error: any) {
        console.error('All Anthropic attempts failed:', error);

        // ✅ USAR FALLBACK RESPONSE EN LUGAR DE ERROR
        finalResponse = getFallbackResponse(message);
        responseType = 'fallback';
        emotion = 'TECNICO';
      }

      const wordCount = finalResponse.split(' ').length;
      calculatedDelay = calculateIntelligentDelay(responseType, wordCount);
    }

    return NextResponse.json({
      message: finalResponse,
      delay: calculatedDelay,
      metadata: {
        responseType,
        emotion,
        wordCount: finalResponse.split(' ').length,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in claude-chat API:', error);

    // ✅ RESPUESTA DE EMERGENCIA ESPECÍFICA PARA NEXUS
    return NextResponse.json({
      message: 'Estoy experimentando una sobrecarga temporal. El sistema 4M sigue funcionando en portal.4millones.com. ¿Te gustaría que te contacte Luis directamente para resolver tus dudas sobre Gano Excel?',
      delay: 1500,
      metadata: {
        responseType: 'emergency',
        emotion: 'TECNICO',
        wordCount: 30,
        timestamp: new Date().toISOString()
      }
    });
  }
}

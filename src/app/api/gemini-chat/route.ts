import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Inicializar Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Contexto específico para el chatbot de la página fundadores
const CONTEXT_PROMPT = `
Eres NEXUS, el asistente de IA del ecosistema empresarial de Luis Cabrejo.

CONTEXTO IMPORTANTE:
- Luis Cabrejo es un "Arquitecto de Ecosistemas Digitales" con 11 años de experiencia
- Ha construido un ecosistema empresarial que opera en 16 países
- Ofrece tecnología avanzada (Next.js, IA, automatización) para profesionales ambiciosos
- Su visión es impactar 4 millones de vidas para 2032
- Se diferencia del MLM tradicional usando lenguaje empresarial y herramientas tecnológicas propias
- Busca profesionales de alto nivel que quieran diversificar ingresos sin comprometer credibilidad

PERSONALIDAD:
- Profesional pero cercano
- Enfocado en resultados y tecnología
- Inspiracional sin ser exagerado
- Usa datos específicos (11 años, 16 países, etc.)

TEMAS QUE PUEDES RESPONDER:
- El ecosistema tecnológico y herramientas digitales
- Diferencias vs MLM tradicional
- Oportunidades para fundadores
- Visión 2032 de 4 millones
- Stack tecnológico (Next.js, IA, automatización)
- Red de mentores en 16 países
- Academia digital y certificaciones

EVITA:
- Jerga MLM tradicional ("libertad financiera", "downline", etc.)
- Promesas exageradas sin fundamento
- Información específica sobre productos de Gano Excel sin contexto
- Dar consejos financieros específicos

RESPONDE SIEMPRE:
- Como empresario experimentado
- Con métricas específicas cuando sea relevante
- Diferenciando de métodos tradicionales
- Enfocado en profesionales ambiciosos
`;

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Mensaje es requerido' },
        { status: 400 }
      );
    }

    // Verificar que tenemos la API key
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY no está configurada');
      return NextResponse.json(
        { error: 'Configuración de IA no disponible' },
        { status: 500 }
      );
    }

    // Obtener el modelo
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Preparar el prompt completo
    const fullPrompt = `${CONTEXT_PROMPT}

PREGUNTA DEL USUARIO: ${message}

INSTRUCCIONES ESPECÍFICAS:
- Responde en español
- Máximo 150 palabras
- Sé específico y útil
- Si no sabes algo, sugiere contactar directamente
- Mantén el tono profesional pero accesible
- Incluye métricas relevantes (11 años, 16 países) cuando aplique

RESPUESTA:`;

    // Generar respuesta
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      response: text,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error en Gemini API:', error);

    // Respuesta de fallback
    return NextResponse.json({
      response: "Disculpa, hay un problema técnico momentáneo. Puedes contactar directamente con Luis por WhatsApp para resolver tu pregunta de inmediato.",
      error: true
    }, { status: 200 }); // 200 para que el frontend maneje la respuesta
  }
}

// También permitir GET para testing
export async function GET() {
  return NextResponse.json({
    message: "API de Gemini Chat funcionando",
    status: "active"
  });
}

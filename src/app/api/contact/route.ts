import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Debugging específico para Luis Cabrejo
function debugLog(message: string, data?: any) {
  const timestamp = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });
  console.log(`🔧 [${timestamp}] ${message}`, data || '');
}

// Inicializar Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  debugLog('🚀 INICIO - Procesando formulario luiscabrejo.com');

  try {
    // Verificar RESEND_API_KEY
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      debugLog('❌ ERROR - RESEND_API_KEY no configurada en variables de entorno');
      return NextResponse.json(
        { error: 'Configuración de email no disponible' },
        { status: 500 }
      );
    }
    debugLog('✅ RESEND_API_KEY encontrada correctamente');

    // Inicializar Resend
    const resend = new Resend(resendApiKey);
    debugLog('✅ Cliente Resend inicializado');

    // Parsear request body
    let formData;
    try {
      formData = await request.json();
      debugLog('✅ Datos del formulario recibidos', {
        name: formData.name,
        email: formData.email,
        hasPhone: !!formData.phone,
        hasCountry: !!formData.country,
        hasMessage: !!formData.message,
        formType: formData.formType
      });
    } catch (parseError) {
      debugLog('❌ ERROR - No se pudo parsear el JSON del request');
      return NextResponse.json(
        { error: 'Datos del formulario inválidos' },
        { status: 400 }
      );
    }

    const { name, email, phone, message, country, formType } = formData;

    // Validación de campos requeridos
    if (!name || !email) {
      debugLog('❌ ERROR - Campos requeridos faltantes', { name: !!name, email: !!email });
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      debugLog('❌ ERROR - Email inválido', { email });
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    debugLog('✅ Validaciones completadas exitosamente');

    // Email para Luis - AMBOS DESTINOS
    const emailToLuis = {
      from: 'Luis Cabrejo <send@luiscabrejo.com>',
      replyTo: email, // El reply va directo al usuario
      to: ['contacto@luiscabrejo.com', 'luiscabrejo7@gmail.com'], // AMBOS EMAILS
      subject: `💼 ${formType || 'Contacto'} desde luiscabrejo.com - ${name}`,
      text: `
🎯 NUEVO CONTACTO desde luiscabrejo.com

👤 DATOS DEL CONTACTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
País: ${country || 'No proporcionado'}
Tipo de Interés: ${formType || 'Contacto General'}

💬 MENSAJE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message || 'El usuario no incluyó un mensaje específico.'}

📊 INFORMACIÓN ADICIONAL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Fecha/Hora: ${new Date().toLocaleString('es-CO', {
  timeZone: 'America/Bogota',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
Zona Horaria: Colombia (UTC-5)
Origen: luiscabrejo.com
ID del mensaje: ${Date.now()}

💡 INSTRUCCIONES PARA RESPONDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Responder desde: contacto@luiscabrejo.com
• Email del interesado: ${email}
• Tiempo de respuesta: Máximo 24 horas
• Tipo de consulta: ${formType || 'Contacto General'}

Para responder, simplemente responde a este email.

---
Sistema automático de notificaciones
Arquitecto de Ecosistemas Digitales
      `
    };

    // Email para el usuario - Más personal
    const emailToUser = {
      from: 'Luis Cabrejo <send@luiscabrejo.com>',
      replyTo: 'contacto@luiscabrejo.com',
      to: email,
      subject: '✅ Mensaje recibido - Te responderé en 24 horas',
      text: `
Hola ${name},

✅ He recibido tu mensaje correctamente y quiero agradecerte por tomarte el tiempo de contactarme.

🕐 TIEMPO DE RESPUESTA:
Me pondré en contacto contigo personalmente en las próximas 24 horas. Suelo responder más rápido, pero quiero darte un tiempo realista.

🌟 MIENTRAS ESPERAS, puedes explorar:

📖 Mi Historia Completa:
https://luiscabrejo.com/historia
→ Cómo pasé de la quiebra total a construir un activo empresarial en 16 países

🛠️ El Ecosistema Digital:
https://luiscabrejo.com/ecosistema
→ Las herramientas tecnológicas que desarrollo con Next.js e IA

🎯 La Visión 4 Millones:
https://luiscabrejo.com/vision
→ El plan 2025-2032 para transformar 4 millones de vidas

💡 RECORDATORIO de tu consulta:
"${message || `Interesado en ${formType || 'conocer más sobre el ecosistema digital'}`}"

Un abrazo desde Villavicencio,

Luis Cabrejo
Arquitecto de Ecosistemas Digitales
11 años como Diamante | 16 países | +2,847 vidas transformadas

---
"No busco protagonismo - busco transformar 4 millones de vidas"

📧 contacto@luiscabrejo.com
🌐 luiscabrejo.com
      `
    };

    debugLog('✅ Emails preparados para envío a ambos destinos');

    // Enviar email a Luis (prioritario) - AMBOS DESTINOS
    debugLog('📤 Enviando notificación a contacto@luiscabrejo.com y luiscabrejo7@gmail.com...');
    const emailToLuisResult = await resend.emails.send(emailToLuis);

    if (emailToLuisResult.error) {
      debugLog('❌ ERROR enviando email a Luis', emailToLuisResult.error);
      throw new Error(`Error notificando a Luis: ${JSON.stringify(emailToLuisResult.error)}`);
    }

    debugLog('✅ Email a Luis enviado exitosamente a ambos destinos', { id: emailToLuisResult.data?.id });

    // Enviar confirmación al usuario (secundario)
    debugLog('📤 Enviando confirmación al usuario...');
    let userEmailId = null;
    try {
      const emailToUserResult = await resend.emails.send(emailToUser);
      if (emailToUserResult.error) {
        debugLog('⚠️ Error enviando confirmación al usuario (no crítico)', emailToUserResult.error);
      } else {
        userEmailId = emailToUserResult.data?.id;
        debugLog('✅ Confirmación al usuario enviada', { id: userEmailId });
      }
    } catch (userEmailError) {
      debugLog('⚠️ Error en confirmación al usuario (continuando...)', userEmailError);
    }

    // Guardar contacto en Supabase
    debugLog('💾 Guardando contacto en Supabase...');
    try {
      const { data: contactData, error: supabaseError } = await supabase
        .from('contacts_luiscabrejo')
        .insert({
          name,
          email,
          phone: phone || null,
          country: country || null,
          message: message || null,
          form_type: formType || 'Contacto General',
          source: 'luiscabrejo.com',
          email_sent_to_luis: emailToLuisResult.data?.id || null,
          email_sent_to_user: userEmailId,
          created_at: new Date().toISOString()
        })
        .select()
        .single();

      if (supabaseError) {
        debugLog('⚠️ Error guardando en Supabase (no crítico)', supabaseError);
      } else {
        debugLog('✅ Contacto guardado en Supabase', { id: contactData?.id });
      }
    } catch (supabaseError) {
      debugLog('⚠️ Error en Supabase (continuando...)', supabaseError);
    }

    // Respuesta exitosa
    const successResponse = {
      success: true,
      message: 'Tu mensaje ha sido enviado exitosamente',
      data: {
        timestamp: new Date().toISOString(),
        emailsSent: {
          toLuis: emailToLuisResult.data?.id || null,
          toUser: userEmailId,
          destinations: ['contacto@luiscabrejo.com', 'luiscabrejo7@gmail.com']
        },
        nextSteps: 'Luis te responderá desde contacto@luiscabrejo.com en las próximas 24 horas'
      }
    };

    debugLog('🎉 ÉXITO - Formulario procesado completamente', successResponse);
    return NextResponse.json(successResponse);

  } catch (error) {
    debugLog('💥 ERROR CRÍTICO en la API route', {
      error: error instanceof Error ? error.message : 'Error desconocido',
      stack: error instanceof Error ? error.stack : undefined
    });

    return NextResponse.json(
      {
        success: false,
        error: 'Error interno del servidor',
        message: 'Hubo un problema enviando tu mensaje. Por favor, inténtalo de nuevo.',
        fallback: 'Puedes escribir directamente a contacto@luiscabrejo.com',
        debug: process.env.NODE_ENV === 'development' ? {
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        } : undefined
      },
      { status: 500 }
    );
  }
}

// GET para verificar que la API está funcionando
export async function GET() {
  debugLog('📋 GET request recibido - Verificación de estado');

  return NextResponse.json({
    status: 'API Contact funcionando correctamente',
    service: 'luiscabrejo.com contact form',
    emailDestinations: ['contacto@luiscabrejo.com', 'luiscabrejo7@gmail.com'],
    timestamp: new Date().toISOString(),
    timezone: 'America/Bogota',
    environment: process.env.NODE_ENV,
    resendConfigured: !!process.env.RESEND_API_KEY,
    version: '2.1',
    author: 'Luis Cabrejo - Arquitecto de Ecosistemas Digitales'
  });
}

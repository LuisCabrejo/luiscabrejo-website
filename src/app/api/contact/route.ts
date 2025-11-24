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

    // Email para Luis - AMBOS DESTINOS - HTML profesional
    const emailToLuis = {
      from: 'Luis Cabrejo <contacto@creatuactivo.com>',
      replyTo: email, // El reply va directo al usuario
      to: ['luiscabrejo@creatuactivo.com', 'luiscabrejo7@gmail.com'], // AMBOS EMAILS
      subject: `💼 ${formType || 'Contacto'} desde luiscabrejo.com - ${name}`,
      html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Contacto - luiscabrejo.com</title>
  <style>
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding: 16px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0f172a;">

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0f172a;">
    <tr>
      <td align="center" style="padding: 20px 10px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">

          <!-- HEADER -->
          <tr>
            <td style="background-color: #0f172a; padding: 30px 20px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 26px; font-weight: 700;">
                📬 Nuevo Contacto desde luiscabrejo.com
              </h1>
              <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">
                ${formType || 'Contacto General'}
              </p>
            </td>
          </tr>

          <!-- CONTENIDO -->
          <tr>
            <td style="background-color: #1e293b; padding: 30px 20px;">

              <!-- Card Púrpura - Datos del Usuario -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="background-color: rgba(124, 58, 237, 0.1); border: 1px solid rgba(124, 58, 237, 0.2); border-radius: 12px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 14px; color: #a78bfa; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      👤 DATOS DEL CONTACTO
                    </p>
                    <p style="margin: 0 0 10px; color: #e2e8f0; font-size: 15px;">
                      <strong style="color: #F59E0B;">Nombre:</strong> ${name}
                    </p>
                    <p style="margin: 0 0 10px; color: #e2e8f0; font-size: 15px;">
                      <strong style="color: #F59E0B;">Email:</strong> <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
                    </p>
                    ${phone ? `<p style="margin: 0 0 10px; color: #e2e8f0; font-size: 15px;">
                      <strong style="color: #F59E0B;">Teléfono:</strong> ${phone}
                    </p>` : ''}
                    ${country ? `<p style="margin: 0; color: #e2e8f0; font-size: 15px;">
                      <strong style="color: #F59E0B;">País:</strong> ${country}
                    </p>` : ''}
                  </td>
                </tr>
              </table>

              <!-- Card Azul - Mensaje del Usuario -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="background-color: rgba(30, 64, 175, 0.1); border: 1px solid rgba(30, 64, 175, 0.2); border-radius: 12px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 12px; color: #60a5fa; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      💬 MENSAJE
                    </p>
                    <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 24px; white-space: pre-wrap;">${message || 'El usuario no incluyó un mensaje específico.'}</p>
                  </td>
                </tr>
              </table>

              <!-- Card Dorado - Instrucciones -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="background-color: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <p style="margin: 0 0 12px; color: #fbbf24; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      💡 INSTRUCCIONES
                    </p>
                    <p style="margin: 0 0 8px; color: #e2e8f0; font-size: 14px;">
                      • <strong>Responder desde:</strong> luiscabrejo@creatuactivo.com
                    </p>
                    <p style="margin: 0 0 8px; color: #e2e8f0; font-size: 14px;">
                      • <strong>Tiempo de respuesta:</strong> Máximo 24 horas
                    </p>
                    <p style="margin: 0; color: #94a3b8; font-size: 13px; font-style: italic;">
                      Para responder, simplemente responde a este email.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #0f172a; padding: 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="margin: 0 0 6px; color: #94a3b8; font-size: 12px;">
                ${new Date().toLocaleString('es-CO', {
                  timeZone: 'America/Bogota',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })} (Colombia, UTC-5)
              </p>
              <p style="margin: 0; color: #64748b; font-size: 11px;">
                Sistema automático de notificaciones | CreaTuActivo.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
      `
    };

    // Email para el usuario - HTML profesional con diseño CreaTuActivo
    const emailToUser = {
      from: 'Luis Cabrejo <contacto@creatuactivo.com>',
      replyTo: 'luiscabrejo@creatuactivo.com',
      to: email,
      subject: '✅ Recibí tu mensaje - Te responderé pronto',
      html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mensaje Recibido</title>
  <style>
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding: 16px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0f172a;">

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0f172a;">
    <tr>
      <td align="center" style="padding: 20px 10px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">

          <!-- HEADER -->
          <tr>
            <td style="background-color: #0f172a; padding: 30px 20px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 28px; font-weight: 700;">
                ¡Gracias, ${name}!
              </h1>
            </td>
          </tr>

          <!-- CONTENIDO -->
          <tr>
            <td style="background-color: #1e293b; padding: 40px 20px;">

              <!-- Card de éxito -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="background-color: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 28px 20px; text-align: center;">
                    <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
                    <h2 style="margin: 0 0 12px; color: #22c55e; font-size: 22px; font-weight: 600;">
                      Recibí tu mensaje
                    </h2>
                    <p style="margin: 0; color: #94a3b8; font-size: 15px;">
                      Te responderé personalmente en menos de 24 horas
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Párrafos -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 0 10px;">
                    <p style="margin: 0 0 16px; color: #e2e8f0; font-size: 16px; line-height: 26px;">
                      Hola ${name},
                    </p>
                    <p style="margin: 0 0 16px; color: #e2e8f0; font-size: 16px; line-height: 26px;">
                      Gracias por tomarte el tiempo de contactarme. He recibido tu mensaje y lo revisaré personalmente.
                    </p>
                    <p style="margin: 0; color: #e2e8f0; font-size: 16px; line-height: 26px;">
                      Mientras tanto, te invito a explorar el ecosistema completo:
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Card Púrpura - RECOMENDADO -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="background-color: rgba(124, 58, 237, 0.1); border: 1px solid rgba(124, 58, 237, 0.2); border-radius: 12px; margin-bottom: 16px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 8px; color: #a78bfa; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      🚀 RECOMENDADO
                    </p>
                    <h3 style="margin: 0 0 8px; color: #FFFFFF; font-size: 18px; font-weight: 600;">
                      <a href="https://creatuactivo.com/ecosistema" style="color: #FFFFFF; text-decoration: none;">
                        Conoce CreaTuActivo.com →
                      </a>
                    </h3>
                    <p style="margin: 0; color: #94a3b8; font-size: 14px; line-height: 22px;">
                      La plataforma tecnológica completa con IA y automatización. Así funciona el activo empresarial que construimos en 16 países.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Card Azul - Mi Historia -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="background-color: rgba(30, 64, 175, 0.1); border: 1px solid rgba(30, 64, 175, 0.2); border-radius: 12px; margin-bottom: 16px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <h3 style="margin: 0 0 6px; color: #FFFFFF; font-size: 16px; font-weight: 600;">
                      <a href="https://luiscabrejo.com/historia" style="color: #FFFFFF; text-decoration: none;">
                        📖 Mi Historia Completa →
                      </a>
                    </h3>
                    <p style="margin: 0; color: #94a3b8; font-size: 14px;">
                      De la quiebra total a un activo empresarial en América
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Card Azul - Visión 4 Millones -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="background-color: rgba(30, 64, 175, 0.1); border: 1px solid rgba(30, 64, 175, 0.2); border-radius: 12px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <h3 style="margin: 0 0 6px; color: #FFFFFF; font-size: 16px; font-weight: 600;">
                      <a href="https://luiscabrejo.com/vision" style="color: #FFFFFF; text-decoration: none;">
                        🎯 La Visión 4 Millones →
                      </a>
                    </h3>
                    <p style="margin: 0; color: #94a3b8; font-size: 14px;">
                      El plan 2025-2032 para transformar 4 millones de vidas
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #0f172a; padding: 24px 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="margin: 0 0 8px; color: #94a3b8; font-size: 14px;">
                Luis Cabrejo
              </p>
              <p style="margin: 0 0 4px; color: #64748b; font-size: 12px;">
                Co-Fundador CreaTuActivo.com
              </p>
              <p style="margin: 0 0 16px; color: #64748b; font-size: 12px;">
                11 años Diamante Gano Excel | 16 países | +2,847 vidas transformadas
              </p>
              <p style="margin: 0; color: #64748b; font-size: 11px; line-height: 18px;">
                © 2025 CreaTuActivo.com<br>
                El primer ecosistema tecnológico para construcción de activos en América
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
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
          destinations: ['luiscabrejo@creatuactivo.com', 'luiscabrejo7@gmail.com']
        },
        nextSteps: 'Luis te responderá desde luiscabrejo@creatuactivo.com en las próximas 24 horas'
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
        fallback: 'Puedes escribir directamente a luiscabrejo@creatuactivo.com',
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
    emailDestinations: ['luiscabrejo@creatuactivo.com', 'luiscabrejo7@gmail.com'],
    timestamp: new Date().toISOString(),
    timezone: 'America/Bogota',
    environment: process.env.NODE_ENV,
    resendConfigured: !!process.env.RESEND_API_KEY,
    version: '2.1',
    author: 'Luis Cabrejo - Arquitecto de Ecosistemas Digitales'
  });
}

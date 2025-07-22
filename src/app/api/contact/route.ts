import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, country, formType } = body;

    // Validación básica
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      );
    }

    // Email simple a Luis
    const emailToLuis = {
      from: 'Luis Cabrejo <send@luiscabrejo.com>',
      replyTo: 'contacto@luiscabrejo.com',
      to: 'luiscabrejo7@gmail.com',
      subject: `Nuevo contacto desde luiscabrejo.com - ${name}`,
      html: `
        <h2>Nuevo Contacto desde luiscabrejo.com</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
        ${country ? `<p><strong>País:</strong> ${country}</p>` : ''}
        ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ''}
        <p><strong>Formulario:</strong> ${formType || 'Contacto General'}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}</p>
      `,
    };

    // Email simple al usuario
    const emailToUser = {
      from: 'Luis Cabrejo <send@luiscabrejo.com>',
      replyTo: 'contacto@luiscabrejo.com',
      to: email,
      subject: 'Gracias por conectar conmigo - Luis Cabrejo',
      html: `
        <h2>¡Gracias por conectar conmigo!</h2>
        <p>Hola ${name},</p>
        <p>Gracias por tu interés en conocer más sobre los ecosistemas digitales que estoy construyendo.</p>
        <p>He recibido tu mensaje y me pondré en contacto contigo en las próximas 24 horas.</p>
        <p>Mientras tanto, puedes explorar mi sitio web: <a href="https://luiscabrejo.com">luiscabrejo.com</a></p>
        <br>
        <p><strong>Luis Cabrejo</strong><br>
        Arquitecto de Ecosistemas Digitales<br>
        Transformando vidas desde 2013</p>
      `,
    };

    // Enviar ambos emails
    const [emailToLuisResult, emailToUserResult] = await Promise.all([
      resend.emails.send(emailToLuis),
      resend.emails.send(emailToUser),
    ]);

    console.log('Emails enviados:', { emailToLuisResult, emailToUserResult });

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado correctamente',
      emailIds: {
        toLuis: emailToLuisResult.data?.id,
        toUser: emailToUserResult.data?.id,
      },
    });

  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      {
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

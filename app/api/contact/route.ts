import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmails } from '@/lib/email';

// Validación básica de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validaciones
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'El nombre es requerido y debe tener al menos 2 caracteres' },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Por favor, proporciona un email válido' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'El mensaje debe tener al menos 10 caracteres' },
        { status: 400 }
      );
    }

    // Sanitizar datos
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    };

    // Enviar emails
    const result = await sendContactEmails(sanitizedData);

    if (!result.success) {
      console.error('Error sending contact emails:', result.error);
      return NextResponse.json(
        { error: 'Error al enviar el mensaje. Por favor, intenta de nuevo.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente. Te hemos enviado una confirmación a tu email.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

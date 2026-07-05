import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/email';

const EMAIL_PREVIEW = process.env.EMAIL_PREVIEW === 'true';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, country, budget, comments } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'El nombre es requerido' }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    const adminEmail = `
      <h2>Nueva solicitud de distribuidor - Zi0n</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>País:</strong> ${country || 'No especificado'}</p>
      <p><strong>Presupuesto:</strong> ${budget || 'No especificado'}</p>
      <p><strong>Comentarios:</strong> ${comments || 'Sin comentarios'}</p>
    `;

    const clientEmail = `
      <h2>Hola ${name},</h2>
      <p>Hemos recibido tu solicitud para ser distribuidor de Zi0n Crypto.</p>
      <p>Nuestro equipo se pondrá en contacto contigo pronto para darte más información.</p>
      <br/>
      <p>El equipo de Zi0n</p>
    `;

    // Preview mode: return HTML emails without sending
    if (EMAIL_PREVIEW) {
      console.log('[EMAIL PREVIEW] Admin email:', adminEmail);
      console.log('[EMAIL PREVIEW] Client email:', clientEmail);
      return NextResponse.json({
        success: true,
        preview: true,
        emails: {
          admin: {
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER || 'admin@zi0n.io',
            subject: `[Zi0n] Solicitud de distribuidor - ${name}`,
            html: adminEmail,
          },
          client: {
            to: email,
            subject: 'Recibimos tu solicitud - Zi0n Crypto',
            html: clientEmail,
          },
        },
      }, { status: 200 });
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `[Zi0n] Solicitud de distribuidor - ${name}`,
      html: adminEmail,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Recibimos tu solicitud - Zi0n Crypto',
      html: clientEmail,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Distribution form error:', error);
    return NextResponse.json({ error: 'Error al enviar la solicitud' }, { status: 500 });
  }
}

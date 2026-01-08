import nodemailer from 'nodemailer';

// Configuración del transporter SMTP para Gmail
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Verificar conexión SMTP
export async function verifyConnection() {
  try {
    await transporter.verify();
    console.log('SMTP connection verified');
    return true;
  } catch (error) {
    console.error('SMTP connection error:', error);
    return false;
  }
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Plantilla HTML para el cliente (confirmación)
export function getClientEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gracias por contactarnos - Zi0n</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f8fc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">
          <!-- Header con logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #071C59 0%, #0a2a7a 100%); padding: 40px 30px; border-radius: 20px 20px 0 0; text-align: center;">
              <img src="https://zi0n.io/logos/logo-claro.svg" alt="Zi0n" style="height: 50px; margin-bottom: 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">¡Gracias por contactarnos!</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 15px 0 0 0; font-size: 16px;">Hemos recibido tu mensaje</p>
            </td>
          </tr>
          
          <!-- Contenido principal -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px 30px;">
              <p style="color: #071C59; font-size: 18px; margin: 0 0 20px 0;">
                Hola <strong>${data.name}</strong>,
              </p>
              <p style="color: #6E6E6E; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nuestro equipo lo revisará a la brevedad.
              </p>
              
              <!-- Resumen del mensaje -->
              <div style="background-color: #f5f8fc; border-radius: 16px; padding: 25px; margin: 25px 0;">
                <h3 style="color: #071C59; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">
                  📋 Resumen de tu mensaje:
                </h3>
                <p style="color: #6E6E6E; font-size: 14px; line-height: 1.6; margin: 0; padding: 15px; background-color: #ffffff; border-radius: 12px; border-left: 4px solid #5EEC7D;">
                  "${data.message}"
                </p>
              </div>
              
              <p style="color: #6E6E6E; font-size: 16px; line-height: 1.6; margin: 25px 0 0 0;">
                Te responderemos lo antes posible. Mientras tanto, si tienes alguna pregunta urgente, puedes contactarnos directamente en:
              </p>
              
              <!-- Información de contacto -->
              <div style="margin: 25px 0; padding: 20px; background: linear-gradient(135deg, #071C59 0%, #0a2a7a 100%); border-radius: 16px;">
                <table role="presentation" style="width: 100%;">
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #5EEC7D; font-size: 14px;">📧 Email:</span>
                      <a href="mailto:Contact@Zi0n.io" style="color: #ffffff; text-decoration: none; font-size: 14px; margin-left: 10px;">Contact@Zi0n.io</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #5EEC7D; font-size: 14px;">📞 Teléfono:</span>
                      <a href="tel:+573009291110" style="color: #ffffff; text-decoration: none; font-size: 14px; margin-left: 10px;">+57 300 929 1110</a>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #071C59; padding: 30px; border-radius: 0 0 20px 20px; text-align: center;">
              <p style="color: rgba(255,255,255,0.6); font-size: 12px; margin: 0 0 10px 0;">
                © ${new Date().getFullYear()} Zi0n - Advanced Mobile Security
              </p>
              <p style="color: rgba(255,255,255,0.6); font-size: 12px; margin: 0;">
                Hecho con seguridad en mente 🛡️
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Plantilla HTML para administradores (notificación)
export function getAdminEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje de contacto - Zi0n</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f8fc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">
          <!-- Header con logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #071C59 0%, #0a2a7a 100%); padding: 40px 30px; border-radius: 20px 20px 0 0; text-align: center;">
              <img src="https://zi0n.io/logos/logo-claro.svg" alt="Zi0n" style="height: 50px; margin-bottom: 20px;">
              <div style="display: inline-block; background-color: #5EEC7D; color: #071C59; padding: 8px 20px; border-radius: 50px; font-size: 14px; font-weight: 600; margin-bottom: 15px;">
                📬 Nuevo Mensaje
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Nuevo mensaje de contacto</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0 0; font-size: 14px;">
                ${new Date().toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' })}
              </p>
            </td>
          </tr>
          
          <!-- Contenido principal -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px 30px;">
              <!-- Datos del remitente -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #071C59; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5f8fc;">
                  👤 Datos del remitente
                </h2>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f5f8fc; border-radius: 12px; margin-bottom: 10px;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="width: 100px; color: #6E6E6E; font-size: 14px; font-weight: 600;">Nombre:</td>
                          <td style="color: #071C59; font-size: 16px; font-weight: 500;">${data.name}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr><td style="height: 10px;"></td></tr>
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f5f8fc; border-radius: 12px;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="width: 100px; color: #6E6E6E; font-size: 14px; font-weight: 600;">Email:</td>
                          <td>
                            <a href="mailto:${data.email}" style="color: #003FFF; font-size: 16px; text-decoration: none;">${data.email}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Mensaje -->
              <div>
                <h2 style="color: #071C59; font-size: 18px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #f5f8fc;">
                  💬 Mensaje
                </h2>
                <div style="background: linear-gradient(135deg, #f5f8fc 0%, #e8eef7 100%); border-radius: 16px; padding: 25px; border-left: 4px solid #5EEC7D;">
                  <p style="color: #071C59; font-size: 16px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>
              
              <!-- Botón de respuesta -->
              <div style="text-align: center; margin-top: 35px;">
                <a href="mailto:${data.email}?subject=Re: Contacto desde Zi0n.io" 
                   style="display: inline-block; background-color: #5EEC7D; color: #071C59; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-size: 16px; font-weight: 600;">
                  ✉️ Responder a ${data.name}
                </a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #071C59; padding: 25px 30px; border-radius: 0 0 20px 20px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="text-align: center;">
                    <p style="color: rgba(255,255,255,0.6); font-size: 12px; margin: 0 0 5px 0;">
                      Este correo fue enviado desde el formulario de contacto de
                    </p>
                    <a href="https://zi0n.io" style="color: #5EEC7D; font-size: 14px; text-decoration: none; font-weight: 600;">
                      zi0n.io
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Función principal para enviar emails de contacto
export async function sendContactEmails(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Enviar email al administrador
    await transporter.sendMail({
      from: `"Zi0n Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // contact@zi0n.io
      replyTo: data.email,
      subject: `📬 Nuevo mensaje de contacto de ${data.name}`,
      html: getAdminEmailTemplate(data),
    });

    // Enviar email de confirmación al cliente
    await transporter.sendMail({
      from: `"Zi0n Security" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: '✅ Hemos recibido tu mensaje - Zi0n',
      html: getClientEmailTemplate(data),
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending emails:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Error al enviar los correos' 
    };
  }
}

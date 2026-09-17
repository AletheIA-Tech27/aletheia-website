import { getEmailProvider } from './provider';
import { siteConfig } from '@/config/site.config';

interface SendLeadResult {
  ok: boolean;
  id?: string;
  error?: string;
}

function buildLeadEmailHtml(data: { name: string; email: string; phone: string; businessType: string; message: string }): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 24px;">
  <div style="background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); padding: 24px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">Nuevo Lead - ${siteConfig.name}</h1>
  </div>
  <div style="background: #FAFAFA; padding: 24px; border: 1px solid #E5E5E5; border-top: none; border-radius: 0 0 12px 12px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #374151; width: 120px;">Nombre:</td>
        <td style="padding: 12px 0; color: #111827;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #374151;">Email:</td>
        <td style="padding: 12px 0; color: #111827;">${data.email}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #374151;">Teléfono:</td>
        <td style="padding: 12px 0; color: #111827;">${data.phone}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #374151;">Tipo de negocio:</td>
        <td style="padding: 12px 0; color: #111827;">${data.businessType}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Mensaje:</td>
        <td style="padding: 12px 0; color: #111827; white-space: pre-wrap;">${data.message}</td>
      </tr>
    </table>
    <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 24px 0;">
    <p style="font-size: 12px; color: #6B7280; margin: 0;">
      Enviado desde el formulario de contacto de <strong>${siteConfig.name}</strong> (${siteConfig.url})
    </p>
  </div>
</body>
</html>
  `.trim();
}

function buildLeadEmailText(data: { name: string; email: string; phone: string; businessType: string; message: string }): string {
  return `
Nuevo Lead - ${siteConfig.name}

Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone}
Tipo de negocio: ${data.businessType}
Mensaje:
${data.message}

---
Enviado desde el formulario de contacto de ${siteConfig.name} (${siteConfig.url})
  `.trim();
}

export async function sendLeadEmail(data: {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}): Promise<SendLeadResult> {
  const destinationEmail = process.env.LEAD_DESTINATION_EMAIL;

  if (!destinationEmail) {
    console.error('[sendLeadEmail] LEAD_DESTINATION_EMAIL no configurado');
    return {
      ok: false,
      error: 'Configuración de email de destino faltante. Contacta al administrador.',
    };
  }

  const subject = `Nuevo contacto desde ${siteConfig.name} - ${data.name}`;
  const html = buildLeadEmailHtml(data);
  const text = buildLeadEmailText(data);

  try {
    const provider = await getEmailProvider();
    const result = await provider.send({
      to: destinationEmail,
      subject,
      html,
      text,
    });

    return { ok: true, id: result.id };
  } catch (error) {
    console.error('[sendLeadEmail] Error enviando email:', error);
    return {
      ok: false,
      error: 'Error al enviar el mensaje. Intenta de nuevo más tarde.',
    };
  }
}
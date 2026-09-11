import { Resend } from 'resend';
import { EmailProvider, EmailPayload, EmailResult } from '../provider';

let resendClient: Resend | null = null;

function getResendClient() {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export class ResendProvider implements EmailProvider {
  async send(payload: EmailPayload): Promise<EmailResult> {
    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from: 'AletheIA <noreply@aletheia.local>',
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
    });

    if (error) {
      throw new Error(`Resend error: ${error.message}`);
    }

    return {
      id: data?.id ?? 'unknown',
      provider: 'resend',
    };
  }
}
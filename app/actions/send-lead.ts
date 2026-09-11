'use server';

import { leadSchema, type LeadInput } from '@/lib/validations/lead.schema';
import { sendLeadEmail } from '@/lib/email/send-lead';

export async function sendLeadAction(data: LeadInput): Promise<{ ok: boolean; message: string }> {
  const parseResult = leadSchema.safeParse(data);

  if (!parseResult.success) {
    const firstError = parseResult.error.errors[0];
    return { ok: false, message: firstError?.message ?? 'Error de validación' };
  }

  const validated = parseResult.data;

  if (validated.website && validated.website.length > 0) {
    return { ok: false, message: 'Detección de spam. Intenta de nuevo.' };
  }

  const result = await sendLeadEmail({
    name: validated.name,
    email: validated.email,
    phone: validated.phone,
    message: validated.message,
  });

  if (!result.ok) {
    return { ok: false, message: result.error ?? 'Error al enviar el mensaje. Intenta de nuevo más tarde.' };
  }

  return { ok: true, message: 'Mensaje enviado correctamente.' };
}
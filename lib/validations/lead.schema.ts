import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  phone: z.string().min(8, 'Ingresa un teléfono válido').max(20),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
  // Honeypot anti-spam: debe venir vacío
  website: z.string().max(0, 'Detección de spam. Intenta de nuevo.').optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
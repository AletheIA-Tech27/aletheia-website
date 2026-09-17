'use client';

import { useState, useTransition } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadSchema, type LeadInput } from '@/lib/validations/lead.schema';
import { sendLeadAction } from '@/app/actions/send-lead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle, Loader2, Mail, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';

export default function LeadForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      businessType: '',
      website: '',
    },
  });

  const onSubmit = async (data: LeadInput) => {
    startTransition(async () => {
      const result = await sendLeadAction(data);

      if (result.ok) {
        toast({
          variant: 'success',
          title: '¡Mensaje enviado!',
          description: 'Te contactaremos en menos de 24 horas.',
        });
        reset();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error al enviar',
          description: result.message,
        });
      }
    });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;

    const [headerRef, headerVisible] = useScrollReveal();

  return (
    <div className="max-w-2xl mx-auto">
      <div
        ref={headerRef}
        className={`text-center mb-8 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
          Solicita tu presupuesto
        </h2>
        <p className="text-lg text-brand-ink-muted">
          Cuéntanos qué necesitas y te responderemos con una propuesta personalizada
        </p>
      </div>

      {showSuccess && (
        <div
          className="mb-8 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 animate-in slide-in-from-top-2 duration-300"
          role="alert"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="font-medium">¡Gracias por contactarnos!</p>
              <p className="text-sm">Hemos recibido tu mensaje y te responderemos pronto.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              placeholder="Juan Pérez"
              {...register('name')}
              disabled={isSubmitting}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="juan@ejemplo.com"
              {...register('email')}
              disabled={isSubmitting}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+52 55 1234 5678"
            {...register('phone')}
            disabled={isSubmitting}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-destructive" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="businessType">Tipo de negocio *</Label>
          <Controller
            control={control}
            name="businessType"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value} defaultValue="">
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu sector" />
                </SelectTrigger>
                <SelectContent>
                  {siteConfig.nichos?.map((nicho) => (
                    <SelectItem key={nicho.id} value={nicho.label}>
                      {nicho.label}
                    </SelectItem>
                  ))}
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.businessType && (
            <p id="businessType-error" className="text-sm text-destructive" role="alert">
              {errors.businessType.message}
            </p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            placeholder="Describe tu proyecto, necesidad o duda..."
            rows={5}
            {...register('message')}
            disabled={isSubmitting}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              {...register('consent')}
              disabled={isSubmitting}
              className="mt-1 h-4 w-4 rounded border-border text-brand-accent focus:ring-brand-accent focus:ring-2"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
            />
            <Label htmlFor="consent" className="text-sm text-brand-ink-muted cursor-pointer leading-relaxed mt-0.5">
              He leído y acepto la <a href="/aviso-privacidad" className="underline hover:text-brand-accent" target="_blank" rel="noopener">política de privacidad</a> y autorizo el tratamiento de mis datos para responder a mi solicitud. *
            </Label>
          </div>
          {errors.consent && (
            <p id="consent-error" className="text-sm text-destructive ml-7" role="alert">
              {errors.consent.message}
            </p>
          )}
        </div>

        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: 'none' }}
          aria-hidden="true"
          {...register('website')}
        />
        {errors.website && (
  <p
    style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}
    role="alert"
  >
    {errors.website.message}
  </p>
)}
        <Button
          type="submit"
          className="w-full"
          size="lg"
          loading={isSubmitting || isPending}
          disabled={isSubmitting || isPending}
        >
          {isSubmitting || isPending ? (
            <>
              <Loader2 className="h-5 w-5" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            <>
              <Mail className="h-5 w-5" aria-hidden="true" />
              Enviar mensaje
            </>
          )}
        </Button>

               <p className="text-center text-sm text-brand-ink-muted">
          ¿Prefieres contacto directo?{' '}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-accent hover:underline flex items-center justify-center gap-1 inline-flex">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Escríbenos por WhatsApp
          </a>
          {' '}o{' '}
          <a href={`tel:${siteConfig.phone}`} className="font-medium text-brand-accent hover:underline flex items-center justify-center gap-1 inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llámanos
          </a>
        </p>
      </form>

      <div
        className="mt-8 p-4 rounded-lg bg-muted/50 border border-border"
        role="contentinfo"
      >
        <p className="text-sm text-brand-ink-muted text-center">
          <strong>Aviso de privacidad:</strong>{' '}
          Tus datos se usan únicamente para responder a tu solicitud. No se comparten con terceros ni se usan para marketing sin tu consentimiento explícito.
          {' '}
          <a href="/aviso-privacidad" target="_blank" rel="noopener" className="underline hover:text-brand-accent">
            Ver aviso completo
          </a>
        </p>
      </div>
    </div>
  );
}
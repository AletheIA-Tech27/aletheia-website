import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageCircle, CheckCircle } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;
  const phoneUrl = `tel:${siteConfig.phone}`;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36" aria-labelledby="hero-heading">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent-soft text-brand-accent text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Disponible para nuevos proyectos
          </span>

          <h1
            id="hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-ink tracking-tight text-balance mb-6"
          >
            {siteConfig.name}
          </h1>

          <p className="text-lg sm:text-xl text-brand-ink-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="xl"
              className="group w-full sm:w-auto gap-3"
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Contactar por WhatsApp
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="w-full sm:w-auto gap-2 border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white"
            >
              <Link href={phoneUrl}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Llamar ahora
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-ink-muted">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" aria-hidden="true" />
              <span>Presupuesto sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" aria-hidden="true" />
              <span>Respuesta en {'<'} 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" aria-hidden="true" />
              <span>Garantía por escrito</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" aria-hidden="true" />
    </section>
  );
}
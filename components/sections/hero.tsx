'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;
  const phoneUrl = `tel:${siteConfig.phone}`;
  const [contentRef, contentVisible] = useScrollReveal();

  return (
    <section className="relative overflow-hidden hero-grid-bg" aria-labelledby="hero-heading">
      <div className="min-h-screen flex items-center pt-16 sm:pt-20 lg:pt-24 pb-8">
      <div className="container-narrow">
        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Disponible para nuevos proyectos
          </span>

          <h1
            id="hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance mb-6"
          >
            Sitios web que convierten visitantes en clientes para tu negocio local
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
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
              className="w-full sm:w-auto gap-2 bg-transparent border-white/30 text-white hover:bg-white hover:text-brand-ink"
            >
              <Link href={phoneUrl}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Llamar ahora
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
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
              <span>Garantí­a por escrito</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Espacio reservado debajo del pliegue para el fade */}
      <div className="h-28 sm:h-32 lg:h-36" aria-hidden="true" />

      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 z-10" aria-hidden="true" />
      {/* Fade to white transition for next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 sm:h-32 lg:h-36 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, white 75%)' }}
        aria-hidden="true"
      />
    </section>
  );
}

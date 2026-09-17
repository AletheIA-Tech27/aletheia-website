'use client';

import { siteConfig } from '@/config/site.config';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';

const pricingTiers = siteConfig.pricing ?? [];

export default function Pricing() {
  const [headerRef, headerVisible] = useScrollReveal();

  if (pricingTiers.length === 0) return null;

  return (
    <section id="precios" className="section-padding bg-white" aria-labelledby="precios-heading">
      <div className="container-narrow">
        <header
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 id="precios-heading" className="font-display text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            Precios transparentes, desde el primer día
          </h2>
          <p className="text-lg text-brand-ink-muted">
            Tres niveles de valor. Eliges según en qué etapa está tu negocio. Todos los precios son "desde" — el final depende de tu alcance real.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier) => (
            <article
              key={tier.id}
              className={`relative flex flex-col bg-white rounded-xl border-2 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                tier.highlighted
                  ? 'border-brand-accent shadow-lg ring-2 ring-brand-accent/20'
                  : 'border-border hover:border-brand-accent/30'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-accent text-white text-xs font-semibold rounded-full whitespace-nowrap">
                  Más elegido
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-brand-ink mb-1">{tier.name}</h3>
                <p className="text-sm text-brand-ink-muted mb-4">{tier.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-brand-ink">Desde ${tier.priceFrom.toLocaleString('es-MX')} MXN</span>
                </div>
              </div>

              <p className="text-sm text-brand-ink-muted mb-6 italic">Ideal para: {tier.idealFor}</p>

              <ul className="space-y-3 mb-8 flex-1" role="list">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-brand-ink-muted">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`w-full py-3 px-4 rounded-lg font-medium text-sm text-center block transition-colors transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  tier.highlighted
                    ? 'bg-brand-accent text-white hover:bg-brand-accent-hover'
                    : 'bg-white border-2 border-brand-accent text-brand-accent hover:bg-brand-accent-soft'
                }`}
              >
                {tier.ctaText}
              </a>

              <p className="mt-4 text-center text-xs text-brand-ink-muted">
                {tier.highlighted ? (
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    Incluye todo lo del tier anterior
                  </span>
                ) : (
                  'Precio final según alcance real'
                )}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-brand-ink-muted">
          Disponemos de mantenimiento y soporte mensual cotizable por separado.
        </p>
      </div>
    </section>
  );
}
'use client';

import { siteConfig } from '@/config/site.config';
import { Search, Users, Zap, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';

const steps = [
  {
    id: 'presencia',
    icon: Search,
    title: 'No me encuentran',
    description: 'Tu negocio no aparece en Google, no tienes web profesional o la que tienes no genera confianza.',
    tier: 'TIER 1: Presencia',
    tierLabel: 'Desde $9,900 MXN',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: [
      'Diseño personalizado y responsive',
      'SEO técnico básico (meta tags, schema, sitemap)',
      'Información completa: quiénes somos, servicios, ubicación',
      'Botón WhatsApp + formulario de contacto',
      'Deployment en Vercel + dominio propio',
    ],
  },
  {
    id: 'conversion',
    icon: Users,
    title: 'Me encuentran pero no me contactan',
    description: 'Tienes tráfico pero no conviertes: faltan CTAs claros, pruebas de confianza, formas fáciles de contactar.',
    tier: 'TIER 2: Conversión',
    tierLabel: 'Desde $14,900 MXN',
    color: 'text-brand-accent',
    bgColor: 'bg-brand-accent-soft',
    borderColor: 'border-brand-accent',
    highlighted: true,
    features: [
      'Arquitectura de conversión (above-the-fold optimizado)',
      'CTAs estratégicos en puntos de decisión',
      'Galería de trabajos + FAQ dinámico con schema.org',
      'Integración WhatsApp con mensaje prellenado',
      'Integración de reservas (Calendly/Google Calendar)',
      'Analítica básica (GA4 + eventos clave)',
    ],
  },
  {
    id: 'sistema',
    icon: Zap,
    title: 'Tengo volumen pero todo es manual',
    description: 'Gestionas citas/pedidos a mano, pierdes tiempo en ida y vuelta, se te escapan clientes por seguimiento nulo.',
    tier: 'TIER 3: Sistema',
    tierLabel: 'Desde $24,900 MXN',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: [
      'Sistema de reservas propio (disponibilidad, confirmaciones, recordatorios)',
      'Automatizaciones: emails, WhatsApp, estados de pedido/cita',
      'Integraciones: CRM, facturación, pagos, Google Sheets',
      'Formularios avanzados: condicionales, multi-paso, firma digital',
      'Panel de administración simple (sin WordPress)',
      'IA solo si hay caso de uso concreto',
    ],
  },
];

export default function ProblemSolution() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="problema-solucion" className="section-padding bg-white" aria-labelledby="problema-solucion-heading">
      <div className="container-narrow">
        <header
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 id="problema-solucion-heading" className="font-display text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            ¿En qué etapa está tu negocio?
          </h2>
          <p className="text-lg text-brand-ink-muted">
            Identificamos tu situación actual y te mostramos el camino lógico para avanzar.
          </p>
        </header>

        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-5rem)] bg-gradient-to-b from-brand-accent/30 via-transparent to-brand-accent/30" aria-hidden="true" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <article
                key={step.id}
                className={`relative flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="relative lg:absolute lg:top-20 lg:left-1/2 lg:-translate-x-1/2 lg:z-10 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center text-xl font-bold ${step.color} ${step.highlighted ? 'border-4 border-brand-accent bg-white shadow-lg' : 'border-2 bg-white'} `}>
                    {index + 1}
                  </div>
                  <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-10 bg-border" aria-hidden="true" />
                </div>

                <div className="w-full lg:w-1/2 flex-1">
                  <div className={`p-6 sm:p-8 rounded-xl border ${step.borderColor} ${step.bgColor} ${step.highlighted ? 'shadow-lg ring-2 ring-brand-accent/20' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${step.bgColor} ${step.color} flex-shrink-0`}>
                        <step.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-brand-ink mb-2">{step.title}</h3>
                        <p className="text-brand-ink-muted leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex-1">
                  <div className={`p-6 sm:p-8 rounded-xl border ${step.borderColor} bg-white ${step.highlighted ? 'shadow-lg ring-2 ring-brand-accent/20 relative' : ''}`}>
                    {step.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-accent text-white text-xs font-semibold rounded-full whitespace-nowrap">
                        Más elegido
                      </div>
                    )}
                    <div className="mb-4">
                      <p className={`text-sm font-medium ${step.color} uppercase tracking-wide mb-1`}>{step.tier}</p>
                      <p className="font-display text-2xl font-bold text-brand-ink">{step.tierLabel}</p>
                    </div>
                    <ul className="space-y-3" role="list">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-brand-ink-muted">
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${step.color}`} aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contacto"
                      className={`mt-6 block w-full text-center py-3 px-4 rounded-lg font-medium text-sm transition-colors transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${step.highlighted
                        ? 'bg-brand-accent text-white hover:bg-brand-accent-hover'
                        : 'bg-white border-2 border-brand-accent text-brand-accent hover:bg-brand-accent-soft'
                      }`}
                      aria-label={`Contactar sobre ${step.tier}`}
                    >
                      {step.id === 'presencia' && 'Quiero mi web de presencia'}
                      {step.id === 'conversion' && 'Quiero convertir más'}
                      {step.id === 'sistema' && 'Quiero automatizar'}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { siteConfig } from '@/config/site.config';
import {
  Wrench,
  Shield,
  CheckCircle,
  Zap,
  Users,
  Clock,
  Truck,
  Home,
  Building,
} from 'lucide-react';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Shield,
  CheckCircle,
  Zap,
  Users,
  Clock,
  Truck,
  Home,
  Building,
};

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    features?: string[];
  };
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Wrench;

  return (
    <article
      className="group relative bg-white rounded-xl border border-border p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/30 hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent-soft rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      <div className="relative flex flex-col h-full">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-accent-soft text-brand-accent mb-5 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-semibold text-brand-ink mb-3">{service.title}</h3>
        <p className="text-brand-ink-muted mb-5 flex-1 leading-relaxed">{service.description}</p>
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 mt-auto" role="list">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-brand-ink-muted">
                <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function Services() {
  const services = siteConfig.services ?? [];
  const [headerRef, headerVisible] = useScrollReveal();

  if (services.length === 0) {
    return null;
  }

  return (
    <section id="servicios" className="section-padding bg-white" aria-labelledby="servicios-heading">
      <div className="container-narrow">
        <header
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2
            id="servicios-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-brand-ink mb-4"
          >
            Nuestros servicios
          </h2>
          <p className="text-lg text-brand-ink-muted">
            Soluciones adaptadas a tus necesidades con la calidad que mereces
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
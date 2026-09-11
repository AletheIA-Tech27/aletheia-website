import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;
  const phoneUrl = `tel:${siteConfig.phone}`;
  const emailUrl = `mailto:${siteConfig.email}`;

  const socialLinks = siteConfig.social ?? [];

  return (
    <footer className="bg-brand-ink text-white" role="contentinfo">
      <div className="container-narrow py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl font-bold mb-4 block" aria-label={`${siteConfig.name} - Inicio`}>
              {siteConfig.name}
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon] ?? MessageCircle;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-brand-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <address className="not-italic text-neutral-400 text-sm space-y-3">
              <a href={phoneUrl} className="flex items-center gap-3 hover:text-brand-accent transition-colors">
                <Phone className="h-5 w-5 flex-shrink-0 text-brand-accent" aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={emailUrl} className="flex items-center gap-3 hover:text-brand-accent transition-colors">
                <Mail className="h-5 w-5 flex-shrink-0 text-brand-accent" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </a>
              {siteConfig.address && (
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-brand-accent transition-colors"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-brand-accent" aria-hidden="true" />
                  <span>{siteConfig.address}</span>
                </a>
              )}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand-accent transition-colors"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-brand-accent" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <nav aria-label="Enlaces del pie de página">
              <ul className="space-y-2">
                {siteConfig.nav?.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-brand-accent transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/aviso-privacidad"
                    target="_blank"
                    rel="noopener"
                    className="text-neutral-400 hover:text-brand-accent transition-colors text-sm"
                  >
                    Aviso de privacidad
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Horario</h3>
            <p className="text-neutral-400 text-sm mb-4">
              {siteConfig.schedule ?? '[PENDIENTE: horarios de atención]'}
            </p>
            {siteConfig.schedule && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:underline"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Contactar por WhatsApp
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <p className="text-neutral-500 text-sm">
              Desarrollado por <a href="https://aletheia.mx" target="_blank" rel="noopener" className="hover:text-brand-accent transition-colors underline">AletheIA</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
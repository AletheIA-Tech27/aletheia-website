import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { Home, Phone, MessageCircle } from 'lucide-react';

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 section-padding">
      <div className="text-center max-w-md">
        <h1 className="font-display text-6xl sm:text-8xl font-bold text-brand-ink mb-4">404</h1>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink mb-6">
          Página no encontrada
        </h2>
        <p className="text-brand-ink-muted mb-8 text-lg">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent text-white font-medium rounded-lg hover:bg-brand-accent-hover transition-colors w-full sm:w-auto"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-brand-ink font-medium border-2 border-brand-ink rounded-lg hover:bg-brand-ink hover:text-white transition-colors w-full sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llamar
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent text-white font-medium rounded-lg hover:bg-brand-accent-hover transition-colors w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
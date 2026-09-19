'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { trackEvent } from '@/lib/gtag';

export default function FloatingWhatsapp() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Conversion', label: 'Floating Button' })}
      className="md:hidden fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-accent text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}

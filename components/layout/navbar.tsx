'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;
  const phoneUrl = `tel:${siteConfig.phone}`;

  const navItems = siteConfig.nav ?? [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container-narrow" aria-label="Navegación principal">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className={`font-display text-xl font-bold transition-colors ${
              isScrolled ? 'text-brand-ink' : 'text-white'
            } flex-shrink-0`}
            aria-label={`${siteConfig.name} - Inicio`}
          >
            {siteConfig.name}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-brand-ink-muted hover:text-brand-ink'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={phoneUrl}
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? 'text-brand-ink hover:text-brand-accent'
                  : 'text-white/90 hover:text-white'
              }`}
              aria-label="Llamar por teléfono"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <Button
              asChild
              size="sm"
              className="gap-2"
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </Link>
            </Button>
          </div>

          <button
            className={`md:hidden inline-flex items-center justify-center p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-brand-ink hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className={`md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200 ${
            isScrolled ? 'bg-white' : 'bg-[#0a0a0a]'
          }`}>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors px-2 py-2 ${
                    isScrolled
                      ? 'text-brand-ink hover:text-brand-accent'
                      : 'text-white hover:text-white/90'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a
                  href={phoneUrl}
                  className={`inline-flex items-center gap-3 px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                    isScrolled
                      ? 'text-brand-ink bg-brand-accent-soft hover:bg-brand-accent/20'
                      : 'text-white bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Llamar: {siteConfig.phone}
                </a>
                <Button
                  asChild
                  className="w-full justify-start gap-3 px-4 py-3"
                >
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
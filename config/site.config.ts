import { siteConfigSchema, type SiteConfig } from './site.config.schema';

const rawConfig = {
  name: '[PENDIENTE: nombre del negocio]',
  tagline: '[PENDIENTE: eslogan/value proposition]',
  description: '[PENDIENTE: descripción del negocio para SEO]',
  url: 'http://localhost:3000',
  phone: '[PENDIENTE: teléfono]',
  whatsapp: '[PENDIENTE: número WhatsApp con código de país, ej: 5215512345678]',
  email: 'pendiente@ejemplo.com',
  address: '[PENDIENTE: dirección completa]',
  schedule: '[PENDIENTE: horarios]',
  social: [
  { label: 'WhatsApp', href: 'https://wa.me/5210000000000', icon: 'MessageCircle' },
  { label: 'Instagram', href: 'https://instagram.com/pendiente', icon: 'MessageCircle' },
  { label: 'Facebook', href: 'https://facebook.com/pendiente', icon: 'MessageCircle' },
],
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  seo: {
    title: '[PENDIENTE: título SEO]',
    description: '[PENDIENTE: descripción SEO]',
    ogImage: 'https://ejemplo.com/og-image.jpg',
    keywords: ['[PENDIENTE: keyword1]', '[PENDIENTE: keyword2]'],
  },
  services: [
    {
      id: 'servicio-1',
      title: '[PENDIENTE: nombre servicio 1]',
      description: '[PENDIENTE: descripción servicio 1]',
      icon: 'Wrench',
      features: ['[PENDIENTE: característica 1]', '[PENDIENTE: característica 2]'],
    },
    {
      id: 'servicio-2',
      title: '[PENDIENTE: nombre servicio 2]',
      description: '[PENDIENTE: descripción servicio 2]',
      icon: 'Shield',
      features: ['[PENDIENTE: característica 1]', '[PENDIENTE: característica 2]'],
    },
    {
      id: 'servicio-3',
      title: '[PENDIENTE: nombre servicio 3]',
      description: '[PENDIENTE: descripción servicio 3]',
      icon: 'CheckCircle',
      features: ['[PENDIENTE: característica 1]', '[PENDIENTE: característica 2]'],
    },
  ],
};

export const siteConfig = siteConfigSchema.parse(rawConfig);

export type { SiteConfig };
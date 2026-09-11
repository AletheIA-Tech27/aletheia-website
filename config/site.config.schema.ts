import { z } from 'zod';

export const navItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const serviceSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  features: z.array(z.string()).optional(),
});

export const socialLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().url(),
  icon: z.string().min(1),
});

export const seoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  ogImage: z.string().url().optional(),
  keywords: z.array(z.string()).optional(),
});

export const siteConfigSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  url: z.string().url(),
  phone: z.string().min(1),
  whatsapp: z.string().min(1),
  email: z.string().email(),
  address: z.string().optional(),
  schedule: z.string().optional(),
  social: z.array(socialLinkSchema).optional(),
  nav: z.array(navItemSchema).optional(),
  seo: seoSchema,
  services: z.array(serviceSchema).optional(),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type NavItem = z.infer<typeof navItemSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type SEOConfig = z.infer<typeof seoSchema>;
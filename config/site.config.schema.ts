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

export const pricingTierSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  tagline: z.string().min(1),
  priceFrom: z.number().int().positive(),
  features: z.array(z.string()).min(1),
  idealFor: z.string().min(1),
  highlighted: z.boolean().default(false),
  ctaText: z.string().min(1),
});

export const nichoSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  problem: z.string().min(1),
  solution: z.string().min(1),
  icon: z.string().min(1),
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
  pricing: z.array(pricingTierSchema).optional(),
  nichos: z.array(nichoSchema).optional(),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type NavItem = z.infer<typeof navItemSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type SEOConfig = z.infer<typeof seoSchema>;
export type PricingTier = z.infer<typeof pricingTierSchema>;
export type Nicho = z.infer<typeof nichoSchema>;
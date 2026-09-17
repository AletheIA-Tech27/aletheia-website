import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export default function robots(): MetadataRoute.Robots {
  // Mismo criterio que app/layout.tsx: no indexar mientras estemos en preview de Vercel.
  const isProductionDomain = !siteConfig.url.includes('vercel.app');

  return {
    rules: {
      userAgent: '*',
      allow: isProductionDomain ? '/' : undefined,
      disallow: isProductionDomain ? undefined : '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
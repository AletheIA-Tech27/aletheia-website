import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import Hero from '@/components/sections/hero';
import ProblemSolution from '@/components/sections/problem-solution';
import NicheGrid from '@/components/sections/niche-grid';
import Pricing from '@/components/sections/pricing';
import SandboxDemo from '@/components/sections/sandbox-demo';
import FAQ from '@/components/sections/faq';
import LeadForm from '@/components/sections/lead-form';

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: siteConfig.seo.ogImage ? [{ url: siteConfig.seo.ogImage }] : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: siteConfig.seo.ogImage ? [{ url: siteConfig.seo.ogImage }] : [],
  },
  robots: 'index, follow',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <NicheGrid />
      <Pricing />
      <SandboxDemo />
      <FAQ />
      <section id="contacto" className="section-padding bg-neutral-50" aria-labelledby="contacto-heading">
        <div className="container-narrow">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
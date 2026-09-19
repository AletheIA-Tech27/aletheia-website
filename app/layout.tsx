import type { Metadata, Viewport } from 'next';
import { Inter, Geist } from 'next/font/google';
import { siteConfig } from '@/config/site.config';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import FloatingWhatsapp from '@/components/ui/floating-whatsapp';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
  preload: true,
});

// Mientras el sitio viva en una URL preview de Vercel, no se indexa.
// Cuando se conecte el dominio final, NEXT_PUBLIC_SITE_URL cambia y esto se resuelve solo.
const isProductionDomain = !siteConfig.url.includes('vercel.app');

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: isProductionDomain ? 'index, follow' : 'noindex, follow',
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
    images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : [],
  },
  // Se omite por completo hasta tener el código real de Search Console.
  // Un placeholder literal aquí se renderiza tal cual en el HTML público.
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
  }),
};

export const viewport: Viewport = {
  themeColor: '#F97316',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    serviceType: 'Desarrollo web y automatización para negocios locales',
    areaServed: {
      '@type': 'Country',
      name: 'México',
    },
    priceRange: '$$',
    openingHoursSpecification: siteConfig.schedule
      ? {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        }
      : undefined,
    sameAs: siteConfig.social?.map((s) => s.href) ?? [],
  };

  return (
    <html lang="es-MX" className={`${inter.variable} ${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <FloatingWhatsapp />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
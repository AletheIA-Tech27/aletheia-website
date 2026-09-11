import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import LeadForm from '@/components/sections/lead-form';
import Pricing from '@/components/sections/pricing';
import Testimonials from '@/components/sections/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <section id="contacto" className="section-padding bg-muted/30" aria-labelledby="contacto-heading">
        <div className="container-narrow">
          <LeadForm />
        </div>
      </section>
      <Pricing />
      <Testimonials />
    </>
  );
}
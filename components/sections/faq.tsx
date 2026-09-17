'use client';

import { siteConfig } from '@/config/site.config';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';

const faqs = [
  {
    question: '¿Cuánto tardan en entregar un sitio?',
    answer: 'Depende del tier y el alcance real. Presencia: 2–3 semanas. Conversión: 3–4 semanas. Sistema: 5–7 semanas. Los plazos se acuerdan por escrito antes de empezar y se entregan hitos intermedios para validación.',
  },
  {
    question: '¿Qué pasa si necesito cambios después de la entrega?',
    answer: 'Incluimos 2 rondas de ajustes menores en los 15 días posteriores a la entrega (textos, imágenes, colores). Cambios de estructura, nuevas páginas o funcionalidades se cotizan por separado. Para cambios recurrentes, existe la opción de mantenimiento mensual.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer: 'Sí. Garantía por escrito de 90 días: corregimos sin coste cualquier error de implementación (bugs, links rotos, problemas de responsive, fallos de formularios). No cubre cambios de criterio, contenido nuevo o roturas por modificaciones de terceros.',
  },
  {
    question: '¿Cuál es la diferencia entre desarrollo y mantenimiento?',
    answer: 'El desarrollo es el proyecto puntual: diseñamos, construimos y entregamos el sitio funcionando. El mantenimiento es un servicio recurrente mensual: actualizaciones de seguridad, backups, monitorización, cambios de contenido menores, soporte técnico y mejoras continuas. Son contratos independientes.',
  },
];

export default function FAQ() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="faq" className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-narrow">
        <header
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 id="faq-heading" className="font-display text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-brand-ink-muted">
            Respuestas directas a las dudas más comunes antes de empezar.
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-brand-ink hover:text-brand-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-ink-muted leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

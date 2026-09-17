'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site.config';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';

const allNichoLabel = 'Todos los sectores';

const iconMap = {
  Scissors: () => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.59L4.5 15.75l-1.5 1.5a4.5 4.5 0 103.12 3.12l1.5-1.5 5.135-5.135a2.25 2.25 0 011.59-.659h5.714" /></svg>,
  Sparkles: () => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m10-12v4m2-2h4m-4 16v4m2-2h4M12 7a5 5 0 110 10 5 5 0 010-10z" /></svg>,
  Dog: () => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  Stethoscope: () => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3 3L22 4 20.9 2.9 11 12.9 8.1 10 2.9 20.9 4 22l9.9-9.9 3 3z" /></svg>,
  Dumbbell: () => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6v12M16 6v12M3 6h5a2 2 0 012 2v8a2 2 0 01-2 2H3M21 6h-5a2 2 0 00-2 2v8a2 2 0 002 2h5" /></svg>,
  UtensilsCrossed: () => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" /></svg>,
};

export default function NicheGrid() {
  const nichos = siteConfig.nichos ?? [];
  const [selectedNicho, setSelectedNicho] = useState(allNichoLabel);

  const filteredNichos = selectedNicho === allNichoLabel
    ? nichos
    : nichos.filter(n => n.label === selectedNicho);

    const nichoOptions = [allNichoLabel, ...nichos.map(n => n.label)];

  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="sectores" className="section-padding bg-white" aria-labelledby="sectores-heading">
      <div className="container-narrow">
        <header
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 id="sectores-heading" className="font-display text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            Soluciones por sector
          </h2>
          <p className="text-lg text-brand-ink-muted">
            Cada negocio tiene sus retos. Estos son los que resolvemos habitualmente.
          </p>
        </header>

        <div className="max-w-xl mx-auto mb-12">
          <Select value={selectedNicho} onValueChange={setSelectedNicho}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filtrar por sector" />
            </SelectTrigger>
            <SelectContent>
              {nichoOptions.map((option) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Sectores atendidos"
        >
          {filteredNichos.map((nicho) => {
            const Icon = iconMap[nicho.icon as keyof typeof iconMap] ?? (() => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);
            return (
              <article key={nicho.id} className="group relative bg-white rounded-xl border border-border p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-brand-accent/30 hover:-translate-y-1" role="listitem">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent-soft rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <div className="relative flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-accent-soft text-brand-accent mb-5 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brand-ink mb-3">{nicho.label}</h3>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-lg bg-red-50 border border-red-100">
                      <p className="text-sm font-medium text-red-800 mb-1">Problema tí­pico</p>
                      <p className="text-sm text-red-700">{nicho.problem}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                      <p className="text-sm font-medium text-green-800 mb-1">Cómo se resuelve</p>
                      <p className="text-sm text-green-700">{nicho.solution}</p>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:underline transition-colors mt-auto">
                    Ver cómo aplica a tu negocio
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {filteredNichos.length === 0 && (
          <div className="text-center py-12 text-brand-ink-muted">
            No hay sectores que coincidan con el filtro seleccionado.
          </div>
        )}
      </div>
    </section>
  );
}

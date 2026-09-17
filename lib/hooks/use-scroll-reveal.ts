'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

/**
 * Hook de scroll reveal — activa una animación de entrada cuando el elemento
 * entra en el 15% del viewport. Solo se dispara una vez por elemento.
 *
 * @param threshold — % de visibilidad del elemento para trigger (default 0.15)
 * @returns `[ref, isVisible]`
 *
 * @remarks
 * Si el usuario tiene `prefers-reduced-motion: reduce` activado, el hook
 * devuelve `isVisible = true` inmediatamente sin observar ni animar.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.15
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detectar preferencia de movimiento reducido
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref as RefObject<T>, isVisible];
}

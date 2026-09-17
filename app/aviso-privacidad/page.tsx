import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad - AletheIA',
  description: 'Aviso de privacidad de AletheIA - Desarrollo web para negocios locales en México',
  robots: 'noindex, nofollow',
};

export default function AvisoPrivacidad() {
  return (
    <main className="min-h-screen bg-white py-16 lg:py-24">
      <div className="container-narrow max-w-3xl">
        <div className="mb-12 p-6 rounded-xl border-2 border-red-500 bg-red-50" role="alert">
          <div className="flex items-start gap-4">
            <svg className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h2 className="text-xl font-bold text-red-800 mb-2">⚠️ PENDIENTE LEGAL</h2>
              <p className="text-red-700 text-lg font-medium">
                Esta página es un <strong>placeholder</strong>. Reemplazar con aviso de privacidad real antes de producción.
              </p>
              <p className="text-red-600 mt-2">
                No publicar el sitio sin revisión y aprobación legal del contenido de esta página.
              </p>
            </div>
          </div>
        </div>

        <header className="mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            Aviso de Privacidad
          </h1>
          <p className="text-brand-ink-muted">
            Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <article className="prose prose-brand max-w-none space-y-8">
          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">1. Responsable del tratamiento</h2>
            <p className="text-brand-ink-muted">
              <strong>{siteConfig.name}</strong> (en adelante, "el Responsable"), con correo electrónico <a href={`mailto:${siteConfig.email}`} className="underline hover:text-brand-accent">{siteConfig.email}</a>, es responsable del tratamiento de los datos personales que nos proporciones a través de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">2. Datos que recogemos</h2>
            <p className="text-brand-ink-muted mb-3">A través del formulario de contacto recogemos:</p>
            <ul className="list-disc list-inside space-y-2 text-brand-ink-muted">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Teléfono / WhatsApp</li>
              <li>Tipo de negocio</li>
              <li>Mensaje libre</li>
            </ul>
            <p className="text-brand-ink-muted mt-3">
              No recogemos datos sensibles, ni datos de menores de edad, ni realizamos elaboración de perfiles automatizada.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">3. Finalidad y base legal</h2>
            <ul className="list-disc list-inside space-y-2 text-brand-ink-muted">
              <li><strong>Responder a tu solicitud:</strong> interés legítimo (Art. 6.1.f GDPR / Art. 15 LFPDPPP) y consentimiento expreso al marcar la casilla.</li>
              <li><strong>Envío de presupuesto o propuesta comercial:</strong> ejecución de medidas precontractuales (Art. 6.1.b GDPR).</li>
            </ul>
            <p className="text-brand-ink-muted mt-3">
              No usamos tus datos para marketing directo, newsletters ni cesión a terceros sin tu consentimiento explícito, separado y verificable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">4. Conservación</h2>
            <p className="text-brand-ink-muted">
              Conservamos tus datos mientras sea necesario para responder a tu solicitud y, en su caso, durante la vigencia de la relación comercial. Posteriormente, se bloquean y suprimen conforme a plazos legales (mínimo 3–5 años para obligaciones fiscales/contables en México).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">5. Destinatarios</h2>
            <p className="text-brand-ink-muted">
              Tus datos no se ceden a terceros salvo obligación legal. Los proveedores técnicos que alojan este sitio (Vercel, Resend) actúan como encargados de tratamiento bajo contrato (DPA/Cláusulas Contractuales Tipo).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">6. Transferencias internacionales</h2>
            <p className="text-brand-ink-muted">
              Vercel (EE. UU.) y Resend (EE. UU.) procesan datos bajo el <strong>Escudo de Privacidad UE–EE. UU.</strong> / cláusulas contractuales tipo. México no tiene decisión de adecuación; las transferencias se amparan en garantías adecuadas.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">7. Tus derechos (ARCO / GDPR)</h2>
            <p className="text-brand-ink-muted">Puedes ejercer en cualquier momento:</p>
            <ul className="list-disc list-inside space-y-2 text-brand-ink-muted">
              <li>Acceso, rectificación, cancelación, oposición (ARCO — LFPDPPP México)</li>
              <li>Acceso, rectificación, supresión, limitación, portabilidad, oposición (GDPR)</li>
              <li>Retirar el consentimiento (sin afectar la licitud del tratamiento previo)</li>
            </ul>
            <p className="text-brand-ink-muted mt-3">
              Envía tu solicitud a <a href={`mailto:${siteConfig.email}`} className="underline hover:text-brand-accent">{siteConfig.email}</a> con el asunto "Ejercicio de derechos ARCO". Responderemos en los plazos legales (máx. 20 días hábiles en México / 1 mes en GDPR).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">8. Autoridad de control</h2>
            <p className="text-brand-ink-muted">
              En México: <strong>INAI</strong> (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales).<br />
              En la UE: autoridad de control de tu Estado miembro.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">9. Seguridad</h2>
            <p className="text-brand-ink-muted">
              Aplicamos medidas técnicas y organizativas apropiadas: HTTPS/TLS 1.3, headers de seguridad (CSP, HSTS, X-Frame-Options), validación server-side, honeypot anti-spam, logs de acceso restringidos. No existe "seguridad absoluta"; nos comprometemos a notificar brechas en 72h si afectan derechos y libertades.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">10. Cambios en este aviso</h2>
            <p className="text-brand-ink-muted">
              Cualquier modificación se publicará en esta página con fecha de actualización. Si el cambio es sustancial, te notificaremos por email (si la tenemos) o mediante aviso visible en el sitio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">11. Contacto</h2>
            <p className="text-brand-ink-muted">
              Para dudas sobre este aviso o el tratamiento de tus datos:<br />
              <strong>{siteConfig.name}</strong><br />
              Email: <a href={`mailto:${siteConfig.email}`} className="underline hover:text-brand-accent">{siteConfig.email}</a><br />
              Tel/WhatsApp: <a href={`tel:${siteConfig.phone}`} className="underline hover:text-brand-accent">{siteConfig.phone}</a>
            </p>
          </section>
                </article>
        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-accent hover:underline font-medium">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

import { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Aviso de Privacidad - ${siteConfig.name}`,
  description: `Aviso de Privacidad de ${siteConfig.name} en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).`,
};

export default function AvisoPrivacidad() {
  const lastUpdated = "18 de septiembre de 2026";

  return (
    <main className="min-h-screen bg-white py-16 lg:py-24">
      <div className="container-narrow max-w-3xl px-4 sm:px-6 mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            Aviso de Privacidad
          </h1>
          <p className="text-brand-ink-muted">
            Última actualización: {lastUpdated}
          </p>
        </header>

        <article className="prose prose-brand max-w-none space-y-8 text-brand-ink-muted">
          <p className="text-brand-ink">
            En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), <strong>{siteConfig.name}</strong>, a cargo de Leonardo Anzaldo Casco, pone a disposición el presente Aviso de Privacidad para informar a los titulares sobre el tratamiento que se dará a los datos personales proporcionados a través de este sitio web.
          </p>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              1. Identidad y domicilio del responsable
            </h2>
            <p>
              <strong>Responsable:</strong> {siteConfig.name}<br />
              <strong>Titular/Responsable:</strong> Leonardo Anzaldo Casco<br />
              <strong>Domicilio:</strong> Hacienda del Parque, C.P. 54769, Cuautitlán Izcalli, Estado de México, México.
            </p>
            <p className="mt-2">
              Para cualquier asunto relacionado con el tratamiento de datos personales, puede contactarnos en:<br />
              <strong>Correo electrónico:</strong>{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-brand-accent">
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              2. Datos personales que recabamos
            </h2>
            <p className="mb-3">
              A través del formulario de contacto de este sitio web podemos recabar los siguientes datos personales:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Nombre completo.</li>
              <li>Correo electrónico.</li>
              <li>Número telefónico.</li>
              <li>Tipo de negocio.</li>
              <li>Información que el titular decida proporcionar voluntariamente en el campo de mensaje.</li>
            </ul>
            <p className="mt-3">
              <strong>{siteConfig.name}</strong> no solicita deliberadamente datos personales sensibles a través de este formulario.
              Por seguridad y privacidad, se recomienda no proporcionar mediante el formulario información sensible, contraseñas, datos financieros, información de terceros u otra información que no sea necesaria para atender la solicitud.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              3. Finalidades del tratamiento
            </h2>
            <p className="mb-3 font-medium text-brand-ink">Finalidades necesarias:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Recibir y responder solicitudes de contacto.</li>
              <li>Conocer las necesidades del negocio o proyecto del interesado.</li>
              <li>Preparar propuestas comerciales, cotizaciones o información relacionada con los servicios solicitados.</li>
              <li>Dar seguimiento a oportunidades comerciales derivadas de la solicitud de contacto.</li>
            </ul>
            <p className="mt-3">
              <strong>{siteConfig.name}</strong> no utiliza actualmente los datos recabados mediante este formulario para enviar newsletters, campañas promocionales o comunicaciones de marketing no relacionadas con la solicitud realizada por el titular.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              4. Conservación de los datos
            </h2>
            <p className="mb-2">
              Los datos personales podrán conservarse durante el tiempo necesario para atender la solicitud y dar seguimiento a la relación u oportunidad comercial correspondiente.
            </p>
            <p className="mb-2">
              Cuando una oportunidad de contacto o seguimiento deje de requerir atención, los datos podrán conservarse por un periodo máximo de 6 meses, salvo que exista una obligación legal, contractual o alguna circunstancia que justifique legítimamente una conservación adicional.
            </p>
            <p>
              Una vez cumplido el periodo correspondiente y cuando los datos ya no sean necesarios para las finalidades señaladas, se procederá a su eliminación, de acuerdo con las obligaciones aplicables.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              5. Proveedores tecnológicos y tratamiento de datos
            </h2>
            <p className="mb-2">
              Para operar este sitio web y gestionar las solicitudes recibidas, <strong>{siteConfig.name}</strong> utiliza determinados proveedores tecnológicos.
            </p>
            <p className="mb-2 font-mono text-sm bg-gray-50 p-3 rounded-md border border-gray-100">
              Formulario del sitio web → Server Action → Resend → correo electrónico de {siteConfig.name}
            </p>
            <p className="mb-2">
              Resend es utilizado como proveedor de infraestructura para el envío de los mensajes recibidos a través del formulario. Asimismo, el sitio web puede utilizar servicios de infraestructura y alojamiento tecnológico, como Vercel, necesarios para su funcionamiento.
            </p>
            <p>
              Estos proveedores pueden procesar información en infraestructura ubicada fuera de México. <strong>{siteConfig.name}</strong> procurará que el tratamiento de los datos por parte de dichos proveedores se realice de conformidad con las obligaciones aplicables en materia de protección de datos personales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              6. Transferencia de datos personales
            </h2>
            <p className="mb-2">
              <strong>{siteConfig.name}</strong> no vende ni comercializa los datos personales de los titulares.
            </p>
            <p className="mb-2">
              Los datos personales tampoco serán transferidos a terceros para que estos los utilicen para sus propios fines comerciales o publicitarios.
            </p>
            <p className="mb-2">
              Cuando sea necesario proporcionar información a proveedores que presten servicios tecnológicos necesarios para la operación del sitio web o la atención de las solicitudes, dicho tratamiento se realizará únicamente en la medida necesaria para prestar el servicio correspondiente y bajo las obligaciones aplicables en materia de protección de datos personales.
            </p>
            <p>
              Cuando la legislación aplicable requiera el consentimiento del titular para una transferencia determinada, dicho consentimiento será solicitado previamente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              7. Derechos ARCO
            </h2>
            <p className="mb-3">
              El titular de los datos personales tiene derecho a ejercer sus derechos de:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><strong>Acceso:</strong> conocer qué datos personales tenemos y cómo son tratados.</li>
              <li><strong>Rectificación:</strong> solicitar la corrección de datos que sean inexactos o incompletos.</li>
              <li><strong>Cancelación:</strong> solicitar la eliminación de sus datos cuando resulte procedente.</li>
              <li><strong>Oposición:</strong> solicitar que sus datos no sean utilizados para determinados fines cuando exista causa legítima para ello.</li>
            </ul>
            <p className="mb-3">
              Para ejercer cualquiera de estos derechos, el titular podrá enviar una solicitud al correo:{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-brand-accent">
                {siteConfig.email}
              </a>
            </p>
            <p className="mb-2 font-medium text-brand-ink">La solicitud deberá contener, como mínimo:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Nombre del titular.</li>
              <li>Medio para comunicar la respuesta.</li>
              <li>Descripción clara del derecho que desea ejercer.</li>
              <li>Identificación de los datos personales relacionados con la solicitud.</li>
              <li>Cualquier elemento o documento que facilite la localización de los datos.</li>
            </ul>
            <p>
              <strong>{siteConfig.name}</strong> comunicará al titular la determinación correspondiente dentro de los plazos establecidos por la legislación aplicable. De manera general, la respuesta deberá comunicarse dentro de un plazo máximo de 20 días contados a partir de la recepción de la solicitud. Si resulta procedente, se hará efectiva dentro de los 15 días siguientes. Los plazos podrán ampliarse una sola vez por un periodo igual cuando exista una causa justificada conforme a la legislación aplicable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              8. Revocación del consentimiento
            </h2>
            <p className="mb-2">
              Cuando el tratamiento de datos personales se base en el consentimiento del titular, este podrá solicitar su revocación mediante correo electrónico a:{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-brand-accent">
                {siteConfig.email}
              </a>
            </p>
            <p className="mb-2">
              La revocación no afectará la legalidad del tratamiento realizado previamente a la solicitud de revocación.
            </p>
            <p>
              En determinados casos, la revocación podrá impedir que <strong>{siteConfig.name}</strong> continúe atendiendo una solicitud o proporcionando determinados servicios cuando el tratamiento de los datos sea necesario para ello.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              9. Limitación del uso o divulgación
            </h2>
            <p>
              El titular podrá solicitar la limitación del uso o divulgación de sus datos personales mediante una solicitud enviada a:{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-brand-accent">
                {siteConfig.email}
              </a>. <strong>{siteConfig.name}</strong> analizará cada solicitud y, cuando resulte procedente, adoptará las medidas correspondientes para limitar el uso o divulgación de los datos personales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              10. Cambios al Aviso de Privacidad
            </h2>
            <p>
              <strong>{siteConfig.name}</strong> podrá modificar o actualizar el presente Aviso de Privacidad cuando resulte necesario debido a cambios en sus servicios, procesos, prácticas de tratamiento de datos o disposiciones legales aplicables. Las modificaciones serán publicadas en este mismo sitio web. La fecha de la última actualización aparecerá al inicio del presente Aviso de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              11. Autoridad competente
            </h2>
            <p>
              En caso de considerar que su derecho a la protección de datos personales ha sido vulnerado y después de haber ejercido los mecanismos correspondientes ante <strong>{siteConfig.name}</strong>, el titular podrá acudir ante la <strong>Secretaría Anticorrupción y Buen Gobierno</strong>, autoridad competente en materia de protección de datos personales en posesión de los particulares, de conformidad con la legislación aplicable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-brand-ink mb-3">
              12. Consentimiento
            </h2>
            <p className="mb-4">
              Al proporcionar sus datos personales mediante el formulario de contacto y continuar con el envío de la información, el titular manifiesta haber tenido acceso al presente Aviso de Privacidad y conocer las finalidades para las cuales serán tratados sus datos personales.
            </p>
            <p>
              Cuando la legislación aplicable requiera un consentimiento expreso para determinado tratamiento, <strong>{siteConfig.name}</strong> solicitará dicho consentimiento mediante el mecanismo correspondiente.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200 text-sm">
            <p><strong>{siteConfig.name}</strong></p>
            <p>Leonardo Anzaldo Casco</p>
            <p>Cuautitlán Izcalli, Estado de México, México</p>
            <p>
              Contacto:{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline hover:text-brand-accent">
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Última actualización: {lastUpdated}
            </p>
          </section>
        </article>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-accent hover:underline font-medium">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
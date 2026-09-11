# AletheIA Starter V1

Starter profesional para landings de negocios locales con **Next.js 15 (App Router)**, **React 19**, **TypeScript (Strict)**, **Tailwind CSS** y **shadcn/ui (new-york + neutral)**.

---

## 🎯 Características

- **Arquitectura Server-first**: Server Components por defecto, Client Components solo donde se requiere interacción
- **Paleta AletheIA**: Negro (#0A0A0A), Blanco, Naranja **#F97316** como accent
- **Formulario de leads validado**: React Hook Form + Zod (schema compartido cliente/servidor)
- **Email con provider intercambiable**: Resend en producción, TestProvider en CI (sin envío real)
- **Anti-spam**: Honeypot field + validación servidor
- **Aviso de privacidad**: Visible en el form (LFPDPPP México)
- **SEO listo para producción**: `robots.ts` indexable, `sitemap.ts`, JSON-LD `LocalBusiness`, metadata completa
- **Testing E2E**: Playwright con webServer (build + start en puerto 3000)
- **CI/CD**: GitHub Actions (lint → typecheck → build → e2e)
- **Deploy**: Vercel (configurado en `vercel.json`)

---

## 📁 Estructura del proyecto

```
aletheia-starter/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── globals.css
│   ├── robots.ts
│   ├── sitemap.ts
│   └── actions/send-lead.ts
├── components/
│   ├── ui/ (7 componentes shadcn)
│   ├── sections/ (hero, services, lead-form, pricing, testimonials)
│   └── layout/ (navbar, footer)
├── config/ (site.config.ts + schema Zod)
├── lib/ (utils, validations, email providers)
├── tests/smoke.spec.ts
├── .github/workflows/ci.yml
├── playwright.config.ts
├── components.json
├── next.config.ts, tailwind.config.ts, tsconfig.json, vercel.json
├── package.json, .env.example, .gitignore, .eslintrc.json, .prettierrc.json
└── README.md
```
---

## 🚀 Puesta en marcha

### Prerrequisitos

- **Node.js ≥ 20**
- **pnpm 9.x** (`npm i -g pnpm`)

### Instalación

```bash
# 1. Clonar e instalar dependencias
pnpm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores:
#   LEAD_DESTINATION_EMAIL=tu@email.com          # OBLIGATORIO
#   RESEND_API_KEY=re_xxx                         # Opcional en dev (usa TestProvider si falta)
#   NEXT_PUBLIC_SITE_URL=http://localhost:3000

# 3. Desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).
---

## ✅ Checklist de validación (ejecutar tú)

> **Importante**: Estos comandos **no se han ejecutado en este entorno** (no hay pnpm instalado). Debes correrlos tú para validar que todo funciona.

```bash
# 1. Calidad de código
pnpm run lint
pnpm run typecheck

# 2. Build de producción
pnpm run build

# 3. Auditoría de seguridad
pnpm audit
# Debe salir sin vulnerabilidades High/Critical

# 4. Tests E2E (instala binarios la primera vez)
pnpm exec playwright install --with-deps
pnpm exec playwright test
```

Si algún paso falla, **no está validado** — reporta el error y decidimos.
---

## 🔧 Configuración del negocio

Edita `config/site.config.ts` con los datos reales del cliente. Todos los campos usan placeholders `[PENDIENTE: ...]` — **nunca inventes datos**.

| Campo | Descripción |
|-------|-------------|
| `name` | Nombre del negocio |
| `tagline` | Eslogan / value proposition |
| `description` | Descripción para SEO |
| `url` | URL de producción (ej: `https://midominio.com`) |
| `phone` | Teléfono visible (formato legible) |
| `whatsapp` | Número WhatsApp **solo dígitos con código país** (ej: `5215512345678`) |
| `email` | Email de contacto |
| `address` | Dirección completa (opcional) |
| `schedule` | Horarios (opcional) |
| `social` | Array de redes: `{ label, href, icon }` |
| `nav` | Navegación: `{ label, href }` |
| `seo` | `{ title, description, ogImage, keywords[] }` |
| `services[]` | Servicios: `{ id, title, description, icon, features[] }` |

**Iconos disponibles para services**: `Wrench`, `Shield`, `CheckCircle`, `Zap`, `Users`, `Clock`, `Truck`, `Home`, `Building`, `Tool` (ver `components/sections/services.tsx`).
---

## 📧 Flujo de leads

```
Usuario completa form (LeadForm)
        │
        ▼
RHF + Zod valida en cliente (UX)
        │
        ▼  Server Action (sendLeadAction)
app/actions/send-lead.ts
  1. leadSchema.parse(formData)  ← incluye honeypot
  2. sendLeadEmail(payload)
        │
        ▼
lib/email/send-lead.ts
  • Arma HTML/texto + asunto
  • getEmailProvider() decide:
    ├─ NODE_ENV==='test' || !RESEND_API_KEY → TestProvider (globalThis.__sentEmails)
    └─ else → ResendProvider
  • Destino: process.env.LEAD_DESTINATION_EMAIL (NUNCA de siteConfig)
        │
        ▼
{ ok: true, id } → toast.success + redirect('/?success=true')
{ ok: false, error } → toast.error (mensaje amigable, sin stack trace)
```

---

## 🧪 Testing

### Smoke tests (`tests/smoke.spec.ts`)

1. **Home carga** → verifica `<h1>` y formulario visible
2. **Form envía éxito** → llena datos válidos → verifica toast "¡Mensaje enviado!"
3. **Validación campos vacíos** → envía vacío → verifica mensajes de error Zod
4. **Honeypot rechaza spam** → rellena campo oculto → verifica "Detección de spam"

### Provider de test

En `NODE_ENV=test` (configurado en `playwright.config.ts` webServer env), se usa `TestProvider` que guarda emails en `globalThis.__sentEmails`. No se envían emails reales.

---

## 🎨 Personalización de UI

### Paleta (tailwind.config.ts)

```ts
colors: {
  brand: {
    accent: '#F97316',      // Naranja AletheIA (primary)
    'accent-hover': '#EA580C',
    'accent-soft': '#FFEDD5',
    ink: '#0A0A0A',         // Near-black
    'ink-muted': '#404040',
  }
}
```

### CSS variables (app/globals.css)

```css
--primary: 14 100% 53%;        /* #F97316 en HSL */
--primary-foreground: 0 0% 100%;
--ring: 14 100% 53%;
```

### Button variant default

`components/ui/button.tsx` usa `bg-brand-accent text-white hover:bg-brand-accent-hover` en lugar del azul por defecto de shadcn.

### Agregar más componentes shadcn

```bash
pnpm dlx shadcn@latest add <componente>
# Ejemplos: card, select, checkbox, dialog, dropdown-menu, tabs, accordion, form
```

---

## 🔒 Seguridad

- **LEAD_DESTINATION_EMAIL** solo en `.env.local` / variables de entorno de Vercel — **nunca en código ni siteConfig**
- **RESEND_API_KEY** solo en variables de entorno
- **Honeypot** anti-spam en formulario
- **Validación Zod en servidor** (Server Action) — la validación cliente es solo UX
- **Sin `console.log` de datos sensibles**
- **`.gitignore`** cubre `node_modules`, `.env*`, `.next`, `vercel`, `playwright-report`, `test-results`

---

## 📦 Deploy en Vercel

1. Push a GitHub
2. Import project en Vercel
3. Configura Environment Variables:
   - `LEAD_DESTINATION_EMAIL` (Required)
   - `RESEND_API_KEY` (Required para producción)
   - `NEXT_PUBLIC_SITE_URL` (ej: `https://midominio.com`)
4. Deploy — `vercel.json` ya define `installCommand`, `buildCommand`, `devCommand`, `framework`

---

## 📋 Checklist pre-entrega (clinerules)

- [ ] `og:image`, `og:url`, `og:title`, `og:description` apuntan a dominio real del cliente
- [ ] Todas las imágenes tienen `alt` descriptivo
- [ ] Links (WhatsApp, email, redes) apuntan a cuentas reales confirmadas
- [ ] Sitio responsive: mobile (375px), tablet (768px), desktop (1280px+)
- [ ] No hay texto `[PENDIENTE: ...]` sin resolver en producción
- [ ] `pnpm audit` sin vulns High/Critical
- [ ] Formulario probado end-to-end (envío real en staging)
- [ ] Aviso de privacidad presente y enlazado
- [ ] Probado en Chrome, Safari desktop, Safari iOS
- [ ] Lighthouse/PageSpeed corrido (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- [ ] `README.md` de entrega generado con: cómo actualizar contenido, flujo deploy Vercel, servicios externos, contacto soporte

---

## 📄 Licencia

Propiedad de AletheIA. Uso interno para proyectos de clientes.

## Notas adicionales creando el proyecto

Slottable es obligatorio en cualquier componente shadcn que combine asChild con contenido condicional (el bug del spinner en Button).
El Toaster de shadcn necesita conectarse explícitamente a useToast() — no viene funcional del CLI por defecto.
NODE_ENV=test en Next.js ignora .env.local — cualquier proyecto que use Playwright con build real necesita .env.test.local.
Los checkboxes con RHF no deben pasar por FormData manual con String(value) — mejor pasar el objeto tipado directo a la Server Action.
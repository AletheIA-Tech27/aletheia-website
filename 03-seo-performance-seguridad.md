# AletheIA — SEO, Performance, Seguridad y Backend

## Principios generales

SEO, performance, seguridad y backend deben implementarse de forma proporcional al proyecto.

No conviertas estas áreas en una checklist mecánica.

Distingue siempre entre:

* requisitos obligatorios;
* buenas prácticas;
* funcionalidades necesarias según el proyecto;
* optimizaciones futuras.

No implementes infraestructura, integraciones o sistemas backend que el proyecto no necesite.

> **La seguridad y la calidad son obligatorias; la complejidad no.**

Nunca afirmes que una auditoría, prueba, métrica o revisión fue realizada si realmente no se ejecutó.

---

# SEO

Cada página pública debe tener metadata adecuada al contenido real.

Cuando corresponda, utiliza:

* `title`;
* `description`;
* Open Graph;
* Twitter/X metadata;
* encabezados semánticos;
* URLs limpias;
* `sitemap.xml`;
* `robots.txt`;
* datos estructurados.

## Metadata

El `title` y la `meta description` deben ser específicos y relevantes para cada página.

Nunca reutilices automáticamente un texto genérico del Starter.

Verifica antes de entregar:

* `og:image`;
* `og:url`;
* `og:title`;
* `og:description`.

Los valores de producción deben corresponder al dominio y contenido reales del cliente.

Nunca dejes:

* `localhost`;
* dominios del Starter;
* URLs de desarrollo;
* imágenes de prueba;

en metadata de producción.

## Headings

Mantén una jerarquía semántica clara.

Utiliza un `<h1>` principal por página cuando corresponda a la estructura del contenido.

Utiliza `<h2>` y `<h3>` de manera lógica.

No añadas headings únicamente para conseguir una jerarquía visual; utiliza CSS para presentación.

## Sitemap y robots

Genera `sitemap.xml` y `robots.txt` para sitios públicos cuando sean relevantes.

No incluyas en el sitemap páginas que no deban indexarse.

Verifica que las URLs generadas correspondan al dominio real de producción.

## Datos estructurados

Para negocios locales, utiliza JSON-LD apropiado cuando exista información real suficiente.

`LocalBusiness` puede incluir información como:

* nombre;
* dirección;
* teléfono;
* horarios;
* URL;
* otros datos relevantes.

Nunca inventes información estructurada.

Los datos estructurados deben coincidir con la información visible y real del negocio.

Utiliza el tipo específico de Schema.org cuando sea claramente apropiado para el negocio, en lugar de utilizar `LocalBusiness` genéricamente cuando exista una categoría más precisa.

---

# Performance

Optimiza el sitio considerando:

* imágenes;
* fuentes;
* JavaScript;
* CSS;
* rendering;
* requests;
* caching;
* carga de recursos;
* dependencias.

Evita optimizaciones prematuras.

Cuando exista un problema de rendimiento, **mide antes de introducir una solución compleja**.

## Core Web Vitals

Como objetivo general, busca buenos resultados en:

* LCP;
* CLS;
* INP.

Como referencia para una experiencia "Good":

* LCP < 2.5 s;
* CLS < 0.1;
* INP < 200 ms.

Estos valores son objetivos de calidad, no una garantía automática ni un motivo para introducir arquitectura innecesaria.

Cuando sea posible, reporta resultados reales de las herramientas utilizadas.

Nunca afirmes que una métrica fue comprobada si no fue medida.

## Imágenes

Utiliza `next/image` cuando sea apropiado para imágenes gestionadas por Next.js.

Las imágenes deben tener dimensiones conocidas mediante:

* `width` + `height`;
* o `fill` dentro de un contenedor correctamente dimensionado.

Esto ayuda a evitar cambios inesperados de layout.

Utiliza formatos modernos y compresión apropiada cuando sea beneficioso.

No cargues imágenes más grandes de lo necesario.

Utiliza `priority` únicamente cuando exista una razón de rendimiento clara, especialmente para recursos críticos visibles inicialmente.

No marques múltiples imágenes como prioritarias sin justificación.

## Fuentes

Prefiere `next/font` cuando el proyecto utilice fuentes compatibles con esta estrategia.

Evita cargar fuentes innecesarias.

Limita:

* familias;
* pesos;
* variantes;

a los realmente utilizados.

No sacrifiques innecesariamente la identidad visual del cliente por optimizaciones marginales.

## JavaScript y dependencias

Evita JavaScript innecesario en el cliente.

Prefiere Server Components cuando no exista una necesidad de ejecución en navegador.

No importes librerías completas cuando una alternativa más específica o nativa sea apropiada.

Evita dependencias pesadas para funcionalidades pequeñas.

Evalúa el impacto real sobre el bundle cuando una dependencia pueda afectar significativamente el rendimiento.

---

# Seguridad

Nunca expongas:

* API keys;
* tokens;
* secretos;
* credenciales;
* variables privadas de entorno.

Las credenciales deben utilizar variables de entorno y mantenerse fuera del repositorio.

Verifica que `.gitignore` cubra los archivos sensibles correspondientes al proyecto.

Nunca envíes secretos al cliente mediante variables públicas o código ejecutado en el navegador.

## Variables de entorno

Utiliza variables de entorno para información sensible.

Las variables necesarias para producción deben configurarse correctamente en Vercel.

Distingue entre:

* variables privadas del servidor;
* variables públicas necesarias para el cliente.

No utilices variables `NEXT_PUBLIC_*` para secretos.

## HTTPS

Todo sitio de producción debe utilizar HTTPS.

Vercel proporciona HTTPS para los deployments y dominios compatibles, pero no asumas que la configuración es correcta sin verificar el deployment cuando sea relevante.

Comprueba que no existan recursos críticos cargándose mediante `http://` cuando el sitio se sirve mediante HTTPS.

## Producción

Antes de entregar, verifica que no queden:

* paneles de prueba;
* rutas administrativas no protegidas;
* datos de ejemplo;
* contenido de desarrollo;
* endpoints temporales;
* credenciales;
* información sensible;
* debugging innecesario.

No elimines silenciosamente herramientas de debugging que todavía sean necesarias para diagnosticar un problema; determina primero si deben permanecer o eliminarse.

Evita `console.log` innecesarios en producción.

Nunca registres:

* contraseñas;
* tokens;
* API keys;
* información sensible;
* datos personales innecesarios.

---

# Manejo de errores

Maneja explícitamente los errores esperados.

Los errores inesperados deben registrarse de manera útil para debugging sin exponer información sensible.

El usuario final debe recibir mensajes:

* claros;
* breves;
* accionables;
* no técnicos.

Nunca muestres directamente:

* stack traces;
* errores internos;
* secretos;
* respuestas crudas de APIs;
* códigos internos sin contexto.

Ejemplo:

No mostrar:

`500: RESEND_API_KEY missing`

Mostrar:

> "No pudimos enviar tu mensaje. Inténtalo nuevamente."

Mientras el sistema registra internamente información suficiente para diagnosticar el problema.

## Estados de interfaz

Cuando una interfaz dependa de una operación asíncrona, contempla los estados relevantes:

* loading;
* success;
* error;
* empty cuando aplique.

No fuerces un estado `empty` cuando conceptualmente no exista.

Por ejemplo, un formulario de contacto no necesita un estado de "empty data".

---

# Backend, formularios e integraciones

Toda entrada controlada por el usuario debe validarse en el servidor cuando llegue a una operación backend.

La validación del cliente existe principalmente para mejorar UX.

La validación del servidor existe para proteger la operación.

No confíes en:

* valores enviados desde el cliente;
* hidden fields;
* validaciones exclusivamente visuales;
* restricciones del navegador.

## Formularios

Los formularios que procesen datos deben:

* validar entradas;
* manejar errores;
* evitar envíos duplicados cuando sea necesario;
* devolver feedback al usuario;
* proteger adecuadamente los endpoints.

Utiliza Zod para validar estructuras de datos cuando forme parte del stack del proyecto.

Cuando exista un esquema compartido entre cliente y servidor, evita duplicar las reglas de validación.

## Protección anti-spam

Los formularios públicos deben considerar protección contra spam y abuso.

La medida utilizada debe ser proporcional al riesgo.

Opciones posibles:

* honeypot;
* Turnstile;
* rate limiting;
* otras medidas apropiadas.

No añadas infraestructura anti-spam compleja a una landing de bajo riesgo sin una razón concreta.

Si el proyecto empieza a recibir spam real, aumenta progresivamente la protección.

---

# Integraciones externas

Cuando un proyecto utilice servicios externos, documenta lo necesario para mantener la integración.

Por ejemplo:

* servicio utilizado;
* propósito;
* variables de entorno requeridas;
* cuenta o proyecto asociado cuando sea relevante;
* configuración importante;
* procedimiento básico de mantenimiento.

No documentes secretos ni credenciales.

Ejemplos de servicios que pueden requerir documentación:

* email;
* analytics;
* Google APIs;
* WhatsApp;
* CMS;
* bases de datos;
* servicios de automatización.

Las integraciones deben implementarse de forma desacoplada cuando exista una razón real para poder sustituir el proveedor.

No introduzcas abstracciones complejas únicamente para anticipar proveedores futuros.

---

# Backend y arquitectura

No añadas una base de datos, sistema de autenticación, API compleja, CMS o infraestructura backend si el proyecto no lo necesita.

Una landing de negocio sencilla puede funcionar sin base de datos.

Introduce backend adicional cuando exista una necesidad real, por ejemplo:

* persistencia de datos;
* autenticación;
* reservas;
* panel administrativo;
* contenido dinámico;
* integraciones complejas;
* automatizaciones;
* funcionalidades SaaS.

Para proyectos que requieran base de datos, utiliza Supabase cuando sea apropiado dentro del stack de AletheIA.

La arquitectura debe crecer con el producto, no antes que él.

---

# Privacidad y datos personales

Si un formulario recopila datos personales, el proyecto debe contemplar las obligaciones de privacidad aplicables a su contexto.

Para clientes en México, considera la legislación mexicana aplicable a la protección de datos personales.

Cuando corresponda:

* incluye un aviso de privacidad visible o accesible cerca del formulario;
* informa de forma clara qué datos se recopilan;
* explica su finalidad de manera comprensible;
* evita recopilar datos innecesarios.

No envíes datos personales a servicios de analytics, publicidad o marketing sin evaluar previamente su finalidad, configuración y requisitos de consentimiento aplicables.

No recopiles más información de la necesaria para cumplir el objetivo del formulario.

## Cumplimiento legal

No afirmes que un sitio tiene "cumplimiento legal completo" únicamente porque incluya un aviso de privacidad.

Las obligaciones pueden variar según:

* tipo de negocio;
* datos recopilados;
* finalidad del tratamiento;
* herramientas utilizadas;
* jurisdicción;
* modelo de negocio.

Cuando exista incertidumbre jurídica relevante, identifica el problema y solicita revisión profesional.

No inventes requisitos legales.

---

# Verificación antes de entregar

Antes de una entrega, realiza las verificaciones que sean aplicables al proyecto.

### SEO

* Metadata correcta.
* URLs de producción correctas.
* Open Graph correcto.
* `robots.txt`.
* `sitemap.xml`.
* Headings semánticos.
* JSON-LD cuando corresponda.
* Sin URLs de localhost o dominios temporales.

### Performance

* Imágenes optimizadas.
* Fuentes optimizadas.
* JavaScript innecesario reducido.
* Sin dependencias innecesarias.
* No existen problemas evidentes de layout.
* Lighthouse o herramienta equivalente ejecutada cuando corresponda.

### Seguridad

* No existen secretos en el código.
* Variables de entorno correctamente utilizadas.
* `.env` fuera del repositorio.
* No existen datos sensibles expuestos.
* No existen rutas de prueba innecesarias.
* No existen logs sensibles.

### Backend

* Inputs validados en servidor.
* Errores manejados.
* Estados de interfaz implementados.
* Integraciones configuradas correctamente.
* Protección anti-spam cuando corresponda.

### Honestidad técnica

Al finalizar, distingue claramente entre:

* **verificado:** comprobado mediante ejecución, inspección o herramienta;
* **implementado:** código incorporado pero no necesariamente validado en producción;
* **recomendado:** mejora futura;
* **pendiente:** requiere información, acceso o decisión externa.

Nunca presentes una recomendación como una prueba realizada.

Nunca presentes una suposición como un hecho.

---

# Regla final

Antes de añadir infraestructura, optimización, integración o mecanismo de seguridad, pregunta:

> **¿Qué problema real estamos resolviendo y cuál es la solución proporcional más sencilla?**

La meta no es tener la arquitectura más compleja.

La meta es entregar software:

* seguro;
* rápido;
* accesible;
* indexable;
* mantenible;
* confiable;
* orientado al negocio.

**Construye lo necesario. Mide lo importante. Protege lo sensible. No inventes lo que no sabes.**

# AletheIA — Código, Stack y Dependencias

## Jerarquía de instrucciones

Cuando existan instrucciones diferentes:

1. Sigue las instrucciones de la plataforma y del entorno.
2. Respeta las especificaciones técnicas explícitamente aprobadas para el proyecto.
3. Respeta las instrucciones específicas del proyecto.
4. Sigue las reglas de este documento.
5. Utiliza criterio técnico cuando ninguna regla determine claramente la solución.

Una especificación previamente aprobada para una tarea concreta puede prevalecer sobre una preferencia general de este documento.

No reabras decisiones ya aprobadas sin una razón técnica concreta.

---

## Clean Code

Aplica **SOLID, DRY, KISS y YAGNI** de forma proporcional al problema.

Prioriza:

* código claro;
* responsabilidades bien definidas;
* bajo acoplamiento;
* cohesión;
* duplicación significativa reducida;
* funciones comprensibles;
* componentes mantenibles.

Evita:

* lógica duplicada;
* componentes innecesariamente grandes;
* condicionales excesivamente anidados;
* números mágicos;
* strings hardcodeados cuando representen configuración o datos reutilizables;
* abstracciones prematuras.

No introduzcas abstracciones únicamente para cumplir un principio.

> **La simplicidad es una característica de calidad.**

---

## Naming

Usa nombres descriptivos y consistentes con el proyecto.

Bien:

`createInvoice()`

Mal:

`doThing()`

Bien:

`CustomerCard`

Mal:

`Card2`

Evita abreviaturas innecesarias.

Respeta las convenciones de naming existentes del proyecto cuando sean coherentes.

---

## TypeScript

Utiliza TypeScript strict.

* Evita `any`.
* Prefiere tipos precisos.
* Usa `interface`, `type` y genéricos cuando aporten claridad.
* Infiere tipos cuando la inferencia sea suficiente.
* No añadas tipos explícitos innecesarios.
* No utilices casts para ocultar problemas de tipado.

Si necesitas utilizar `any`, debe existir una razón técnica clara.

---

## React

Prefiere Server Components cuando no exista una necesidad de Client Component.

Utiliza Client Components cuando sean necesarios para:

* interacción;
* estado;
* eventos del navegador;
* APIs exclusivamente disponibles en el cliente;
* librerías que requieran ejecución en cliente.

Evita:

* `useEffect` innecesarios;
* estado innecesario;
* memoización prematura;
* hooks creados únicamente para envolver funciones simples.

Extrae lógica a hooks cuando exista comportamiento con estado, efectos o lógica reutilizable que realmente se beneficie de un hook.

---

## Next.js

Utiliza App Router.

Prefiere las APIs nativas de Next.js cuando sean apropiadas.

Utiliza Server Actions cuando simplifiquen correctamente una operación server-side.

Utiliza:

* `metadata`;
* `robots.ts`;
* `sitemap.ts`;
* `not-found.tsx`;
* `loading.tsx`;
* `error.tsx`;
* Suspense;

cuando aporten valor real al proyecto.

No implementes estas herramientas únicamente por cumplir una checklist.

Prioriza arquitectura Server-first cuando sea apropiado.

---

## Tailwind CSS

Prefiere utilidades de Tailwind.

Evita CSS personalizado cuando Tailwind resuelva correctamente el problema.

El CSS personalizado es válido cuando:

* Tailwind no sea apropiado;
* exista una necesidad visual específica;
* mejore mantenibilidad;
* sea requerido por una librería o plataforma.

Mantén consistencia en:

* espaciado;
* tipografía;
* tamaños;
* responsive behavior;
* estados interactivos.

---

## Componentes

Antes de crear un componente:

1. Busca componentes existentes.
2. Comprueba si alguno puede reutilizarse razonablemente.
3. Si existe un patrón realmente compartido, reutilízalo.
4. Si no existe, crea el componente apropiado.

No generalices componentes únicamente para anticipar posibles usos futuros.

Un componente específico de un cliente puede ser perfectamente válido cuando su comportamiento no forma parte de un patrón compartido.

Evita duplicar UI cuando la duplicación sea real y significativa.

---

## Stack preferido

El stack estándar de AletheIA es:

* Next.js + App Router
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Hook Form + Zod para formularios cuando aporten valor
* Supabase cuando el proyecto requiera backend o base de datos
* Vercel como plataforma estándar de deployment de AletheIA
* Framer Motion únicamente cuando aporte valor real

No añadas tecnologías del stack opcional a un proyecto únicamente porque estén disponibles.

---

## Dependencias y librerías

No introduzcas dependencias nuevas sin una razón técnica.

Antes de añadir una dependencia no contemplada en una especificación aprobada, evalúa:

* necesidad;
* beneficio;
* alternativas nativas;
* alternativas existentes en el proyecto;
* mantenimiento;
* compatibilidad;
* impacto en rendimiento;
* complejidad añadida.

### Dependencias previamente aprobadas

Si una dependencia ya está incluida en una especificación técnica aprobada, puede instalarse durante la implementación sin solicitar aprobación nuevamente.

### Principio

> **No añadas una dependencia cuando el stack existente pueda resolver el problema de forma clara y mantenible.**

No dupliques funcionalidad.

Si el proyecto ya utiliza una librería para:

* iconos;
* formularios;
* fechas;
* validación;
* UI;

utiliza la existente cuando sea apropiado.

---

## Mantenimiento de dependencias

Antes de introducir una dependencia nueva:

* comprueba que esté mantenida;
* verifica compatibilidad con las versiones actuales;
* evita paquetes deprecated o abandonados;
* revisa su documentación oficial cuando sea necesario.

No actualices dependencias importantes únicamente por estar disponibles versiones nuevas.

No actualices major versions sin una razón y aprobación cuando el cambio pueda afectar la estabilidad del proyecto.

---

## Seguridad de dependencias

Utiliza el package manager del proyecto para realizar auditorías de dependencias cuando corresponda.

Ejemplo:

`pnpm audit`

No actualices automáticamente paquetes únicamente para eliminar una advertencia si hacerlo puede introducir regresiones.

Las vulnerabilidades de severidad alta o crítica deben:

1. investigarse;
2. evaluarse según su impacto real;
3. resolverse cuando sea razonablemente posible;
4. o documentarse explícitamente si no existe una solución segura inmediata.

---

## Rendimiento y bundle

Evalúa el impacto de nuevas dependencias sobre:

* JavaScript enviado al cliente;
* bundle size;
* tiempo de carga;
* Server/Client boundary;
* Core Web Vitals cuando sean relevantes.

Para funcionalidades pequeñas, prefiere soluciones nativas o ligeras.

No utilices un límite arbitrario de KB como única regla de decisión.

Una dependencia más pesada puede estar justificada si aporta un valor significativo y no existe una alternativa razonable.

---

## Git

Mantén commits enfocados cuando se solicite crear commits.

Un commit debe representar un cambio lógico.

Ejemplo:

`fix: correct og:image URL`

Evita:

`cambios`

No mezcles cambios no relacionados en un mismo commit.

No realices:

* commits;
* push;
* merges;
* rebases;
* operaciones destructivas;

salvo que el usuario lo solicite explícitamente o exista una instrucción de proyecto que lo autorice.

Antes de entregar un cambio, verifica que `.gitignore` cubra como mínimo los archivos y directorios sensibles y generados correspondientes al stack utilizado, incluyendo:

* `node_modules`
* `.env`
* `.env.local`
* `.next`
* `dist`

Nunca subas:

* API keys;
* tokens;
* credenciales;
* secretos;
* archivos `.env` reales.

Si una credencial fue expuesta accidentalmente:

1. informa inmediatamente;
2. identifica qué credencial fue afectada;
3. recomienda su rotación;
4. no minimices ni ocultes la exposición.

---

## Documentación

El código debe ser suficientemente claro para entenderse por sí mismo.

Comenta únicamente cuando el comentario explique:

* una decisión no obvia;
* una restricción importante;
* un comportamiento inesperado;
* una razón que no pueda deducirse fácilmente del código.

No escribas comentarios que simplemente describan lo que el código ya expresa.

Prefiere actualizar el README o documentación técnica cuando la información sea relevante para otros desarrolladores.

---

## Regla final

Antes de añadir código, una abstracción, una dependencia o una tecnología, pregunta:

> **¿Esto hace que el proyecto sea realmente mejor para el problema que estamos resolviendo?**

Si la respuesta es no, no lo construyas.

**Calidad no significa complejidad.
Clean Code no significa más código.
Arquitectura no significa más capas.**

El objetivo es producir software profesional, claro y mantenible con la menor complejidad razonable.

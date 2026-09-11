# AletheIA — Diseño, UI/UX

## Filosofía de UI

Las interfaces de AletheIA deben sentirse:

* modernas;
* elegantes;
* profesionales;
* claras;
* intencionales;
* visualmente cuidadas.

El resultado debe sentirse diseñado específicamente para el negocio, no como una plantilla genérica.

"Premium" significa **calidad percibida, coherencia, claridad y atención al detalle**, no utilizar necesariamente efectos visuales llamativos.

El estilo visual debe adaptarse a:

* la identidad del negocio;
* su audiencia;
* su posicionamiento;
* sus objetivos;
* el tipo de conversión buscada.

Una barbería, un restaurante y un consultorio no deben terminar pareciendo el mismo sitio con diferentes colores.

---

## Diseño visual

Prioriza:

1. espacio en blanco;
2. tipografía;
3. jerarquía;
4. contraste;
5. alineación;
6. consistencia;
7. composición;
8. claridad.

Las animaciones y efectos visuales deben tener una función.

No añadas una animación, sombra, gradiente, blur o efecto simplemente porque técnicamente es posible.

La estética nunca debe perjudicar:

* legibilidad;
* accesibilidad;
* rendimiento;
* claridad;
* conversión.

---

## Sistema de diseño

Utiliza un sistema visual coherente en cada proyecto.

Puede incluir:

* esquinas redondeadas;
* espaciado consistente;
* sombras sutiles;
* tipografía legible;
* espacio en blanco generoso;
* paleta de color coherente;
* layouts equilibrados;
* botones claramente diferenciados;
* estados hover/focus;
* grids responsivos;
* jerarquía visual clara.

Estas son **preferencias**, no requisitos absolutos.

No fuerces una característica visual si no encaja con la marca o el contenido.

---

## Contenido antes que decoración

El diseño debe partir del contenido y del objetivo del negocio.

No añadas elementos únicamente para llenar espacio.

Evita crear:

* tarjetas innecesarias;
* badges sin función;
* estadísticas inventadas;
* testimonios ficticios;
* iconos decorativos en exceso;
* secciones repetitivas;
* texto genérico para aparentar profundidad.

Si falta información real del cliente, utiliza placeholders claramente identificables durante desarrollo o solicita el contenido necesario.

Nunca inventes:

* reseñas;
* estadísticas;
* certificaciones;
* premios;
* precios;
* horarios;
* ubicaciones;
* resultados;
* testimonios.

---

## Jerarquía y layout

Cada sección debe tener un objetivo principal.

Ejemplos:

* informar;
* demostrar beneficios;
* generar confianza;
* explicar servicios;
* resolver objeciones;
* convertir.

Una sección puede cumplir funciones secundarias, pero debe existir una intención principal clara.

No utilices automáticamente la misma estructura en todos los proyectos.

La arquitectura de la página debe responder al negocio y al recorrido del usuario.

### Tipografía

Mantén una jerarquía tipográfica consistente.

Utiliza un número razonable de escalas y pesos.

No existe un límite rígido universal de tamaños tipográficos; prioriza:

* jerarquía;
* legibilidad;
* consistencia;
* responsive behavior.

### Espaciado

Utiliza una escala consistente, preferentemente basada en las convenciones del sistema de diseño y Tailwind.

Evita valores arbitrarios cuando exista una alternativa coherente.

Los valores personalizados están permitidos cuando resuelvan una necesidad real de composición.

### Contraste

Busca cumplir **WCAG 2.2 AA** como objetivo de accesibilidad.

Como referencia:

* texto normal: contraste mínimo 4.5:1;
* texto grande: contraste mínimo 3:1.

Verifica también estados interactivos y elementos relevantes de la interfaz.

No sacrifiques legibilidad por estética.

---

## Anti-patrones "vibecoded"

Los siguientes patrones están prohibidos **por defecto**:

* Hero con degradado morado/azul genérico.
* Badges tipo píldora flotantes sin función.
* Glassmorphism repetido sin una razón visual clara.
* Texto con gradiente utilizado únicamente como decoración.
* Tres tarjetas idénticas de features por obligación.
* Grids de iconos repetitivos sin jerarquía.
* Copy genérico o vacío.
* Secciones añadidas únicamente para hacer la página más larga.
* Animaciones excesivas.
* Efectos de scroll que distraigan.
* Contadores o estadísticas sin datos reales.
* Testimonios o reseñas inventadas.
* El mismo orden de secciones en todos los proyectos.
* Diseños que parecen una plantilla de IA aunque técnicamente estén bien implementados.

Estos patrones pueden utilizarse cuando exista una razón de diseño clara o cuando el cliente los solicite, siempre que no perjudiquen UX, accesibilidad o rendimiento.

---

## Referencias visuales

Cuando el proyecto requiera definir una dirección visual desde cero, busca 2–3 referencias relevantes antes de diseñar.

Las referencias pueden provenir de:

* 21st.dev;
* Landingfolio;
* Dribbble;
* sitios web reales de negocios similares;
* otras fuentes de referencia visual apropiadas.

Las referencias sirven para analizar:

* composición;
* jerarquía;
* tipografía;
* uso del espacio;
* navegación;
* interacción;
* patrones de conversión.

No copies diseños, branding, assets ni contenido.

Extrae principios y adáptalos al proyecto.

Si la identidad visual ya está claramente definida, no es necesario buscar referencias adicionales.

---

## Formularios y CTAs

Todo formulario debe gestionar explícitamente:

* estado normal;
* estado de carga;
* estado de éxito;
* estado de error;
* validación.

Durante el envío:

* el botón debe reflejar el estado de carga;
* debe evitarse el envío accidental duplicado;
* el usuario debe recibir feedback visible.

Los errores deben ser específicos y comprensibles.

Ejemplo:

> "Introduce un correo electrónico válido."

es preferible a:

> "Error en el formulario."

La validación del cliente mejora UX, pero **nunca sustituye la validación del servidor** cuando los datos llegan al backend.

### CTAs

El CTA principal debe destacar visualmente sobre los secundarios.

No presentes múltiples acciones principales con el mismo peso si compiten por la atención del usuario.

El CTA principal debe corresponder al objetivo real del negocio.

Ejemplos:

* barbería → reservar cita / WhatsApp;
* restaurante → reservar mesa / ver menú;
* consultorio → solicitar cita / contactar;
* servicio profesional → solicitar diagnóstico / contacto.

No utilices "Contáctanos" automáticamente si existe una acción más específica y útil.

---

## Responsive Design

Diseña **Mobile First**.

El layout debe adaptarse fluidamente a:

* mobile;
* tablet;
* desktop;
* pantallas grandes.

Los breakpoints deben responder al contenido, no únicamente a dispositivos específicos.

Como mínimo, verifica visualmente:

* ~375px;
* ~768px;
* ~1280px.

También comprueba que no existan problemas en anchos intermedios.

Verifica especialmente:

* navegación;
* hero;
* grids;
* formularios;
* imágenes;
* botones;
* overflow horizontal;
* tipografía;
* espaciado.

Los elementos táctiles importantes deben tener un área de interacción de aproximadamente **44×44px o mayor** cuando sea viable.

---

## Accesibilidad

Utiliza HTML semántico.

Prioriza:

* navegación por teclado;
* foco visible;
* labels asociados a formularios;
* textos alternativos apropiados;
* contraste suficiente;
* estructura semántica;
* estados accesibles;
* orden lógico de navegación.

Utiliza:

`<nav>`, `<main>`, `<section>`, `<footer>`, `<button>`, `<a>`

cuando correspondan.

Evita:

`<div onClick>`

cuando un elemento semántico apropiado exista.

### Formularios

Cada campo debe tener un `<label>` asociado.

No utilices el placeholder como sustituto del label.

Los mensajes de error deben poder asociarse con el campo correspondiente.

### Iconos

Los iconos puramente decorativos deben ocultarse apropiadamente de tecnologías asistivas.

Los iconos que transmitan información o funcionen como controles deben tener un nombre accesible adecuado.

No añadas `aria-label` indiscriminadamente.

### Movimiento

Las animaciones deben respetar las preferencias del usuario, incluyendo `prefers-reduced-motion`.

Si una animación no es necesaria para comprender o utilizar la interfaz, debe poder reducirse o eliminarse para usuarios que lo soliciten.

---

## Experiencia de usuario

Reduce fricción.

Las acciones importantes deben ser obvias.

El usuario debe entender rápidamente:

1. qué ofrece el negocio;
2. por qué debería confiar;
3. qué puede hacer;
4. cómo hacerlo.

Prioriza:

* claridad;
* feedback inmediato;
* navegación intuitiva;
* lectura sencilla;
* pocos pasos para acciones importantes.

No reduzcas clics automáticamente si hacerlo perjudica comprensión o confianza.

---

## Optimización de conversión

Todo sitio de negocio debe considerar:

* propuesta de valor clara;
* confianza;
* beneficios;
* evidencia real;
* jerarquía visual;
* CTA principal;
* reducción de fricción;
* información relevante para la decisión.

La conversión debe diseñarse alrededor del objetivo real del negocio.

No optimices únicamente para "que el usuario haga clic".

Una buena conversión significa ayudar al usuario correcto a realizar la acción adecuada con la menor fricción razonable.

---

## Performance visual

El diseño no debe introducir problemas innecesarios de rendimiento.

Evita por defecto:

* imágenes excesivamente pesadas;
* animaciones costosas;
* JavaScript innecesario;
* componentes client-side sin necesidad;
* efectos visuales que requieran procesamiento excesivo;
* dependencias de UI innecesarias.

Prioriza la percepción de velocidad sin sacrificar la calidad visual.

Cuando exista un problema de rendimiento, **mídelo antes de aplicar optimizaciones complejas**.

---

## Regla final de diseño

Antes de añadir cualquier elemento visual, pregunta:

> **¿Ayuda al usuario, al negocio o a la comprensión de la página?**

Si no cumple una función clara, probablemente no sea necesario.

El objetivo no es construir la página más llamativa.

El objetivo es construir **la página adecuada para ese negocio, para esos usuarios y para esa conversión**, con una ejecución visual que se sienta profesional y deliberada.

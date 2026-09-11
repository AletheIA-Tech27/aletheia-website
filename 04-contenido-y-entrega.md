# AletheIA — Contenido, Documentación y Checklist de Entrega

## Propósito

Este documento define las reglas para:

* contenido y copy;
* documentación;
* verificación de compatibilidad;
* QA antes de una entrega;
* checklist de proyectos;
* comunicación de pendientes.

Las verificaciones deben ser **proporcionales al alcance de la tarea**.

Una modificación pequeña no requiere repetir todas las pruebas de una entrega completa.

Cuando una tarea implique una entrega completa del proyecto, utiliza la checklist ampliada.

---

# Contenido y Copy

## Información real

Nunca generes copy genérico de relleno para hacerlo pasar como contenido final del cliente.

Si todavía no existe contenido real, utiliza placeholders claramente identificables.

Ejemplo:

`[PENDIENTE: contenido real del cliente]`

No presentes contenido provisional como si hubiera sido proporcionado o aprobado por el cliente.

## Imágenes

Nunca utilices fotografías de bancos de imágenes como si representaran:

* clientes reales;
* proyectos realizados;
* instalaciones reales;
* miembros reales del equipo;
* testimonios reales.

Si se utiliza una imagen de ejemplo, debe quedar claramente identificada durante desarrollo:

`[EJEMPLO — no es cliente real]`

Cuando corresponda, documenta qué imágenes deben ser sustituidas antes de la entrega.

## Testimonios y evidencia

Nunca inventes:

* testimonios;
* reseñas;
* estadísticas;
* conversiones;
* porcentajes;
* número de clientes;
* premios;
* certificaciones;
* resultados;
* comparaciones;
* afirmaciones de rendimiento.

Todo dato cuantitativo debe provenir de una fuente real y verificable.

Si falta información:

`[PENDIENTE: dato verificado]`

No reemplaces datos faltantes por números plausibles.

## Información del negocio

No inventes información del cliente como:

* horarios;
* teléfono;
* dirección;
* precios;
* servicios;
* redes sociales;
* correo;
* políticas;
* métodos de pago.

Si no está confirmada:

`[PENDIENTE: confirmar con cliente]`

---

# Documentación mínima de entrega

Cuando se complete un proyecto para un cliente, genera un `README.md` breve y útil.

No conviertas el README del cliente en documentación técnica innecesariamente compleja.

Cuando aplique, debe incluir:

## Contenido

Cómo actualizar contenido básico como:

* textos;
* imágenes;
* información del negocio;

sin tocar código, si el proyecto fue diseñado para permitirlo.

Si los cambios requieren código, explícalo claramente.

## Deployment

Explica brevemente el flujo de deployment utilizado por AletheIA y Vercel.

Incluye únicamente los pasos necesarios para el mantenimiento normal.

## Servicios externos

Documenta los servicios externos conectados.

Por ejemplo:

* dominio;
* Vercel;
* Google Business Profile;
* email;
* analytics;
* base de datos;
* otros servicios relevantes.

Indica:

* nombre del servicio;
* propósito;
* qué parte del proyecto utiliza.

Nunca incluyas:

* contraseñas;
* API keys;
* tokens;
* secretos;
* credenciales.

## Soporte

Incluye la información de contacto o canal definido para solicitar soporte futuro.

No inventes datos de contacto.

Si todavía no está definido:

`[PENDIENTE: contacto de soporte]`

---

# Compatibilidad de navegadores

La compatibilidad debe evaluarse según el alcance y la audiencia del proyecto.

Para una entrega web estándar, prioriza como mínimo:

* Chrome;
* Safari desktop;
* Safari iOS cuando sea relevante para la audiencia.

Cuando sea posible, prueba en dispositivos reales.

Los simuladores y herramientas de desarrollo son útiles, pero no siempre sustituyen completamente las pruebas en dispositivos reales.

Presta especial atención a:

* responsive behavior;
* formularios;
* navegación;
* animaciones;
* imágenes;
* `position: sticky`;
* flexbox/grid;
* inputs;
* fechas;
* comportamiento táctil.

No utilices features experimentales o de soporte limitado sin una razón concreta.

Cuando exista duda sobre compatibilidad, verifica documentación y soporte actual del navegador.

No dependas exclusivamente de una herramienta externa como única fuente de verdad.

---

# Formularios

Los formularios deben probarse funcionalmente, no únicamente visualmente.

Para una entrega final, cuando el entorno lo permita:

1. abre el formulario;
2. prueba validaciones;
3. realiza un envío;
4. verifica el resultado;
5. confirma que los datos llegan correctamente al destino;
6. verifica el estado de éxito;
7. verifica el comportamiento ante errores.

Cuando sea relevante, realiza la prueba en más de un navegador.

Nunca realices envíos reales a cuentas de terceros sin autorización o sin utilizar el entorno de prueba apropiado.

---

# Checklist técnica — cambios y tareas

Utiliza esta checklist únicamente para los elementos afectados por la tarea.

### Contenido

* [ ] No queda `Lorem ipsum`.
* [ ] No queda copy provisional presentado como contenido final.
* [ ] No existen testimonios o estadísticas inventadas.
* [ ] Las imágenes de ejemplo están claramente identificadas.
* [ ] La información del negocio utilizada está confirmada o marcada como pendiente.

### UI/UX

* [ ] La interfaz funciona en mobile.
* [ ] No existen elementos desbordados.
* [ ] Los CTAs principales son claros.
* [ ] Los formularios muestran estados apropiados.
* [ ] Los elementos interactivos funcionan con teclado cuando corresponda.

### SEO

Cuando la tarea afecte SEO o implique una entrega completa:

* [ ] `og:image` apunta al recurso correcto.
* [ ] `og:url` utiliza el dominio correcto.
* [ ] `og:title` es correcto.
* [ ] `og:description` es correcta.
* [ ] No quedan URLs de localhost o dominios temporales.
* [ ] Sitemap correcto.
* [ ] Robots correcto.
* [ ] JSON-LD correcto cuando corresponda.

### Links

Los enlaces externos deben apuntar a destinos reales confirmados.

Comprueba especialmente:

* redes sociales;
* email;
* WhatsApp;
* mapas;
* reservas;
* llamadas telefónicas;
* enlaces externos importantes.

No inventes URLs.

---

# Checklist de accesibilidad

Cuando corresponda:

* [ ] Imágenes informativas tienen `alt` apropiado.
* [ ] Imágenes decorativas no generan ruido innecesario para tecnologías asistivas.
* [ ] Formularios tienen labels asociados.
* [ ] El foco es visible.
* [ ] La navegación por teclado funciona.
* [ ] El contraste es suficiente.
* [ ] Los botones y enlaces tienen nombres accesibles.
* [ ] No existen interacciones disponibles únicamente mediante mouse.

---

# Checklist de entrega final

Antes de entregar un proyecto completo al cliente, revisa:

### SEO

* [ ] Metadata revisada.
* [ ] Open Graph revisado.
* [ ] Twitter/X metadata revisada cuando corresponda.
* [ ] Sitemap generado.
* [ ] Robots generado.
* [ ] JSON-LD agregado cuando corresponda.
* [ ] No existen referencias de desarrollo en producción.

### Performance

* [ ] Imágenes optimizadas.
* [ ] Fuentes revisadas.
* [ ] JavaScript innecesario reducido.
* [ ] Dependencias innecesarias eliminadas.
* [ ] No existen problemas evidentes de layout.
* [ ] Lighthouse/PageSpeed ejecutado cuando sea posible.
* [ ] Resultado real documentado cuando se haya ejecutado.

No inventes puntajes de Lighthouse o PageSpeed.

### Seguridad

* [ ] No existen credenciales en el código.
* [ ] No existen API keys expuestas.
* [ ] Variables de entorno correctamente configuradas.
* [ ] `.env` fuera del repositorio.
* [ ] No existen rutas de prueba innecesarias.
* [ ] No existen logs con información sensible.
* [ ] `.gitignore` revisado.
* [ ] No existen secretos expuestos en el historial conocido del repositorio.

### Formularios e integraciones

* [ ] Formulario probado end-to-end.
* [ ] Validación cliente comprobada.
* [ ] Validación servidor comprobada.
* [ ] Estado de carga comprobado.
* [ ] Estado de éxito comprobado.
* [ ] Estado de error comprobado.
* [ ] Protección anti-spam implementada cuando corresponda.
* [ ] Integraciones externas funcionando.

### Responsive

* [ ] Mobile revisado.
* [ ] Tablet revisado cuando corresponda.
* [ ] Desktop revisado.
* [ ] No existe overflow horizontal.
* [ ] Elementos táctiles funcionan correctamente.

### Navegadores

Cuando corresponda a una entrega final:

* [ ] Chrome.
* [ ] Safari desktop.
* [ ] Safari iOS o dispositivo equivalente.

### Dependencias

* [ ] Auditoría de dependencias ejecutada cuando corresponda.
* [ ] Vulnerabilidades High/Critical revisadas.
* [ ] No existen dependencias innecesarias.

Utiliza el package manager del proyecto para la auditoría.

Ejemplo:

`pnpm audit`

No actualices dependencias automáticamente solo para eliminar una advertencia si existe riesgo de regresión.

### Documentación

* [ ] README de entrega generado.
* [ ] Servicios externos documentados.
* [ ] Instrucciones de mantenimiento básicas documentadas.
* [ ] Información de soporte incluida o marcada como pendiente.
* [ ] No existen secretos en la documentación.

### Privacidad

* [ ] Aviso de privacidad presente cuando corresponda.
* [ ] Formularios recopilan únicamente los datos necesarios.
* [ ] Integraciones de analytics/tracking revisadas.
* [ ] No se envían datos personales innecesarios a terceros.

---

# Tareas pequeñas vs. entrega completa

No repitas una auditoría completa después de cada modificación.

Ejemplos:

### Cambio pequeño

Cambiar:

`"Reservar"`

por:

`"Reservar cita"`

Verifica principalmente:

* que el cambio sea correcto;
* que no rompa el layout;
* que el CTA continúe funcionando.

No es necesario volver a ejecutar todas las pruebas de navegador, Lighthouse, seguridad y deployment.

### Cambio significativo

Modificar:

* formulario;
* navegación;
* arquitectura;
* integraciones;
* SEO;
* sistema de estilos;
* múltiples secciones;

requiere pruebas más amplias relacionadas con el área afectada.

### Entrega final

Una entrega completa activa la checklist ampliada.

---

# Antes de terminar cualquier tarea

Finaliza con un resumen corto que indique:

## 1. Archivos modificados

Lista los archivos realmente modificados.

## 2. Verificaciones realizadas

Indica únicamente las pruebas y verificaciones que realmente se ejecutaron.

Ejemplo:

* TypeScript: verificado.
* ESLint: verificado.
* Playwright smoke tests: verificado.
* Lighthouse: no ejecutado.

## 3. Pendientes

Indica cualquier elemento que requiera:

* contenido real;
* imágenes del cliente;
* confirmaciones;
* credenciales/configuración externa;
* revisión legal;
* pruebas en dispositivos;
* decisión del cliente.

Nunca ocultes pendientes para aparentar que el proyecto está terminado.

---

# Regla final

Una entrega profesional no significa marcar todos los checkboxes.

Significa saber **qué debe verificarse, por qué debe verificarse y cuándo debe verificarse**.

No ejecutes pruebas innecesarias únicamente para completar una checklist.

No omitas pruebas importantes únicamente para ahorrar tiempo.

> **Verifica lo que importa. Documenta lo que hiciste. Declara lo que falta. Nunca inventes resultados.**

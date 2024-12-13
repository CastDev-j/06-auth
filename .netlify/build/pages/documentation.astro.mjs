/* empty css                                         */
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DZs5L0Uw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as firebase } from '../chunks/config_YlJ07gRB.mjs';
import { $ as $$Layout } from '../chunks/Layout_Z1GHdq6V.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Documentation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Documentation;
  const firebaseUser = firebase.auth.currentUser;
  if (!firebaseUser) {
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Timely | Documentaci\xF3n", "data-astro-cid-7boucb6x": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contenedor" data-astro-cid-7boucb6x> <header class="fade-up" data-astro-cid-7boucb6x> <h1 class="text-4xl font-bold text-center text-gradient" data-astro-cid-7boucb6x>
Documentación de Timely
</h1> <p class="text-center mt-2 text-lg text-gray-700" data-astro-cid-7boucb6x>
Creado por <strong data-astro-cid-7boucb6x>Andrés Castillo Jiménez</strong>, estudiante y
          desarrollador en constante aprendizaje.
</p> <p class="text-center text-sm text-gray-500" data-astro-cid-7boucb6x>
Para consultas, quejas y sugerencias, mis datos están en el pie de
          página.
</p> </header> <div class="fade-up" style="transition-delay: .1s;" data-astro-cid-7boucb6x> <h2 class="section-title" data-astro-cid-7boucb6x>¿Qué es Timely?</h2> <p data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Timely</strong> es una herramienta práctica para estudiantes que
          desean organizar sus horarios de manera personalizada y segura. Este proyecto
          es una página de práctica que utiliza tecnologías modernas como
<strong data-astro-cid-7boucb6x>Astro</strong>, <strong data-astro-cid-7boucb6x>Firebase</strong>, <strong data-astro-cid-7boucb6x>React</strong>, y más.
</p> </div> <div class="fade-up" style="transition-delay: .2s;" data-astro-cid-7boucb6x> <hr data-astro-cid-7boucb6x> <h2 class="section-title" data-astro-cid-7boucb6x>Objetivos del Proyecto</h2> <ul data-astro-cid-7boucb6x> <li data-astro-cid-7boucb6x>
Ayudar a estudiantes a crear, modificar y gestionar horarios
            personalizados.
</li> <li data-astro-cid-7boucb6x>
Ofrecer plantillas estéticas y personalizables para diseñar
            horarios.
</li> <li data-astro-cid-7boucb6x>Garantizar la privacidad y seguridad de los usuarios.</li> <li data-astro-cid-7boucb6x>
Fomentar la práctica y aprendizaje en el desarrollo de aplicaciones
            modernas.
</li> </ul> </div> <div class="fade-up" style="transition-delay: .3s;" data-astro-cid-7boucb6x> <hr data-astro-cid-7boucb6x> <h2 class="section-title" data-astro-cid-7boucb6x>Características Principales</h2> <ul data-astro-cid-7boucb6x> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Autenticación de Usuarios</strong>: Registro, inicio de
            sesión y recuperación de contraseñas.
</li> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Verificación de Correos</strong>: Seguridad adicional para
            las cuentas.
</li> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Soporte para Google y GitHub</strong>: Opciones de inicio de
            sesión social.
</li> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Estilo Responsivo</strong>: Diseño adaptativo para
            dispositivos móviles y desktop.
</li> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Gestión de Horarios</strong>: Crear, eliminar, modificar y
            descargar horarios como imagen o PDF.
</li> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Personalización Completa</strong>: Escoge entre plantillas
            prediseñadas o crea un diseño único.
</li> </ul> </div> <div class="fade-up" style="transition-delay: .4s;" data-astro-cid-7boucb6x> <hr data-astro-cid-7boucb6x> <h2 class="section-title" data-astro-cid-7boucb6x>Tecnologías Utilizadas</h2> <ul data-astro-cid-7boucb6x> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Astro</strong>: Framework para generación estática y rápida.
</li> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Firebase</strong>: Manejo de autenticación y base de datos
            en tiempo real.
</li> <li data-astro-cid-7boucb6x><strong data-astro-cid-7boucb6x>React</strong>: Interfaces dinámicas y modernas.</li> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Anime.js</strong>: Animaciones suaves y personalizadas.
</li> <li data-astro-cid-7boucb6x><strong data-astro-cid-7boucb6x>Tailwind CSS</strong>: Estilo rápido y responsivo.</li> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>Shiki</strong>: Resaltado de código en la documentación.
</li> <li data-astro-cid-7boucb6x> <strong data-astro-cid-7boucb6x>SweetAlert2</strong>: Alertas interactivas y amigables.
</li> <li data-astro-cid-7boucb6x><strong data-astro-cid-7boucb6x>TypeScript</strong>: Desarrollo robusto y tipado.</li> </ul> </div> <footer class="fade-up" style="transition-delay: .6s;" data-astro-cid-7boucb6x> <hr data-astro-cid-7boucb6x> <div class="text-center" data-astro-cid-7boucb6x> <p class="text-sm text-gray-600" data-astro-cid-7boucb6x>
Creado por <strong data-astro-cid-7boucb6x>Andrés Castillo Jiménez</strong>.
</p> <p class="text-sm text-gray-600" data-astro-cid-7boucb6x>
¿Tienes un proyecto en mente? ¡Contáctame! Encuentra mis datos en el
            pie de página.
</p> </div> </footer> </section> ` })} `;
}, "C:/Users/Laptop/Desktop/06-auth/src/pages/documentation.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/06-auth/src/pages/documentation.astro";
const $$url = "/documentation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Documentation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

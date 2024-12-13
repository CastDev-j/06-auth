/* empty css                                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DZs5L0Uw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$FormLayout } from '../chunks/FormLayout_DhXUIwpF.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "FormLayout", $$FormLayout, { "title": "Timely |404: No Encontrado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center gap-6 p-6"> <p class="text-red-400 font-bold text-6xl">404</p> <p class="text-xl md:text-2xl text-gray-600 mb-8 text-center max-w-xl px-4">
¡Oops! La página que buscas no existe o ha sido movida.
</p> <a href="/" class="bg-blue-400 p-4 py-2 text-white rounded-lg shadow-xl hover:bg-red-400 hover:scale-105 transform transition-all duration-200 text-lg md:text-xl font-semibold">
Volver a Inicio
</a> </section> ` })}`;
}, "C:/Users/Laptop/Desktop/06-auth/src/pages/404.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/06-auth/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

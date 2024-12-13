import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_DZs5L0Uw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$FormContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormContainer;
  const { title = "Componente Contenedor de Formulario" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="font-sans min-h-screen flex items-center justify-center bg-gray-100 animate"> <div class="relative w-full max-w-sm min-w-min px-6"> <div class="absolute inset-0 transform rotate-6 bg-blue-400 shadow-lg rounded-3xl"></div> <div class="absolute inset-0 transform -rotate-6 bg-red-400 shadow-lg rounded-3xl"></div> <div class="relative bg-white p-6 rounded-3xl shadow-md"> <h1 class="text-center text-xl font-semibold text-gray-700">${title}</h1> ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "C:/Users/Laptop/Desktop/06-auth/src/components/FormContainer.astro", void 0);

export { $$FormContainer as $ };

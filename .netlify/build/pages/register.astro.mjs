/* empty css                                         */
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DZs5L0Uw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$FormLayout } from '../chunks/FormLayout_DhXUIwpF.mjs';
import { $ as $$FormContainer } from '../chunks/FormContainer_anGnd3Q0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const { title = "Timely | Registrar usuario" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "FormLayout", $$FormLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormContainer", $$FormContainer, { "title": title }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<form id="register-form" class="mt-6 space-y-6"> <input type="text" name="name" placeholder="Nombre completo" class="w-full h-12 bg-gray-100 rounded-xl shadow-md placeholder-gray-500 focus:bg-blue-100 focus:outline-none px-4"> <input type="text" name="email" placeholder="Correo electrónico" class="w-full h-12 bg-gray-100 rounded-xl shadow-md placeholder-gray-500 focus:bg-blue-100 focus:outline-none px-4"> <input type="password" name="password" placeholder="Contraseña" class="w-full h-12 bg-gray-100 rounded-xl shadow-md placeholder-gray-500 focus:bg-blue-100 focus:outline-none px-4"> <div class="flex items-center text-gray-600 space-x-4"> <hr class="flex-1 border-gray-300"> <span class="text-sm">Confirmar contraseña</span> <hr class="flex-1 border-gray-300"> </div> <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" class="w-full h-12 bg-gray-100 rounded-xl shadow-md placeholder-gray-500 focus:bg-blue-100 focus:outline-none px-4"> <button type="submit" id="btn-submit" class="w-full bg-blue-500 text-white py-3 rounded-xl shadow-md hover:shadow-lg focus:outline-none transition-transform transform hover:scale-105">
Registrarse
</button> <div class="text-center text-sm text-gray-600"> <span>¿Ya tienes una cuenta?</span> <a href="/login" class="text-blue-500 hover:underline ml-1">Inicia sesión</a> </div> </form> ` })} ` })} `;
}, "C:/Users/Laptop/Desktop/06-auth/src/pages/register.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/06-auth/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

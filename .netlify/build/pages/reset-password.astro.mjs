/* empty css                                         */
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DZs5L0Uw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$FormLayout } from '../chunks/FormLayout_DhXUIwpF.mjs';
import { $ as $$FormContainer } from '../chunks/FormContainer_anGnd3Q0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPassword;
  const { title = "Timely | Restablecer Contrase\xF1a" } = Astro2.props;
  const email = Astro2.cookies.get("email")?.value ?? "";
  return renderTemplate`${renderComponent($$result, "FormLayout", $$FormLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormContainer", $$FormContainer, { "title": "Restablecer Contrase\xF1a" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<form id="reset-password-form" class="mt-6 space-y-6"> <input type="email" placeholder="Correo electrónico" name="email"${addAttribute(email, "value")} class="w-full h-12 bg-gray-100 rounded-xl shadow-md placeholder-gray-500 focus:bg-blue-100 focus:outline-none px-4"> <button type="submit" id="btn-submit" class="relative font-medium py-2 text-gray-100 hover:text-white transition group"> <div class="absolute inset-0 transform rounded-xl bg-red-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-3"></div> <div class="absolute inset-0 transform rounded-xl bg-blue-400 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-rotate-3"></div> <span class="relative z-10 px-4 py-2 block">
Enviar Correo de Restablecimiento
</span> </button> <div class="text-center text-sm text-gray-600"> <a href="/" class="text-blue-500 hover:underline">Regresar a Iniciar Sesión</a> </div> </form> ` })} ` })} `;
}, "C:/Users/Laptop/Desktop/06-auth/src/pages/reset-password.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/06-auth/src/pages/reset-password.astro";
const $$url = "/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                         */
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DZs5L0Uw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$FormLayout } from '../chunks/FormLayout_DhXUIwpF.mjs';
import { $ as $$FormContainer } from '../chunks/FormContainer_anGnd3Q0.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const { title = "Timely | Iniciar Sesi\xF3n" } = Astro2.props;
  const email = Astro2.cookies.get("email")?.value ?? "";
  const rememberMe = Astro2.cookies.get("rememberMe")?.value ?? "";
  return renderTemplate`${renderComponent($$result, "FormLayout", $$FormLayout, { "title": title, "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormContainer", $$FormContainer, { "title": title, "data-astro-cid-sgpqyurt": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<form id="login-form" class="mt-6 space-y-6" data-astro-cid-sgpqyurt> <input type="email" placeholder="Correo electrónico" name="email"${addAttribute(rememberMe === "true" ? email : "", "value")} class="w-full h-12 bg-gray-100 rounded-xl shadow-md placeholder-gray-500 focus:bg-blue-100 focus:outline-none px-4" data-astro-cid-sgpqyurt> <input type="password" placeholder="Contraseña" name="password" class="w-full h-12 bg-gray-100 rounded-xl shadow-md placeholder-gray-500 focus:bg-blue-100 focus:outline-none px-4" data-astro-cid-sgpqyurt> <div class="flex justify-between items-center text-sm text-gray-600" data-astro-cid-sgpqyurt> <label class="flex items-center cursor-pointer" data-astro-cid-sgpqyurt> <input type="checkbox" name="rememberMe" class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded" data-astro-cid-sgpqyurt> <span class="ml-2" data-astro-cid-sgpqyurt>Recuérdame</span> </label> <a href="/reset-password" class="hover:underline" data-astro-cid-sgpqyurt>¿Olvidaste tu contraseña?</a> </div> <button type="submit" id="btn-submit" class="w-full bg-blue-500 text-white py-3 rounded-xl shadow-md hover:shadow-lg focus:outline-none transition-transform transform hover:scale-105" data-astro-cid-sgpqyurt>
Iniciar Sesión
</button> <div class="flex items-center text-gray-600 space-x-4" data-astro-cid-sgpqyurt> <hr class="flex-1 border-gray-300" data-astro-cid-sgpqyurt> <span class="text-sm" data-astro-cid-sgpqyurt>Accede con</span> <hr class="flex-1 border-gray-300" data-astro-cid-sgpqyurt> </div> <div class="flex justify-center space-x-4" data-astro-cid-sgpqyurt> <button type="button" id="btn-github" class="bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105" data-astro-cid-sgpqyurt>
Github
</button> <button type="button" id="btn-google" class="bg-red-500 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105" data-astro-cid-sgpqyurt>
Google
</button> </div> <div class="text-center text-sm text-gray-600" data-astro-cid-sgpqyurt> <span data-astro-cid-sgpqyurt>¿Eres nuevo?</span> <a href="/register" class="text-blue-500 hover:underline ml-1" data-astro-cid-sgpqyurt>Crea una cuenta</a> </div> </form> ` })} ` })}  `;
}, "C:/Users/Laptop/Desktop/06-auth/src/pages/login.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/06-auth/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

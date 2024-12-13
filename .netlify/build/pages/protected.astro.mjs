/* empty css                                         */
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DZs5L0Uw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as firebase } from '../chunks/config_YlJ07gRB.mjs';
import { $ as $$Layout } from '../chunks/Layout_Z1GHdq6V.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const firebaseUser = firebase.auth.currentUser;
  const { user, isLoggedIn } = Astro2.locals;
  if (!isLoggedIn) {
    return Astro2.redirect("/login");
  }
  await firebaseUser?.reload();
  const { emailVerified } = firebaseUser;
  const { avatar, email, name } = user;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagina Protegida" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="my-40 flex justify-center items-center font-sans bg-white fade-up"> <div class="card border bg-white mx-auto p-6 rounded-lg max-w-md"> ${avatar ? renderTemplate`<img${addAttribute(avatar, "src")} alt="Foto de perfil" class="w-32 mx-auto rounded-full -mt-24 border-8">` : renderTemplate`<div class="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white bg-blue-400 flex justify-center items-center"> <span class="text-white text-3xl font-extrabold"> ${name.substring(0, 2)} </span> </div>`} <div class="text-center mt-6"> <h1 class="text-2xl font-bold text-blue-400">${name}</h1> <p class="text-sm font-medium text-gray-700">${email}</p> <div class="flex items-center justify-center my-6"> <p class="text-sm font-medium text-gray-500 mr-1"> ${emailVerified ? "Correo verificado" : "Correo no verificado"} </p> ${emailVerified ? renderTemplate`<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>` : renderTemplate`<svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg>`} </div> </div> <div class="px-6 mt-4 text-center text-sm text-gray-700" id="description">
Frontend Developer, avid reader. Love to take a long walk, swim.
</div> <hr class="mt-6 border-t-2 border-gray-200"> <div class="flex mt-6"> <div class="w-1/2 text-center"> <span class="font-bold text-lg text-red-400"><div id="followers">0</div></span> <p class="text-sm text-gray-600">Followers</p> </div> <div class="w-px bg-gray-300"></div> <div class="w-1/2 text-center"> <span class="font-bold text-lg text-red-400"><div id="following">0</div></span> <p class="text-sm text-gray-600">Following</p> </div> </div> </div> </div>  ` })}`;
}, "C:/Users/Laptop/Desktop/06-auth/src/pages/protected/index.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/06-auth/src/pages/protected/index.astro";
const $$url = "/protected";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

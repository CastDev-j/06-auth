import { c as createComponent, a as createAstro, r as renderTemplate, b as addAttribute, d as renderComponent, f as renderHead, e as renderSlot } from './astro/server_DZs5L0Uw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions } from './ViewTransitions_DVeUOL4Y.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$FormLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "C:/Users/Laptop/Desktop/06-auth/src/layouts/FormLayout.astro", void 0);

export { $$FormLayout as $ };

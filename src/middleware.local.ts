// Esta es una versión local de la autenticación básica, no se recomienda para producción
// Solo para fines de demostración y testeo

// import type { MiddlewareNext } from "astro";
// import { defineMiddleware } from "astro:middleware";

// const privateRoutes = ["/protected", "/"];

// export const onRequest = defineMiddleware(async (context, next) => {
//   const { url } = context;

//   const authHeaders = context.request.headers.get("authorization") ?? "";

//   if (privateRoutes.includes(url.pathname)) {
//     return checkLocalAuth(authHeaders, next);
//   }

//   return next();
// });

// const checkLocalAuth = (authHeaders: string, next: MiddlewareNext) => {
//   if (authHeaders) {
//     const authValue = authHeaders.split(" ").at(-1) ?? "user:pass";
//     const decodedValue = atob(authValue).split(":");
//     console.log(decodedValue);

//     if (decodedValue[0] === "admin" && decodedValue[1] === "admin") {
//       return next();
//     }
//   }

//   return new Response("Unauthorized", {
//     status: 401,
//     headers: {
//       "WWW-Authenticate": 'Basic real="Secure Area"',
//     },
//   });
// };

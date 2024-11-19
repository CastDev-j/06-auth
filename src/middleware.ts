import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";
import { firebase } from "./firebase/config";

const privateRoutes = ["/protected", "/"];
const notAuthenticatedRoutes = ["/login", "/register"];

export const onRequest = defineMiddleware(async (context, next) => {

  const isLoggedIn = !! firebase.auth.currentUser;
  const user = firebase.auth.currentUser;

  const {locals, redirect, url} = context;

  if(user){
    locals.user = {
      email: user.email!,
      name: user.displayName!,
      avatar: user.photoURL!,
      emailVerified: user.emailVerified,
    }
  }
  locals.isLoggedIn = isLoggedIn;

  if(privateRoutes.includes(url.pathname) && !isLoggedIn){
    return redirect("/login");
  }


  if(notAuthenticatedRoutes.includes(url.pathname) && isLoggedIn){
    return redirect("/");
  }


  return next();
});

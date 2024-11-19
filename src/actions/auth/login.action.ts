import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../../firebase/config";
import type { AuthError } from "firebase/auth/cordova";

export const loginUser = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    rememberme: z.boolean(),
  }),
  handler: async ({ password, email, rememberme }, { cookies }) => {
    // Grabar Correo en Cookies

    if (rememberme) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        path: "/",
      });
    }

    // Iniciar Sesion
    try {
      const result = await signInWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );

      const user = {
        uid: result.user.uid,
        email: result.user.email,
      };

      // Mostrar campos del usuario

      
      // Verificar Correo
      return user;
    } catch (error) {
      const firebaseError = error as AuthError;

      if (firebaseError.code === "auth/invalid-credential") {
        throw new Error("Credenciales Invalidas Prueba otro correo o contraseña");
      }

      if (firebaseError.code === "auth/user-not-found") {
        throw new Error("Usuario no encontrado");
      }

      if (firebaseError.code === "auth/wrong-password") {
        throw new Error("Contraseña Incorrecta");
      }

      if (firebaseError.code === "auth/too-many-requests") {
        throw new Error("Demasiados Intentos, Intenta mas tarde");
      }

      if (firebaseError.code === "auth/invalid_string") {
        throw new Error("Correo Invalido");
      }

      throw new Error("Valio Verga y no se por que");
    }
  },
});

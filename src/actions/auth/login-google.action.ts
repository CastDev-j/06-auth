import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebase } from "../../firebase/config";
import type { AuthError } from "firebase/auth/cordova";

export const loginGoogleUser = defineAction({
  accept: "json",
  input: z.any(),
  handler: async (credentials) => {
    const credential = GoogleAuthProvider.credentialFromResult(credentials);

    if (!credential) {
      throw new Error("No se pudo iniciar sesion con Google");
    }

    await signInWithCredential(firebase.auth, credential!);

    return { ok: true };
  },
});

import './_astro_actions_BYTOHrb8.mjs';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { sendPasswordResetEmail, GithubAuthProvider, signInWithCredential, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { f as firebase } from './config_YlJ07gRB.mjs';
import { A as AstroError, p as ActionCalledFromServerError } from './astro/assets-service_YYx57UYi.mjs';
import { i as isActionAPIContext } from './utils_Cwo9_uli.mjs';
import { c as callSafely, a as ActionError, b as ActionInputError } from './shared_B9iFldbu.mjs';
import { signOut } from 'firebase/auth/web-extension';
import 'neotraverse/modern';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './astro/server_DZs5L0Uw.mjs';

function defineAction({
  accept,
  input: inputSchema,
  handler
}) {
  const serverHandler = accept === "form" ? getFormServerHandler(handler, inputSchema) : getJsonServerHandler(handler, inputSchema);
  async function safeServerHandler(unparsedInput) {
    if (typeof this === "function" || !isActionAPIContext(this)) {
      throw new AstroError(ActionCalledFromServerError);
    }
    return callSafely(() => serverHandler(unparsedInput, this));
  }
  Object.assign(safeServerHandler, {
    orThrow(unparsedInput) {
      if (typeof this === "function") {
        throw new AstroError(ActionCalledFromServerError);
      }
      return serverHandler(unparsedInput, this);
    }
  });
  return safeServerHandler;
}
function getFormServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (!(unparsedInput instanceof FormData)) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts FormData."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const baseSchema = unwrapBaseObjectSchema(inputSchema, unparsedInput);
    const parsed = await inputSchema.safeParseAsync(
      baseSchema instanceof z$1.ZodObject ? formDataToObject(unparsedInput, baseSchema) : unparsedInput
    );
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function getJsonServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (unparsedInput instanceof FormData) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts JSON."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const parsed = await inputSchema.safeParseAsync(unparsedInput);
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function formDataToObject(formData, schema) {
  const obj = schema._def.unknownKeys === "passthrough" ? Object.fromEntries(formData.entries()) : {};
  for (const [key, baseValidator] of Object.entries(schema.shape)) {
    let validator = baseValidator;
    while (validator instanceof z$1.ZodOptional || validator instanceof z$1.ZodNullable || validator instanceof z$1.ZodDefault) {
      if (validator instanceof z$1.ZodDefault && !formData.has(key)) {
        obj[key] = validator._def.defaultValue();
      }
      validator = validator._def.innerType;
    }
    if (!formData.has(key) && key in obj) {
      continue;
    } else if (validator instanceof z$1.ZodBoolean) {
      const val = formData.get(key);
      obj[key] = val === "true" ? true : val === "false" ? false : formData.has(key);
    } else if (validator instanceof z$1.ZodArray) {
      obj[key] = handleFormDataGetAll(key, formData, validator);
    } else {
      obj[key] = handleFormDataGet(key, formData, validator, baseValidator);
    }
  }
  return obj;
}
function handleFormDataGetAll(key, formData, validator) {
  const entries = Array.from(formData.getAll(key));
  const elementValidator = validator._def.type;
  if (elementValidator instanceof z$1.ZodNumber) {
    return entries.map(Number);
  } else if (elementValidator instanceof z$1.ZodBoolean) {
    return entries.map(Boolean);
  }
  return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
  const value = formData.get(key);
  if (!value) {
    return baseValidator instanceof z$1.ZodOptional ? void 0 : null;
  }
  return validator instanceof z$1.ZodNumber ? Number(value) : value;
}
function unwrapBaseObjectSchema(schema, unparsedInput) {
  while (schema instanceof z$1.ZodEffects || schema instanceof z$1.ZodPipeline) {
    if (schema instanceof z$1.ZodEffects) {
      schema = schema._def.schema;
    }
    if (schema instanceof z$1.ZodPipeline) {
      schema = schema._def.in;
    }
  }
  if (schema instanceof z$1.ZodDiscriminatedUnion) {
    const typeKey = schema._def.discriminator;
    const typeValue = unparsedInput.get(typeKey);
    if (typeof typeValue !== "string") return schema;
    const objSchema = schema._def.optionsMap.get(typeValue);
    if (!objSchema) return schema;
    return objSchema;
  }
  return schema;
}

const resetPassword = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email()
  }),
  handler: async ({ email }) => {
    try {
      await sendPasswordResetEmail(firebase.auth, email, {
        url: `${"http://localhost:4321"}/login`
      });
      return { message: `Correo de recuperación enviado a ${email}.` };
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/user-not-found") {
        throw new Error("Usuario no encontrado.");
      }
      throw new Error("Error al enviar correo de recuperación.");
    }
  }
});

const loginGithubUser = defineAction({
  accept: "json",
  input: z.any(),
  handler: async (credentials) => {
    const credential = GithubAuthProvider.credentialFromResult(credentials);
    if (!credential) {
      throw new Error("No se pudo iniciar sesion con Google");
    }
    await signInWithCredential(firebase.auth, credential);
    return { ok: true };
  }
});

const loginGoogleUser = defineAction({
  accept: "json",
  input: z.any(),
  handler: async (credentials) => {
    const credential = GoogleAuthProvider.credentialFromResult(credentials);
    if (!credential) {
      throw new Error("No se pudo iniciar sesion con Google");
    }
    await signInWithCredential(firebase.auth, credential);
    return { ok: true };
  }
});

const strongPasswordSchema = z.string().min(8).regex(/[A-Z]/, "Debe contener al menos una letra mayúscula").regex(/[a-z]/, "Debe contener al menos una letra minúscula").regex(/[0-9]/, "Debe contener al menos un número").regex(/[@$!%*?&#]/, "Debe contener al menos un carácter especial");
const loginUser = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email(),
    password: strongPasswordSchema,
    rememberme: z.boolean()
  }),
  handler: async ({ password, email, rememberme }, { cookies }) => {
    if (rememberme) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365),
        path: "/"
      });
    }
    try {
      const result = await signInWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );
      const user = {
        uid: result.user.uid,
        email: result.user.email
      };
      return user;
    } catch (error) {
      const firebaseError = error;
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
      throw new Error("Error inesperado");
    }
  }
});

const logout = defineAction({
  accept: "json",
  handler: async (_, { cookies }) => {
    return await signOut(firebase.auth);
  }
});

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const { WEBSITE_URL } = Object.assign(__vite_import_meta_env__, { WEBSITE_URL: "http://localhost:4321" });
const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
  }),
  handler: async ({ password, name, email, confirmPassword }, { cookies }) => {
    if (password !== confirmPassword) {
      throw new Error("Contraseñas no coinciden");
    }
    try {
      const result = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );
      updateProfile(firebase.auth.currentUser, {
        displayName: name
      });
      const user = {
        uid: result.user.uid,
        email: result.user.email,
        name
      };
      await sendEmailVerification(firebase.auth.currentUser, {
        url: `${WEBSITE_URL}/protected`
      });
      return user;
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("Correo Electrónico ya en uso");
      }
      throw new Error("Valio Verga y no se por que");
    }
  }
});

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const url = "https://675c6d82fe09df667f63dd3c.mockapi.io/schedules?userUid=";
const getAllByUidAction = defineAction({
  accept: "json",
  input: z.object({
    uid: z.string()
  }),
  handler: async ({ uid }) => {
    const resp = await fetch(`${url}${uid}`);
    const error = !resp.ok;
    if (error) {
      throw new Error("Error fetching data");
    }
    const dataCollection = await resp.json();
    let data = dataCollection[0];
    return data;
  }
});

const server = {
  resetPassword,
  loginGithubUser,
  loginGoogleUser,
  loginUser,
  logout,
  registerUser,
  getAllByUidAction
};

export { server };

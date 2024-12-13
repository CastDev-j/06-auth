import 'es-module-lexer';
import { A as ACTION_QUERY_PARAMS, s as serializeActionResult } from './chunks/shared_B9iFldbu.mjs';
import '@astrojs/internal-helpers/path';
import { serialize, parse } from 'cookie';
import { yellow } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { o as originPathnameSymbol } from './chunks/astro/server_DZs5L0Uw.mjs';
import { f as firebase } from './chunks/config_YlJ07gRB.mjs';
import { A as AstroError, R as ResponseSentError } from './chunks/astro/assets-service_YYx57UYi.mjs';
import { h as hasContentType, f as formContentTypes, A as ACTION_API_CONTEXT_SYMBOL } from './chunks/utils_Cwo9_uli.mjs';
import { getAction } from './chunks/get-action_B6YP_hAY.mjs';

const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol = Symbol.for("astro.responseSent");
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false") return false;
    if (this.value === "0") return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  #request;
  #requestValues;
  #outgoing;
  #consumed;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
    this.#consumed = false;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const {
      // @ts-expect-error
      maxAge: _ignoredMaxAge,
      // @ts-expect-error
      expires: _ignoredExpires,
      ...sanitizedOptions
    } = options || {};
    const serializeOptions = {
      expires: DELETED_EXPIRATION,
      ...sanitizedOptions
    };
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      serialize(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key, options = void 0) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return void 0;
      }
    }
    const values = this.#ensureParsed(options);
    if (key in values) {
      const value = values[key];
      return new AstroCookie(value);
    }
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @returns
   */
  has(key, options = void 0) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed(options);
    return !!values[key];
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    if (this.#consumed) {
      const warning = new Error(
        "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page."
      );
      warning.name = "Warning";
      console.warn(warning);
    }
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      serialize(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Merges a new AstroCookies instance into the current instance. Any new cookies
   * will be added to the current instance, overwriting any existing cookies with the same name.
   */
  merge(cookies) {
    const outgoing = cookies.#outgoing;
    if (outgoing) {
      for (const [key, value] of outgoing) {
        this.#ensureOutgoingMap().set(key, value);
      }
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null) return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  /**
   * Behaves the same as AstroCookies.prototype.headers(),
   * but allows a warning when cookies are set after the instance is consumed.
   */
  static consume(cookies) {
    cookies.#consumed = true;
    return cookies.headers();
  }
  #ensureParsed(options = void 0) {
    if (!this.#requestValues) {
      this.#parse(options);
    }
    if (!this.#requestValues) {
      this.#requestValues = {};
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse(options = void 0) {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = parse(raw, options);
  }
}

function getParams(route, pathname) {
  if (!route.params.length) return {};
  const paramsMatch = route.pattern.exec(decodeURIComponent(pathname));
  if (!paramsMatch) return {};
  const params = {};
  route.params.forEach((key, i) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
    } else {
      params[key] = paramsMatch[i + 1];
    }
  });
  return params;
}

function getOriginPathname(request) {
  const origin = Reflect.get(request, originPathnameSymbol);
  if (origin) {
    return decodeURIComponent(origin);
  }
  return void 0;
}

const apiContextRoutesSymbol = Symbol.for("context.routes");

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    return defineMiddleware((_context, next) => {
      return next();
    });
  }
  return defineMiddleware((context, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async (payload) => {
        if (i < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request) {
              newRequest = payload;
            } else if (payload instanceof URL) {
              newRequest = new Request(payload, handleContext.request);
            } else {
              newRequest = new Request(
                new URL(payload, handleContext.url.origin),
                handleContext.request
              );
            }
            const pipeline = Reflect.get(handleContext, apiContextRoutesSymbol);
            const { routeData, pathname } = await pipeline.tryRewrite(
              payload,
              handleContext.request
            );
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.cookies = new AstroCookies(newRequest);
            handleContext.params = getParams(routeData, pathname);
          }
          return applyHandle(i + 1, handleContext);
        } else {
          return next(payload ?? carriedPayload);
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const privateRoutes = ["/protected", "/"];
const notAuthenticatedRoutes = ["/login", "/register", "/reset-password"];
const onRequest$2 = defineMiddleware(async (context, next) => {
  const isLoggedIn = !!firebase.auth.currentUser;
  const user = firebase.auth.currentUser;
  const { locals, redirect, url } = context;
  if (user) {
    locals.user = {
      email: user.email,
      name: user.displayName,
      avatar: user.photoURL,
      emailVerified: user.emailVerified
    };
  }
  locals.isLoggedIn = isLoggedIn;
  if (privateRoutes.includes(url.pathname) && !isLoggedIn) {
    return redirect("/login");
  }
  if (notAuthenticatedRoutes.includes(url.pathname) && isLoggedIn) {
    return redirect("/");
  }
  return next();
});

const onRequest$1 = defineMiddleware(async (context, next) => {
  if (context._isPrerendered) {
    if (context.request.method === "POST") {
      console.warn(
        yellow("[astro:actions]"),
        "POST requests should not be sent to prerendered pages. If you're using Actions, disable prerendering with `export const prerender = false`."
      );
    }
    return next();
  }
  const locals = context.locals;
  if (locals._actionPayload) return next();
  const actionPayload = context.cookies.get(ACTION_QUERY_PARAMS.actionPayload)?.json();
  if (actionPayload) {
    if (!isActionPayload(actionPayload)) {
      throw new Error("Internal: Invalid action payload in cookie.");
    }
    return renderResult({ context, next, ...actionPayload });
  }
  const actionName = context.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
  if (context.request.method === "POST" && actionName) {
    return handlePost({ context, next, actionName });
  }
  return next();
});
async function renderResult({
  context,
  next,
  actionResult,
  actionName
}) {
  const locals = context.locals;
  locals._actionPayload = { actionResult, actionName };
  const response = await next();
  context.cookies.delete(ACTION_QUERY_PARAMS.actionPayload);
  if (actionResult.type === "error") {
    return new Response(response.body, {
      status: actionResult.status,
      statusText: actionResult.type,
      headers: response.headers
    });
  }
  return response;
}
async function handlePost({
  context,
  next,
  actionName
}) {
  const { request } = context;
  const baseAction = await getAction(actionName);
  const contentType = request.headers.get("content-type");
  let formData;
  if (contentType && hasContentType(contentType, formContentTypes)) {
    formData = await request.clone().formData();
  }
  const { getActionResult, callAction, props, redirect, ...actionAPIContext } = context;
  Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
  const action = baseAction.bind(actionAPIContext);
  const actionResult = await action(formData);
  if (context.url.searchParams.get(ACTION_QUERY_PARAMS.actionRedirect) === "false") {
    return renderResult({
      context,
      next,
      actionName,
      actionResult: serializeActionResult(actionResult)
    });
  }
  return redirectWithResult({ context, actionName, actionResult });
}
async function redirectWithResult({
  context,
  actionName,
  actionResult
}) {
  context.cookies.set(ACTION_QUERY_PARAMS.actionPayload, {
    actionName,
    actionResult: serializeActionResult(actionResult)
  });
  if (actionResult.error) {
    const referer2 = context.request.headers.get("Referer");
    if (!referer2) {
      throw new Error("Internal: Referer unexpectedly missing from Action POST request.");
    }
    return context.redirect(referer2);
  }
  const referer = getOriginPathname(context.request);
  if (referer) {
    return context.redirect(referer);
  }
  return context.redirect(context.url.pathname);
}
function isActionPayload(json) {
  if (typeof json !== "object" || json == null) return false;
  if (!("actionResult" in json) || typeof json.actionResult !== "object") return false;
  if (!("actionName" in json) || typeof json.actionName !== "string") return false;
  return true;
}

const onRequest = sequence(
	
	onRequest$2,
	onRequest$1
);

export { onRequest };

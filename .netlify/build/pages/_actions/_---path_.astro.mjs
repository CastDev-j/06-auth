import { h as hasContentType, f as formContentTypes, A as ACTION_API_CONTEXT_SYMBOL } from '../../chunks/utils_Cwo9_uli.mjs';
import { getAction } from '../../chunks/get-action_B6YP_hAY.mjs';
import { s as serializeActionResult } from '../../chunks/shared_B9iFldbu.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async (context) => {
  const { request, url } = context;
  let baseAction;
  try {
    baseAction = await getAction(url.pathname);
  } catch (e) {
    console.error(e);
    return new Response(e instanceof Error ? e.message : null, { status: 404 });
  }
  const contentType = request.headers.get("Content-Type");
  const contentLength = request.headers.get("Content-Length");
  let args;
  if (!contentType || contentLength === "0") {
    args = void 0;
  } else if (contentType && hasContentType(contentType, formContentTypes)) {
    args = await request.clone().formData();
  } else if (contentType && hasContentType(contentType, ["application/json"])) {
    args = await request.clone().json();
  } else {
    return new Response(null, { status: 415 });
  }
  const { getActionResult, callAction, props, redirect, ...actionAPIContext } = context;
  Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
  const action = baseAction.bind(actionAPIContext);
  const result = await action(args);
  const serialized = serializeActionResult(result);
  if (serialized.type === "empty") {
    return new Response(null, {
      status: serialized.status
    });
  }
  return new Response(serialized.body, {
    status: serialized.status,
    headers: {
      "Content-Type": serialized.contentType
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

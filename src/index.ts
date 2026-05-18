/**
 * @amlplugins/groq-chat
 *
 * Thin namespaced re-export of the native groq-sdk SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Groq Chat Completions — ultra-fast Llama/Mixtral/Gemma inference on Groq LPU, streaming + tool use.
 */

import * as _sdk from "groq-sdk";
export * from "groq-sdk";
export { _sdk as sdk };
export default _sdk;

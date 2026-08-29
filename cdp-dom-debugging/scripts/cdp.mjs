#!/usr/bin/env node
// CDP evaluate driver for a running Electron/Chrome renderer.
//
// Usage:
//   node cdp.mjs <port> '<expression>'              evaluate once, print result
//   node cdp.mjs <port> --open '<selector>'         click first matching element
//   node cdp.mjs <port> --key '<key>'               dispatch keydown on document
//
// Requires `ws` somewhere resolvable; pass WS_PATH env to point at
// e.g. node_modules/.pnpm/ws@8.21.3/node_modules/ws/index.js

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const wsPath = process.env.WS_PATH ?? "ws";
const WebSocket = require(wsPath);

const [port, ...rest] = process.argv.slice(2);
if (!port || rest.length === 0) {
  console.error("usage: node cdp.mjs <port> '<expr>' | --open '<selector>' | --key '<key>'");
  process.exit(1);
}

const list = await fetch(`http://127.0.0.1:${port}/json/list`).then(r => r.json());
const page = list.find(t => t.type === "page" && t.webSocketDebuggerUrl);
if (!page) { console.error("no page target"); process.exit(1); }

const ws = new WebSocket(page.webSocketDebuggerUrl, { perMessageDeflate: false });
let id = 0;
const pending = new Map();
ws.on("message", d => {
  const m = JSON.parse(d.toString());
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
});
await new Promise(r => ws.on("open", r));
const send = (method, params = {}) =>
  new Promise(res => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async expression => {
  const r = await send("Runtime.evaluate", { expression, returnByValue: true });
  if (r.result?.exceptionDetails) return `EXCEPTION: ${r.result.exceptionDetails.text}`;
  return r.result?.result?.value;
};
const sleep = ms => new Promise(r => setTimeout(r, ms));

const [flag, arg] = rest;
if (flag === "--open") {
  console.log(await ev(`(() => {
    const el = document.querySelector(${JSON.stringify(arg)});
    if (!el) return "no match: ${arg.replace(/`/g, "")}";
    el.click();
    return "clicked";
  })()`));
} else if (flag === "--key") {
  await ev(`document.dispatchEvent(new KeyboardEvent("keydown", { key: ${JSON.stringify(arg)}, bubbles: true })); 1`);
  console.log("dispatched", arg);
} else {
  console.log(await ev(arg));
}
ws.close();
process.exit(0);

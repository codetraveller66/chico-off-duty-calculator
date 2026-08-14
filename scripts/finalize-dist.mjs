import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "public");
const output = resolve(root, "dist");
const client = resolve(output, "client");
const server = resolve(output, "server");

if (existsSync(output)) rmSync(output, { recursive: true, force: true });
mkdirSync(client, { recursive: true });
mkdirSync(server, { recursive: true });

// Sites deploys a Worker entry point plus a directory of browser assets.
cpSync(source, client, { recursive: true });
cpSync(resolve(root, ".openai"), resolve(output, ".openai"), { recursive: true });

writeFileSync(
  resolve(server, "index.js"),
  `export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      url.pathname = "/index.html";
      return env.ASSETS.fetch(new Request(url, request));
    }

    return env.ASSETS.fetch(request);
  },
};
`,
);

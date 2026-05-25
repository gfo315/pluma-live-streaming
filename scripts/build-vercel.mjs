#!/usr/bin/env node
// Repackages Vite SSR build into Vercel Build Output API v3.
// Reads: dist/client/ (static) + dist/server/server.js (Web Fetch handler)
// Writes: .vercel/output/ (static + ssr Node function + config.json)
import { cp, mkdir, rm, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const distClient = path.join(root, "dist/client");
const distServer = path.join(root, "dist/server");
const outDir = path.join(root, ".vercel/output");
const staticDir = path.join(outDir, "static");
const fnDir = path.join(outDir, "functions/ssr.func");

if (!existsSync(distClient) || !existsSync(distServer)) {
  console.error("Missing dist/client or dist/server. Run `vite build` first.");
  process.exit(1);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(staticDir, { recursive: true });
await mkdir(fnDir, { recursive: true });

// Copy client assets to static/
await cp(distClient, staticDir, { recursive: true });

// Copy SSR bundle into the function directory
await cp(distServer, fnDir, { recursive: true });

// Vercel Node function entry — adapts the Web Fetch handler exported by server.js
const entry = `import handler from "./server.js";

// Vercel Node.js runtime supports Web Fetch API handlers via a default export.
export default async function (request) {
  return handler.fetch(request, {}, {});
}
`;
await writeFile(path.join(fnDir, "index.mjs"), entry);

await writeFile(
  path.join(fnDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      supportsResponseStreaming: true,
    },
    null,
    2,
  ),
);

// List top-level static files/dirs to bypass the SSR function
const staticEntries = await readdir(staticDir, { withFileTypes: true });
const staticHandles = staticEntries.map((e) =>
  e.isDirectory() ? { handle: "filesystem" } : null,
);
void staticHandles;

await writeFile(
  path.join(outDir, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/ssr" },
      ],
    },
    null,
    2,
  ),
);

console.log("✓ Vercel Build Output written to .vercel/output/");

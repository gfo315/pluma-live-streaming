// Vercel deployment: cloudflare plugin disabled.
// The Lovable preview/dev server still works because the cloudflare plugin
// only activates during `vite build` — dev is unaffected.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
});

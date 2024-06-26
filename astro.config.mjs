import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercel()
});
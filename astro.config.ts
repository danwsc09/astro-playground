import { defineConfig } from "astro/config";
import { netlifyFunctions } from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlifyFunctions(),
});

import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), astroI18next()],
  site: "https://tinytengu.github.io",
  base: "/blog",
});

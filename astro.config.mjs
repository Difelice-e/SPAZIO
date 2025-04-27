import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "it", "es", "de"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
});
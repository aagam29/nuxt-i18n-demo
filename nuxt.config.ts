// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error - mentioned in vuetify documentation itself.
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/eslint",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    // options here
  },
  devtools: { enabled: true },
});

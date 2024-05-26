import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { blueLightTheme } from "./themes/blueTheme";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "blueLightTheme",
      themes: {
        blueLightTheme: blueLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});

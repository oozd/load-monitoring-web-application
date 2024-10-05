import { createApp, h } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp({
  render: () => h(App),
})
  .use(vuetify)
  .mount("#app");

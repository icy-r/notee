import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");

Head.scripts.push({
    async: true,
    src: "https://cdn.jsdelivr.net/npm/vue@3.0.0/dist/vue.global.prod.js",
    type: "text/javascript",
    });
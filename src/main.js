import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue"

const app = createApp(App);
app.use(router);
app.use(SpeedInsights);
app.mount("#app");


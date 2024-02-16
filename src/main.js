import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { inject } from '@vercel/analytics';
 
inject();

const app = createApp(App);
app.use(router);
app.use(SpeedInsights);
app.mount("#app");


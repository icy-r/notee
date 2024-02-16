import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
// import { SpeedInsights } from "@vercel/speed-insights/vue"
import { inject } from '@vercel/analytics';
import analytic from './firebase';

router.afterEach((to) => {
    try {
        analytic.logEvent('page_view', {
            page_path: to.path,
            page_location: window.location.href,
            page_title: to.name,
        });
        console.log('logEvent called successfully');
    } catch (error) {
        console.log('Error calling logEvent:', error);
    }
});

const app = createApp(App);
app.use(router);
// app.use(SpeedInsights);
app.mount("#app");

inject();
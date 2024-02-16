import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { inject } from '@vercel/analytics';
import firebase from './firebase';

router.afterEach((to) => {
    // This will be triggered after every route change.
    firebase.analytics().logEvent('page_view', {
        page_path: to.path,
        page_location: window.location.href,
        page_title: to.name,
    });
});


const app = createApp(App);
app.use(router);
app.use(SpeedInsights);
app.mount("#app");

firebase.analytics();

inject();




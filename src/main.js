import { createApp } from "vue";
import router from "./router";
import App from "./App.vue"; // Keep this line and remove the duplicate
import { inject } from '@vercel/analytics';
import analytic from './firebase';
import './assets/tailwind.css';
import 'vue-toast-notification/dist/theme-default.css';
import VueToast from 'vue-toast-notification'

const cors = require('cors');



// Import Ant Design Vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

inject();

import { logEvent } from "firebase/analytics";

router.afterEach((to) => {
    try {
        logEvent(analytic, 'page_view', {
            page_path: to.path,
            page_location: window.location.href,
            page_title: to.name,
        });
    } catch (error) {
        console.log('Error calling logEvent:', error);
    }
});

const app = createApp(App);
app.use(router);
app.use(Antd); // Register Ant Design Vue globally
app.use(VueToast);
app.use(cors());
app.mount("#app");

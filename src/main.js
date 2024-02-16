import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSpeedInsights from 'vue-speed-insights';

createApp(App)
    .use(router)
    .use(VueSpeedInsights)
    .mount('#app');
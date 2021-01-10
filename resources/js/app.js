require('./bootstrap');
import { createApp } from 'vue';
import router from "./routes";

import App from './pages/App.vue'

createApp(App)
  .use(router)
  .mount("#app");
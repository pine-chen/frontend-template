import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import route from './router';
import 'normalize.css/normalize.css';

createApp(App).use(route)
  .use(createPinia())
  .mount('#app');

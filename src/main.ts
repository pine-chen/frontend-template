import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import route from './router';

createApp(App).use(route)
  .use(createPinia())
  .mount('#app');

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeTemplate from '@/features/home/home-template.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeTemplate
  }
];

const route = createRouter({
  history: createWebHashHistory(),
  routes
});

export default route;

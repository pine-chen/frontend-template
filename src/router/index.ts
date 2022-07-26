import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/feature/home/home-template.vue')
  }
];

const route = createRouter({
  history: createWebHashHistory(),
  routes
});

export default route;

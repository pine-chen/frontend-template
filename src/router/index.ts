import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/shared/layout/index.vue')
  }
];

const route = createRouter({
  history: createWebHashHistory(),
  routes
});

export default route;

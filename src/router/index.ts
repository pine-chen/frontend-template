import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import common from '@/router/common';
import home from '@/router/home';
import about from '@/router/about';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/shared/layout/index.vue'),
    children: [
      ...home,
      ...about
    ]
  },
  ...common
];

const route = createRouter({
  history: createWebHashHistory(),
  routes
});

export default route;

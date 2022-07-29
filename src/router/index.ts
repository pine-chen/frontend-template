import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/shared/layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {
          title: 'Home',
          key: 'HOME',
          requireAuth: true
        },
        component: () => import('@/feature/home/home-template.vue')
      },
      {
        path: 'about',
        name: 'about',
        meta: {
          title: 'About',
          key: 'ABOUT',
          requireAuth: true
        },
        component: () => import('@/feature/about/about-template.vue')
      }
    ]
  },
  {
    path: '/404',
    name: 'NoFound',
    component: () => import('@/shared/components/no-found.vue')
  },
  { path: '/:catchAll(.*)', redirect: '/404' }
];

const route = createRouter({
  history: createWebHashHistory(),
  routes
});

export default route;

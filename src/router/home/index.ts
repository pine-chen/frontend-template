export default [
  {
    path: 'home',
    name: 'Home',
    meta: {
      title: 'Home',
      key: 'HOME',
      requireAuth: true
    },
    component: () => import('@/feature/home/home-template.vue'),
    children: [
      {
        path: 'page1',
        name: 'Page1',
        meta: {
          title: 'Page1',
          key: 'PAGE1',
          requireAuth: true
        },
        component: () => import('@/feature/home/home-template.vue')
      },
      {
        path: 'page2',
        name: 'Page2',
        meta: {
          title: 'Page2',
          key: 'PAGE2',
          requireAuth: true
        },
        component: () => import('@/feature/home/home-template.vue')
      }
    ]
  }
];

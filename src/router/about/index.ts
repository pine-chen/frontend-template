export default [
  {
    path: 'about',
    name: 'about',
    meta: {
      title: 'About',
      key: 'ABOUT',
      requireAuth: true
    },
    component: () => import('@/feature/about/about-template.vue'),
    children: [
      {
        path: 'page3',
        name: 'Page3',
        meta: {
          title: 'Page3',
          key: 'PAGE3',
          requireAuth: true
        },
        component: () => import('@/feature/home/home-template.vue')
      },
      {
        path: 'page4',
        name: 'Page4',
        meta: {
          title: 'Page4',
          key: 'PAGE4',
          requireAuth: true
        },
        component: () => import('@/feature/home/home-template.vue')
      }
    ]
  }
];

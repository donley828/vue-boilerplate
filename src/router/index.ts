import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { BasicLayout, UserLayout } from '../layouts';

const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        name: 'Login',
        path: 'login',
        component: () => import('/@/views/user/Login.vue'),
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap,
});

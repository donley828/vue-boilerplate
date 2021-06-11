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
];

export const dynamicBasicRouter: RouteRecordRaw = {
  path: '/',
  component: BasicLayout,
  children: [
    {
      name: 'Dashboard',
      path: 'dashboard',
      component: () => import('/@/views/dashboard/index.vue'),
      meta: {
        icon: 'sss',
        title: '首页',
      },
    },
    {
      name: 'List',
      path: 'list',
      redirect: '',
      meta: {
        title: '列表',
        icon: 'sss',
      },
      children: [
        {
          name: 'ListSearch',
          path: 'search',
          component: () => import('/@/views/list/search/index.vue'),
          meta: {
            icon: 'sss',
            title: '搜索列表',
          },
        },
      ],
    },
  ],
};

export default createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap,
});

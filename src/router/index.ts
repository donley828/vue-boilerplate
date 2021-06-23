import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { BasicLayout, UserLayout, RouteView } from '../layouts';

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
        icon: 'icon-home',
        title: '首页',
      },
    },
    {
      name: 'List',
      path: 'list',
      component: RouteView,
      children: [
        {
          name: 'ListSearch',
          path: 'search',
          component: () => import('/@/views/list/search/index.vue'),
          meta: {
            icon: 'icon-search',
            title: '列表搜索',
          },
        },
      ],
      meta: {
        title: '列表',
        icon: 'icon-unorderedlist',
      },
    },
  ],
};

export default createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap,
});

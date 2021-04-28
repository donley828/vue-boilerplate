import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '../layouts';

const constantRouterMap: Array<RouteRecordRaw> = [
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

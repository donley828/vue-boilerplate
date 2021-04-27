import * as VueRouter from 'vue-router';
import { BasicLayout } from '@/layouts';

const constantRouterMap = [
  {
    path: '/',
    component: BasicLayout,
    children: []
  }
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: constantRouterMap
})

import router from '/@/router';
import type { RouteLocationNormalized } from 'vue-router';

export const setRouterGuard = (): void => {
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    // console.log(to, from);
  });
};

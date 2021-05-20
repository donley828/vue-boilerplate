import router from '/@/router';
import type { RouteLocationNormalized } from 'vue-router';
import { useVueLS } from '/@/utils/localStorage';
import { ACCESS_TOKEN } from '/@/store/enmus';

export const setRouterGuard = (): void => {
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    // console.log(to, from);
    if (useVueLS.get(ACCESS_TOKEN)) {
      console.log(useVueLS.get(ACCESS_TOKEN));
    }
  });
};

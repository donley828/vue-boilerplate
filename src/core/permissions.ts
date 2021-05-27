import router from '/@/router';
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { vueLS } from '/@/utils/localStorage';
import { ACCESS_TOKEN } from '/@/store/enmus';
import { store } from '/@/store';

const whiteRouteList: string[] = ['Login'];
const defaultRoutePath = '/';

export const setRouterGuard = (): void => {
  router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if (vueLS.get(ACCESS_TOKEN)) {
        if (to.path === '/user/login') {
          next({ path: defaultRoutePath });
        } else {
          if (store.state.user.roles.length === 0) {
            store.dispatch('user/GetInfo').then((res) => {
              console.log(res);
            });
          }
          next();
        }
      } else {
        if (whiteRouteList.includes(<string>to.name)) {
          next();
        } else {
          next({ path: '/user/login' });
        }
      }
    },
  );
};

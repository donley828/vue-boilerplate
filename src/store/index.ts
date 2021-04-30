import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

import app from './modules/app';

export const key: InjectionKey<Store<never>> = Symbol();

export const store = createStore({
  modules: {
    app,
  },
});

export function useStore(): Store<never> {
  return baseUseStore(key);
}

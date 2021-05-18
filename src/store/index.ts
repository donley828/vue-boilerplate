import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

import app from './modules/app';
import user from './modules/user';

export interface State {
  name: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    name: 'vue-boilerplate',
  },
  modules: {
    app,
    user,
  },
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}

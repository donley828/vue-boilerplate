import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore, ModuleTree } from 'vuex';

import app from './modules/app';
import user from './modules/user';

export interface State {
  name: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

const modules: ModuleTree<State> = {
  app,
  user,
};

export const store = createStore<any>({
  state: {
    name: '',
  },
  modules,
});

export function useStore(): Store<State> {
  return baseUseStore<State>(key);
}

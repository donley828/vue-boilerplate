import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import app from './modules/app';

export const key: InjectionKey<Store<never>> = Symbol();

export const store = createStore({
  modules: {
    app,
  },
});

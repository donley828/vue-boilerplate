import type { Module } from 'Vuex';
import type { State as R } from '../index';

interface State {
  theme: 'light' | 'dark';
  layout: 'header' | 'sider';
}

const app: Module<State, R> = {
  namespaced: true,
  state: {
    theme: 'light', // light dark
    layout: 'header', // header, sider
  },
  mutations: {
    SET_THEME: (state, theme) => {
      state.theme = theme;
    },
    SET_LAYOUT: (state, layout) => {
      state.layout = layout;
    },
  },
  actions: {
    SetTheme({ commit }, theme) {
      commit('SET_THEME', theme);
    },
    SetLayout({ commit }, layout) {
      commit('SET_LAYOUT', layout);
    },
  },
};

export default app;

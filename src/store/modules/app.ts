import { Module } from 'Vuex';

const app: Module<any, never> = {
  namespaced: true,
  state: {
    layout: 'top',
  },
  mutations: {
    SET_LAYOUT: (state, layout) => {
      state.layout = layout;
    },
  },
  actions: {
    SetLayout({ commit }, layout) {
      commit('SET_LAYOUT', layout);
    },
  },
};

export default app;

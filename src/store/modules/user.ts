import type { Module } from 'vuex';
import type { State as R } from '../index';

interface State {
  token: string;
}

const user: Module<State, R> = {
  namespaced: true,
  state: {
    token: '',
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      console.log(token);
    },
  },
  actions: {
    // Login({ commit }, params) {},
    SetToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
  },
};

export default user;

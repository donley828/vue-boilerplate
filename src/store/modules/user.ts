import type { Module } from 'vuex';
import type { State as R } from '../index';
import { useVueLS } from '/@/utils/localStorage';
import { ACCESS_TOKEN } from '/@/store/enmus';

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
      useVueLS.set(ACCESS_TOKEN, token);
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

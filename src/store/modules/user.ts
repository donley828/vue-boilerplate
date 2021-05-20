import type { Module } from 'vuex';
import type { State as R } from '../index';
import { vueLS } from '/@/utils/localStorage';
import { ACCESS_TOKEN } from '/@/store/enmus';
import { getInfo } from '/@/api/user';

interface State {
  token: string;
  roles: [];
}

const user: Module<State, R> = {
  namespaced: true,
  state: {
    token: '',
    roles: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      vueLS.set(ACCESS_TOKEN, token);
    },
    SET_ROLES: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    // Login({ commit }, params) {},
    // SetToken({ commit }, token) {
    //   commit('SET_TOKEN', token);
    // },
    GetInfo({ commit }) {
      return new Promise(async (resolve, reject) => {
        const { fetch, data } = getInfo();
        fetch().then(() => {
          const { roles, user } = data.value;
          commit('SET_ROLES', roles);
          console.log(data.value);
        });
      });
    },
  },
};

export default user;

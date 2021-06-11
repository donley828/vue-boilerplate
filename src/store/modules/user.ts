import type { Module } from 'vuex';
import type { State as R } from '../index';
import { vueLS } from '/@/utils/localStorage';
import { ACCESS_TOKEN } from '/@/store/enmus';
import { getInfo, logout } from '/@/api/user';
import type { RouteRecordRaw } from 'vue-router';

interface State {
  token: string;
  roles: string[];
  info: Record<string, any>;
  name: string;
  routes: RouteRecordRaw | null;
}

const user: Module<State, R> = {
  namespaced: true,
  state: {
    token: '',
    roles: [],
    info: {},
    name: '',

    routes: null,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
      vueLS.set(ACCESS_TOKEN, token);
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },

    SET_ROUTES: (state, routes) => {
      state.routes = routes;
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
        fetch()
          .then(() => {
            const { roles, user } = data.value;
            commit('SET_ROLES', roles);
            commit('SET_INFO', { ...user });
            commit('SET_NAME', user.userName);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    Logout({ commit }) {
      return new Promise<void>(async (resolve) => {
        const { fetch } = logout();
        fetch()
          .then(() => {
            resolve();
          })
          .catch(() => {
            resolve();
          })
          .finally(() => {
            commit('SET_TOKEN', '');
            commit('SET_ROLES', []);
            commit('SET_INFO', {});
            vueLS.remove(ACCESS_TOKEN);
          });
      });
    },
  },
};

export default user;

import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { isRef, toRefs, reactive, ref, onMounted } from 'vue';
import type { Ref } from 'vue';

const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // console.log(config);
    return config;
  },
);

type Method =
  | 'GET'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'PURGE'
  | 'LINK'
  | 'UNLINK';
export type useAxiosParams = {
  url: string;
  params?: Record<string, string>;
  data?: Record<string, string>;
  method: Method;
  headers?: Record<string, string>;
  manual?: boolean;
};
export type useAxiosRes = {
  fetch: Function;
  data: Ref;
  error: Ref<boolean>;
  loading: Ref<boolean>;
};

const useAxios = ({
  url,
  params,
  data,
  method,
  headers,
  manual = false,
}: useAxiosParams): useAxiosRes => {
  const state = reactive({
    data: {},
    error: false,
    loading: false,
  });

  const fetch = async () => {
    state.error = false;
    state.loading = true;
    const opts = { data, params };

    try {
      const res = await service({
        url,
        method,
        ...opts,
        ...headers,
      });
      state.data = res.data;
    } catch (e) {
      state.error = true;
    }
    state.loading = false;
  };
  // onMounted(() => {
  //   !manual && fetch();
  // });
  console.log(state);
  return {
    fetch,
    ...toRefs(state),
  };
};

export { service as axios, useAxios };

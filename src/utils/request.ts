import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { toRefs, reactive, onMounted, Ref } from 'vue';
import { vueLS } from '/@/utils/localStorage';
import { ACCESS_TOKEN } from '/@/store/enmus';

const service: AxiosInstance = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/286147/api/',
  timeout: 1000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = vueLS.get(ACCESS_TOKEN);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
);

export type useAxiosParams = {
  url: string;
  params?: Record<string, string>;
  data?: Record<string, string>;
  method: Method;
  headers?: Record<string, string>;
  auto?: boolean;
};
export type useAxiosRes = {
  fetch: () => Promise<void>;
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
  auto = true,
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
  onMounted(() => {
    auto && fetch();
  });

  return {
    fetch,
    ...toRefs(state),
  };
};

export { service as axios, useAxios };

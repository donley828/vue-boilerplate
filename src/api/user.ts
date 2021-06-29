import { useAxios, useAxiosRes } from '../utils/request';

export function login(params: { username: string; password: string }): useAxiosRes {
  return useAxios({
    url: '/login',
    method: 'GET',
    params,
    auto: false,
  });
}

export function logout(): useAxiosRes {
  return useAxios({
    url: '/logout',
    method: 'POST',
    auto: false,
  });
}

export function getInfo(): useAxiosRes {
  return useAxios({
    url: '/getInfo',
    method: 'GET',
    auto: false,
  });
}

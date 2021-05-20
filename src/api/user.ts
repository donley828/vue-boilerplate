import { useAxios, useAxiosRes } from '../utils/request';

export function login(params: { username: string; password: string }): useAxiosRes {
  return useAxios({
    url: '/login',
    method: 'POST',
    params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
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

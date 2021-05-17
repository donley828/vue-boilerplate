import { useAxios, useAxiosRes } from '../utils/request';

export function login(params: { username: string; password: string }): useAxiosRes {
  return useAxios({
    url: '/login',
    method: 'POST',
    params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

// declare const React: string;
declare module '*.json';
declare module '*.png';
declare module '*.jpg';

import 'vue-router';
declare module 'vue-router' {
  interface RouteMeta {
    icon: string;
  }
}

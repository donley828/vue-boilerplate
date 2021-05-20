import type { App } from 'vue';

export type VueLocalStorageOptions = {
  namespace: string;
  name?: string;
};

export let useVueLS: VueLocalStorage;

class VueLocalStorage {
  namespace: string;
  constructor(options: VueLocalStorageOptions) {
    const { namespace } = options;
    this.namespace = namespace;
  }
  set(key: string, value: string, expire = null): void {
    localStorage.setItem(`${this.namespace}${key}`, JSON.stringify({ value, expire }));
  }
  get(key: string, def = null): null | string {
    const item = localStorage.getItem(`${this.namespace}${key}`);

    if (item !== null) {
      try {
        const { value, expire } = JSON.parse(item);

        if (expire === null) {
          return value;
        }

        if (expire >= new Date().getTime()) {
          return value;
        }

        this.remove(`${this.namespace}${key}`);
      } catch (e) {
        return def;
      }
    }

    return def;
  }
  remove(key: string): void {
    localStorage.removeItem(`${this.namespace}${key}`);
  }
}

export const VueLS = {
  install: (app: App, options: VueLocalStorageOptions): void => {
    const { name = 'ls' } = options;
    useVueLS = new VueLocalStorage(options);
    app.config.globalProperties[name] = {
      set: useVueLS.set,
      get: useVueLS.get,
    };
  },
};

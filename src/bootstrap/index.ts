import { Layout, ConfigProvider } from 'ant-design-vue';
import { App } from 'vue';

const lazyUse = (app: App) => {
  app.use(Layout);
  app.use(ConfigProvider);
};

export { lazyUse };

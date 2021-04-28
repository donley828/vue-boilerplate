import { Layout, ConfigProvider, Button, Drawer, DatePicker, Divider } from 'ant-design-vue';
import { App } from 'vue';

const lazyUse = (app: App): void => {
  app.use(Layout);
  app.use(ConfigProvider);
  app.use(Button);
  app.use(Drawer);
  app.use(DatePicker);
  app.use(Divider);
};

export { lazyUse };

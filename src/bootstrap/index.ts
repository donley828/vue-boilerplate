import {
  Layout,
  ConfigProvider,
  Button,
  Drawer,
  DatePicker,
  Divider,
  Switch,
} from 'ant-design-vue';
import type { App } from 'vue';

const lazyUse = (app: App): void => {
  app.use(Layout);
  app.use(ConfigProvider);
  app.use(Button);
  app.use(Drawer);
  app.use(DatePicker);
  app.use(Divider);
  app.use(Switch);
};

export { lazyUse };

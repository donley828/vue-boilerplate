import {
  Layout,
  ConfigProvider,
  Button,
  Drawer,
  DatePicker,
  Divider,
  Switch,
  Menu,
} from 'ant-design-vue';
import type { App } from 'vue';

export const lazyUse = (app: App): void => {
  app.use(Layout);
  app.use(ConfigProvider);
  app.use(Button);
  app.use(Drawer);
  app.use(DatePicker);
  app.use(Divider);
  app.use(Switch);
  app.use(Menu);
};

// bootstrap base settings.
export const bootstrap = (): void => {
  console.info('bootstrap: completed');
};

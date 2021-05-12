import {
  Layout,
  ConfigProvider,
  Button,
  Drawer,
  DatePicker,
  Divider,
  Switch,
  Menu,
  Tooltip,
  Tag,
} from 'ant-design-vue';
import type { App } from 'vue';

import { changeThemeColor } from '/@/utils/theme';

export const lazyUse = (app: App): void => {
  app.use(Layout);
  app.use(ConfigProvider);
  app.use(Button);
  app.use(Drawer);
  app.use(DatePicker);
  app.use(Divider);
  app.use(Switch);
  app.use(Menu);
  app.use(Tooltip);
  app.use(Tag);
};

// bootstrap base settings.
export const bootstrap = (): void => {
  changeThemeColor('#126547');
  console.info('bootstrap: completed');
};

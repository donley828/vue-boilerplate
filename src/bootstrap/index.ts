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
  Form,
  Input,
  Checkbox,
  Calendar,
} from 'ant-design-vue';
import type { App } from 'vue';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';

import { setRouterGuard } from './permissions';
import { changeThemeColor, updateDarkTheme } from '/@/utils/theme';
import { VueLS } from '/@/utils/localStorage';

export const lazyUse = ({ app }: { app: App }): void => {
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
  app.use(Form);
  app.use(Input);
  app.use(Checkbox);
  app.use(Calendar);

  bootstrap(app);
};

// bootstrap base settings.
export const bootstrap = (app: App): void => {
  updateDarkTheme();
  // changeThemeColor('#126547');

  // load router guard
  setRouterGuard();
  // set moment locale
  moment.locale('zh-cn');
  // add plugin
  app.use(VueLS, { namespace: 'vue-boilerplate_', name: '$ls' });

  console.info('bootstrap: completed');
};

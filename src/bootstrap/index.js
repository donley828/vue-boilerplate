import {
  Layout,
  ConfigProvider
} from "ant-design-vue";

const lazyUse = (app) => {
  app.use(Layout);
  app.use(ConfigProvider);
}

export {
  lazyUse
}
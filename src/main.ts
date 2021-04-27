import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import { lazyUse } from './bootstrap';

import './theme/index.less'

const app = createApp(App);

app.use(router);
app.use(store);

lazyUse(app);

app.mount('#app');

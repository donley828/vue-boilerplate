import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { lazyUse } from './bootstrap';

import './theme/index.less'

const app = createApp(App);

app.use(router);

lazyUse(app);

app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { lazyUse } from './core';

import './theme/index.less';
const app = createApp(App);

app.use(store, key);
app.use(router);

lazyUse({ app });

app.mount('#app');

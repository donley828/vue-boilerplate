import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { lazyUse } from './bootstrap';

import './theme/index.less';

const app = createApp(App);

app.use(router);
app.use(store, key);

lazyUse({ app });

app.mount('#app');

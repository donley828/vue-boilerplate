import { createApp } from 'vue'
import { Button, message } from 'ant-design-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(Button)
app.mount('#app')

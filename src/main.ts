import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'

import App from './App.vue'
import './styles/base.css'

const app = createApp(App)

app.mount('#app')

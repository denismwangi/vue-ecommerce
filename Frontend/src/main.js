import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import './main.css'
import store from './store'
import App from './App.vue'

import router from './router'
createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

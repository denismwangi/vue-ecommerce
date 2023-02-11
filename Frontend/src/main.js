import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import './main.css'
import store from './store'
import App from './App.vue'
import Login from './views/Login.vue'
import router from './router'

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {
//             path:'/login',
//             name: Login, 
//             component:Login

            
//         }
//     ]
// })

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

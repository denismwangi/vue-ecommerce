import {createRouter, createWebHistory} from "vue-router";
import Login from '../views/Login.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
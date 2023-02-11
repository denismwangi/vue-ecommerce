import {createRouter, createWebHistory} from "vue-router";
import Login from '../views/auth/Login.vue';
import Forgotpassword from '../views/auth/Forgotpassword.vue';
import Resetpassword from '../views/auth/Resetpassword.vue';
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
    },

    {
        path: '/forgot-password',
        name: 'Forgotpassword',
        component: Forgotpassword
    },
    {
        path: '/reset-password/token',
        name: 'Resetpassword',
        component: Resetpassword
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
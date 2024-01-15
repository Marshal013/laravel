import { createRouter, createWebHistory } from "vue-router";

import Home from '../Pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../Pages/Login.vue")
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import("../Pages/Register.vue")
    },
    {
        path: '/password-reset/:token',
        name: 'PasswordReset',
        component: () => import("../Pages/ResetPassword.vue")
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: () => import("../Pages/Forgot.vue")
    },
    {
        path: '/edit',
        name: 'Edit',
        component: () => import("../Pages/Edit.vue")
    },
    {
        path: '/create',
        name: 'Create',
        component: () => import("../Pages/Create.vue")
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

export default router;
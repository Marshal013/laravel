import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../pages/Dashboard.vue';
import Overview from '../pages/Overview.vue'; 

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        chidren: [] 
    },
    {
        path: '/overview', 
        name: 'Overview',
        component: Overview
    },
    // Tambahkan rute lain jika diperlukan
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import personalInfoPage from '../pages/personaInfoPage.vue';

const routes = [
    { path: '/', component: personalInfoPage },
    { path: '/select-plan', component: () => import('../pages/selectPlanPage.vue') },
    { path: '/add-ons', component: () => import('../pages/addonsPage.vue' )},
    { path: '/summary', component: () => import('../pages/summaryPage.vue') },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;
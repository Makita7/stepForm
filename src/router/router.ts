import { createRouter, createWebHistory } from 'vue-router';
import personalInfoPage from '../pages/personaInfoPage.vue';

const routes = [
    { path: '/', component: personalInfoPage },
    { path: '/select-plan', component: () => import('../pages/selectPlanPage.vue') },
    { path: '/add-ons', component: () => import('../pages/addonsPage.vue' )},
    { path: '/summary', component: () => import('../pages/summaryPage.vue') },
    { path: '/thank-you', component: () => import('../pages/thankYouPage.vue') },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(){
        return{ top: 0 }
    }
})

export default router;
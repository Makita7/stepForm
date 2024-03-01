import { createRouter, createWebHistory } from 'vue-router';
import personalInfoPage from '../pages/personaInfoPage.vue';

const routes = [
    { path: '/', component: personalInfoPage },
    { path: '/about', component: () => '../pages/selectPlanPage.vue' },
    { path: '/about', component: () => '../pages/addonsPage.vue' },
    { path: '/about', component: () => '../pages/summaryPage.vue' },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;
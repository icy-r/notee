import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import LectureDetails from './views/lecture-details.vue'
import Timetable from './views/time-table.vue'
import AdminLogin from './views/admin/AdminLogin.vue'
import AdminDashboard from './views/admin/AdminDashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/lecture-details',
        name: 'LectureDetails',
        component: LectureDetails
    },
    {
        path: '/timetable',
        name: 'Timetable',
        component: Timetable
    },
    {
        path: '/admin-login',
        name: 'AdminLogin',
        component: AdminLogin
    },
    {
        path: '/admin-dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard
    },
    {
        path: '/secretAccess',
        name: 'SecretAccess',
        component: () => import('./views/SecretAccess.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     console.log('Navigating from', from.fullPath, 'to', to.fullPath);
//     // Check if the destination route exists
//     if (to.name === null) {
//         console.error(`Failed to navigate: route ${to.fullPath} does not exist.`);
//         next(false); // Cancel navigation
//     } else {
//         next();
//     }
// });

router.onError((error) => {
    console.error('Failed to navigate:', error);
});

// Remove the initial navigation to '/some-route' as it may not exist in your route configuration
// router.push('/some-route').catch((error) => {
//     console.error('Failed to navigate:', error);
// });

export default router
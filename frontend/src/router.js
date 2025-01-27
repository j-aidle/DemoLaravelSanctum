import {createRouter, createWebHistory} from "vue-router";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import {setAuthToken} from "./auth.js";


const routes = [
    { path: '/', component: Login },
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem("token");
            if(token) {
                setAuthToken(token);
                next();
            } else {
                next('/');
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
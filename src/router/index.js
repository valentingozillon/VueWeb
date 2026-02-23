import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Library from "@/views/library.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Library',
        name: 'Library',
        component: Library
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Admin from '@/components/admin/Admin'

Vue.use(VueRouter)

const routes = [{
    name: 'Home',
    path: '/',
    component: Home 
}, {
    name: 'Admin',
    path: '/admin',
    component: Admin
}]

export default new VueRouter({
    mode: 'history',
    routes
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/Links.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import('../views/Teams.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

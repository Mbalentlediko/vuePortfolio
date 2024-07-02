import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../components/AboutSection.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import( '../components/EducationSection.vue')
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import( '../components/ExperienceSection.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import( '../components/')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import( '../components/Projects.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

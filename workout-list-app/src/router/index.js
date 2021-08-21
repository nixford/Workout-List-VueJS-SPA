import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddWorkout from '../views/workout/AddWorkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'AddWorkout',
    component: AddWorkout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

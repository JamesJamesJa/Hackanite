import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Success from '../views/Success.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path:'/Success',
    name: 'Success',
    component: Success
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

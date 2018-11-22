import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Featured',
      component: Home
    },
    {
      path: '/food',
      name: 'Food',
      component: Home
    },
    {
      path: '/fashion',
      name: 'Fashion',
      component: Home
    },
    {
      path: '/beauty',
      name: 'Beauty',
      component: Home
    },

  ]
})

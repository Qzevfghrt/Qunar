import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import LoginOn from '../components/LoginOn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/loginOn',
      name: 'LoginOn',
      component: LoginOn
    }
  ]
})

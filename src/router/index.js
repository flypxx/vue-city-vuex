import Vue from 'vue'
import Router from 'vue-router'
import Promote from 'components/promote/promote'
import Login from 'components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'promote',
      component: Promote
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})

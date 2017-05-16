import Vue from 'vue'
import Router from 'vue-router'
import Promote from 'components/promote/promote'
import Login from 'components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/promote',
      name: 'promote',
      component: Promote
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  linkActiveClass: 'active'
})

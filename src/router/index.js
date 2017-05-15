import Vue from 'vue'
import Router from 'vue-router'
import Promote from 'components/promote/promote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'promote',
      component: Promote
    }
  ]
})

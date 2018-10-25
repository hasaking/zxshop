import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue'
import search from '@/components/search/index.vue'
import person from '@/components/person/index.vue'
import order from '@/components/order/index.vue'
import login from '@/components/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

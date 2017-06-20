import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import signin from '@/components/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: signin
    },
    {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})

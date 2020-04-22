import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/views/Chat'

Vue.use(Router)

export default new Router({
  // base: '/webapps/',
  linkActiveClass: 'selected',
  mode: 'history',
  routes: [
    { path: '/', redirect: '/chat' },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})

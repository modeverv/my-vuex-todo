import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
import Root from '@/components/root.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      /*name: 'HelloWorld',*/
      name: 'root',
      component: Root
    }
  ]
})


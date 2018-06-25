import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/views/search/search'
import gotoBack from '@/components/gotoBack/gotoback'

import { routes } from './routes'
Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      ...routes,
      {
        path: '/search',
        name: 'Search',
        components: {
          default: Search,
          navBar: gotoBack
        }
      }
    ]
  })
}

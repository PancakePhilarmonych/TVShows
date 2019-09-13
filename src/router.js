import Vue from 'vue'
import Router from 'vue-router'
import Search from './components/Search'
import SearchList from './components/SearchList'
import ShowPage from './components/ShowPage'
import Guard from './modules/guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/search',
      name: 'list',
      component: SearchList
    },
    {
      path: '/search/:id',
      props: true,
      name: 'show',
      component: ShowPage,
      beforeEnter: Guard
    }
  ]
})

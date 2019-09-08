import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import Context from '../components/Context'
import store from '../store/index'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/context',
    name: 'Context',
    component: Context
  }
]

let route
Object.keys(store.state).forEach((page) => {
  route = {
    path: store.state[page].path,
    name: store.state[page].name,
    component: Context,
    props: store.state[page]
  }
  routes.push(route)
})

export default new Router({
  routes,
});

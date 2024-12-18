import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import SearchResultView from '../views/SearchResultView.vue'
import FlightDetailsView from '../views/FlightDetailsView.vue'
import LoginRegister from '@/components/LoginRegister.vue'
import Account from '@/components/Account.vue'
import Orders from '@/components/Orders.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactView
  },
  {
    path: '/search-result',
    name: 'search-result',
    component: SearchResultView,
    props: true 
  }
  ,
  {
    path: '/flight-details',
    name: 'flight-details',
    component: FlightDetailsView
  },
  {
    path: "/login",
    name:"log-in",
    component: LoginRegister 
  },
  {
    path: "/account",
    name: "Account",
    component : Account
  },
  {
    path: "/orders",
    name: "Orders",
    component : Orders
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

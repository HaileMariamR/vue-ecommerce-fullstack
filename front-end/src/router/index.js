import Vue from 'vue'
import VueRouter from 'vue-router'

import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/productDetail:id',
    name: 'ProductDetail',
    component : ProductDetail
  
  },
  {
    path:'/cart',
    name:'Cart',
    component : Cart

  },
  {
    path:'/',
    redirect:'/products'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

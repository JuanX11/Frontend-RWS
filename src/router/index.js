import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from '../views/01 Inicio.vue'

import ArticulosCarro from '../views/ArticulosCarro.vue'
import ArticulosBicicleta from '../views/ArticulosBicicleta.vue'
import ArticulosMoto from '../views/ArticulosMoto.vue'



import Usuario from '../views/04 Usuario.vue'
import Nosotros from '../views/03 Nosotros.vue'
import Carrito from '../views/05 Carrito.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PagInicio',
    component: Inicio
  },
  {
    path: '/Articulos-Motos',
    name: 'ArticulosMoto',
    component: ArticulosMoto
  },
  {
    path: '/Articulos-Carros',
    name: 'ArticulosCarro',
    component: ArticulosCarro
  },
  {
    path: '/Articulos-Bicicleta',
    name: 'ArticulosBicicleta',
    component: ArticulosBicicleta
  },
  
  {
    path: '/Nosotros',
    name: 'PagNosotros',
    component: Nosotros
  },
  {
    path: '/Usuario',
    name: 'PagUsuario',
    component: Usuario
  },
  {
    path: '/CarroDeCompras',
    name: 'PagCarrito',
    component: Carrito
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  router
})

export default router

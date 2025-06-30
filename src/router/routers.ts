import { createRouter, createWebHistory } from 'vue-router'
import Listaview from '../views/Listaview.vue'
import Tareasview from '../views/Tareasview.vue'
import Dimensionview from '../views/Dimensionview.vue'


const routes = [
  
  { path: '/Lista', component: Listaview },
  { path: '/Dimension', component: Dimensionview },
  { path: '/tareas', component: Tareasview }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
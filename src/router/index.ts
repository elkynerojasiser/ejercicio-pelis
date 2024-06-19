import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue'
import MoviesListPage from '@/views/MoviesListPage.vue'
import MovieDetailPage from '@/views/MovieDetailPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/list/:genre_id',
    name: 'List',
    component: MoviesListPage
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: MovieDetailPage
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

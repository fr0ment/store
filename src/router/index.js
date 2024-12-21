import { createRouter, createWebHistory } from 'vue-router';
import ProductsPage from '../views/ProductsPage.vue';

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', component: ProductsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

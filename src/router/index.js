import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/front/HomeView.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/front/ProductsView.vue')
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/dashboard/DashboardView.vue'),
      redirect: '/admin/products', //自動導向
      children: [
        {
          path: 'products',
          component: () => import('../views/dashboard/AdminProducts.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    }
  ]
});

export default router;

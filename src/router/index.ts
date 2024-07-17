import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/auth/login.vue')
  },
  {
    path: '/',
    name: 'Home',
    redirect: `/home`,
    component: AppLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/Home.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
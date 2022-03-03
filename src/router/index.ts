import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';
import { globalStartupGuard, authGuard } from '@/helpers/global/session-helper';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: import(/* webpackChunkName: "dashboard" */ '../layouts/HomeLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/devices',
        name: 'Devices',
        component: () => import('@/views/Devices.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  globalStartupGuard().then(() => {
    authGuard(to, from, next);
  });
});

export default router;

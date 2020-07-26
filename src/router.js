import { createRouter, createWebHistory } from 'vue-router';
import Home from '/@/views/Home.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});

export default router;

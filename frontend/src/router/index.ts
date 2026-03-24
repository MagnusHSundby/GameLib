import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/homeView.vue"),
    },
    {
      path: "/games",
      name: "games",
      component: () => import("../views/gamesView.vue"),
    },
    {
      path: "/privacypolicy",
      name: "privacy policy",
      component: () => import("../views/personvernView.vue"),
    },
  ],
});

export default router;

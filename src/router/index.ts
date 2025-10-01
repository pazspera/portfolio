import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import GraciasContactarse from "../pages/GraciasContactarse.vue";
import SingleCaseStudy from "../pages/SingleCaseStudy.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/proyectos/:slug", name: "SingleCaseStudy", component: SingleCaseStudy, props: true },
    { path: "/gracias-por-contactarse", name: "gracias", component: GraciasContactarse },
    { path: "/:catchAll(.*)*", name: "notFound", component: NotFound}
  ],
  scrollBehavior(to, _from, _savedPosition) {
    if(to.hash) {
      return {
        el: to.hash,
        left: 0,
        top: 0,
        behavior: "smooth",
      };
    }
    return { top: 0 }
  }
})

export default router;
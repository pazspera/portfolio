import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import RedisenoSitioInstitucional from "../pages/RedisenoSitioInstitucional.vue";
import ContenidoRedes from "../pages/ContenidoRedes.vue";
import LandingVentas from "../pages/LandingVentas.vue";
import GraciasContactarse from "../pages/GraciasContactarse.vue";
import SingleCaseStudy from "../pages/SingleCaseStudy.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/proyectos:slug", component: SingleCaseStudy },
    { path: "/rediseno-institucional", name: "rediseno", component: RedisenoSitioInstitucional },
    { path: "/contenido-redes", name: "redes", component: ContenidoRedes },
    { path: "/landing-ventas", name: "landing", component: LandingVentas },
    { path: "/gracias-por-contactarse", name: "gracias", component: GraciasContactarse },
    { path: "/test", name: "gracias", component: SingleCaseStudy },
    { path: "/:catchAll(.*)*", name: "notFound", component: NotFound}
  ],
  scrollBehavior(to, _from, _savedPosition) {
    if(to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 }
  }
})

export default router;
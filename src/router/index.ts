import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import RedisenoSitioInstitucional from "../pages/RedisenoSitioInstitucional.vue";
import ContenidoRedes from "../pages/ContenidoRedes.vue";
import LandingVentas from "../pages/LandingVentas.vue";
import GraciasContactarse from "../pages/GraciasContactarse.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/rediseno-institucional", name: "rediseno", component: RedisenoSitioInstitucional },
    { path: "/contenido-redes", name: "redes", component: ContenidoRedes },
    { path: "/landing-ventas", component: LandingVentas },
    { path: "/gracias-por-contactarse", name: "gracias", component: GraciasContactarse }
  ],
  scrollBehavior(to, from, savedPosition) {
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
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import RedisenoSitioInstitucional from "../pages/RedisenoSitioInstitucional.vue";
import ContenidoRedes from "../pages/ContenidoRedes.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/rediseno-sitio-institucional", name: "rediseno-sitio-institucional", component: RedisenoSitioInstitucional },
    { path: "/contenido-estrategico-redes", name: "contenido-estrategico-redes", component: ContenidoRedes }
  ]
})

export default router;
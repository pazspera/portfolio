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
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (navegación atrás/adelante), devolverla
    if (savedPosition) {
      return savedPosition;
    }

    // Si no hay hash, comportarse como antes (ir arriba)
    if (!to.hash) {
      return { top: 0 };
    }

    // Si hay hash, esperar hasta que el elemento exista en el DOM
    const selector = to.hash;
    return new Promise((resolve) => {
      const maxAttempts = 60; // ~1s a 60fps
      let attempts = 0;

      const check = () => {
        attempts++;
        const el = document.querySelector(selector);
        if (el) {
          // Elemento encontrado: resolver con el selector para que Vue Router haga el scroll
          resolve({ el: selector, behavior: 'smooth' });
          return;
        }
        if (attempts >= maxAttempts) {
          // Fallback: si no aparece en el tiempo esperado, ir al tope de la página
          resolve({ top: 0 });
          return;
        }
        // Volver a comprobar en el siguiente frame
        requestAnimationFrame(check);
      };

      requestAnimationFrame(check);
    });
  },
})

export default router;
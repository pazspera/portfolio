import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

// Views
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";
import ThankYouView from "@/views/ThankYouView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

// Routes (configuration)
const routes = [
  {
    path: "/",
    component: HomeView,
    name: "home",
  },
  {
    path: "/acerca",
    component: AboutView,
    name: "about",
  },
  {
    path: "/proyectos",
    component: ProjectsView,
    name: "projects",
  },
  {
    path: "/contacto",
    component: ContactView,
    name: "contact",
  },
  {
    path: "/thank-you",
    component: ThankYouView,
    name: "thankYou",
  },
  // 404 catchall for all routes that don't exist
  {
    // This is a regex that we have to write exactly for it to workz
    path: "/:catchAll(.*)",
    // path: "/:pathMatch(.*)*",
    // path: "/not-found",
    component: NotFoundView,
    name: "notFound",
  },
  {
    // This is a regex that we have to write exactly for it to workz
    path: "/not-found",
    // path: "/:pathMatch(.*)*",
    // path: "/not-found",
    component: NotFoundView,
    name: "notFound",
  },
];

// Router object
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    /* return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 500);
    }); */
    return { left: 0, top: 0, behavior: "smooth" };
  },
});

// Exporta el router para poder usarlo en componentes
export default router;

// Vue instance
const app = createApp(App);
app.use(router);
app.mount("#app");

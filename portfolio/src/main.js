import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

// Views
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";
import ThankYouView from "@/views/ThankYouView.vue";

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
];

// Router object
const router = createRouter({
  history: createWebHistory(),
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

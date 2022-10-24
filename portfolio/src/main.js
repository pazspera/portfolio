import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

// Views
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ContactView4.vue";
import ContactView from "@/views/ContactView5.vue";

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
];

// Router object
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Vue instance
const app = createApp(App);
app.use(router);
app.mount("#app");

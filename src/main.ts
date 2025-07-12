import { createApp } from "vue";
import "./style.css";
import "devicon/devicon.min.css";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";

const savedTheme = localStorage.getItem("vueuse-color-scheme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const pinia = createPinia();

if(!savedTheme) {
  if(systemPrefersDark){
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");

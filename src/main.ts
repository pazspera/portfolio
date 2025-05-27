import { createApp } from "vue";
import "./style.css";
import "devicon/devicon.min.css";
import App from "./App.vue";

const savedTheme = localStorage.getItem("vueuse-color-scheme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if(!savedTheme) {
  if(systemPrefersDark){
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

createApp(App).mount("#app");

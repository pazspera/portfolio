import {defineNuxtConfig} from "nuxt/config";
import {resolve} from "path";

// https://nuxt.com/docs/api/ configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  modules: ['@nuxt/content'],
})

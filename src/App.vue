<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue';
import Footer from './components/Footer.vue';
import Hero from './sections/Hero.vue';
import AcercaDe from './sections/AcercaDe.vue';
import Contacto from "./sections/Contacto.vue";
</script>

<template>
  <div class="font-text bg-light dark:bg-dark text-zinc-900 dark:text-zinc-200 selection:bg-primary-600 selection:text-zinc-950 dark:selection:bg-primary-200 transition-colors duration-500 ease-in-out" id="app">
    <Navbar />
    <main class="container mx-auto px-4 md:px-6 py-8">
      <Hero />
      <AcercaDe />
      <Contacto />
    </main>
    <Footer />
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>

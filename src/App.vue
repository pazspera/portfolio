<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue';
import Footer from './components/Footer.vue';
import Hero from './sections/Hero.vue';
import AcercaDe from './sections/AcercaDe.vue';
</script>

<template>
  <div class="bg-light dark:bg-dark text-zinc-900 dark:text-zinc-200 transition-colors duration-300 ease-in-out">
    <Navbar />
    <main class="container mx-auto px-4 md:px-6 py-8">
      <Hero />
      <AcercaDe />
    </main>
    <Footer />
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>

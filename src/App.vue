<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './sections/Hero.vue';
</script>

<template>
  <Navbar />
  <main class="bg-light dark:bg-dark text-zinc-900 dark:text-zinc-200">
    <div class="container mx-auto py-8 px-4 md:px-0">
      <Hero />
      <h1 class="font-title color-primary-900">Hello World!</h1>
      <div class="w-20 h-20 bg-primary-500"></div>
    </div>    
  </main>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import DarkToggle from './components/DarkToggle.vue';
</script>

<template>
  <Navbar />
  <main >
    <div class="container mx-auto py-8 px-4 md:px-0">
      <h1 class="font-title color-primary-900">Hello World!</h1>
      <div class="w-20 h-20 bg-primary-500"></div>
      <DarkToggle/>
    </div>    
  </main>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>

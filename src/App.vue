<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="overflow-x-hidden font-text bg-light dark:bg-dark text-zinc-900 dark:text-zinc-200 selection:bg-primary-600 selection:text-zinc-950 dark:selection:bg-primary-200 transition-colors duration-500 ease-in-out">
    <Navbar />
    <main class="container mx-auto px-4 md:px-6 pb-8 pt-24">
      <RouterView v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.fade-enter-active {
  transition: all 0.3s ease-out;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-leave-active {
  transition: all 0.3s ease-in;
}
</style>

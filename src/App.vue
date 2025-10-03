<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const skipTransition = ref(false);

watch(
  () => route.fullPath,
  (newFull, oldFull) => {
    const newPath = newFull ? newFull.split('#')[0] : '';
    const oldPath = oldFull ? oldFull.split('#')[0] : '';
    // Only skip transition when the path (without hash) is the same but the fullPath changed => only hash changed
    skipTransition.value = newPath === oldPath && newFull !== oldFull;
  },
  { immediate: true }
);
</script>

<template>
  <div class="overflow-x-hidden font-text bg-light dark:bg-dark text-zinc-900 dark:text-zinc-200 selection:bg-primary-600 selection:text-zinc-950 dark:selection:bg-primary-200 transition-colors duration-500 ease-in-out">
    <Navbar />
    <main class="container mx-auto px-4 md:px-6 pb-8 pt-24">
      <RouterView v-slot="{ Component  }">
        <!-- When navigation is only a hash change (same path), skip the transition to avoid unnecessary animations and allow immediate scrolling -->
        <component v-if="skipTransition" :is="Component" :key="route.fullPath" />

        <transition v-else name="fade" mode="out-in">
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

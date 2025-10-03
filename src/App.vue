<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useIsMobile } from './composables/useIsMobile';

const route = useRoute();
const skipTransition = ref(false);

const { isMobile } = useIsMobile();
const transitionName = computed(() => (isMobile.value ? 'mobile-slide' : 'fade'));
const transitionMode = computed(() => (isMobile.value ? "in-out" : 'out-in'));
const shouldSkipTransition = computed(()=> isMobile.value || skipTransition.value);

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
        <component v-if="shouldSkipTransition" :is="Component" :key="route.fullPath" />
          <transition v-else :name="transitionName" :mode="transitionMode">
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

.mobile-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.mobile-slide-enter-active {
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}
.mobile-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.mobile-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.mobile-slide-leave-active {
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;
}
.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

</style>

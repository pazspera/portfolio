<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <button @click="toggleDark()" class="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200" :aria-label="isDark ? 'cambiar a modo claro' : 'cambiar a modo oscuro'">
    <Transition name="fade" mode="out-in">
      <component
        :is="isDark ? MoonIcon : SunIcon"
        :key="isDark ? 'moon' : 'sun'"
        class="w-6 h-6 text-primary-100 hover:text-primary-400 transition ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200"
      />
    </Transition>
  </button>
</template> 

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

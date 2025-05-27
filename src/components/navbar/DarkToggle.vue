<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <button @click="toggleDark()" class="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200">
    <MoonIcon v-if="isDark" class="w-6 h-6 text-primary-100 hover:text-primary-400 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200" />
    <SunIcon v-else class="w-6 h-6 text-primary-100 hover:text-primary-400 transition ease-in-out" />
  </button>
</template> 
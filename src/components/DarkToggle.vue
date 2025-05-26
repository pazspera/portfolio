<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <p>isDark: {{ isDark }}</p>
  <button @click="toggleDark()" class="px-4 py-2 bg-green-300  dark:bg-purple-600 text-black dark:text-white cursor-pointer">
    Toggle Dark mode
  </button>
</template>
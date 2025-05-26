<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <button @click="toggleDark()">
    <MoonIcon v-if="isDark" class="w-6 h-6 text-primary-100 hover:text-primary-400 transition ease-in-out" />
    <SunIcon v-else class="w-6 h-6 text-primary-100 hover:text-primary-400 transition ease-in-out" />
  </button>
</template>
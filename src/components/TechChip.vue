<script setup lang="ts">
import type { Tech } from '../types/techChips';  

defineProps<{
  tech: Tech;
}>();

</script>

<template>
  <div class="py-1.5 px-3 border border-gray-400 rounded-lg flex max-w-fit bg-transparent dark:bg-zinc-800 text-black dark:text-zinc-200 hover:opacity-85 transition">
    <img :src="tech.src" :alt="tech.alt" width="20px" height="20px" class="me-2">
    <span>
      {{ tech.label }}
    </span>
  </div>
</template>
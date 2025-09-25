<script setup lang="ts">
import { useImageUrl } from '../composables/useImageUrl';
import type { Tech } from '../types/techChips';  

const props = defineProps<{
  tech: Tech;
}>();

const { imgUrl } = useImageUrl(props.tech.src);

</script>

<template>
  <div class="py-1.5 px-3 border border-gray-400 rounded-lg flex max-w-fit bg-transparent dark:bg-zinc-800 text-black dark:text-zinc-200 hover:opacity-85 transition">
    <img :src="imgUrl" :alt="props.tech.alt" width="20px" height="20px" class="me-2">
    <span>
      {{ props.tech.label }}
    </span>
  </div>
</template>
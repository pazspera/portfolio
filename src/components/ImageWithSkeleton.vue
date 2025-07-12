<script setup lang="ts">
// the img needs:
// - src
// - alt
// - classes
// - width
// - height
// - aspect ratio
import { useImageLoaded } from '../composables/useImageLoaded';

defineProps<{
  src: string,
  alt: string,
  classes: string
}>();

const { isLoading, handleLoad } = useImageLoaded()
</script>

<template>
  <figure class="image-container">
    <div v-if="isLoading" :class="['absolute inset-0 bg-gray-300 animate-pulse rounded-2xl', classes]">
    </div>
    <img 
      :src="src" 
      :alt="alt"
      :class="classes"
      @load="handleLoad"
    >
  </figure>
</template>
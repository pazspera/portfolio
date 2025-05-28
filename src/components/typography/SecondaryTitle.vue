<script setup lang="ts">
defineProps<{
  text: string,
}>();
</script>

<template>
  <h3 class="font-title font-bold text-2xl mb-3">
    {{ text }}
  </h3>
</template>
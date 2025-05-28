<script setup lang="ts">
type Tech = {
  src: string,
  alt: string,
  label: string
}

defineProps<{
  tech: Tech;
}>();

</script>

<template>
  <div class="py-1.5 px-3 border border-gray-400 rounded-lg flex max-w-fit bg-transparent">
    <img :src="tech.src" :alt="tech.alt" width="20px" height="20px" class="me-2">
    <span>
      {{ tech.label }}
    </span>
  </div>
</template>
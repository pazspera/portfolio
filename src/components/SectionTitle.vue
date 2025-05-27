<script setup lang="ts">
  const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2 class="font-title font-bold text-3xl/tight md:text-4xl/tight xl:text-5xl/tight text-primary-900 dark:text-primary-300">{{ props.text }}</h2>
</template>
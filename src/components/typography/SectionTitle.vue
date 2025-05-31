<script setup lang="ts">
  const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2 class="font-title font-bold text-3xl/tight md:text-4xl/tight xl:text-5xl/tight mb-4">{{ props.text }}</h2>
</template>
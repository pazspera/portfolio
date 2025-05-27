<script setup lang="ts">
  const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2 class="font-title font-bold text-3xl">{{ props.text }}</h2>
</template>
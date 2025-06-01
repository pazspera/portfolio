<script setup lang="ts">
defineProps<{
  content?: string,
  html?: boolean
}>();
</script>

<template>
  <span v-if="html" v-html="content" class="mt-2 text-red-700 text-sm/5"></span>
  <span v-else class="mt-2 text-red-700 text-sm/5">
    <slot></slot>
  </span>
</template>
<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true
  },
})
</script>

<template>
  <RouterLink :to="props.to" class="py-2 px-3 text-base lg:text-lg xl:text-xl block uppercase font-semibold text-primary-100 hover:text-primary-400  hover:underline hover:underline-offset-8 decoration-2 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200">
    <slot></slot>
  </RouterLink>
</template>
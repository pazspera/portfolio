<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="props.href" class="py-2 block uppercase font-normal text-primary-100 hover:text-primary-400  transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200">{{props.label}}</a>
</template>
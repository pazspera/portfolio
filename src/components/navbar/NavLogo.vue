<script setup lang="ts">
</script>

<template>
  <RouterLink :to="{name: 'home'}" class="p-1 block text-2xl lg:text-3xl xl:text-4xl uppercase font-normal text-primary-100 hover:text-primary-400  transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200">
    <slot></slot>
  </RouterLink>
</template>
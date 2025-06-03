<script setup lang="ts">
import Loader from './Loader.vue';

const props = defineProps<{
  href?: string,
  label: string,
  type?: "button" | "submit" | "reset",
  loading?: boolean,
  size?: "small" | "medium"
}>()
const type = props.type ?? "button";

const sizeSmall = "text-sm lg:text-base 2xl:text-lg px-3 py-1.5 ";
const sizeMedium = "text-base lg:text-lg xl:text-xl 2xl:text-2xl px-4 py-2 2xl:px-6 2xl:py-3";

</script>

<template>
  <!-- renders a y href is passed -->
  <a 
    v-if="href"
    :href="href"
    :class="[
      'flex justify-center items-center uppercase  rounded-sm bg-primary-500 text-primary-900 font-bold  hover:bg-primary-900 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:outline-none  active:bg-primary-700 hover:text-primary-100 transition dark:bg-primary-900 dark:hover:bg-primary-800 dark:text-primary-100 dark:focus-visible:ring-primary-300 cursor-pointer',
      size === 'small' ? sizeSmall : sizeMedium
    ]"
    >
    <span>{{ label }}</span>
  </a>

  <!-- renders button if no href present -->
  <button
    v-else 
    :type="type" 
    :disabled="loading"
    :class="[
      'flex justify-center items-center uppercase rounded-sm bg-primary-500 text-primary-900 font-bold hover:bg-primary-900 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:outline-none  active:bg-primary-700 hover:text-primary-100 transition dark:bg-primary-900 dark:hover:bg-primary-800 dark:text-primary-100 dark:focus-visible:ring-primary-300 disabled:bg-primary-300 disabled:text-primary-700 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer',
      size === 'small' ? sizeSmall : sizeMedium
    ]"
  >
    <span v-if="loading" class="flex items-center gap-2">
      <Loader/> Enviando...
    </span>

    <span v-else>
      {{ label }}
    </span>
  </button>
</template>


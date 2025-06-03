<script setup lang="ts">
import Loader from './Loader.vue';
import type { RouteLocationRaw } from "vue-router";

const props = defineProps<{
  href?: string,
  type?: "button" | "submit" | "reset",
  loading?: boolean,
  size?: "small" | "medium",
  to?: RouteLocationRaw
}>()
const type = props.type ?? "button";

const sizeSmall = "text-sm lg:text-base 2xl:text-lg px-3 py-1.5 ";
const sizeMedium = "text-base lg:text-lg xl:text-xl 2xl:text-2xl px-4 py-2 2xl:px-6 2xl:py-3";

</script>

<template>
  <!-- renders a if href is passed -->
  <a 
    v-if="href"
    :href="href"
    :class="[
      'flex justify-center items-center uppercase  rounded-sm bg-primary-500 text-primary-900 font-bold  hover:bg-primary-900 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:outline-none  active:bg-primary-700 hover:text-primary-100 transition dark:bg-primary-900 dark:hover:bg-primary-800 dark:text-primary-100 dark:focus-visible:ring-primary-300 cursor-pointer',
      size === 'small' ? sizeSmall : sizeMedium
    ]"
    >
    <span>
      <slot></slot>
    </span>
  </a>

  <!-- renders router-link if to is passed -->
  <router-link 
    v-else-if="to"
    :to="to"
    :class="[
      'flex justify-center items-center uppercase w-fit rounded-sm bg-primary-500 text-primary-900 font-bold  hover:bg-primary-900 focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:outline-none  active:bg-primary-700 hover:text-primary-100 transition dark:bg-primary-900 dark:hover:bg-primary-800 dark:text-primary-100 dark:focus-visible:ring-primary-300 cursor-pointer',
      size === 'small' ? sizeSmall : sizeMedium
    ]"
    >
    <span>
      <slot></slot>
    </span>
  </router-link>

  <!-- renders button if type is passed -->
  <button
    v-else-if="type"
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
      <slot></slot>
    </span>
  </button>

</template>


<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import type { Options } from '@splidejs/splide';
import type { SliderImage } from '../types/imageSlider';
import '@splidejs/vue-splide/css/default.css';

defineProps<{
  images: SliderImage[];
}>();

const sliderOptions: Options = {
  perPage: 1,
  breakpoints: {
    768: {
      perpPage: 2,
    },
    1200: {
      perPage: 3,
    },
    1500: {
      perPage: 4,
    }
  }
}


</script>

<template>
  <section class="py-6">
    <Splide :options="sliderOptions">
      <SplideSlide v-for="image in images" :key="image.id">
        <img :src="image.src" :alt="image.alt">
      </SplideSlide>
    </Splide>
  </section>
</template>
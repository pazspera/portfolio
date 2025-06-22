<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import type { Options } from '@splidejs/splide';
import type { SliderImage } from '../types/imageSlider';
import '@splidejs/vue-splide/css';

defineProps<{
  images: SliderImage[];
}>();

const sliderOptions: Options = {
  perPage: 1,
  gap: '1em',
  breakpoints: {
    1500: {
      perPage: 4,
    },
    1200: {
      perPage: 3,
    },
    900: {
      perPage: 2,
    },
    768: {
      perPage: 2,
    },
    500: {
      perPage: 2,
    },
    400: {
      perPage: 1,
    },
    300: {
      perPage: 1,
    },
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
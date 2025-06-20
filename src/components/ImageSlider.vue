<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import type { SwiperOptions } from 'swiper/types';
import type { SliderImage } from '../types/imageSlider';
import { onMounted } from 'vue';

defineProps<{
  images: SliderImage[];
}>();

const swiperOptions: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
}

onMounted(() => {
  console.log("swiperoptions", swiperOptions);
  console.log("tipo", typeof swiperOptions);
  console.log("es array?", Array.isArray(swiperOptions))
})

</script>

<template>
  <section class="py-6">
    <Swiper :options="swiperOptions">
      <SwiperSlide v-for="image in images" :key="image.id">
        <img :src="image.src" :alt="image.alt">
      </SwiperSlide>
    </Swiper>
  </section>
</template>
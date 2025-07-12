<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import type { Options } from '@splidejs/splide';
import type { SliderImage } from '../types/imageSlider';
import CaptionText from './typography/CaptionText.vue';
import { ref } from "vue";
import VueEasyLightbox from 'vue-easy-lightbox';
import '@splidejs/vue-splide/css';

const props = defineProps<{
  images: SliderImage[];
  caption: string
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

const lightboxVisible = ref(false);
const lightboxIndex = ref(0);
const lightboxImages = ref(
  props.images.map(image => ({
    src: image.src,
    alt: image.alt,
  }))
)

const showLightbox = (index: number) => {
  lightboxIndex.value = index;
  lightboxVisible.value = true;
}

const hideLightbox = () => {
  lightboxVisible.value = false;
}

</script>

<template>
  <section class="py-6">
    <Splide :options="sliderOptions">
      <SplideSlide v-for="(image, index) in images" :key="image.id">
        <img :src="image.src" :alt="image.alt" class="splide-image clickable" @click="showLightbox(index)">
      </SplideSlide>
    </Splide>
    <CaptionText>
      {{ caption }}
    </CaptionText>
  </section>

  <vue-easy-lightbox 
    :visible="lightboxVisible"
    :imgs="lightboxImages"
    :index="lightboxIndex"
    @hide="hideLightbox"
  />
</template>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
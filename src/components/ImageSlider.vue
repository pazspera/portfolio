<script setup lang="ts">
import { ref, computed } from "vue";
import type { ImageSliderContent } from '../types/imageSlider.ts';
import { useImageUrl } from '../composables/useImageUrl.ts';

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import type { Options } from '@splidejs/splide';
import CaptionText from './typography/CaptionText.vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import '@splidejs/vue-splide/css';

const props = defineProps<{
  content: ImageSliderContent
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

const resolvedImages = computed(()=> {
  return props.content.images.map(image => {
    const { imgUrl } = useImageUrl(image.src);
    return {
      id: image.id,
      src: imgUrl.value,
      alt: image.alt,
    }
  })
})

const lightboxVisible = ref(false);
const lightboxIndex = ref(0);
const lightboxImages = computed (()=> {
  return resolvedImages.value.map(image => ({
    src: image.src,
    alt: image.alt,
  }))
})

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
      <SplideSlide v-for="(image, index) in resolvedImages" :key="image.id">
        <img :src="image.src" :alt="image.alt" class="splide-image clickable" @click="showLightbox(index)">
      </SplideSlide>
    </Splide>
    <CaptionText>
      {{ content.caption }}
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
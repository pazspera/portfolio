<script setup lang="ts">
import CaptionText from './typography/CaptionText.vue';
import { VueCompareImage } from 'vue3-compare-image';
import type { ImageCompareContent } from '../types/imageCompare';
import { useImageUrl } from '../composables/useImageUrl';

const props = defineProps<{
  content: ImageCompareContent,
}>();

const { imgUrl: imgOldUrl } = useImageUrl(props.content.imgOld);
const { imgUrl: imgNewUrl } = useImageUrl(props.content.imgNew);

</script>

<template>
  <section class="py-6">
      <VueCompareImage 
        :leftImage="imgOldUrl" 
        :rightImage="imgNewUrl" 
        :leftImageAlt="props.content.altImgOld"
        :rightImageAlt="props.content.altImgNew"
        :keyboard="true" 
        :keyboardStep="0.1"
        sliderLineColor="#033035"
        :sliderLineWidth="3"
        :sliderPositionPercentage="0.5"
      />
      <CaptionText>
        {{ props.content.caption }}
      </CaptionText>
    </section>
</template>
<script setup lang="ts">
import CaptionText from './typography/CaptionText.vue';
import { VueCompareImage } from 'vue3-compare-image';
import type { ImageCompareContent } from '../types/imageCompare';

const props = defineProps<ImageCompareContent>();

</script>

<template>
  <section class="py-6">
      <VueCompareImage 
        :leftImage="props.imgOld" 
        :rightImage="props.imgNew" 
        :leftImageAlt="props.altImgOld"
        :rightImageAlt="props.altImgNew"
        :keyboard="true" 
        :keyboardStep="0.1"
        sliderLineColor="#033035"
        :sliderLineWidth="3"
        :sliderPositionPercentage="0.5"
      />
      <CaptionText>
        <slot></slot>
      </CaptionText>
    </section>
</template>
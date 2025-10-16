<script setup lang="ts">
import { ImageSrcSet } from '../types/general';
import { IndividualImageSrc } from '../types/general';
import { createStaticImageRoute } from '../utility/staticImageRoute';
import { computed } from 'vue';

const props = defineProps<{
  img: ImageSrcSet,
}>();

const createImgSrcSetRoute = (imgArray : IndividualImageSrc[] | undefined) => {
  if(!imgArray) {
    return "";
  }

  const srcSetString = imgArray.map((img) => {
    const newImageRoute = createStaticImageRoute(img.src);
    return `${newImageRoute} ${img.width}`;
  }).join(", ")
  
  return srcSetString;
}

const newSrcSet = computed(()=> {
  return createImgSrcSetRoute(props.img.srcSet);
}) 

const newSrcSetWebp = computed(()=> {
  return createImgSrcSetRoute(props.img.srcSetWebp);
})

</script>

<template>
  <picture>
    <source
      v-if="newSrcSetWebp"
      :srcset="newSrcSetWebp"
      :sizes="props.img.sizes"
      type="image/webp"
    />

    <img 
      :srcset="newSrcSet"
      :sizes="props.img.sizes"
      :src="createStaticImageRoute(props.img.srcDefault)"
      :alt="props.img.alt" />
  </picture>
</template>
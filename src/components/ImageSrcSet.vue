<script setup lang="ts">
import { ImageSrcSet } from '../types/general';
import { createStaticImageRoute } from '../utility/staticImageRoute';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  img: ImageSrcSet,
}>();

const newSrcSet = ref(""); 

const createImgSrcSetRoute = (imgArray : ImageSrcSet) => {
  let srcSetString = "";

  imgArray.srcSet.map((img)=> {
    let newImageRoute = createStaticImageRoute(img.src);
    srcSetString += `${newImageRoute} ${img.width}, `
    console.log("srcSetString", srcSetString);
  })

  if(srcSetString.endsWith(", ")) {
    srcSetString = srcSetString.slice(0, -2);
  }
  
  return srcSetString;
}

onMounted(()=> {
  newSrcSet.value = createImgSrcSetRoute(props.img);
  console.log("newSrcSet",newSrcSet);
})

</script>

<template>
  <img 
    :srcset="newSrcSet"
    :sizes="props.img.sizes"
    :src="createStaticImageRoute(props.img.srcDefault)"
    :alt="props.img.alt" />
</template>
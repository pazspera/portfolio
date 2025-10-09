<script setup lang="ts">
import TertiaryTitle from "../typography/TertiaryTitle.vue"
import MainText from "../typography/MainText.vue";
import ButtonContained from "../ButtonContained.vue";
import { ref } from "vue";
import { ProjectCard } from "../../types/projects-v2";
import { useImageUrl } from "../../composables/useImageUrl";
import ImageSrcSet from "../ImageSrcSet.vue";

const props = defineProps<{
  card: ProjectCard
}>();

const isHovered = ref(false);
const imgSource = props.card.img?.src;
const { imgUrl } = useImageUrl(imgSource || "");

</script>

<template>
  <article 
    class="rounded-lg overflow-hidden transition-all duration-300 flex flex-col items-stretch"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="overflow-hidden relative transition-all duration-150 ease-in-out">
      <img v-if="card.img" :src="imgUrl" :alt="card.img.alt" :class="[isHovered ? 'scale-105' : 'scale-100' , 'w-full h-auto object-cover transition-all duration-300']" loading="lazy"/>
      <ImageSrcSet v-if="card.imgSrcSet" :img="card.imgSrcSet" />
    </div>  
    <div class="p-6 bg-slate-300 dark:bg-slate-700 dark:text-zinc-200 flex flex-col flex-grow place-items-between rounded-b-lg">
      <div class="align-self-start">
        <TertiaryTitle class="mb-2 text-primary-900 dark:text-primary-300">
        {{ card.title }}
        </TertiaryTitle>
        <MainText>
          {{ card.text }}
        </MainText>
      </div>
      <div class="flex flex-col justify-end grow">
        <ButtonContained class="mt-4 align-self-end" size="small" :to="card.to"> 
          Ver caso de estudio
        </ButtonContained>
      </div>
    </div>
  </article>
</template>
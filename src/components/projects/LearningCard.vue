<script setup lang="ts">
import SecondaryTitle from "../typography/SecondaryTitle.vue";
import MainText from "../typography/MainText.vue";
import { TakeawayItem } from "../../types/projects-v2";
import { useImageUrl } from "../../composables/useImageUrl";

const props = defineProps<{
  content: TakeawayItem;
}>();

const { imgUrl } = useImageUrl(props.content.img.src);

</script>

<template>
  <article :class="['p-4 lg:p-6  rounded-lg bg-primary-100', props.content.class]">
    <img :src="imgUrl" :alt="props.content.img.alt" class="w-[70px] lg:w-[90px] mb-4" loading="lazy">
    <div>
      <SecondaryTitle>
      {{ props.content.title }}
      </SecondaryTitle>
      <MainText>
        {{ props.content.text }}
      </MainText>
    </div>
  </article>
</template>
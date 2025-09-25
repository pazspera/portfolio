<script setup lang="ts">
import SecondaryTitle from "../typography/SecondaryTitle.vue";
import MainText from "../typography/MainText.vue";
import type { Conclusion } from "../../types/projects";
import { useImageUrl } from "../../composables/useImageUrl";

const props = defineProps<{
  conclusion: Conclusion;
}>();

const { imgUrl } = useImageUrl(props.conclusion.img.src);

</script>

<template>
  <article :class="['p-4 lg:p-6  rounded-lg bg-primary-100', props.conclusion.class]">
    <img :src="imgUrl" :alt="props.conclusion.img.alt" class="w-[70px] lg:w-[90px] mb-4 ">
    <div>
      <SecondaryTitle>
      {{ props.conclusion.title }}
      </SecondaryTitle>
      <MainText>
        {{ props.conclusion.text }}
      </MainText>
    </div>
  </article>
</template>
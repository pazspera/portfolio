<script setup lang="ts">
import TertiaryTitle from "../typography/TertiaryTitle.vue";
import MainText from "../typography/MainText.vue";

type Conclusion = {
  id: number,
  img: {
    src: string,
    alt: string,
  },
  title: string,
  text: string
}

defineProps<{
  conclusion: Conclusion;
}>();

</script>

<template>
  <article>
    <img :src="conclusion.img.src" :alt="conclusion.img.alt">
    <TertiaryTitle>
      {{ conclusion.title }}
    </TertiaryTitle>
    <MainText>
      {{ conclusion.text }}
    </MainText>
  </article>
</template>
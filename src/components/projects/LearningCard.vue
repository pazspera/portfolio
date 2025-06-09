<script setup lang="ts">
import TertiaryTitle from "../typography/TertiaryTitle.vue";
import MainText from "../typography/MainText.vue";
import type { Conclusion } from "../../types/proyects";

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
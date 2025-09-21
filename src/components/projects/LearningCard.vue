<script setup lang="ts">
import SecondaryTitle from "../typography/SecondaryTitle.vue";
import MainText from "../typography/MainText.vue";
import type { Conclusion } from "../../types/projects";

defineProps<{
  conclusion: Conclusion;
}>();

</script>

<template>
  <article :class="['p-4 lg:p-6  rounded-lg bg-primary-100', conclusion.class]">
    <img :src="conclusion.img.src" :alt="conclusion.img.alt" class="w-[70px] lg:w-[90px] mb-4 ">
    <div>
      <SecondaryTitle>
      {{ conclusion.title }}
      </SecondaryTitle>
      <MainText>
        {{ conclusion.text }}
      </MainText>
    </div>
  </article>
</template>
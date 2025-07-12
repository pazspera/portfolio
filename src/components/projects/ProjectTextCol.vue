<script setup lang="ts">
import SecondaryTitle from "../typography/SecondaryTitle.vue";
import MainText from "../typography/MainText.vue";
</script>

<template>
  <article class="pb-5 md:pe-6 max-w-[450px]">
    <SecondaryTitle>
      <slot name="title"></slot>
    </SecondaryTitle>
    <MainText>
      <slot name="text"></slot>
    </MainText>
  </article>
</template>
<script setup lang="ts">
import SecondaryTitle from '../typography/SecondaryTitle.vue';
import MainText from '../typography/MainText.vue';



</script>

<template>
  <div
    class="lg:col-span-4 lg:order-first lg:pe-5 mt-4  max-w-[400px] bg-primary-200 dark:bg-primary-400 py-4 px-8 rounded-lg dark:text-zinc-900">
    <div class="pt-4 pb-2">
      <SecondaryTitle>
        Rol
      </SecondaryTitle>
      <MainText>
        <slot name="role"></slot>
      </MainText>
    </div>
    <div class="py-2">
      <SecondaryTitle>
        Cliente
      </SecondaryTitle>
      <MainText>
        <slot name="client"></slot>
      </MainText>
    </div>
    <div class="py-2">
      <SecondaryTitle>
        Duración
      </SecondaryTitle>
      <MainText>
        <slot name="duration"></slot>
      </MainText>
    </div>
    <div class="py-2">
      <SecondaryTitle>
        Tecnologías utilizadas
      </SecondaryTitle>
    </div>
  </div>
</template>
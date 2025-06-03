<script setup>
import CardTitle from "../components/typography/CardTitle.vue";
import MainText from "../components/typography/MainText.vue";
import ButtonContained from "./ButtonContained.vue";
</script>

<template>
  <div class="rounded-lg overflow-hidden">
    <img src="../assets/card-contenido-redes-default.jpg" alt="" class="w-full">
    <div class="p-6 bg-slate-300 dark:bg-slate-700 dark:text-zinc-200">
      <CardTitle class="mb-2 text-primary-900 dark:text-primary-300">
        Contenido estratégico para redes 
      </CardTitle>
      <MainText>
        Desarrollo de piezas y textos para campañas en redes sociales, ajustados a la voz y público de cada marca. Las acciones buscan mejorar la interacción y el posicionamiento orgánico.
      </MainText>
      <ButtonContained label="Ver caso de estudio" class="mt-4" />
    </div>
  </div>
</template>
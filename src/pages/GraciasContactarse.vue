<script setup lang="ts">
import { useDocumentTitle } from '../composables/useDocumentTitle';
import HeroTitle from '../components/typography/HeroTitle.vue';
import HeroBlurb from '../components/typography/HeroBlurb.vue';
import ButtonContained from '../components/ButtonContained.vue';

useDocumentTitle("Gracias por contactarse - Paz Spera")

</script>

<template>
  <div class="min-h-dvh flex flex-col justify-center">
    <section class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 lg:w-[80%] lg:self-center px-4 sm:px-6 lg:px-8 pt-8 pb-14 md:pt-14 lg:pt-16 lg:pb-16 rounded-br-[120px] md:rounded-tl-[120px]">
      <div class="flex flex-col items-center justify-center text-center">
        <HeroTitle>¡Gracias por contactarte!</HeroTitle>
        <div class="max-w-lg mx-auto">
          <HeroBlurb class="text-pretty">Tu mensaje fue enviado correctamente y me pondré en contacto a la brevedad.</HeroBlurb>
        </div>
        <ButtonContained class="mt-8 text-center" size="small" :to="{ name: 'home'}"> 
          Volver al inicio
        </ButtonContained>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import HeroTitle from '../../components/typography/HeroTitle.vue';
import HeroBlurb from "../../components/typography/HeroBlurb.vue"
</script>

<template>
  <section class="relative overflow-visible bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 xl:pt-10 pb-8 sm:pb-12 md:pb-6 lg:pb-8 xl:pb-10 mb-10 rounded-br-[120px] md:rounded-r-[120px] md:rounded-br-none">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-8 gap-6">
        <!-- Text -->
         <div class="md:col-span-5 lg:pe-10">
            <HeroTitle>
              Rediseño de sitio institucional
            </HeroTitle>
            <HeroBlurb>
              Mejoré la experiencia de usuario, reorganizando la navegación y reforzando la comunicación de servicios para una consultora de datos y marketing.
            </HeroBlurb>
         </div>
         <!-- Image -->
          <div class="md:col-span-3 md:col-start-6 max-w-[100%] mb-[-5%] transform translate-y-[10%] md:translate-y-0">
            <img src="/src/assets/mockup_rediseno_institucional.png" alt="" class="w-full">
          </div>
      </div>
    </div>
  </section>
</template>
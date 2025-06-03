<script setup lang="ts">
import ButtonContained from '../components/ButtonContained.vue';
import ButtonText from '../components/ButtonText.vue';
import HeroTitle from '../components/typography/HeroTitle.vue';
import EyebrowText from '../components/typography/EyebrowText.vue';
import HeroBlurb from "../components/typography/HeroBlurb.vue";
import RoleLabel from "../components/typography/RoleLabel.vue";
</script>


<template>
  <section class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 xl:pt-10 pb-14 sm:pb-12 md:pb-6 lg:pb-8 xl:pb-10 rounded-br-[120px] md:rounded-r-[120px] md:rounded-br-none">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-8 gap-6">
        <!-- Texto -->
        <div class="md:col-span-5 lg:pe-10">
          <EyebrowText>
            ¡Hola, soy Paz! Me especializo en
          </EyebrowText>
          <HeroTitle>
            Captar la atención, guiar al usuario y lograr conversiones
          </HeroTitle>
          <HeroBlurb>
            Cuando el diseño, el código y las palabras trabajan en equipo, los resultados no tardan en llegar.
          </HeroBlurb>
          <div class="mt-6 flex gap-6">
            <ButtonContained href="#" size="medium">
              Ver proyectos
            </ButtonContained>
            <ButtonText href="#" label="Contacto"/>
          </div>
        </div>
        <!-- Img -->
        <div class="md:col-span-3 md:col-start-6 self-center flex flex-col items-center justify-center">
          <img src="/src/assets/bio.png" alt="Paz Spera" class="max-w-2xs md:max-lg:max-w-[200px] h-auto pb-2 object-cover z-0" />
            <div class="bg-primary-400 bg-opacity-60 text-black dark:bg-primary-200 text-sm lg:text-lg py-2 px-4 rounded-sm z-10 -mt-8 relative">
              <div class="flex flex-col items-center">
                <RoleLabel>
                  Diseñadora UX/UI
                </RoleLabel>
                <RoleLabel>
                  Frontend Developer & Copywriter
                </RoleLabel>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
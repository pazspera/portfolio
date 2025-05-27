<script setup lang="ts">
import ButtonContained from '../components/ButtonContained.vue';
import ButtonText from '../components/ButtonText.vue';
</script>


<template>
  <section class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-18 sm:pb-16 md:pb-14 rounded-br-[120px]">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-8 gap-6">
        <!-- Texto -->
        <div class="md:col-span-5 lg:pe-10">
          <p class="text-sm lg:text-lg">¡Hola, soy Paz! Me especializo en</p>
          <h1 class="font-title text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight font-bold mt-2 mb-4 text-primary-900">Captar la atención, guiar al usuario y lograr conversiones</h1>
          <p class="text-lg lg:text-2xl">Cuando el diseño, el código y las palabras trabajan en equipo, los resultados no tardan en llegar.</p>
          <div class="mt-6 flex gap-6">
            <ButtonContained href="#" label="Ver proyectos"/>
            <ButtonText href="#" label="Contacto"/>
          </div>
        </div>
        <!-- Img -->
        <div class="md:col-span-3 md:col-start-6 self-center flex flex-col items-center justify-center">
          <img src="/src/assets/bio.png" alt="Paz Spera" class="max-w-2xs md:max-lg:max-w-[200px] h-auto pb-2 object-cover z-0" />
            <div class="bg-primary-400 bg-opacity-60 text-black dark:bg-primary-200 text-sm lg:text-lg py-2 px-4 rounded-sm z-10 -mt-8 relative">
              <div class="flex flex-col items-center">
                <span class="font-text text-center">Diseñadora UX/UI</span>
                <span class="font-text text-center">Frontend Developer & Copywriter</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
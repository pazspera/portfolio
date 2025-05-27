<script setup lang="ts">
import ButtonContained from '../components/ButtonContained.vue';
import ButtonText from '../components/ButtonText.vue';
</script>

<template>
  <section class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 pt-6 pb-18 rounded-br-[200]">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
        <!-- Texto -->
        <div class="md:col-span-3">
          <p class="text-sm">¡Hola, soy Paz! Me especializo en</p>
          <h1 class="font-title text-4xl font-bold mt-2 mb-4 text-primary-900">Captar la atención, guiar al usuario y lograr conversiones</h1>
          <p class="text-lg">Cuando el diseño, el código y las palabras trabajan en equipo, los resultados no tardan en llegar.</p>
          <div class="mt-6 flex gap-6">
            <ButtonContained href="#" label="Ver proyectos"/>
            <ButtonText href="#" label="Contacto"/>
          </div>
        </div>
        <!-- Img -->
        <div class="flex items-center justify-center h-full">
          <div class="relative w-3xs">
            <img src="/src/assets/bio.png" alt="Paz Spera" class="w-full pb-2">
            <div class="absolute bottom-0 w-full bg-gray-200 bg-opacity-60 text-black text-sm py-2 px-4 rounded-sm">
              <div class="flex flex-col gap-1 items-center">
                <span class="font-text">Diseñadora UX/UI</span>
                <span class="font-text">Frontend Developer & Copywriter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>gi
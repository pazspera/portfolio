<script setup lang="ts">
import SectionTitle from '../components/typography/SectionTitle.vue';
import MainText from "../components/typography/MainText.vue";
import ButtonContained from '../components/ButtonContained.vue';
</script>

<template>
  <section class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 xl:pt-10 pb-14 sm:pb-12 md:pb-6 lg:pb-8 xl:pb-10 rounded-tl-[120px] md:rounded-bl-[120px] md:rounded-tl-none">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <!-- Texto -->
        <div class="text-center">
          <SectionTitle text="Contacto" class="text-primary-900" />
          <MainText>
            Las mejores ideas empiezan con una conversación. Completá el formulario y veamos cómo darle forma juntos.
          </MainText>
          <!-- Links redes -->
          <div class="flex gap-4 items-center justify-center py-4">
            <a href="https://www.linkedin.com/in/paz-spera/" target="_blank" rel="noopener noreferrer" class="p-1 text-primary-900 hover:text-primary-800 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700  active:text-primary-300 "> 
            <i class="devicon-linkedin-plain text-4xl lg:text-5xl"></i>
          </a>
          <a href="https://github.com/pazspera" target="_blank" rel="noopener noreferrer" class="p-1 text-primary-900 hover:text-primary-800 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700  active:text-primary-300">
            <i class="devicon-github-original text-4xl lg:text-5xl"></i>
          </a>
          </div>
        </div>
        <!-- Form -->
        <div>
          <form>
            <div class="flex flex-col mb-3">
              <label for="name">Nombre *</label>
              <input type="text" name="name" class="block bg-white py-1.5 px-3 rounded-md text-base text-zinc-900 ">
            </div>
            <div class="flex flex-col mb-3">
              <label for="email">Email *</label>
              <input type="text" name="name" class="block bg-white py-1.5 px-3 rounded-md text-base text-zinc-900 ">
            </div>
            <div class="flex flex-col mb-3">
              <label for="message">Mensaje *</label>
              <textarea name="message" class="block bg-white py-1.5 px-3 rounded-md text-base text-zinc-900"></textarea>
            </div>
            <div class="mb-3 flex">
              <ButtonContained label="Enviar" class="w-full" />
            </div>
          </form>
        </div>
      </div>
    </div> 
  </section>
</template>
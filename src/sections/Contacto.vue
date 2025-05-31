<script setup lang="ts">
import SectionTitle from '../components/typography/SectionTitle.vue';
import MainText from "../components/typography/MainText.vue"
</script>

<template>
  <section class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 xl:pt-10 pb-14 sm:pb-12 md:pb-6 lg:pb-8 xl:pb-10 rounded-tl-[120px] md:rounded-r-[120px] md:rounded-br-none">
    <div class="container mx-auto">
      <div class="grid grid-cols-1">
        <!-- Texto -->
        <div class="text-center">
          <SectionTitle text="Contacto" class="text-primary-900" />
          <MainText>
            Las mejores ideas empiezan con una conversación. Completá el formulario y veamos cómo darle forma juntos.
          </MainText>
          <!-- Links redes -->
          <div class="flex gap-4 items-center justify-center py-4">
            <a href="https://www.linkedin.com/in/paz-spera/" target="_blank" rel="noopener noreferrer" class="p-1 text-primary-900 hover:text-primary-400 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200"> 
            <i class="devicon-linkedin-plain text-2xl lg:text-3xl"></i>
          </a>
          <a href="https://github.com/pazspera" target="_blank" rel="noopener noreferrer" class="p-1 text-primary-100 hover:text-primary-400 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200">
            <i class="devicon-github-original text-2xl lg:text-3xl"></i>
          </a>
          </div>
        </div>
        <!-- Form -->
        <div>
          <form>
            
          </form>
        </div>
      </div>
    </div> 
  </section>
</template>
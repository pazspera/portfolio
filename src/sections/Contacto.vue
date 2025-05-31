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
          <div>
            <!-- Links redes -->
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
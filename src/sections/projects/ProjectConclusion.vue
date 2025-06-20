<script setup lang="ts">
import SectionTitle from '../../components/typography/SectionTitle.vue';
import LearningCard from '../../components/projects/LearningCard.vue';
import type { Conclusion } from "../../types/proyects";

defineProps<{
  conclusions: Conclusion[],
}>();

</script>

<template>
  <section class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-8 lg:px-10 xl:px-12 py-8 lg:py-10 xl:py-12 rounded-tr-[120px] md:rounded-bl-[120px] md:rounded-tr-none"> 
    <div class="container mx-auto">
      <SectionTitle class="text-primary-900 mb-8">
        Aprendizajes 
      </SectionTitle>
      <div class="grid grid-cols-1 md:grid-cols-8 gap-6">
        <LearningCard v-for="item in conclusions" :key="item.id" :conclusion="item" />
      </div>
    </div>
  </section>
</template>
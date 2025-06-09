<script setup lang="ts">
import SectionTitle from '../../components/typography/SectionTitle.vue';
import LearningCard from '../../components/projects/LearningCard.vue';

const props = defineProps<>({
  conclusions: Conclusions[];
});

</script>

<template>
  <section class="bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 xl:pt-10 pb-14 sm:pb-12 md:pb-6 lg:pb-8 xl:pb-10 lg:my-8 rounded-tl-[120px] md:rounded-bl-[120px] md:rounded-tl-none"> 
    <div class="container mx-auto">
      <SectionTitle>
        Aprendizajes 
      </SectionTitle>
    </div>
  </section>
</template>
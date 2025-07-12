<script setup lang="ts">
import type { ItemEnfoque } from '../../types/proyects';
import SectionTitle from '../../components/typography/SectionTitle.vue';
import ProjectTextCol from '../../components/projects/ProjectTextCol.vue';


defineProps<{
  itemsEnfoque: ItemEnfoque[],
}>();
</script>

<template>
  <section class="py-6">
    <SectionTitle class="text-primary-900 dark:text-primary-300 mb-8">
      Enfoque y metodología
    </SectionTitle>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectTextCol v-for="item in itemsEnfoque" :key="item.id">
        <template #title>
          {{ item.title }}
        </template>
        <template #text>
          {{ item.text }}
        </template>
      </ProjectTextCol>
    </div>
  </section>
</template>
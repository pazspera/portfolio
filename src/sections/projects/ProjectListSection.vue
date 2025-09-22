<script setup lang="ts">
import { ContentItem } from '../../types/projects-v2';
import SectionTitle from '../../components/typography/SectionTitle.vue';
import ProjectTextCol from '../../components/projects/ProjectTextCol.vue';

const props = defineProps<{
  title: string,
  items: ContentItem[],
  class?: string,
}>();

</script>

<template>
  <section class="py-6" :class="props.class">
    <SectionTitle class="text-primary-900 dark:text-primary-300 mb-8">
      {{ props.title }}
    </SectionTitle>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectTextCol v-for="item in props.items" :key="item.id">
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
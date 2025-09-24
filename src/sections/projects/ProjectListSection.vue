<script setup lang="ts">
import { ProjectListSection } from '../../types/projects-v2';
import SectionTitle from '../../components/typography/SectionTitle.vue';
import ProjectTextCol from '../../components/projects/ProjectTextCol.vue';

defineProps<{
  content:ProjectListSection
}>();

</script>

<template>
  <section class="py-6" :class="content.class">
    <SectionTitle class="text-primary-900 dark:text-primary-300 mb-8">
      {{ content.title }}
    </SectionTitle>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectTextCol v-for="item in content.items" :key="item.id">
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
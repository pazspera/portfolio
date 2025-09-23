<script setup lang="ts">
import { ProjectChallengeContent } from '../../types/projects-v2';
import SectionTitle from '../../components/typography/SectionTitle.vue';
import MainText from '../../components/typography/MainText.vue';


defineProps<ProjectChallengeContent>();
</script>

<template>
<section class="py-6">
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <SectionTitle class="text-primary-900 dark:text-primary-300">
          Desafío
        </SectionTitle>
      </div>
      <div class="lg:col-span-8 ps-4 lg:ps-8">
        <ul>
          <li v-for="challenge in challenges" :key="challenge.id" class="list-disc list-inside pb-3">
            <MainText class="inline">
              {{ challenge.text }}
            </MainText>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
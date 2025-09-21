<script setup lang="ts">
import type { Desafio } from '../../types/projects';
import SectionTitle from '../../components/typography/SectionTitle.vue';
import MainText from '../../components/typography/MainText.vue';


defineProps<{
  desafios: Desafio[],
}>();
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
          <li v-for="desafio in desafios" :key="desafio.id" class="list-disc list-inside pb-3">
            <MainText class="inline">
              {{ desafio.text }}
            </MainText>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
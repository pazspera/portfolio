<script setup lang="ts">
import TechChip from "../../components/TechChip.vue";
import { ProjectSummaryContent } from "../../types/projects-v2";
import SectionTitle from "../../components/typography/SectionTitle.vue";
import HighlightText from "../../components/typography/HighlightText.vue";
import RoleCard from "../../components/projects/RoleCard.vue";
import SecondaryTitle from "../../components/typography/SecondaryTitle.vue";

defineProps<{
  content: ProjectSummaryContent
}>();

</script>

<template>
  <section class="pt-12 pb-8">
    <div class="lg:mb-6">
      <SectionTitle class="text-primary-900 dark:text-primary-300">
        Resumen del proyecto
      </SectionTitle>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="lg:col-span-8 lg:order-last lg:ps-8 lg:pt-4">
        <HighlightText>
          <span v-html="content.summary"></span>
        </HighlightText>
        <div class="py-4 2xl:py-6">
          <SecondaryTitle>Tecnologías utilizadas</SecondaryTitle>
          <div class="flex flex-wrap gap-3 py-2 md:py-4">
            <TechChip
              v-for="(tech, index) in content.techStack"
              :key="index"
              :tech="tech"
            />
          </div>
        </div>
      </div>
      <!-- Rol -->
      <RoleCard :="content.roleCard" />
    </div>
  </section>
</template>
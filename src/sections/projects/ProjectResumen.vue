<script setup lang="ts">
import SectionTitle from "../../components/typography/SectionTitle.vue";
import HighlightText from "../../components/typography/HighlightText.vue";
import RoleCard from "../../components/projects/RoleCard.vue";

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
          <slot name="summary"></slot>
        </HighlightText>
      </div>
      <!-- Rol -->
      <RoleCard>
        <template #role>
          <slot name="role"></slot>
        </template>
        <template #client>
          <slot name="client"></slot>
        </template>
        <template #duration>
          <slot name="duration"></slot>
        </template>
      </RoleCard>
    </div>
  </section>
</template>
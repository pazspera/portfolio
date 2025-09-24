<script setup lang="ts">
import { RoleCard } from '../../types/projects-v2';
import SecondaryTitle from '../typography/SecondaryTitle.vue';
import MainText from '../typography/MainText.vue';
import ButtonContained from '../ButtonContained.vue';

defineProps<RoleCard>();

</script>

<template>
  <div
    class="lg:col-span-4 lg:order-first lg:pe-5 mt-4  max-w-[400px] bg-primary-200 dark:bg-primary-400 py-4 px-8 rounded-lg dark:text-zinc-900">
    <div class="pt-4 pb-2">
      <SecondaryTitle>
        Rol
      </SecondaryTitle>
      <MainText>
        <span v-html="role"></span>
      </MainText>
    </div>
    <div class="py-2">
      <SecondaryTitle>
        Cliente
      </SecondaryTitle>
      <MainText>
        <span v-html="client"></span>
      </MainText>
    </div>
    <div class="py-2">
      <SecondaryTitle>
        Duración
      </SecondaryTitle>
      <MainText>
        <span v-html="duration"></span>
      </MainText>
    </div>
    <div v-if="url" class="pt-2 pb-4">
      <ButtonContained :href="url" class="max-w-fit" size="small">
        Visitar sitio
      </ButtonContained>
    </div>
  </div>
</template>
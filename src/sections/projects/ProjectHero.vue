<script setup lang="ts">
import { ProjectHeroContent } from '../../types/projects-v2';
import HeroTitle from '../../components/typography/HeroTitle.vue';
import HeroBlurb from "../../components/typography/HeroBlurb.vue";

const props = defineProps<{
  content: ProjectHeroContent
}>();

</script>

<template>
  <section class="relative overflow-visible bg-primary-200 dark:bg-primary-400 dark:text-zinc-900 px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 xl:pt-10 pb-8 sm:pb-12 md:pb-6 lg:pb-8 xl:pb-10 mb-10 rounded-br-[120px] md:rounded-r-[120px] md:rounded-br-none">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 2xl:grid-cols-18 gap-2">
        <!-- Text -->
         <div class="md:col-span-4 lg:col-span-6 2xl:col-span-9 lg:max-xl:not-first:pe-8 lg:flex lg:flex-col lg:justify-center">
            <HeroTitle>
              <span v-html="content.title"></span>
            </HeroTitle>
            <HeroBlurb>
              <span v-html="content.text"></span>
            </HeroBlurb>
         </div>
         <!-- Image -->
          <div class="md:col-span-4 md:col-start-5 lg:col-start-7 2xl:col-start-10 max-w-[100%] md:w-[52vw] md:max-lg:max-w-[55vw] lg:max-xl:max-w-[52vw] xl:max-w-[800px] 2xl:max-w-[800px] mb-[-7%] md:mb-[-2%] lg:ps-3 lg:ms-3 xl:ms-5 2xl:ms-12 transform translate-y-[12%] md:translate-y-0 md:translate-x-[3%]">
            <img :src="content.img.src" :alt="content.img.alt" class="w-full ">
          </div>
      </div>
    </div>
  </section>
</template>
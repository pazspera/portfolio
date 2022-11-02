<template>
  <div>
    <HeroComponent />
  </div>
</template>

<script>
import HeroComponent from "@/components/HeroComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
  },
  mounted() {
    document.title = "Home - Paz Spera";
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

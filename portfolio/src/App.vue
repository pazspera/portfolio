<template>
  <div>
    <NavBarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
  name: "App",
  components: {
    NavBarComponent,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

<template>
  <div>
    <NavBarComponent />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
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

/* Route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>

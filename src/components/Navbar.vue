<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import NavLink from "./NavLink.vue";
import NavLogo from "./NavLogo.vue";
import DarkToggle from "./DarkToggle.vue";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
}

</script>

<template>
  <header class="bg-primary-800 w-full h-auto ">
    <div class="container mx-auto px-4 py-1.5 md:px-0">
      <nav class="flex justify-between items-center">
        <!-- Logo -->
        <NavLogo href="#" label="PS" class="font-logo text-2xl font-normal"/>

        <div class="ml-auto flex items-center gap-6">
          <!-- Desktop links -->
          <div class="hidden md:flex md:flex-row gap-4">
            <NavLink href="#" label="Proyectos"/>
            <NavLink href="#" label="Acerca de"/>
            <NavLink href="#" label="Contacto"/>
          </div>
  
          <!-- Buttons -->
          <div class="flex items-center gap-6">
            <DarkToggle />
            <button @click="toggleMenu">
              <Bars3Icon class="w-6 h-6 text-primary-100 cursor-pointer hover:text-primary-400 transition ease-in-out md:hidden"/>
            </button>
          </div>
        </div>

      </nav>
    </div>

    <!-- Mobile menu -->
    <transition name="fade-slide">
      <div v-if="menuOpen" class="flex-col md:flex md:flex-row items-center justify-start md:space-x-1 pb-3 md:pb-0">
        <NavLink href="#" label="Proyectos"/>
        <NavLink href="#" label="Acerca de"/>
        <NavLink href="#" label="Contacto"/>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
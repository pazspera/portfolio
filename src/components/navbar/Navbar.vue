<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useIsMobile } from "../../composables/useIsMobile";
import NavLink from "./NavLink.vue";
import NavLogo from "./NavLogo.vue";
import DarkToggle from "./DarkToggle.vue";
import { useNavbarStore } from "../../stores/navbar";

const menuOpen = ref(false);
const { isMobile } = useIsMobile();
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
}

const isNavbarVisible = ref(true);
const lastScrollPosition = ref(0);
const headerRef = ref<HTMLElement | null>(null);
const navbarStore = useNavbarStore();

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // stops navbar from blinking
  if (currentScrollPosition === 0) {
    isNavbarVisible.value = true;
  } 
  // hides navbar on scroll down
  else if(currentScrollPosition > lastScrollPosition.value && currentScrollPosition > 50) {
    isNavbarVisible.value = false;
  } 
  // shows navbar on scroll up
  else if (currentScrollPosition < lastScrollPosition.value) {
    isNavbarVisible.value = true;
  }

  // update visibility in store
  navbarStore.setIsVisible(isNavbarVisible.value);

  // waits until next tick to get current height and update it in store
  // the change is immediate but won't be applied until the dom updates
  // that's the next tick
  nextTick(()=> {
    if (headerRef.value) {
      navbarStore.setHeight(headerRef.value.offsetHeight);
    }
  })

  lastScrollPosition.value = currentScrollPosition;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // initializes height and visibility in store
  nextTick(()=> {
    if(headerRef.value) {
      navbarStore.setHeight(headerRef.value.offsetHeight);
      navbarStore.setIsVisible(isNavbarVisible.value);
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
})

</script>

<template>
  <header ref="headerRef" class="bg-primary-800 w-full h-auto" :class="{ 'navbar-hidden': !isNavbarVisible, 'navbar-visble': isNavbarVisible }">
    <div class="container mx-auto px-4 py-1.5 md:px-6">
      <nav class="flex justify-between items-center">
        <!-- Logo -->
        <NavLogo href="#" class="font-logo text-2xl font-normal">PS</NavLogo>

        <div class="ml-auto flex items-center gap-6">
          <!-- Desktop links -->
          <div class="hidden md:flex md:flex-row gap-4">
            <NavLink to="/#proyectos">Proyectos</NavLink>
            <NavLink to="/#acerca-de">Acerca De</NavLink>
            <NavLink to="/#contacto">Contacto</NavLink>
          </div>
  
          <!-- Buttons -->
          <div class="flex items-end gap-4 md:gap-0">
            <DarkToggle />
            <div v-if="isMobile">
              <button @click="toggleMenu" class="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200">
                <Bars3Icon class="w-6 h-6 text-primary-100 cursor-pointer hover:text-primary-400 transition ease-in-out md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200"/>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Mobile menu -->
    <transition name="fade-slide">
      <div v-if="menuOpen" class="flex-col md:flex md:flex-row items-center justify-start md:space-x-1 pb-3 md:pb-0">
        <NavLink to="/#proyectos" >Proyectos</NavLink>
        <NavLink to="/#acerca-de" >Acerca de</NavLink>
        <NavLink to="/#contacto" >Contacto</NavLink>
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

header {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar-hidden {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.navbar-visible {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

</style>
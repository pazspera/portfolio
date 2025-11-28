<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { useScroll, useResizeObserver } from '@vueuse/core';
import { isMobile } from "../../composables/breakpoints";
import NavLink from "./NavLink.vue";
import NavLogo from "./NavLogo.vue";
import DarkToggle from "./DarkToggle.vue";
import { useNavbarStore } from "../../stores/navbar";

const menuOpen = ref(false);
const isNavbarVisible = ref(true);
const headerRef = ref<HTMLElement | null>(null);
const navbarStore = useNavbarStore();
const lastY = ref(0);

const handleResize = ()=> {
  if(headerRef.value) {
    const h = headerRef.value.offsetHeight;
    navbarStore.setHeight(h);
    document.documentElement.style.setProperty("--navbar-height", `${h}px`);
  }
}

const { y } = useScroll(window, {
  throttle: 100,
})

const { stop: stopResizeObserver } = useResizeObserver(headerRef, (entries)=> {
  handleResize();
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
}

watch(y, (currentY) => {
  // Usamos lastY.value para la comparación
  if(currentY === 0) {
    isNavbarVisible.value = true;
  }
  // Bajar: se oculta
  else if(currentY > lastY.value && currentY > 50) {
    isNavbarVisible.value = false;
  }
  // Subir: se muestra
  else if(currentY < lastY.value) {
    isNavbarVisible.value = true;
  }

  navbarStore.setIsVisible(isNavbarVisible.value);

  // 💡 ACTUALIZAR: Almacenamos la posición actual como la "última" para la próxima ejecución.
  lastY.value = currentY;
} )

onMounted(() => {
  nextTick(()=> {
    handleResize();
    navbarStore.setIsVisible(isNavbarVisible.value);
    lastY.value = y.value;
  })
});

onBeforeUnmount(() => {
  stopResizeObserver();
})

</script>

<template>
  <header ref="headerRef" class="bg-primary-800 w-full h-auto" :class="{ 'navbar-hidden': !isNavbarVisible, 'navbar-visible': isNavbarVisible }">
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
              <button @click="toggleMenu" class="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200" aria-label="abrir menu" :aria-expanded="menuOpen ? true : false">
                <Bars3Icon class="w-6 h-6 text-primary-100 cursor-pointer hover:text-primary-400 transition ease-in-out md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200" aria-hidden="true" />
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
  transition: transform var(--nav-transition-duration) var(--nav-transition-easing), opacity 200ms ease;
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
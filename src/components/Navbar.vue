<script setup lang="ts">
import { Bars3Icon, SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <header class="bg-primary-800 w-full h-auto ">
    <div class="container mx-auto px-4 py-1.5 md:px-0">
      <nav class="flex justify-between items-center">
        <!-- Logo -->
        <span class="font-logo text-2xl text-primary-100 hover:text-primary-400 transition ease-in-out">PS</span>
        <!-- Buttons -->
        <div class="flex items-center gap-6">
          <button>
            <SunIcon class="w-6 h-6 text-primary-100 hover:text-primary-400 transition ease-in-out"/>
            <MoonIcon class="w-6 h-6 text-primary-100 hover:text-primary-400 transition ease-in-out"/>
          </button>
          <Bars3Icon class="w-6 h-6 text-primary-100 cursor-pointer hover:text-primary-400 transition ease-in-out md:hidden"/>
        </div>  
      </nav>
    </div>

    <div class="hidden flex-col md:flex md:flex-row items-center justify-start md:space-x-1 pb-3 md:pb-0" id="navMenu">
      <a href="#" class="py-2 px-3 block text-primary-100  hover:text-primary-400 transition ease-in-out">Proyectos</a>
      <a href="#" class="py-2 px-3 block text-primary-100  hover:text-primary-400 transition ease-in-out">Acerca de</a>
      <a href="#" class="py-2 px-3 block text-primary-100  hover:text-primary-400 transition ease-in-out">Contacto</a>
    </div>
  </header>
</template>
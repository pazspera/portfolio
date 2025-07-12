<script setup lang="ts">
const data = new Date();
let year = data.getFullYear();
</script>

<template>
  <footer class="bg-primary-800 text-primary-100">
    <div class="container mx-auto px-4 py-4 md:px-6 ">
      <div class="grid grid-cols-6 ">
        <div class="col-span-4">
          <p class="text-base xl:text-lg">&#169; {{ year }} - Paz Spera</p>
          <p class="text-base xl:text-lg">Hecho con ☕ + ❤️​ y un poco de magia 🧙</p>
        </div>
        <div class="flex gap-4 col-span-2 items-center justify-end">
          <a href="https://www.linkedin.com/in/paz-spera/" target="_blank" rel="noopener noreferrer" class="p-1 text-primary-100 hover:text-primary-400 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200"> 
            <i class="devicon-linkedin-plain text-2xl lg:text-3xl"></i>
          </a>
          <a href="https://github.com/pazspera" target="_blank" rel="noopener noreferrer" class="p-1 text-primary-100 hover:text-primary-400 transition ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-100  dark:focus-visible:ring-primary-400 active:text-primary-300 dark:active:text-primary-200">
            <i class="devicon-github-original text-2xl lg:text-3xl"></i>
          </a>
        </div>
      </div>
    </div>  
  </footer>
</template>
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
            
            <svg viewBox="0 0 128 128">
            <path fill="currentColor" class="text-2xl lg:text-3xl" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
            </svg> 
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
<script setup lang="ts">
const data = new Date();
let year = data.getFullYear();
</script>

<template>
  <footer>
    <div class="container mx-auto px-4 py-4 md:px-6 bg-primary-800 text-primary-100">
      <div class="grid grid-cols-1 md:grid-cols-8">
        <div>
          <p class="text-base md:text-lg">&#169; {{ year }} - Paz Spera</p>
          <p class="text-base md:text-lg">Hecho con ☕ + ❤️​ y un poco de magia 🧙</p>
        </div>
      </div>
    </div>  
  </footer>
</template>
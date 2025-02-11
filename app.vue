<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="danger">Hola Mundo</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import { onMounted } from 'vue';

onMounted(() => {
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
});
</script>
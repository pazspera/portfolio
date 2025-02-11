<template>
  <main class="container">
    <NuxtLayout>
      <header>
        <ul>
         <li>
            <NuxtLink to="/">Inicio</NuxtLink>
          </li> 
          <li>
            <NuxtLink to="/proyectos">Proyectos</NuxtLink>
           <ul>
            <li>
              <NuxtLink to="/proyectos/bgt">BGT</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/proyectos/db-marketing">DB Marketing</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/proyectos/hot-rod-records">Hot Rod Records</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/proyectos/new-flag">New Flag</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/proyectos/redes-sociales">Redes sociales</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/proyectos/silverfert">Silverfert</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/proyectos/viernes">Viernes</NuxtLink>
            </li>
           </ul> 
          </li> 
          <li>
            <NuxtLink to="/contacto">Contacto</NuxtLink>
          </li> 
        </ul>
      </header>

      <NuxtPage />
    </NuxtLayout>  
  </main>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import { onMounted } from 'vue';

onMounted(() => {
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
});
</script>
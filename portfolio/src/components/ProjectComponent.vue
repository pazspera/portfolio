<template>
  <div>
    <div class="row mb-5">
      <div class="col-12 col-lg-6">
        <img :="imgViernes" />
      </div>
      <div class="col-12 col-lg-5 offset-lg-1">
        <div class="mb-5">
          <h3 class="mb-3">Viernes</h3>
          <p class="proyects__text">
            Sitio web del ciclo de cine de los Viernes en La casa del Craizy. Este es un proyecto personal muy querido que lleva la crónica de las películas compartidas con amigxs durante la pandemia.
          </p>
          <p class="proyects__text"><strong>Rol:</strong> Diseñadora UI, desarrolladora frontend</p>
        </div>
        <h4 class="mb-3 stack--title">Desarrollado con:</h4>
        <div class="stack">
          <i class="devicon-html5-plain proyect-icon"></i>
          <i class="devicon-sass-original proyect-icon"></i>
          <i class="devicon-bootstrap-plain proyect-icon"></i>
          <i class="devicon-javascript-plain proyect-icon"></i>
        </div>
        <div class="btns my-3">
          <a href="https://pazspera.github.io/viernes-web/index.html" class="btn btn__secondary" rel="noreferrer" target="_blank">Sitio</a>
          <a href="https://github.com/pazspera/viernes-web" class="btn btn__secondary ms-3" rel="noreferrer" target="_blank">Repositorio Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
};
</script>

<style></style>

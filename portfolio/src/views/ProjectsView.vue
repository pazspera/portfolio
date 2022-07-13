<template>
  <div>
    <section id="proyectos" class="proyectos">
      <div class="container">
        <div class="row">
          <div class="col mb-5">
            <h2>Proyectos</h2>
          </div>
        </div>
        <!-- Viernes -->
        <div class="row mb-5">
          <div class="col-12 col-lg-6">
            <img :="imgViernes" />
          </div>
          <div class="col-12 col-lg-5 offset-lg-1">
            <div class="mb-5">
              <h3 class="mb-3">Viernes</h3>
              <p class="proyects__text">
                Sitio web del ciclo de cine de los Viernes en La casa del Craizy. Este es un proyecto personal muy querido que lleva la crónica de las películas compartidas con amigxs durante la
                pandemia.
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
        <!-- Hot Rod Records -->
        <div class="spacer"></div>
        <div class="row mb-5">
          <div class="col-12 col-lg-6">
            <img :="imgHotRod" />
          </div>
          <div class="col-12 col-lg-5 offset-lg-1">
            <div class="mb-5">
              <h3 class="mb-3">Hot Rod Records</h3>
              <p class="proyects__text">Ecommerce de una tienda de música especializada en rock 'n' roll. Vinilos, Elvis Presley y WordPress.</p>
              <p class="proyects__text"><strong>Rol:</strong> Diseñadora UI, desarrolladora, redactora de contenido</p>
            </div>
            <h4 class="mb-3 stack--title">Desarrollado con:</h4>
            <div class="stack">
              <i class="devicon-wordpress-plain proyect-icon"></i>
              <i class="devicon-woocommerce-plain-wordmark proyect-icon"></i>
            </div>
            <div class="btns my-3">
              <a href="https://hotrodrecords.tk/" class="btn btn__secondary" rel="noreferrer" target="_blank">Sitio</a>
            </div>
          </div>
        </div>
        <!-- Kaio Sushi -->
        <div class="spacer"></div>
        <div class="row mb-5">
          <div class="col-12 col-lg-6">
            <img :="imgKaio" />
          </div>
          <div class="col-12 col-lg-5 offset-lg-1">
            <div class="mb-5">
              <h3 class="mb-3">Kaio Sushi</h3>
              <p class="proyects__text">Ecommerce de un local de venta de sushi. El proyecto incluye un carrito funcional desarrollado mayormente con Vanilla JavaScript y unos detalles de jQuery.</p>
              <p class="proyects__text"><strong>Rol:</strong> Diseñadora UI, desarrolladora frontend</p>
            </div>
            <h4 class="mb-3 stack--title">Desarrollado con:</h4>
            <div class="stack">
              <i class="devicon-html5-plain proyect-icon"></i>
              <i class="devicon-sass-original proyect-icon"></i>
              <i class="devicon-bootstrap-plain proyect-icon"></i>
              <i class="devicon-javascript-plain proyect-icon"></i>
              <i class="devicon-jquery-plain proyect-icon"></i>
            </div>
            <div class="btns my-3">
              <a href="https://pazspera.github.io/kaio-sushi/" class="btn btn__secondary" rel="noreferrer" target="_blank">Sitio</a>
              <a href="https://github.com/pazspera/kaio-sushi" class="btn btn__secondary ms-3" rel="noreferrer" target="_blank">Repositorio Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  mounted() {
    document.title = "Proyectos - Paz Spera";
  },
  data() {
    return {
      imgViernes: {
        src: "https://raw.githubusercontent.com/pazspera/portfolio/main/portfolio/src/assets/img/mockup_viernes.jpg",
        alt: "Mockup sitio web del proyecto Viernes",
      },
      imgHotRod: {
        src: "https://raw.githubusercontent.com/pazspera/portfolio/main/portfolio/src/assets/img/mockup_hotrod.jpg",
        alt: "Mockup sitio web del proyecto Hot Rod Records",
      },
      imgKaio: {
        src: "https://raw.githubusercontent.com/pazspera/portfolio/main/portfolio/src/assets/img/mockup_kaio.jpg",
        alt: "Mockup sitio web del proyecto Kaio Sushi",
      },
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.proyectos {
  background-color: $primary--light;
}

i.proyect-icon {
  @include icon-format;
}

.stack--title {
  font-size: $size5;
}

.proyects__text {
  @include main-text;
}
</style>

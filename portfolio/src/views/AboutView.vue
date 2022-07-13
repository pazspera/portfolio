<template>
  <section id="acerca">
    <div class="container">
      <div class="row">
        <div class="col mb-5">
          <h2>Acerca de</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-10 col-lg-4">
          <img :="imagePaz" class="image--shadow mb-5" />
        </div>
        <div class="col col-lg-7 offset-lg-1">
          <p class="about__text">¡Hola Mundo! Soy Paz Spera, desarrolladora frontend y diseñadora UI de Buenos Aires, Argentina.</p>
          <p class="about__text">
            Más allá de la innovación técnica, la tecnología nos ofrece constantemente nuevas formas de comunicarnos. Combinar un código organizado y funcional con un diseño atractivo y accesible es
            donde comienza la magia.
          </p>

          <!-- Habilidades -->
          <h3 class="mt-5 mb-3">Habilidades</h3>
          <div class="skills-grid pt-4">
            <div class="skill-item">
              <i class="devicon-html5-plain"></i>
              <span>HTML</span>
            </div>
            <div class="skill-item">
              <i class="devicon-css3-plain"></i>
              <span>CSS</span>
            </div>
            <div class="skill-item">
              <i class="devicon-javascript-plain"></i>
              <span>JavaScript</span>
            </div>
            <div class="skill-item">
              <i class="devicon-jquery-plain"></i>
              <span>jQuery</span>
            </div>
            <div class="skill-item">
              <i class="devicon-vuejs-plain"></i>
              <span>Vue</span>
            </div>
            <div class="skill-item">
              <i class="devicon-bootstrap-plain"></i>
              <span>Bootstrap</span>
            </div>
            <div class="skill-item">
              <i class="devicon-sass-original"></i>
              <span>Sass</span>
            </div>
            <div class="skill-item">
              <i class="devicon-git-plain"></i>
              <span>Git</span>
            </div>
            <div class="skill-item">
              <i class="devicon-wordpress-plain"></i>
              <span>WordPress</span>
            </div>
            <div class="skill-item">
              <i class="devicon-woocommerce-plain-wordmark"></i>
              <span>WooCommerce</span>
            </div>
            <div class="skill-item">
              <i class="devicon-figma-plain"></i>
              <span>Figma</span>
            </div>
            <div class="skill-item">
              <i class="devicon-photoshop-plain"></i>
              <span>Photoshop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
  mounted() {
    document.title = "Acerca de - Paz Spera";
  },
  data() {
    return {
      imagePaz: {
        src: "https://github.com/pazspera/portfolio/blob/main/portfolio/src/assets/img/paz.jpg",
        alt: "Paz Spera",
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.image {
  &--shadow {
    box-shadow: 25px 25px 0px 0px $primary;
    -webkit-box-shadow: 25px 25px 0px 0px $primary;
    -moz-box-shadow: 25px 25px 0px 0px $primary;
  }
}

.about__text {
  @include main-text;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100px;
  margin-bottom: $size4;

  i {
    font-size: $size2;
    padding: 0;
  }

  span {
    margin-top: 0.5rem;
    font-size: $size6;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;
  grid-auto-flow: row dense;
}
</style>

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
          <transition appear @before-enter="beforeEnterLeft" @enter="enterLeft">
            <img :="imagePaz" class="image--shadow mb-5" />
          </transition>
        </div>
        <div class="col col-lg-7 offset-lg-1">
          <transition appear @before-enter="beforeEnterRight" @enter="enterRight">
            <div>
              <p class="about__text">¡Hola, soy Paz! <strong>Transformo ideas en soluciones digitales que captan, persuaden y generan resultados.</strong> </p>
              <p class="about__text">Combino mi experiencia en UX/UI, desarrollo frontend y redacción de contenido para crear campañas comerciales efectivas.</p>
              <p class="about__text">Esta versatilidad me permite <strong>acompañar cada proyecto de principio a fin, integrando estrategia, diseño, implementación y comunicación</strong>.</p>
              <p class="about__text">
                Mi metodología se basa en la <strong>optimización y mejora continua</strong>, asegurando que cada proyecto se mantenga alineado con los requerimientos del negocio y las necesidades de los usuarios. Estas son las tecnologías que uso para lograrlo: 
              </p>

              <!-- Habilidades -->
              <div class="skills-grid pt-4">
                <div class="skill-item">
                  <i class="devicon-javascript-plain"></i>
                  <span>JavaScript</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-vuejs-plain"></i>
                  <span>Vue</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-react-original"></i>
                  <span>React</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-firebase-plain"></i>
                  <span>Firebase</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-php-plain"></i>
                  <span>PHP</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-html5-plain"></i>
                  <span>HTML</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-css3-plain"></i>
                  <span>CSS</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-sass-original"></i>
                  <span>Sass</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-bootstrap-plain"></i>
                  <span>Bootstrap</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-materialui-plain"></i>
                  <span>Material UI</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-figma-plain"></i>
                  <span>Figma</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-photoshop-plain"></i>
                  <span>Photoshop</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-git-plain"></i>
                  <span>Git</span>
                </div>
                <div class="skill-item">
                  <i class="devicon-wordpress-plain"></i>
                  <span>WordPress</span>
                </div>                
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "AboutView",
  mounted() {
    document.title = "Acerca de - Paz Spera";
  },
  data() {
    return {
      imagePaz: {
        src: "https://raw.githubusercontent.com/pazspera/portfolio/refs/heads/main/src/assets/img/paz.jpg",
        alt: "Paz Spera",
      },
    };
  },
  methods: {
    beforeEnterLeft(el) {
      el.style.transform = "translateY(100px)";
      el.style.transform = "translateX(-100px)";
      el.style.opacity = 0;
    },
    enterLeft(el) {
      gsap.to(el, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
      });
    },
    beforeEnterRight(el) {
      el.style.transform = "translateY(-100px)";
      el.style.transform = "translateX(100px)";
      el.style.opacity = 0;
    },
    enterRight(el) {
      gsap.to(el, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.25,
      });
    },
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

/* Transition styles */
/* .fadeLeft-enter-from {
  opacity: 0;
  transform: translateX(-200px);
}

.fadeLeft-enter-to,
.fadeRight-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fadeRight-enter-from {
  opacity: 0;
  transform: translateX(200px);
}

.fadeLeft-enter-active,
.fadeRight-enter-active {
  transition: all 0.45s ease-in;
} */
</style>

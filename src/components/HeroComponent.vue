<template>
  <section class="hero" id="hero">
    <div class="hero__container container">
      <div class="row">
        <div class="col-12 col-md-9 col-lg-8">
          <!-- Transition con gsap -->
          <!-- <transition appear @before-enter="beforeEnterFirst" @enter="enterFirst">
            <div>
              <p class="hero__text"><span>Hola, soy Paz Spera</span></p>

              <h1 class="hero__title mb-5"><span>Desarrolladora frontend &amp; Diseñadora UI</span></h1>
            </div>
          </transition>

          <transition appear @before-enter="beforeEnterSecond" @enter="enterSecond">
            <router-link :to="{ name: 'projects' }" class="btn btn__primary">Ver proyectos</router-link>
          </transition> -->

          <!-- Transiton con css classes -->
          <transition appear name="fade" >
            <div>
              <p class="hero__text"><span>Hola, soy Paz Spera</span></p>

              <h1 class="hero__title mb-5"><span>Diseñadora UX/UI &amp; Desarrolladora Frontend</span></h1>

              <router-link :to="{ name: 'projects' }" class="btn btn__primary">Ver proyectos</router-link>
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
  name: "HeroComponent",
  methods: {
    beforeEnterFirst(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    },
    enterFirst(el) {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1,
      });
    },
    beforeEnterSecond(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(75px)";
    },
    enterSecond(el) {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.hero {
  height: 95vh;
  padding: 1em 0;
  display: flex;
  @include background-image;
  background-position: center;
  overflow: hidden;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  &__title {
    margin: 0.5em 0;
    letter-spacing: 2px;
    font-family: $font-title;
  }

  &__text {
    font-size: $size1;
    font-family: $font-text;
  }

  &__title,
  &__text {
    color: $white;
    align-self: start;
    justify-self: center;
    text-align: left;
  }

  /* El span pone el fondo de color y así 
    puedo tener que el fondo se mantenga en todo
    el texto sin depender de las col */

  &__title span,
  &__text span {
    background-color: $black;
    /*  agregar los dos que brave no soporta 
            box-decoration-break solo
         */
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  /*  box-decoration-break en el span junto con 
        text-align en el title/text hacen que el 
        fondo se pegue al contenido del texto
     */

  &__title span {
    font-size: $size2;
    padding: 0.05em 0.3em 0.05em 0.3em;
    line-height: 1.3;
  }

  &__text span {
    font-size: $size4;
    text-transform: uppercase;
    padding: 0.25em 0.7em;
    line-height: 1.6;
    font-weight: 200;
  }
}

#hero {
  background-image: url(@/assets/img/hero_bg.jpg);
}

@media (min-width: 1600px) {
  .hero {
    height: 85vh;
  }
}

@media (min-width: 1200px) {
  .hero__title span {
    font-size: $size1;
  }
}

/* Transition styles */
.fade-enter-from {
  opacity: 0;
  transform: translateY(100px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-active {
  transition: all 0.45s ease-in;
}
</style>

<template>
  <div class="row mb-5">
    <div class="col-12 col-lg-6" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
      <!-- <img :="project.image" /> -->
      <ImageSlider :images="project.imagesSlider"/>
    </div>
    <div class="col-12 col-lg-5 offset-lg-1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150" data-aos-once="true">
      <div class="mb-4">
        <h3 class="mb-3">{{ project.title }}</h3>
        <p class="proyects__text">{{ project.description }}</p>
        <p v-if="project.descriptionExtra" class="proyects__text">{{ project.descriptionExtra }}</p>
      </div>
      <div class="mb-3" v-if="project.cliente">
        <p class="mb-0"><strong>Cliente:</strong> {{ project.cliente }}</p>
      </div>
      <div class="mb-3">
        <p class="mb-0"><strong>Rol:</strong></p>
        <span v-for="role in project.roles" :key="role" class="badge badge-role me-2">{{ role }}</span>
      </div>
      <div class="mb-3" v-if="project.techStack">
        <p class="mb-2"><strong>Tecnologías utilizadas:</strong></p>
        <div class="stack mb-4">
          <span v-for="tech in project.techStack" :key="tech" v-html="tech"></span>
        </div>
      </div>
      <div class="btns my-3" v-if="project.btns">
        <a v-for="btn in project.btns" :key="btn" :href="btn.link" class="btn btn__secondary me-3" rel="noreferrer" target="_blank">{{ btn.name }}</a>
      </div>
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSlider from "./ImageSlider.vue";

AOS.init();

export default {
  name: "ProjectComponent",
  components: {ImageSlider},
  props: {
    project: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.badge-role {
  text-transform: uppercase;
  background-color: $primary--dark;
}

.proyect-icon {
  font-size:12px;
}
</style>

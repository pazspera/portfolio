<template>
  <div>
    <section id="proyectos" class="proyectos">
      <div class="container">
        <div class="row">
          <div class="col mb-5">
            <h2>Proyectos</h2>
          </div>
        </div>
      </div>

      <div class="container" v-for="project in projects" :key="project.title">
        <ProjectComponent :project="project" />
      </div>

    </section>
  </div>
</template>

<script>
import json from "@/assets/data/projects.json";
import ProjectComponent from "@/components/ProjectComponent.vue";

export default {
  name: "ProjectsView",
  components: {
    ProjectComponent,
  },
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
      projects: json.projects,
    };
  },
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

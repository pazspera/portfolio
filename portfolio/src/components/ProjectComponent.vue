<template>
  <div class="row mb-5">
    <div class="col-12 col-lg-6">
      <img :="project.image" />
    </div>
    <div class="col-12 col-lg-5 offset-lg-1">
      <div class="mb-5">
        <h3 class="mb-3">{{ project.title }}</h3>
        <p class="proyects__text">{{ project.description }}</p>
        <p class="proyects__text"><strong>Rol:</strong> {{ project.role }}</p>
      </div>
      <h4 class="mb-3 stack--title">Desarrollado con:</h4>
      <div class="stack">
        <span v-for="tech in project.techStack" :key="tech" v-html="tech"></span>
      </div>
      <div class="btns my-3">
        <a v-for="btn in project.btns" :key="btn" :href="btn.link" class="btn btn__secondary me-3" rel="noreferrer" target="_blank">{{ btn.name }}</a>
      </div>
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  props: {
    project: {
      type: Object,
    },
  },
};
</script>

<style></style>

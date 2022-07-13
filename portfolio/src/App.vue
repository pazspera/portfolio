<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col-9">
          <img alt="Vue logo" src="./assets/logo.png" />
          <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
        <div class="col-3">
          <h1>Hola</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Paz Spera</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#acerca">Acerca de</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.navbar {
  background-color: $black;

  &-brand {
    font-size: $size4;
    font-family: $font-logo;
    padding: 0;
  }

  .nav-link {
    font-size: $size5;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }
}

// Override color a los nav-links
.navbar-dark,
.navbar-brand,
.navbar-nav,
.nav-link {
  color: $white !important;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: $primary !important;
    transition: all 0.3s ease-in-out;
  }
}

// Override color del navbar-toggler
.navbar-dark,
.navbar-toggler {
  color: rgba($white, 0.3);

  &:hover,
  &:focus {
    color: rgba($white, 0.3);
  }
}

@media (min-width: 992px) {
  .nav-link {
    margin-left: $size5;
  }
}
</style>

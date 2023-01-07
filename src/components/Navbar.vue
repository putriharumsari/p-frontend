<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a href="#">You Grow</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
      </div>
      <router-link :to="'/'" type="button" class="btn btn-light">Home</router-link>
      <router-link :to="'/about'" type="button" class="btn btn-light">About</router-link>
      <router-link :to="'/login'" type="button" class="btn btn-light">Log in</router-link>
      <router-link :to="'/submit'" type="button" class="btn btn-light">Submit a photo</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar'
}
</script>

<style scoped>
a.router-link-active {
  text-decoration: color('black');
}
.container-fluid button {
  color: #FFFFFF;
  border: 50px;
}
.container-fluid {
  min-height: 5vh;
}
.collapse a {
  font-size: 30px;
  text-decoration: none;
  font-weight: 700;
  position: absolute;
  font-family: "Sitka Text";
  color: #c87e4f;
}
.collapse a:hover {
  color: #CACACA;
}
.btn {
  color: black;
  opacity: 50%;
}
</style>

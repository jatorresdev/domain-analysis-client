<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Welcome msg="Bienvenido a Domain Analysis App"/>
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";

export default {
  name: 'Home',
  components: {
    Welcome,
  }
}
</script>

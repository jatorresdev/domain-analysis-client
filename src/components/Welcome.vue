<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Herramienta para el analisis de dominios.</p>
    <p>Desarrollada por <a href="https://jatorres.dev" target="_blank" rel="noopener">Angel Torres</a></p>
    <h5>Redes sociales</h5>
    <ul>
      <li><a href="https://www.linkedin.com/in/jatorresdev/" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a href="https://github.com/jatorresdev" target="_blank" rel="noopener">GitHub</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div class="container report">
    <h1>Dominios analizados</h1>

    <DomainReport v-if="data.items" :items="data.items"/>
    <h5 v-else>Aún no se han realizado análisis. Se tú el primero, visita
      <router-link to="/analysis">Análasis</router-link>
      y realiza el primer analisis.
    </h5>
  </div>
</template>
<script>
import ApiService from "../services/ApiService";
import DomainReport from "../components/DomainReport";

export default {
  name: 'Report',
  components: {DomainReport},
  data: function () {
    return {
      data: {}
    }
  },
  created: function () {
    this.getReportData(); // NEW - call getEventData() when the instance is created
  },
  methods: {
    async getReportData() {
      ApiService.getReport().then(
          (data => {
            this.$set(this, "data", data);
          }).bind(this)
      ).catch(error => {
        console.error("There was an error!", error);
      });
    }
  }
}
</script>
<style scoped lang="scss">
h5 {
  padding: 5px;
}
</style>


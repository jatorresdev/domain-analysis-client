<template>
  <div class="container report">
    <h1>Dominios analizados</h1>

    <DomainReport v-if="data.items" :items="data.items" :fields="fields"/>
    <h5 v-else>Aún no se han realizado análisis. Se tú el primero, visita
      <router-link to="/analysis">Análasis</router-link>
      y realiza el primer analisis.
    </h5>
  </div>
</template>
<script>
  import ApiService from "@/services/ApiService";
  import DomainReport from "@/components/DomainReport";

  export default {
    name: 'Report',
    components: {DomainReport},
    data() {
      return {
        fields: [
          {
            key: 'domain',
            label: 'Dominio',
            sortable: false
          },
          {
            key: 'info',
            label: 'Información - JSON',
            sortable: false
          },
          {
            key: 'created_at',
            label: 'Fecha de creación',
            sortable: true,
          },
          {
            key: 'updated_at',
            label: 'Fecha de actualización',
            sortable: true,
          }
        ],
        data: {}
      }
    },
    created() {
      this.getReportData(); // NEW - call getEventData() when the instance is created
    },
    methods: {
      async getReportData() {
        ApiService.getReport().then(
          (data => {
            this.$set(this, "data", data);
          }).bind(this)
        );
      }
    }
  }
</script>
<style scoped lang="scss">
  h5 {
    border: 1px dotted red;
    padding: 5px;
  }
</style>


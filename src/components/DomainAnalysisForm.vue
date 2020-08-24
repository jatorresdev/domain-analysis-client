<template>
  <div class="center">
    <b-form @submit.prevent="getDomainInfo">
      <b-form-group
          id="input-group-1"
          label="Dominio"
          label-for="input-1"
          description="Ingrese el nombre del dominio a analizar, puede omitir 'http://' o 'https://'.">
        <b-form-input
            id="input-1"
            v-model="form.domain"
            v-on:change="validateDomain"
            type="text"
            required
            placeholder="Dominio"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Analizar</b-button>
    </b-form>

    <b-card v-if="data" class="mt-3" header="Resultado del análisis">
      <DomainInfoCard v-if="!data.is_down" :domain="domain" :title="data.title" :images="data.logos"
                      :servers-changed="data.servers_changed"
                      :ssl-grade="data.ssl_grade" :previous-ssl-grade="data.previous_ssl_grade"
                      :is-down="data.id_down" :servers="data.servers" :status="data.analysis_status"/>
      <h5 v-else>El dominio ingresado es inválido o actualmente es inaccesible. Por favor verifique e inténtelo de
        nuevo.</h5>
    </b-card>
    <div v-else-if="!data && processing" class="mt-3">
      <b-spinner variant="primary" style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";
import DomainInfoCard from "./DomainInfoCard";

export default {
  name: "DomainAnalysisForm",
  components: {DomainInfoCard},
  data: function () {
    return {
      form: {
        domain: '',
      },
      data: null,
      domain: null,
      processing: false,
    }
  },
  methods: {
    validateDomain() {
      let domain;
      try {
        domain = (new URL(this.form.domain)).hostname;
      } catch (e) {
        let splitUrl = this.form.domain.split("/");
        domain = (splitUrl.length ? splitUrl[0] : this.form.domain);
      }

      this.form.domain = domain.toLowerCase().trim();
    },
    async getDomainInfo() {
      this.domain = this.form.domain;
      this.data = null;
      this.processing = true;

      ApiService.getDomainInfo(this.form.domain).then(
          (data => {
            this.$set(this, "data", data);
            this.$set(this, "processing", false);
          }).bind(this)
      ).catch(error => {
        console.error("There was an error!", error);
      });
    }
  }
}
</script>
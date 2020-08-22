<template>
  <div>
    <b-table striped hover :items="items" :fields="fields">
      <template v-slot:cell(actions)="row">
        <b-button v-if="row.item.info.servers" size="sm" @click="row.toggleDetails" variant="primary">
          {{ row.detailsShowing ? 'Ocultar' : 'Mostrar' }} detalles
        </b-button>
      </template>

      <template v-slot:row-details="row">
        <div class="card-detail-domain">
          <DomainInfoCard v-if="row.item" :domain="row.item.domain" :title="row.item.info.title"
                          :images="row.item.info.logos"
                          :servers-changed="row.item.info.servers_changed"
                          :ssl-grade="row.item.info.ssl_grade" :previous-ssl-grade="row.item.info.previous_ssl_grade"
                          :is-down="row.item.info.id_down" :servers="row.item.info.servers"/>

          <b-button size="sm" @click="row.toggleDetails" variant="primary">Ocultar detalles</b-button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import DomainInfoCard from "./DomainInfoCard";

export default {
  name: 'DomainReport',
  components: {DomainInfoCard},
  props: {
    items: Array,
  },
  data: function () {
    return {
      fields: [
        {
          key: 'domain',
          label: 'Dominio',
          sortable: false
        },
        // {
        //   key: 'info',
        //   label: 'Información - JSON',
        //   sortable: false,
        // },
        {
          key: 'created_at',
          label: 'Fecha de creación',
          sortable: true,
          formatter: 'formatDate'
        },
        {
          key: 'updated_at',
          label: 'Fecha de actualización',
          sortable: true,
          formatter: 'formatDate'
        },
        {
          key: 'actions',
          label: 'Información'
        }
      ],
    }
  },
  methods: {
    formatDate(value) {
      const d = new Date(value);
      return d.toLocaleString();
    }
  }
}
</script>

<style lang="scss">
.card-detail-domain {
  background-color: var(--light);
  margin: .5rem;
  padding: 1rem;
  border: 1px dotted var(--primary);
}
</style>
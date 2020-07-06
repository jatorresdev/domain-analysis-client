<template>
  <div>
    <h2>{{title}}</h2>
    <b-img center v-if="imageSrc" :src="imageSrc" :alt="title"></b-img>

    <b-list-group flush>
      <b-list-group-item>Grado: {{sslGrade != '' ? sslGrade : '-'}}</b-list-group-item>
      <b-list-group-item>Grado previo: {{previousSslGrade != '' ? previousSslGrade : '-' }}</b-list-group-item>
      <b-list-group-item>Cambios en el servidor: {{serversChanged ? 'Si' : 'No'}}</b-list-group-item>
      <b-list-group-item>Servidor caído: {{isDown ? 'Si' : 'No'}}</b-list-group-item>
    </b-list-group>

    <h4 v-if="servers">Información de servidores</h4>
    <DomainReport v-if="servers" :items="servers"/>
  </div>
</template>

<script>
  import DomainReport from "./DomainReport";

  export default {
    name: "DomainInfoCard",
    components: {DomainReport},
    props: {
      domain: String,
      title: String,
      images: Array,
      serversChanged: Boolean,
      sslGrade: String,
      previousSslGrade: String,
      isDown: Boolean,
      servers: Array,
    },
    computed: {
      imageSrc: function () {
        let imageSrc = null;
        if (this.images && this.images.length) {
          for (let image of this.images) {
            if (!image.includes("http")) {
              imageSrc = `https://${this.domain}${image}`
            } else {
              imageSrc = image;
            }

            break;
          }
        }

        return imageSrc;
      }
    },
  }
</script>

<style scoped lang="scss">
  h4 {
    margin-top: 30px;
    padding: 5px;
  }
</style>
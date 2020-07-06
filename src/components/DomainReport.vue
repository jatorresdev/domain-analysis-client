<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
  export default {
    name: 'DomainReport',
    props: {
      items: Array,
      fields: Array
    }
  }
</script>

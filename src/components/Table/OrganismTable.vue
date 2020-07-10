<template>
  <table class="table-fixed">
    <OrganismTableHead :headers="headers" />
    <OrganismTableBody :data="data" />
  </table>
</template>

<script>
import OrganismTableHead from './OrganismTableHead.vue'
import OrganismTableBody from './OrganismTableBody.vue'

export default {
  name: 'OrganismTable',
  props: ['headers', 'data'],
  components: {
    OrganismTableHead,
    OrganismTableBody
  }
}
</script>

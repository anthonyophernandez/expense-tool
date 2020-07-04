<template>
  <table class="table-fixed">
    <OrganismTableHead :headers="table.headers" />
    <OrganismTableBody :data="table.data" />
  </table>
</template>

<script>
import OrganismTableHead from './OrganismTableHead.vue'
import OrganismTableBody from './OrganismTableBody.vue'

export default {
  name: 'OrganismTable',
  props: ['table'],
  components: {
    OrganismTableHead,
    OrganismTableBody
  }
}
</script>

<template>
  <thead>
    <MoleculeTableRow type="AtomTableHeader" :data="headers" />
  </thead>
</template>

<script>
import MoleculeTableRow from './MoleculeTableRow.vue'

export default {
  name: 'OrganismTableHead',
  props: ['headers'],
  components: {
    MoleculeTableRow
  }
}
</script>

<template>
  <tbody>
    <MoleculeTableRow v-for="item in data" :key="item" type="AtomTableData" :data="item" />
  </tbody>
</template>

<script>
import MoleculeTableRow from './MoleculeTableRow.vue'

export default {
  name: 'OrganismTableHead',
  props: ['data'],
  components: {
    MoleculeTableRow
  }
}
</script>

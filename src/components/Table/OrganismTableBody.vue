<template>
  <tbody>
    <MoleculeTableRow v-for="(item, index) in data" :key="index" type="AtomTableData" :data="item" />
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

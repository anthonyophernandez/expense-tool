<template>
  <tr class="bg-blue-100 hover:bg-blue-200 border-b border-blue-200 hover:border-blue-300">
    <component :is="type" v-for="tcell in data" :key="tcell" :data="tcell"></component>
  </tr>
</template>

<script>
import AtomTableHeader from './AtomTableHeader.vue'
import AtomTableData from './AtomTableData.vue'

export default {
  name: 'MoleculeTableRow',
  props: ['type', 'data'],
  components: {
    AtomTableHeader,
    AtomTableData
  }
}
</script>

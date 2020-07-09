<template>
  <div class="w-24">
    <AtomText class="text-xs text-gray-600" :text="label" />
    <select v-model="selectedOption" class="block bg-transparent w-full h-6 text-sm">
      <option v-for="(option, index) in options" :key="index">{{ option }}</option>
    </select>
  </div>
</template>

<script>
import AtomText from './AtomText.vue'
export default {
  name: 'MoleculeSelect',
  props: ['source', 'label', 'options'],
  components: {
    AtomText
  },
  data () {
    return {
      selectedOption: ''
    }
  },
  created () {
    this.selectedOption = this.options[0]
  },
  updated () {
    this.$emit('selected', { option: this.selectedOption, source: this.source })
  }
}
</script>

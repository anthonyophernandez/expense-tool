<template>
  <div class="w-16">
    <AtomText :text="label" />
    <select class="block w-full border border-gray-400 py-2">
      <option v-for="(option, index) in options" :key="index">{{ option }}</option>
    </select>
  </div>
</template>

<script>
import AtomText from './AtomText.vue'
export default {
  name: 'MoleculeSelect',
  props: ['label', 'options'],
  components: {
    AtomText
  }
}
</script>

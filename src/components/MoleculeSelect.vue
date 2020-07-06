<template>
  <div class="w-16">
    <AtomText class="text-xs text-gray-600" :text="label" />
    <select class="block bg-transparent w-full h-6 text-sm">
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

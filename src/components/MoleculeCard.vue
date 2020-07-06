<template>
  <div class="py-2 px-4 mb-2 border border-blue-200 rounded-sm bg-blue-100">
    <AtomTitle class="text-sm text-gray-900 uppercase tracking-widest py-2" tag="h2" :content="card.title" />
    <AtomText class="text-xl text-blue-500 pt-2" :text="card.text" />
  </div>
</template>

<script>
import AtomTitle from './AtomTitle.vue'
import AtomText from './AtomText.vue'

export default {
  name: 'MoleculeCard',
  props: ['card'],
  components: {
    AtomTitle,
    AtomText
  }
}
</script>

<template>
  <div class="py-2 px-4 mb-2 border border-blue-200 hover:shadow-lg rounded-sm bg-blue-100 text-blue-800">
    <AtomTitle tag="h2" :content="card.title" />
    <AtomText :text="card.text" />
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

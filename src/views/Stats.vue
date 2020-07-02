<template>
  <section class="p-2">

    <OrganismGrid :cards="cards" />

  </section>
</template>

<script>
import OrganismGrid from '../components/OrganismGrid.vue'
export default {
  name: 'Stats',
  components: {
    OrganismGrid
  },
  data: () => {
    return {
      cards: [
        {
          title: 'Overall Spent',
          text: '€ 34.288,34'
        },
        {
          title: 'Most Spent By',
          text: 'Debit Card'
        },
        {
          title: 'Most Spent On',
          text: 'Shopping'
        },
        {
          title: 'Spent This Year',
          text: '€ 15.233,85'
        }
      ]
    }
  }
}
</script>

<style>

</style>

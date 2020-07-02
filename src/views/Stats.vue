<template>
  <section class="p-2">

    <OrganismGrid :cards="cards" />
    <OrganismTable :table="table"/>

  </section>
</template>

<script>
import OrganismGrid from '../components/OrganismGrid.vue'
import OrganismTable from '../components/Table/OrganismTable.vue'
export default {
  name: 'Stats',
  components: {
    OrganismGrid,
    OrganismTable
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
      ],
      table: {
        headers: ['Category', 'Type', 'Date', 'Value'],
        data: [
          {
            category: 'Utilities',
            type: 'Debit Card',
            date: '2020-01-10',
            value: '€ 271.19'
          },
          {
            category: 'Utilities',
            type: 'Debit Card',
            date: '2020-01-10',
            value: '€ 271.19'
          }, {
            category: 'Utilities',
            type: 'Debit Card',
            date: '2020-01-10',
            value: '€ 271.19'
          },
          {
            category: 'Utilities',
            type: 'Debit Card',
            date: '2020-01-10',
            value: '€ 271.19'
          },
          {
            category: 'Utilities',
            type: 'Debit Card',
            date: '2020-01-10',
            value: '€ 271.19'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>

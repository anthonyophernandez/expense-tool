<template>
  <section class="w-full p-4">

    <OrganismGrid :cards="cards" />
    <div class="flex flex-wrap items-stretch">
      <OrganismTable class="w-full min-h-full lg:w-1/2" :table="table"/>
      <BarChart class="w-full min-h-full lg:w-1/2" :options="barChart.options" :chart-data="barChart.chartData"/>
    </div>
  </section>
</template>

<script>
import OrganismGrid from '../components/OrganismGrid.vue'
import OrganismTable from '../components/Table/OrganismTable.vue'
import BarChart from '../components/BarChart.vue'
export default {
  name: 'Stats',
  components: {
    OrganismGrid,
    OrganismTable,
    BarChart
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
            category: 'Shopping',
            type: 'Debit Card',
            date: '2020-03-15',
            value: '€ 717.15'
          }, {
            category: 'Travel',
            type: 'Debit Card',
            date: '2020-06-10',
            value: '€ 643.80'
          },
          {
            category: 'Misc',
            type: 'Debit Card',
            date: '2020-07-08',
            value: '€ 1417.50'
          },
          {
            category: 'General Expenses',
            type: 'Debit Card',
            date: '2020-01-10',
            value: '€ 1001.13'
          }
        ]
      },
      barChart: {
        isLoaded: false,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                min: 0
              }
            }],
            xAxes: [{
              stacked: true
            }]
          }
        },
        chartData: {}
      }
    }
  },
  created () {
    this.barChart.isLoaded = false

    const chartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Utilities',
          backgroundColor: 'rgba(162, 222, 150, 0.7)',
          data: [271.19, 150.25, 0, 102, 0, 0, 0, 0, 0, 0, 75, 0]
        },
        {
          label: 'Shopping',
          backgroundColor: 'rgba(250, 22, 22, 0.7)',
          data: [0, 15, 0, 20, 0, 0, 0, 0, 0, 0, 50, 0]
        },
        {
          label: 'Travel',
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          data: [0, 15, 400, 200, 425, 0, 150, 0, 0, 0, 50, 0]
        }
      ]
    }

    this.barChart.chartData = chartData

    this.barChart.isLoaded = true
  }
}
</script>

<style>

</style>

<template>
  <section class="w-full px-1 py-1 sm:px-16 sm:py-4">

    <OrganismStatsCards :cards="cards" />
    <!--
    <OrganismTableAndChart :table="tableExpenses" chartType="BarChart" :chart="barChart"/>

    <OrganismTableAndChart :table="tableCategory" chartType="PieChart" :chart="pieChart"/>
    -->

    <section class="flex flex-col w-full h-full border border-blue-200 rounded-sm bg-blue-100 p-1 mb-4">

      <div class="px-4 pb-2 mb-4 w-full border-b border-blue-200 flex items-end">
        <AtomTitle class="text-lg text-blue-500 pt-2 pb-1 mr-2" tag="h3" content="Types Breakdown"/>
        <div class="pt-2 pb-1 flex">
          <MoleculeSelect class="mr-2" :label="byYear.label" :options="byYear.data" @selected="selectedYear"/>
          <MoleculeSelect v-if="byMonth" :label="byMonth.label" :options="byMonth.data" @selected="selectedMonth"/>
        </div>
      </div>

      <OrganismTableAndChart :table="tableTypes" chartType="DoughnutChart" :chart="doughnutChart"/>

    </section>

  </section>
</template>

<script>
import { mapState } from 'vuex'

import AtomTitle from '../components/AtomTitle.vue'
import MoleculeSelect from '../components/MoleculeSelect.vue'

import OrganismStatsCards from '../components/OrganismStatsCards.vue'
import OrganismTableAndChart from '../components/OrganismTableAndChart.vue'
export default {
  name: 'Stats',
  components: {
    AtomTitle,
    MoleculeSelect,
    OrganismStatsCards,
    OrganismTableAndChart
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
      tableExpenses: {
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
        chartData: {}
      },
      tableCategory: {
        headers: ['Category', 'Budget', 'Spent'],
        data: [
          {
            category: 'Utilities',
            budget: '24000',
            spent: '€ 3133.55'
          },
          {
            category: 'Shopping',
            budget: '12000',
            spent: '€ 4199.16'
          }, {
            category: 'Travel',
            budget: '36000',
            spent: '€ 5630.95'
          },
          {
            category: 'Misc',
            budget: '12000',
            spent: '€ 3127.80'
          },
          {
            category: 'General Expenses',
            budget: '30000',
            spent: '€ 2963.03'
          }
        ]
      },
      pieChart: {
        isLoaded: false,
        chartData: {}
      },
      tableTypes: {
        headers: ['Type', 'Spent'],
        data: []
      },
      doughnutChart: {
        isLoaded: false,
        chartData: {}
      },
      byYear: {
        label: 'Year',
        data: ['2020'],
        selected: '2020'
      },
      byMonth: {
        label: 'Month',
        data: ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        selected: 'All'
      }
    }
  },
  async created () {
    await this.$store.dispatch('loadTypes')

    // BarChart INI
    this.barChart.isLoaded = false

    const barChartData = {
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

    this.barChart.chartData = barChartData

    this.barChart.isLoaded = true
    // BarChart END

    // PieChart INI
    this.pieChart.isLoaded = false

    const pieChartData = {
      labels: ['Utilities', 'General Expenses', 'Misc', 'Shopping', 'Travel'],
      datasets: [
        {
          backgroundColor: [
            'rgba(162, 222, 150, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 99, 132, 0.7)'
          ],
          data: [3133.55, 2963.03, 3127.80, 4199.16, 5630.95]
        }
      ]
    }

    this.pieChart.chartData = pieChartData

    this.pieChart.isLoaded = true
    // PieChart END

    // DoughnutChart INI
    this.setDoughnutChartData()
    // DoughnutChart END
  },
  computed: {
    ...mapState({
      types: state => state.types
    })
  },
  methods: {
    selectedYear (obj) {
      this.byYear.selected = obj.option
      this.setDoughnutChartData()
    },
    selectedMonth (obj) {
      this.byMonth.selected = obj.option
      this.setDoughnutChartData()
    },
    setDoughnutChartData () {
      this.doughnutChart.isLoaded = false

      const doughnutChartData = {
        labels: this.types.map(t => t.type),
        datasets: [
          {
            backgroundColor: this.types.map(t => t.color),
            data: this.types.map(t => t.spent[this.byYear.selected][this.byMonth.selected])
          }
        ]
      }

      this.doughnutChart.chartData = doughnutChartData

      this.doughnutChart.isLoaded = true

      this.tableTypes.data = this.types.map(t => {
        const el = {
          type: t.type,
          spent: t.spent[this.byYear.selected][this.byMonth.selected]
        }
        return el
      })
    }
  }
}
</script>

<style>

</style>

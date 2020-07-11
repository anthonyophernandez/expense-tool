<template>
  <section v-if="isLoaded" class="w-full px-1 py-1 sm:px-16 sm:py-4">

    <OrganismStatsCards :cards="cards" />

    <section class="flex flex-col w-full h-full border border-blue-200 rounded-sm bg-blue-100 p-1 mb-4">

      <div class="px-4 pb-2 mb-4 w-full border-b border-blue-200 flex items-end">
        <AtomTitle class="text-lg text-blue-500 pt-2 pb-1 mr-2" tag="h3" content="Expenses Breakdown"/>
        <div class="pt-2 pb-1 flex">
          <MoleculeSelect class="mr-2" source="Expenses" :label="byYear.label" :options="byYear.data" @selected="selectedYear"/>
        </div>
      </div>

      <OrganismTableAndChart :table="tableExpenses" chartType="BarChart" :chart="barChart" :initialPos="(tableExpenses.data.length > 0) ? 1 : 0"/>

    </section>

    <section class="flex flex-col w-full h-full border border-blue-200 rounded-sm bg-blue-100 p-1 mb-4">

      <div class="px-4 pb-2 mb-4 w-full border-b border-blue-200 flex items-end">
        <AtomTitle class="text-lg text-blue-500 pt-2 pb-1 mr-2" tag="h3" content="Category Breakdown"/>
        <div class="pt-2 pb-1 flex">
          <MoleculeSelect class="mr-2" source="Categories" :label="byYear.label" :options="byYear.data" @selected="selectedYear"/>
          <MoleculeSelect v-if="byMonth" source="Categories" :label="byMonth.label" :options="byMonth.data" @selected="selectedMonth"/>
        </div>
      </div>

      <OrganismTableAndChart :table="tableCategory" chartType="PieChart" :chart="pieChart" :initialPos="(tableCategory.data.length > 0) ? 1 : 0"/>

    </section>

    <section class="flex flex-col w-full h-full border border-blue-200 rounded-sm bg-blue-100 p-1 mb-4">

      <div class="px-4 pb-2 mb-4 w-full border-b border-blue-200 flex items-end">
        <AtomTitle class="text-lg text-blue-500 pt-2 pb-1 mr-2" tag="h3" content="Types Breakdown"/>
        <div class="pt-2 pb-1 flex">
          <MoleculeSelect class="mr-2" source="Types" :label="byYear.label" :options="byYear.data" @selected="selectedYear"/>
          <MoleculeSelect v-if="byMonth" source="Types" :label="byMonth.label" :options="byMonth.data" @selected="selectedMonth"/>
        </div>
      </div>

      <OrganismTableAndChart :table="tableTypes" chartType="DoughnutChart" :chart="doughnutChart" :initialPos="(tableTypes.data.length > 0) ? 1 : 0"/>

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
      cards: [],
      tableExpenses: {
        headers: ['Category', 'Type', 'Date', 'Value'],
        data: []
      },
      barChart: {
        isLoaded: false,
        chartData: {}
      },
      tableCategory: {
        headers: ['Category', 'Budget', 'Spent'],
        data: []
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
        data: ['2019', '2020']
      },
      byMonth: {
        label: 'Month',
        data: ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      isLoaded: false,
      yearSelectedForExpenses: '2019',
      yearSelectedForCategories: '2019',
      yearSelectedForTypes: '2019',
      monthSelectedForCategories: 'All',
      monthSelectedForTypes: 'All'
    }
  },
  async created () {
    this.isLoaded = false
    await this.$store.dispatch('loadTypes')
    await this.$store.dispatch('loadCategories')
    await this.$store.dispatch('loadExpenses', { year: this.yearSelectedForExpenses })

    this.setCardData()
    // BarChart INI
    this.setBarChartData()
    // BarChart END

    // PieChart INI
    this.setPieChartData()
    // PieChart END

    // DoughnutChart INI
    this.setDoughnutChartData()
    // DoughnutChart END
    this.isLoaded = true
  },
  computed: {
    ...mapState({
      types: state => state.types,
      categories: state => state.categories,
      expenses: state => state.expenses
    })
  },
  methods: {
    async selectedYear (obj) {
      if (obj.source === 'Expenses') {
        this.yearSelectedForExpenses = obj.option
        await this.$store.dispatch('loadExpenses', { year: this.yearSelectedForExpenses })
        this.setBarChartData()
      } else if (obj.source === 'Categories') {
        this.yearSelectedForCategories = obj.option
        this.setPieChartData()
      } else if (obj.source === 'Types') {
        this.yearSelectedForTypes = obj.option
        this.setDoughnutChartData()
      }
    },
    selectedMonth (obj) {
      if (obj.source === 'Categories') {
        this.monthSelectedForCategories = obj.option
        this.setPieChartData()
      } else if (obj.source === 'Types') {
        this.monthSelectedForTypes = obj.option
        this.setDoughnutChartData()
      }
    },
    setPieChartData () {
      this.pieChart.isLoaded = false

      const pieChartData = {
        labels: this.categories.map(c => c.category),
        datasets: [
          {
            backgroundColor: this.categories.map(c => c.color),
            data: this.categories.map(c => c.spent[this.yearSelectedForCategories][this.monthSelectedForCategories])
          }
        ]
      }

      this.pieChart.chartData = pieChartData

      this.pieChart.isLoaded = true

      this.tableCategory.data = this.categories.map(c => {
        const el = {
          category: c.category,
          budget: (this.monthSelectedForCategories === 'All') ? (c.budget * 12) : c.budget,
          spent: c.spent[this.yearSelectedForCategories][this.monthSelectedForCategories]
        }
        return el
      })
    },
    setDoughnutChartData () {
      this.doughnutChart.isLoaded = false

      const doughnutChartData = {
        labels: this.types.map(t => t.type),
        datasets: [
          {
            backgroundColor: this.types.map(t => t.color),
            data: this.types.map(t => t.spent[this.yearSelectedForTypes][this.monthSelectedForTypes])
          }
        ]
      }

      this.doughnutChart.chartData = doughnutChartData

      this.doughnutChart.isLoaded = true

      this.tableTypes.data = this.types.map(t => {
        const el = {
          type: t.type,
          spent: t.spent[this.yearSelectedForTypes][this.monthSelectedForTypes]
        }
        return el
      })
    },
    setBarChartData () {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const datasets = this.categories.map(c => {
        const expenses = this.expenses.filter(e => e.category === c.category)
        const data = labels.map(month => {
          const expensesOfMonth = expenses.filter(e => e.date.month === month).map(e => parseFloat(e.value))
          const sum = expensesOfMonth.reduce((a, b) => a + b, 0)
          return sum
        })
        const el = {
          label: c.category,
          backgroundColor: c.color,
          data: data
        }
        return el
      })
      this.barChart.isLoaded = false

      const barChartData = {
        labels: labels,
        datasets: datasets
      }

      this.barChart.chartData = barChartData

      this.barChart.isLoaded = true
      this.tableExpenses.data = this.expenses.map(e => {
        const el = {
          category: e.category,
          type: e.type,
          date: e.date.date,
          value: e.value
        }
        return el
      })
    },
    setCardData () {
      const currentYear = new Date().getFullYear().toString()
      const spentThisYear = (this.byYear.data.includes(currentYear)) ? this.types.map(t => t.spent[currentYear].All).reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(2) : '0.00'
      const overallSpent = this.byYear.data
        .map(year => this.types
          .map(t => t.spent[year].All)
          .reduce((a, b) => parseFloat(a) + parseFloat(b), 0))
        .reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
        .toFixed(2)
      const mostSpentBy = (this.byYear.data.includes(currentYear)) ? this.types
        .map(t => {
          return { name: t.type, spent: t.spent[currentYear].All }
        })
        .reduce((prev, current) => (prev.spent > current.spent) ? prev : current).name : 'N/A'
      const mostSpentOn = (this.byYear.data.includes(currentYear)) ? this.categories
        .map(c => {
          return { name: c.category, spent: c.spent[currentYear].All }
        })
        .reduce((prev, current) => (prev.spent > current.spent) ? prev : current).name : 'N/A'

      const cards = [
        {
          title: 'Overall Spent',
          text: '$ ' + overallSpent
        },
        {
          title: 'Most Spent By',
          text: mostSpentBy
        },
        {
          title: 'Most Spent On',
          text: mostSpentOn
        },
        {
          title: 'Spent This Year',
          text: '$ ' + spentThisYear
        }
      ]
      this.cards = cards
    }
  }
}
</script>

<style>

</style>

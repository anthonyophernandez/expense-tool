<template>
  <section class="flex flex-wrap items-stretch h-full">
    <OrganismTable class="w-full h-64 lg:w-1/2" :table="table"/>
    <component :is="chartType" v-if="chart.isLoaded" class="w-full h-64 lg:w-1/2" :options="chart.options" :chart-data="chart.chartData"/>
  </section>
</template>

<script>
import OrganismTable from '../components/Table/OrganismTable.vue'
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'
import DoughnutChart from '../components/DoughnutChart.vue'

export default {
  name: 'OrganismTableAndChart',
  props: ['table', 'chartType', 'chart'],
  components: {
    OrganismTable,
    BarChart,
    PieChart,
    DoughnutChart
  }
}
</script>

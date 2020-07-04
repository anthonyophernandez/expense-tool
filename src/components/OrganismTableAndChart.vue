<template>
  <section class="flex flex-col w-full h-full p-1">

    <div class="w-full flex">
      <AtomTitle tag="h3" :content="title"/>
    </div>

    <div class="flex flex-wrap items-stretch w-full min-h-full">
      <div class="w-full lg:w-1/2 min-h-full flex flex-col justify-between">
        <OrganismTable class="w-full" :table="table"/>
        <AtomText class="text-right" text="1-5 of 5"/>
      </div>
      <component :is="chartType" v-if="chart.isLoaded" class="w-full lg:w-1/2 h-full" :options="chart.options" :chart-data="chart.chartData"/>
    </div>

  </section>
</template>

<script>
import AtomTitle from './AtomTitle.vue'
import AtomText from './AtomText.vue'

import OrganismTable from './Table/OrganismTable.vue'
import BarChart from './Chart/BarChart.vue'
import PieChart from './Chart/PieChart.vue'
import DoughnutChart from './Chart/DoughnutChart.vue'

export default {
  name: 'OrganismTableAndChart',
  props: ['title', 'table', 'chartType', 'chart'],
  components: {
    AtomTitle,
    AtomText,
    OrganismTable,
    BarChart,
    PieChart,
    DoughnutChart
  }
}
</script>

<template>
  <section class="flex flex-col w-full h-full p-1">

    <div class="w-full flex">
      <AtomTitle class="mr-1" tag="h3" :content="title"/>
      <MoleculeSelect :label="byYear.label" :options="byYear.data"/>
      <MoleculeSelect v-if="byMonth" :label="byMonth.label" :options="byMonth.data"/>
    </div>

    <div class="flex flex-wrap items-stretch w-full min-h-full">
      <div class="w-full lg:w-1/2 min-h-full flex flex-col justify-between">

        <OrganismTable class="w-full" :table="table"/>

        <div class="flex items-center justify-end">
          <AtomText text="1-5 of 5"/>
          <AtomButton class="rounded-l" content="<" />
          <AtomButton class="rounded-r" content=">" />
        </div>

      </div>
      <component :is="chartType" v-if="chart.isLoaded" class="w-full lg:w-1/2 h-full" :options="chart.options" :chart-data="chart.chartData"/>
    </div>

  </section>
</template>

<script>
import AtomTitle from './AtomTitle.vue'
import AtomText from './AtomText.vue'
import MoleculeSelect from './MoleculeSelect.vue'
import AtomButton from './AtomButton.vue'

import OrganismTable from './Table/OrganismTable.vue'
import BarChart from './Chart/BarChart.vue'
import PieChart from './Chart/PieChart.vue'
import DoughnutChart from './Chart/DoughnutChart.vue'

export default {
  name: 'OrganismTableAndChart',
  props: ['title', 'table', 'chartType', 'chart', 'byYear', 'byMonth'],
  components: {
    AtomTitle,
    AtomText,
    AtomButton,
    MoleculeSelect,
    OrganismTable,
    BarChart,
    PieChart,
    DoughnutChart
  }
}
</script>

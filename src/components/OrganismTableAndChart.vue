<template>
  <section class="flex flex-col w-full h-full border border-blue-200 rounded-sm bg-blue-100 p-1 mb-4">

    <div class="px-4 w-full flex items-end">
      <AtomTitle class="text-lg text-blue-500 pt-2 pb-1 mr-2" tag="h3" :content="title"/>
      <div class="pt-2 pb-1 flex">
        <MoleculeSelect class="mr-2" :label="byYear.label" :options="byYear.data"/>
        <MoleculeSelect v-if="byMonth" :label="byMonth.label" :options="byMonth.data"/>
      </div>
    </div>

    <div class="flex flex-wrap items-stretch w-full h-full">
      <div class="w-full lg:w-1/2 min-h-full flex flex-col justify-between">

        <div class="overflow-x-auto">
          <OrganismTable class="w-full" :table="table"/>
        </div>

        <div class="flex items-center justify-end">
          <AtomText class="text-xs mr-2" text="1-5 of 5"/>
          <AtomButton class="rounded-l" content="<" />
          <AtomButton class="rounded-r" content=">" />
        </div>

      </div>
      <component :is="chartType" v-if="chart.isLoaded" class="w-full lg:w-1/2 h-64" :options="chart.options" :chart-data="chart.chartData"/>
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

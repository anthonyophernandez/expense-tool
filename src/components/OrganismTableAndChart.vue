<template>
    <div class="flex flex-wrap items-stretch w-full h-full">
      <div class="w-full lg:w-1/2 min-h-full flex flex-col justify-between">

        <div class="overflow-x-auto h-64 mb-2">
          <OrganismTable class="w-full h-56" :headers="table.headers" :data="dataForTable"/>
        </div>

        <div class="flex items-center border-t border-blue-200 justify-end">
          <AtomText class="text-xs mr-2" :text="textNumOfData"/>
          <AtomButton class="rounded-l" content="<" :buttonFunction="previousPage" :class="[(ini - 10 > 0) ? 'text-gray-900': '']"/>
          <AtomButton class="rounded-r" content=">" :buttonFunction="nextPage" :class="[(ini + 10 < table.data.length) ? 'text-gray-900': '']"/>
        </div>

      </div>
      <component :is="chartType" v-if="chart.isLoaded" class="w-full lg:w-1/2 h-64" :options="chart.options" :chart-data="chart.chartData"/>
    </div>
</template>

<script>
import AtomText from './AtomText.vue'
import AtomButton from './AtomButton.vue'

import OrganismTable from './Table/OrganismTable.vue'
import BarChart from './Chart/BarChart.vue'
import PieChart from './Chart/PieChart.vue'
import DoughnutChart from './Chart/DoughnutChart.vue'

export default {
  name: 'OrganismTableAndChart',
  props: ['table', 'chartType', 'chart', 'initialPos'],
  components: {
    AtomText,
    AtomButton,
    OrganismTable,
    BarChart,
    PieChart,
    DoughnutChart
  },
  data () {
    return {
      ini: this.initialPos
    }
  },
  computed: {
    textNumOfData () {
      if (this.table.data.length > 0) {
        return this.ini + '-' + this.fin + ' of ' + this.table.data.length
      } else {
        return '-'
      }
    },
    fin () {
      return (this.ini + 10 > this.table.data.length) ? this.table.data.length : this.ini + 9
    },
    dataForTable () {
      return this.table.data.slice(this.ini - 1, this.fin)
    }
  },
  methods: {
    nextPage () {
      this.ini = (this.ini + 10 > this.table.data.length) ? this.ini : this.ini + 10
    },
    previousPage () {
      this.ini = (this.ini - 10 < 0) ? this.ini : this.ini - 10
    }
  }
}
</script>

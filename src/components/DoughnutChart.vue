<script>
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'DoughnutChart',
  mixins: [reactiveProp],
  extends: Doughnut,
  props: {
    options: {
      type: Object
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

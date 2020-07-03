<script>
import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'PieChart',
  mixins: [reactiveProp],
  extends: Pie,
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

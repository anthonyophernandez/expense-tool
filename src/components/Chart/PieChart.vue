<script>
import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'PieChart',
  mixins: [reactiveProp],
  extends: Pie,
  data: () => {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

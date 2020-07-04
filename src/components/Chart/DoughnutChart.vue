<script>
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'DoughnutChart',
  mixins: [reactiveProp],
  extends: Doughnut,
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

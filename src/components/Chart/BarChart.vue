<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'BarChart',
  mixins: [reactiveProp],
  extends: Bar,
  data: () => {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
              min: 0
            }
          }],
          xAxes: [{
            stacked: true
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

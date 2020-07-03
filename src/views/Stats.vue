<template>
  <section class="w-full px-16 py-4">

    <OrganismStatsCards :cards="cards" />

    <OrganismTableAndChart class="border border-blue-300 mb-1 h-64" :table="tableExpenses" chartType="BarChart" :chart="barChart" />

    <OrganismTableAndChart class="border border-blue-300 mb-1 h-64" :table="tableCategory" chartType="PieChart" :chart="pieChart" />

    <OrganismTableAndChart class="border border-blue-300 mb-1  h-64" :table="tableTypes" chartType="DoughnutChart" :chart="doughnutChart" />
  </section>
</template>

<script>
import OrganismStatsCards from '../components/OrganismStatsCards.vue'
import OrganismTableAndChart from '../components/OrganismTableAndChart.vue'
export default {
  name: 'Stats',
  components: {
    OrganismStatsCards,
    OrganismTableAndChart
  },
  data: () => {
    return {
      cards: [
        {
          title: 'Overall Spent',
          text: '€ 34.288,34'
        },
        {
          title: 'Most Spent By',
          text: 'Debit Card'
        },
        {
          title: 'Most Spent On',
          text: 'Shopping'
        },
        {
          title: 'Spent This Year',
          text: '€ 15.233,85'
        }
      ],
      tableExpenses: {
        headers: ['Category', 'Type', 'Date', 'Value'],
        data: [
          {
            category: 'Utilities',
            type: 'Debit Card',
            date: '2020-01-10',
            value: '€ 271.19'
          },
          {
            category: 'Shopping',
            type: 'Debit Card',
            date: '2020-03-15',
            value: '€ 717.15'
          }, {
            category: 'Travel',
            type: 'Debit Card',
            date: '2020-06-10',
            value: '€ 643.80'
          },
          {
            category: 'Misc',
            type: 'Debit Card',
            date: '2020-07-08',
            value: '€ 1417.50'
          },
          {
            category: 'General Expenses',
            type: 'Debit Card',
            date: '2020-01-10',
            value: '€ 1001.13'
          }
        ]
      },
      barChart: {
        isLoaded: false,
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
        },
        chartData: {}
      },
      tableCategory: {
        headers: ['Category', 'Budget', 'Spent'],
        data: [
          {
            category: 'Utilities',
            budget: '24000',
            spent: '€ 3133.55'
          },
          {
            category: 'Shopping',
            budget: '12000',
            spent: '€ 4199.16'
          }, {
            category: 'Travel',
            budget: '36000',
            spent: '€ 5630.95'
          },
          {
            category: 'Misc',
            budget: '12000',
            spent: '€ 3127.80'
          },
          {
            category: 'General Expenses',
            budget: '30000',
            spent: '€ 2963.03'
          }
        ]
      },
      pieChart: {
        isLoaded: false,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: true
          }
        },
        chartData: {}
      },
      tableTypes: {
        headers: ['Type', 'Spent'],
        data: [
          {
            Type: 'Cash',
            spent: '€ 3755.16'
          },
          {
            Type: 'Cheque',
            spent: '€ 3149.83'
          }, {
            Type: 'Credit Card',
            spent: '€ 0.00'
          },
          {
            Type: 'Debit Card',
            spent: '€ 8328.85'
          }
        ]
      },
      doughnutChart: {
        isLoaded: false,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: true
          }
        },
        chartData: {}
      }
    }
  },
  created () {
    // BarChart INI
    this.barChart.isLoaded = false

    const barChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Utilities',
          backgroundColor: 'rgba(162, 222, 150, 0.7)',
          data: [271.19, 150.25, 0, 102, 0, 0, 0, 0, 0, 0, 75, 0]
        },
        {
          label: 'Shopping',
          backgroundColor: 'rgba(250, 22, 22, 0.7)',
          data: [0, 15, 0, 20, 0, 0, 0, 0, 0, 0, 50, 0]
        },
        {
          label: 'Travel',
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          data: [0, 15, 400, 200, 425, 0, 150, 0, 0, 0, 50, 0]
        }
      ]
    }

    this.barChart.chartData = barChartData

    this.barChart.isLoaded = true
    // BarChart END

    // PieChart INI
    this.pieChart.isLoaded = false

    const pieChartData = {
      labels: ['Utilities', 'General Expenses', 'Misc', 'Shopping', 'Travel'],
      datasets: [
        {
          backgroundColor: [
            'rgba(162, 222, 150, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 99, 132, 0.7)'
          ],
          data: [3133.55, 2963.03, 3127.80, 4199.16, 5630.95]
        }
      ]
    }

    this.pieChart.chartData = pieChartData

    this.pieChart.isLoaded = true
    // PieChart END

    // DoughnutChart INI
    this.doughnutChart.isLoaded = false

    const doughnutChartData = {
      labels: ['Cash', 'Cheque', 'Credit Card', 'Debit Card'],
      datasets: [
        {
          backgroundColor: [
            'rgba(162, 222, 150, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ],
          data: [3755.16, 3149.83, 0.00, 8328.85]
        }
      ]
    }

    this.doughnutChart.chartData = doughnutChartData

    this.doughnutChart.isLoaded = true
    // DoughnutChart END
  }
}
</script>

<style>

</style>

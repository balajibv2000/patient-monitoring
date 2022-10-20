import React from 'react'
import {Bar} from 'react-chartjs-2';
import Chart from "chart.js/auto"

function BarChart({ data , label , title}) {

    const ChartData = {
        labels: label,
        datasets: [
          {
            label: title,
            fill: false,
            lineTension: 0,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1,
              fill: false,
            data: data
          }
        ]
      }

      const Config = {
        type: 'bar',
        data: ChartData,
        options: {
            scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  },
                  gridLines: {
                    color: "rgba(204, 204, 204,0.1)"
                  }
                }],
                xAxes: [{
                  gridLines: {
                    color: "rgba(204, 204, 204,0.1)"
                  }
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
        },
      };

    

  return (
    <div class="card">
        <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <div id="barChart" style={{"height" : "250px"}}>
            <Bar
                options={Config}
                data={ChartData}
            />
        </div>
        </div>
    </div>
  )
}

export default BarChart
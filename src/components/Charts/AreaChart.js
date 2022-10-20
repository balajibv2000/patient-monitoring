import React from 'react'
import {Line} from 'react-chartjs-2';
import Chart from "chart.js/auto"

function AreaChart({ data , label , title}) {

    const lineChartData = {
        labels: label,
        datasets: [
          {
            label: title,
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: data,
            tension: 0.3
          }
        ]
      }

      const LineConfig = {
        type: 'line',
        data: lineChartData,
        options: {
          responsive: true,
          plugins: {
            filler: {
              propagate: true
            }
          },
          scales: {
            yAxes: [{
              gridLines: {
                color: "rgba(204, 204, 204,0.1)"
              }
            }],
            xAxes: [{
              gridLines: {
                color: "rgba(204, 204, 204,0.1)"
              }
            }]
          }
        },
      };

    

  return (
    <div class="card">
        <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <div id="areaChart" style={{"height" : "250px"}}>
            <Line
                options={LineConfig}
                data={lineChartData}
            />
        </div>
        </div>
    </div>
  )
}

export default AreaChart
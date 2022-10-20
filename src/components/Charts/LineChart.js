import React from 'react'
import {Line} from 'react-chartjs-2';
import Chart from "chart.js/auto"

function LineChart({ data , label , title , color}) {

    const lineChartData = {
        labels: label,
        datasets: [
          {
            label: title,
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(0,0,0,1)',
            borderColor: color,
            borderWidth: 2,
            data: data
          }
        ]
      }

      const LineConfig = {
        type: 'line',
        data: lineChartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart'
            }
          }
        },
      };

    

  return (
    <div class="card">
        <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <div id="lineChart" style={{"height" : "250px"}}>
            <Line
                options={LineConfig}
                data={lineChartData}
            />
        </div>
        </div>
    </div>
  )
}

export default LineChart
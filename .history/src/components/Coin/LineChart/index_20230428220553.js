import React from 'react'
import { Line } from 'react-chartjs-2';
import {chart as chartjs} from "chart.js/auto"
function LineChart({ chartData, priceType, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsiv: true,
        interaction: {
            mode: "index",
            intersect:false, 
        },
        scales: {
            crypto1: {
                ticks: {
                    callback: function (value, index, ticks) {
                        if(price)
                    }
                }
            }
        }
    }
  return <Line data={chartData} options={options} />;
}

export default LineChart;
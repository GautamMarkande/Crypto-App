import React from 'react'
import { Line } from 'react-chartjs-2';
import {chart as chartjs} from "chart.js/auto"
import { convertNumber } from '../../../functions/convertNumber';

function LineChart({ chartData, priceType, multiAxis }) {
  let  options = {}
  if(multiAxis){
    options = {
      plugins: {
        legend: {
          display: multiAxis ? true : false,
        },
      },
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        crypto1: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            callback: function (value, index, ticks) {
              if (priceType === "price") return "$" + value.toLocaleString();
              else {
                return "$" + convertNumber(value);
              }
            },
          },
        },
        crypto2: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            callback: function (value, index, ticks) {
              if (priceType === "price") return "$" + value.toLocaleString();
              else {
                return "$" + convertNumber(value);
              }
            },
          },
        },
      },
    };
  }else{
    options = {
      plugins: {
        legend: {
          display: multiAxis ? true : false,
        },
      },
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        crypto1: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            callback: function (value, index, ticks) {
              if (priceType === "price") return "$" + value.toLocaleString();
              else {
                return "$" + convertNumber(value);
              }
            },
          },
        },
        crypto2: {
          type: "linear",
          display: !true,
          position: "right",
          ticks: {
            callback: function (value, index, ticks) {
              if (priceType === "price") return "$" + value.toLocaleString();
              else {
                return "$" + convertNumber(value);
              }
            },
          },
        },
      },
    };
  }
    
  return <Line data={chartData} options={options} />;
}

export default LineChart;
import React from 'react'
import 
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
        }
    }
  return <Line data={chartData} options={options} />;
}

export default LineChart;
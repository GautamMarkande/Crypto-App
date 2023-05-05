import React from 'react'

function LineChart({ chartDats, priceType, multiAxis }) {
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
  return (
      <Line data={chartData} options= />
  )
}

export default LineChart;
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
            mode: indexe,
            
        }
    }
  return (
    <div>index</div>
  )
}

export default LineChart;
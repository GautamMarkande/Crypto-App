
import React from 'react'
import './style.css'

function Grid({coin}) {
  return (
      <div className='grid-container'>
          <div className='info-flex'>
              <img src={coin.image} className='coin-logo'/>
              <div className=''>
                  <p>{coin.symbol}</p>
                  <p></p>
              </div>
          </div>
    </div>
  )
}

export default Grid
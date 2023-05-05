
import React from 'react'
import './style.css'

function Grid({coin}) {
  return (
      <div className='grid-container'>
          <div className='info-flex'>
              <img src={coin.image} className=''/>
              
          </div>
    </div>
  )
}

export default Grid
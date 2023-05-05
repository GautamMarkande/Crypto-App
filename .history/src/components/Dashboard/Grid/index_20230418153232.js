
import React from 'react'
import './style.css'

function Grid({coin}) {
  return (
      <div className='grid-container'>
        {coin.name}  
    </div>
  )
}

export default Grid
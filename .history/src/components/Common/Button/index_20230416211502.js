import React from 'react'
import "./style.css"

function Button({text}) {
  return (
      <div className='btn'>
          {text}
    </div>
  )
}

export default Button
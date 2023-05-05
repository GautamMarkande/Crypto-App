import React from 'react'
import "./style.css"

function Button({text,onClick}) {
  return (
      <div className='btn'>
          {text}
    </div>
  )
}

export default Button
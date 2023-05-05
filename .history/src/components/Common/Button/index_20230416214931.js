import React from 'react'
import "./style.css"

function Button({text,onClick,out}) {
  return (
      <div className='btn'>
          {text}
    </div>
  )
}

export default Button
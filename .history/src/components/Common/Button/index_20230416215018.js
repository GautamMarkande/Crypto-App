import React from 'react'
import "./style.css"

function Button({text,onClick,outLlined}) {
  return (
      <div className='outLined-'>
          {text}
    </div>
  )
}

export default Button
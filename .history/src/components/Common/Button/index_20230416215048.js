import React from 'react'
import "./style.css"

function Button({text,onClick,outLlined}) {
  return (
      <div className={'outLined-btn'}>
          {text}
    </div>
  )
}

export default Button
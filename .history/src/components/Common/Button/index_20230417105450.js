import React from 'react'
import "./style.css"

function Button({text,onClick,outlined}) {
  return (
      <div className={outLlined?'outLined-btn':"btn"}onClick={()=>onClick()}>
          {text}
    </div>
  )
}

export default Button
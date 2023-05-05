import React from 'react'
import "./style.css"

function Button({text,onClick,outlined}) {
  return (
      <div className={outlined?'outLined-btn':"btn"}onClick={()=>onClick()}>
          {text}
    </div>
  )
}

export default Button
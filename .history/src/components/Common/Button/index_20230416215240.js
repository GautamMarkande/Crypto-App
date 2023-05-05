import React from 'react'
import "./style.css"

function Button({text,onClick,outLlined}) {
  return (
      <div className={outLlined?'outLined-btn':"btn"}onClick={()=>on}>
          {text}
    </div>
  )
}

export default Button
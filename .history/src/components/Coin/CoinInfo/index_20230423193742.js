import React, { useState } from 'react'
import "./style.css"
function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc?.slice(0, 200) + "<span style='color:var(--gray)'> Read More...</span>";
  const longDesc = desc + "<span style='color:var(--gray)'> Read Less...</span>";;
  const[flag,setFlag]=useState(false)
  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      { desc.<p
        onClick={()=>setFlag(!flag)}
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html:!flag? shortDesc:longDesc }}
      />}
    </div>
  );
}

export default CoinInfo;
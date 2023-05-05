import React from 'react'
import "./style.css"
function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 200) ;
  const longDesc = desc;
  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      <p
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: shortDesc }}
      />
    </div>
  );
}

export default CoinInfo;
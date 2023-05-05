import React from 'react'

function CoinInfo({heading,desc}) {
    return (
      <div className="gray-wrapper">
        <h2 className='he'>{heading}</h2>
        <p>{desc}</p>
      </div>
    );
}

export default CoinInfo;
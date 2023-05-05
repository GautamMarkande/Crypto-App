import React from 'react'
import './style.css'
import Button from '../../Common/Button';

function MainComponents() {
  return (
    <div>
      <div className="flex-info">
        <div className="left-component">
          <h1 className="track-crypto-heading">Track Crypto</h1>
          <h1 className="real-time-heading">Real Time.</h1>
          <p className="text-info">
            Track crypto through a public api in real time. Visit the dashboard
            to do so!
          </p>
          <div className="btn-flex">
            <Button text={"Dhasbord" } />
            <Button text={ "Share"} outlined={true} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MainComponents;
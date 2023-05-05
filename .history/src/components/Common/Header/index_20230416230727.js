import React from 'react'
import TemporaryDrawer from './drawer';
import './style.css'
import Button from '../Button';
function Header(){
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Compare</p>
        </a>
        <a href="/">
          <p className="link">WahtchList</p>
        </a>
        <a href="#">
          <Button text={"Dashboard"} onClick={()=>console.log("btnc")}/>
        </a>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}
export default Header;

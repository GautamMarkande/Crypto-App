import React from 'react'
import TemporaryDrawer from './drawer';
import './style.css'
import Button from '../Button';
import {Link} from 'react-router-dom'
function Header(){
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>

        <Link to="/">
          <p className="link">Compare</p>
        </Link>

        <Link to="/">
          <p className="link">WahtchList</p>
        </Link>
        <Lim="/">
          <Button
            text={"Dashboard"}
            outlined={true}
            onClick={() => console.log("btncliked")}
          />
        </=>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}
export default Header;

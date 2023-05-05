import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function TemporaryDrawer() {
const [open,setOpen]=useState(false) 
      
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon class/>
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
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
          <a href="/">
            <p className="link">DashBord</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
export default TemporaryDrawer;
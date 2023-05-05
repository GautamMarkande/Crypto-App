import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function TemporaryDrawer() {
const [open,setOpen]=useState(false) 
      
  return (
    <div>
      <IconButton onClick={()=>setOpen(true)}></></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
      >
        <p>hi</p>
          </Drawer>
       
    </div>
  );
}
export default TemporaryDrawer;
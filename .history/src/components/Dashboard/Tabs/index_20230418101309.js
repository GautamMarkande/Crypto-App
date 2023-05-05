import React from "react";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

 function TabsComponenet() {
   const [value, setValue] = useState("1");

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   const style = {
     color:var(--)
   }

   return (
     <div>
       <TabContext value={value}>
         <div sx={{ borderBottom: 1, borderColor: "divider" }}>
           <TabList onChange={handleChange} variant="fullWidth">
             <Tab label="Grid" value="grid" sx={{style}} />
             <Tab label="List" value="list" />
           </TabList>
         </div>
         <TabPanel value="1">Item One</TabPanel>
         <TabPanel value="2">Item Two</TabPanel>
       </TabContext>
     </div>
   );
 }
export default TabsComponenet;
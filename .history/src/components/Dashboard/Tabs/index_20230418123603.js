import React from "react";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function TabsComponenet({coins}) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vh",
    fontSize: "1.2rem",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main:"#3a80e9"
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
          <div>
            {coins.map((item, i) => {
              return (
                <img
                <div>
                  <p key={i}>
                    {i + 1}
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div>
            {coins.map((item, i) => {
              return (
                <div>
                  <p key={i}>
                    {i + 1}
                    {item.id}
                  </p>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
export default TabsComponenet;

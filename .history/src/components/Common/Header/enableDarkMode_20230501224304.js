
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function ElableDarkMode() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}
export defa














// import React, { useState } from "react";

// const EnableDarkMode = () => {
//     const [myStyle, setmyStyle] = useState({
//         backgroundColor: "white",
//         color: "black",
//     });
   
//     const [btnStyle, setBtnStyle] = useState("Enable Dark Mode")
//     const toggleStyle = () => {
//         if (myStyle.color === "black") {
//             setmyStyle({
//                 color: 'white',
//                 backgroundColor: 'black',
//                 border: "1px solid white"
//             })
//             setBtnStyle("Enable light mode");
//         } else {
//             setmyStyle({
//                 color: "black",
//                 backgroundColor: "white",
//             });
//             setBtnStyle("Enable dark mode");
//         }
//     }
//     return (
//         <button type="button" class="btn btn-primary my-4" onClick={toggleStyle}>
//             EnableDarkMode
//         </button>
//     )
// }
// export default EnableDarkMode;
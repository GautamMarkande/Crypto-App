import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import "./style.css"
function Loader() {
  return (
    <div className='lo'>
      <CircularProgress />
    </div>
  );
}

export default Loader
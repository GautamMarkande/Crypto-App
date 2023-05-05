import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import "./style.css"
function Loader() {
  return (
    <div className=''>
      <CircularProgress />
    </div>
  );
}

export default Loader
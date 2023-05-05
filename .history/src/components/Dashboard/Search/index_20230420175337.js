import React from 'react'
import "./style.css"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Search() {
  return (
      <div className='search-flex'>
      <SearchRoundedIcon /> 
      <input placeholder='Search' type='text'/>
    </div>
  )
}

export default Search
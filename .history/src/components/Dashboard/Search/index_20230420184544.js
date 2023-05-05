import React, { useState } from 'react'
import "./style.css"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Search() {
  const [search, setSearch] = useState("");
  return (
      <div className='search-flex'>
      <SearchRoundedIcon /> 
      <input placeholder='Search' type='text' value={search} onChange={(e)=>setSearch(e.target.valu)}/>
    </div>
  )
}

export default Search
import React from "react";
import {useState} from "react";
import Pagination from "@mui/material/Pagination";
import "./style.css";

export default function PaginationComponent() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="div">
      <Pagination
        count={100}
        page={page}
        onChange={handleChange}
        variant="outlined"
              sx={{
                  color: "var(--white)",
                  "& .Mui.selected": {
                      backgroundColor: "var(--blue) !important",
                      color: "#fff !important",
                      borderColor:"var(--blue) !important"
                  },
                  "& .MuiPaginationItem.ellipsis": {
                      border:"0px solid var(--)"
                  }
         }}     
      />
    </div>
  );
}

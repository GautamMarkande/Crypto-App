import React from "react";
import  from "react";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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
                  "&.Mui.selected": {
                      backgroundColor: "var(--blue) !important",
                      color: "#fff !important",
                      borderColor:"var(--blue) !important"
                  }
         }}     
      />
    </div>
  );
}

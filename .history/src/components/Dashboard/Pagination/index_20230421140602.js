import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


export default function PaginationComponent() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div spacing={2} className="div">
      <Typography>{page}</Typography>
      <Pagination
        count={100}
        page={page}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
    </div>
  );
}

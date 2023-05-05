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
    <Stack spacing={2} backg>
      <Typography >{page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} color="primary" />
    </Stack>
  );
}

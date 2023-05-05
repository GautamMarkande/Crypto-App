import React from "react";
import {use}
import Pagination from "@mui/material/Pagination";

 export default function PaginationComponent() {
   const [page, setPage] = useState(1);
   const handleChange = (event, value) => {
     setPage(value);
   };

   return (
     <div>
       <Pagination count={10} page={page} onChange={handleChange} />
     </div>
   );
 }

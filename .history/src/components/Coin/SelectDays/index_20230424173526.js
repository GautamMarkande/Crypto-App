import {useState} from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectDay() {
  const [days, setDays] = useState(30);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
        <InputLabel id="demo-simple-select-label">Days</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="days"
          onChange={handleChange}
        >
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}></MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </div>
  );
}

import {useState} from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectDay() {
  const [days, setDays] = useState(30);

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <div>
      <InputLabel id="demo-simple-select-label">Days</InputLabel>
          <Select
              sx={{
                  height: "2.5rem",
                  color: "var(--white)",
                  "&. MuiOutlinedInput-notchedOutline": {
                      borderColor:"var(--white)"
          },
          "& .MuiSvgIcon-root": {
                    color:"var("
                  }
              }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleChange}
      >
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={90}>90 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}

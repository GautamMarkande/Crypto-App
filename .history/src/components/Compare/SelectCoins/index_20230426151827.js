import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";

function SelectCoins() {
    const [crypto1, setCrypto1] = useState("bitcoin");
        const [crypto2, setCrypto2] = useState("etherium");

    const styles = {
      height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a88c9",
            },
        },
    }
    
    const handleCoinChange = (event) => {
        setCrypto1(event.target.value);
  }
    
  return (
    <div>
      <Select
        sx={styles}
      
        value={crypto1}
        label="Days"
        onChange={handleCoinChange}
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

export default SelectCoins
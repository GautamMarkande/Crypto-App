import React from "react";
import {useState} from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ".style.css "

export default function TogglePriceType() {
  const [priceType, setPriceType] = useState("prices");

  const handleChangePriceType = (event, newType) => {
    setPriceType(newType);
  };

    return (
      <div className="toggle-price">
        <ToggleButtonGroup
          value={priceType}
          exclusive
          onChange={handleChangePriceType}
          sx={{
            "& .Mui-selected": {
              color: "var(--blue) !important",
            },
            borderColor: "var(--blue)",
            border: "unset !important ",
            "& .MuiToggleButtonGroup-grouped": {
              border: "1px solid !important",
              borderColor: "unset",
              color: "var(--blue)",
            },
            "& .MuiToggleButtonGroup-standard": {
              color: "var(--blue)",
            },
          }}
        >
          <ToggleButton value="price">PRICE</ToggleButton>
          <ToggleButton value="market_cap">MKT CAP</ToggleButton>
          <ToggleButton value="total_volume">VOLUME</ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
}

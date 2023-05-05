import React from "react";
import {useState} from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function TogglePriceType() {
  const [priceType, setPriceType] = useState("prices");

  const handleChangePriceType = (event, newType) => {
    setPriceType(newType);
  };

  return (
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handleChangePriceType}
    >
      <ToggleButton value="price" >
        PRICE
      </ToggleButton>
      <ToggleButton value="market_cap" >
        MKT CAP
      </ToggleButton>
      <ToggleButton value="total-volume">
        VOLUME
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

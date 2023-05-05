import React from "react";
import {useState} from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function TogglePriceType() {
  const [priceType, setPriceType] = useState("prices");

  const handleChangePriceType = (event, new) => {
    setPriceType(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handleChangePriceType}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        PRICE
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        MKT CAP
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        VOLUME
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

import React, { useEffect } from "react";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";
import axios from "axios";
// import { get100Coins } from "../../../functions/get100Coins";

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);

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
  };
  
  useEffect(() => {
     axios
       .get(
         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
       )
       .then((response) => {
         console.log(response);
        setAllCoins(response.data)
       })
       .catch((error) => {
         console.log(error);
       });
    
  }, []);

  // async function getData() {
  //   try {
      
  //     const myCoins = await get100Coins();
  //     setAllCoins(myCoins);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <div className="coins-flex">
      <p className="tagp">Crypto 1</p>
      <Select
        className="selectprice"
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {
          allCoins?.filter((item) => item.id !== crypto2)
          ?.map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      <p className="tagp">Crypto 2</p>
      <Select
        className="selectprice"
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {
          allCoins?.filter((item) => item.id !== crypto1)
          ?.map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default SelectCoins;

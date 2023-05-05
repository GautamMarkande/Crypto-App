import React, { useEffect } from 'react';
import {useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";
import { get100Coins } from '../../../functions/get100Coins';

function SelectCoins() {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("etherium");
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
    }
    
    const handleCoinChange = (event) => {
        setCrypto1(event.target.value);
    }
    useEffect(() => {
        getData(); 
    },[])
    
    async function getData() {
        const myCoins = await get100Coins(); 
        setAllCoins(myCoins);
    }
  return (
    <div className="coins-flex">
      <p>Crypto 1</p>
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={handleCoinChange}
      >
        {allCoins.map((coin) => (
          <MenuItem value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>
      <p>Crypto 2</p>
      <Select
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event.isCoin)}
      >
        {allCoins.map((coin) => (
          <MenuItem value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectCoins
import React from 'react'
import "./style.css";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Tooltip from "@mui/material/Tooltip";


function List({coin}) {
  return (
    <tr className="list-row">
        <td className="td-imgae">
              
              <img src={coin.image} className="coin-logo" />
          </td>
          <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
         <Tooltip title="Delete"></Tooltip>
      </td>
      {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-flex">
          <div className="prise-flex">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip">
            <TrendingUpIcon />
          </div>
        </td>
      ) : (
        <td className="chip-flex">
          <td className="prise-flex chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </td>
          <td className="icon-red">
            <TrendingDownIcon />
          </td>
        </td>
      )}
      <td>
        <h3
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      <td>
        <p className="total_value">
          ${coin.total_volume.toLocaleString()}
        </p>
      </td>
      <td>
        <p className="total_value">
          ${coin.market_cap.toLocaleString()}
        </p>
      </td>
    </tr>
  );
}

export default List
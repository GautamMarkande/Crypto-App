import React from 'react'
import "./style.css";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Tooltip from "@mui/material/Tooltip";
import { convertNumber } from '../../../functions/convertNumber';
import { Link } from "react-router-dom";


function List({coin}) {
  return (
    <Link to={`/coins/${coin.id}`} >
      <tr className="list-row">
        <Tooltip title="Logo" placement="bottom-start">
          <td className="td-imgae">
            <img src={coin.image} className="coin-logo" />
          </td>
        </Tooltip>
        <Tooltip title="Symbol" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Price change 24Hrs" placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="prise-flex">
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUpIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <td className="prise-flex chip-red td-icon">
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="icon-red">
                <TrendingDownIcon />
              </td>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Current Price" placement="bottom-start">
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
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-start">
          <td>
            <p className="total_value td.total.volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
          <td className="desktop-td-mkt">
            <p className="total_value">${coin.market_cap.toLocaleString()}</p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
          <td className="mobile-td-mkt">
            <p className="total_value">${convertNumber(coin.market_cap)}</p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
}

export default List
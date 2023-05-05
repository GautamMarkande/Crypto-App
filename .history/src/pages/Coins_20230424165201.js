import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashboard/List"
import axios from "axios";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";

function CoinsPage() {
    const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState("");
  const [days, setDays] = useState(30);
  const[chartData,setChartData]=useState({})

  useEffect(() => {
        if (id) {
        getData();
     }
  }, [id])
  
  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        setChartData({
          labels: [""],
          datasets: [{
            labels: 'Dataset 1',
            data: Utile.numbera(NUMBER_CGF),
            borderColor
          }]
        })
        setIsLoading(false);
      }
    }
  }

    return (
      <>
        <Header />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="grey-wrapper">
              <List coin={coinData} />
            </div>
            <div className="grey-wrapper">
              <LineChart />
            </div>

            <CoinInfo heading={coinData.name} desc={coinData.desc} />
          </>
        )}
      </>
    ); 
}

export default CoinsPage;
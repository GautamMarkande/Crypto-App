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
import { convertDate } from "../functions/convertDate";

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
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              data: prices.map((price) => (price[1])),
              borderColor: "blue",
              borderWidth: 2,
              fill: true,
              tension: 0.25,
              backgroundColor:"rgba(58,128,233,)"
            },
          ],
        });
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
              <LineChart chartData={chartData}/>
            </div>
            <CoinInfo heading={coinData.name} desc={coinData.desc} />
          </>
        )}
      </>
    ); 
}

export default CoinsPage;
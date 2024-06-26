import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../components/Coin/LineChart";
import TogglePriceType from "../components/Coin/PriceType";

function Compare() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(60);
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  async function handleChangeDays(event) {
    setIsLoading(true);
    setDays(event.target.value);
    try {
      const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
      const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
      settingChartData(setChartData, prices1, prices2);
    } catch (error) {
      console.log(error)
    }
    
    setIsLoading(false);
  }

  const handleChangePriceType = async (event, newType) => {
    setIsLoading(true);
    try {
      setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
    } catch (error) {
      console.log(error)
    }
    
    setIsLoading(false);
  };
  

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    try {
      const data1 = await getCoinData(crypto1);
      if (data1) {
        const data2 = await getCoinData(crypto2);
        coinObject(setCrypto1Data, data1);
        if (data2) {
          coinObject(setCrypto2Data, data2);
          const prices1 = await getCoinPrices(crypto1, days, priceType);
          const prices2 = await getCoinPrices(crypto2, days, priceType);
          settingChartData(setChartData, prices1, prices2);
          console.log("both prices>>", prices1, prices2);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log(error)
    }
   
  }

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
   try {
    if (isCoin2) {
      
      console.log("crypto2 id", event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      setCrypto2(event.target.value);
      if (prices1.length > 0 && prices2.length > 0) {
        // settingChartData(setChartData, prices);
        settingChartData(setChartData, prices1, prices2);
        console.log("both prices>>", prices1, prices2);
        setIsLoading(false);
      }
    } else {
      setCrypto1(event.target.value);
      console.log("crypto1 id", event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
   } catch (error) {
    console.log(error)
   }
  };
  return (
    <div>
      <Header />
      {isLoading? (
        <Loader />
      ) : (
        <>
          <div className="coins-day-flex">
            <SelectCoins
              crypto1={crypto1}
              setCrypto1={setCrypto1}
              crypto2={crypto2}
              setCrypto2={setCrypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleChangeDays={handleChangeDays}
              noPtag={true}
            />
          </div>
          {crypto1Data.name && (
            <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
              <List coin={crypto1Data} />
            </div>
          )}
          {crypto2Data.name && (
            <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
              <List coin={crypto2Data} />
            </div>
          )}

          <div className="grey-wrapper">
            <TogglePriceType
              priceType={priceType}
              handleChangePriceType={handleChangePriceType}
            />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
}
export default Compare;

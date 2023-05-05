import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import Loader from "../components/Common/Loader";
import List from 

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");

  function handleDaysChange(event) {
    setDays(event.target.value);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if (data1) {
      coinObject(setCrypto2Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }
    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, "prices");
      const prices2 = await getCoinPrices(crypto2, days, "prices");

      if (prices1.length > 0 && prices2.length > 0) {
        // settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      console.log("crypto2 id", event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
    } else {
      setCrypto1(event.target.value);
      console.log("crypto1 id", event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    if (prices1.length > 0 && prices2.length > 0) {
      // settingChartData(setChartData, prices);
      console.log("both prices>>", prices1,prices2);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Header />
      {isLoading ? (
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
              handleDaysChange={handleDaysChange}
              noPtag={true}
            />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto2Data} />
          </div>
        </>
      )}
    </div>
  );
}

export default ComparePage;

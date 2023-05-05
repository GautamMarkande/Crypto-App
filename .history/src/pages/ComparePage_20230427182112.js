import React,{useEffect, useState} from 'react'
import Header from '../components/Common/Header';
import SelectCoins from "../components/Compare/SelectCoins"
import SelectDays from "../components/Coin/SelectDays";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";


function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
    const [isLoading, setIsLoading] = useState(true);


  function handleDaysChange(event) {
    setDays(event.target.value)
  }
  
  useEffect(() => {
    getData();
  },[])

  async function getData() {
    const data1 = await getCoinData(crypto1);
if (data1) {
  coinObject(setCrypto2Data, data1);
  const prices = await getCoinPrices(crypto1, days, "prices");
  if (prices.length > 0) {
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
    if (data) {
      coinObject(setCrypto2Data, data);
      const prices = await getCoinPrices(event.target.value, days, "prices");
      if (prices.length > 0){
        // settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  }
}else {
      setCrypto1(event.target.value);
  console.log("crypto1 id", event.target.value);
  const data = await getCoinData(event.target.value);
  if (data) {
    coinObject(setCrypto1Data, data);
    const prices = await getCoinPrices(event.target.value, days, "prices");
    if (prices.length > 0) {
      // settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  }
}
}
  return (
    <div>
      <Header />
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
    </div>
  );
}

export default ComparePage
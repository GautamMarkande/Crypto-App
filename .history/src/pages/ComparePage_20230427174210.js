import React,{useState} from 'react'
import Header from '../components/Common/Header';
import SelectCoins from "../components/Compare/SelectCoins"
import SelectDays from "../components/Coin/SelectDays";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState({});
    const [crypto2Data, setCrypto12Data] = useState({});


  function handleDaysChange(event) {
    setDays(event.target.value)
  }


   const handleCoinChange = async(event, isCoin2) => {
     if (isCoin2) {
       setCrypto2(event.target.value);
       console.log("crypto2 id", event.target.value);
      const data = await getCoinData(id);
    if (data) {
      coinObject(setCrypto2, data);
      const prices = await getCoinPrices(event.target.value, days, "prices");
      if (prices.length > 0){
        // settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  }
}else {
      setCrypto1(event.target.value);
  console.log("crypto1 id", event.target.value);
   setCrypto1(event.target.value);
       console.log("crypto1 id", event.target.value);
           const data = await getCoinData(id);
    if (data) {
      coinObject(setCrypto1, data);
      const prices = await getCoinPrices(event.target.value, days, "prices");
      if (prices.length > 0){
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
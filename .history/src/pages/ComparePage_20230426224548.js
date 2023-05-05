import React,{useState} from 'react'
import Header from '../components/Common/Header';
import SelectCoins from "../components/Compare/SelectCoins"
function ComparePage() {
    const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const[days,]
  return (
    <div>
      <Header />
      <SelectCoins
        crypto1={crypto1}
        setCrypto1={setCrypto1}
        crypto2={crypto2}
        setCrypto2={setCrypto2}
      />
    </div>
  );
}

export default ComparePage
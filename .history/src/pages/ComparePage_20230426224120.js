import React,{useState} from 'react'
import Header from '../components/Common/Header';
import SelectCoins from "../components/Compare/SelectCoins"
function ComparePage() {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
  return (
    <div>
      <Header />
      <SelectCoins  />
    </div>
  );
}

export default ComparePage
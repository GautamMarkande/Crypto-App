import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashboard/List"
import axios from "axios";
import CoinInfo from "../components/Coin/CoinInfo";

function CoinsPage() {
    const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  itemToForm = () => {
    if (.item === undefined) {
      return;
    }
  };

    useEffect(() => {
        if (id) {
          axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((response) => {
              console.log(response);
              coinObject(setCoinData,response.data)
              setIsLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setIsLoading(false);
            });
     }
 }, [id])

    return (
      <>
        <Header />
        <div className="grey-wrapper">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <List coin={coinData} />
            </>
          )}
        </div>
        <CoinInfo heading={coinData.name} desc={coinData.desc} />
      </>
    ); 
}

export default CoinsPage;
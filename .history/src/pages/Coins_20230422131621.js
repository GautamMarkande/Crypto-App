import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import axios from "axios";

function CoinsPage() {
    const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();

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
        {isLoading ? <Loader /> : <>{id}</>}
      </>
    ); 
}

export default CoinsPage;
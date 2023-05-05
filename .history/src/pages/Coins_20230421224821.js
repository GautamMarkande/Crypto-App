import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Common/Header";
import axios from "axios";

function CoinsPage() {
    const { id } = useParams();
        const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
          axios
            .get(
              `https://api.coingecko.com/api/v3/coins/bitcoin/${id}`
            )
            .then((response) => {
              console.log(response);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setIsLoading(false);
            });
     }
 },[id])

    return (
        <div>
            <Header />
            isLoading?
      </div>
    ) 
}

export default CoinsPage;
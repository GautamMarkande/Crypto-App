import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function CoinsPage() {
    const { id } = useParams();
    useEffect(() => {
        if (id) {
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
            )
            .then((response) => {
              console.log(response);
              setCoins(response.data);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setIsLoading(false);
            });
     }
 },[id])

  return <div>CoinsPage</div>;
}

export default CoinsPage;
import React, { useEffect } from 'react';
import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';
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
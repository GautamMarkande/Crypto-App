axios
 
    export const 







    .get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily
`
  )
  .then((response) => {
    console.log(response.data.prices);
    setIsLoading(false);
  })
  .catch((error) => {
    console.log(error);
    setIsLoading(false);
  });

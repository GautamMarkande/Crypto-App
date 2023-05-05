export const get100Coins = () => {
     axios
       .get(
         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
       )
       .then((response) => {
         console.log(response);
        se
       })
       .catch((error) => {
         console.log(error);
         setIsLoading(false);
       });
} 

export const getCoinData = (id) => {
   const myData= axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
             response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
        });
}
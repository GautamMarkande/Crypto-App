
export const getCoinData = (id) => {
   const myData= axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
            ret response.data);
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
        });
}
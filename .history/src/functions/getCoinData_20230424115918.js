

 axios
   .get(`https://api.coingecko.com/api/v3/coins/${id}`)
   .then((response) => {
     console.log(response);
     coinObject(setCoinData, response.data);
     setIsLoading(false);
   })
   .catch((error) => {
     console.log(error);
     setIsLoading(false);
   });
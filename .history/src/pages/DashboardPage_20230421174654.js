import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponenet from '../components/Dashboard/Tabs';
import Search from '../components/Dashboard/Search';
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from '../components/Common/Loader'
import axios from 'axios';

function DashboardPage() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);


  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }
  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((response) => {
        console.log(response);
        setCoins(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
                setIsLoading(false)

      });
  },[])

  return (
    <>
      {isLoading?
        <div>
          <Loader />
          <Header />
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponenet coins={filteredCoins} />
          <PaginationComponent />
        </div>
      }
    </>
  );
}

export default DashboardPage;
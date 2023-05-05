import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponenet from '../components/Dashboard/Tabs';
import Search from '../components/Dashboard/Search';
import axios from 'axios';

function DashboardPage() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }
  var filteredCoins=coins.filter()

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((response) => {
        console.log(response);
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  },[])

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponenet coins={coins} />
    </div>
  );
}

export default DashboardPage;
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
  var filteredCoins = coins.filter((item) =>
    item.name.toLowerCase().includs(search.toLowerCase())
  )

  useEffect(() => {
    axios
     
      .catch((error) => {
        console.log(error.response.data.error);
      });
  },[])

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponenet coins={filteredCoins} />
    </div>
  );
}

export default DashboardPage;
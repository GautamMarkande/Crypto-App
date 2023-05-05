import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponenet from '../components/Dashboard/Tabs';
import Search from '../components/Dashboard/Search';
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from '../components/Common/Loader'
import BackToTop from '../components/Common/BackToTop'
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

  useEffect(() => {}, []);

  const getDate = async () => {

    setCoins(response.data);
    setPaginatedCoins
         setIsLoading(false);
  }

  return (
    <>
      <Header />
      <BackToTop/>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponenet coins={filteredCoins} />
          <PaginationComponent />
        </div>
      )}
    </>
  );
}

export default DashboardPage;
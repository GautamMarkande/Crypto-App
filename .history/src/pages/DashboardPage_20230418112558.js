import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponenet from '../components/Dashboard/Tabs';
import axios from 'axios';

function DashboardPage() {
  const [coins, setCoins] = useState([])
  
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then((response) => {
      console.log()
    })
  },[])

  return (
      <div>
      <Header />
      <TabsComponenet />
    </div>
  )
}

export default DashboardPage;
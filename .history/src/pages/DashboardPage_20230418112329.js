import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponenet from '../components/Dashboard/Tabs';
import axios from 'axios';

function DashboardPage() {
  const [coins, setCoins] = useState([])
  
  useEffect(() => {
    axios.get("")
  },[])

  return (
      <div>
      <Header />
      <TabsComponenet />
    </div>
  )
}

export default DashboardPage;
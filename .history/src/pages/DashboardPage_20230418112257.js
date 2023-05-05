import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponenet from '../components/Dashboard/Tabs';

function DashboardPage() {
  const [coins, setCoins] = useState([])
  
  useEffect(() => {
    axio
  },[])

  return (
      <div>
      <Header />
      <TabsComponenet />
    </div>
  )
}

export default DashboardPage;
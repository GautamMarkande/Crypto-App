import React, { useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponenet from '../components/Dashboard/Tabs';

function DashboardPage() {
  const [coins, setCoins] = useState([])
  
  return (
      <div>
      <Header />
      <TabsComponenet />
    </div>
  )
}

export default DashboardPage;
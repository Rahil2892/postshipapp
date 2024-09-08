import React from 'react'
import Navigation from './components/Navigation/Navigation'
import HomeDashboard from './components/HomeDashboard/HomeDashboard'
import OrderDashboard from './components/OrderDashboard/OrderDashboard'
import Dashboard from './components/Dashboard/Dashboard'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='bg-[url("https://cdn.builder.io/api/v1/image/assets%2F1516c456a62546418cdc64c619308aeb%2Fb1e5d29919174a128907844563420ca2")] bg-no-repeat' id='home'>
        <Navigation/>
        <HomeDashboard/>
        <OrderDashboard/>
        <Dashboard/>
        <Toaster />
    </div>
  )
}

export default App
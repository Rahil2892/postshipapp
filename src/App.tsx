import React from 'react'
import OrderDashboard from './components/OrderDashboard'
import HomeDashboard from './components/HomeDashboard'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard/Dashboard'
import Message from './components/Message'

const App = () => {
  return (
    <div>
        <Navigation/>
        <Message msg="Welcome John Mathew!!" />
        <HomeDashboard/>
        <OrderDashboard/>
        <Message msg="Discover the Heart of Our Functionality" />
        <Dashboard/>
    </div>
  )
}

export default App
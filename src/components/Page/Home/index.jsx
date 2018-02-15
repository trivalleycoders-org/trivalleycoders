import React from 'react';
import TopBar from './TopBar'
import Header from './Header'
import Events from './Events'
import Members from './Members'
import Sponsors from './Sponsors'

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Events />
      <Members />
      <Sponsors />
    </div>
  )
}
export default Home

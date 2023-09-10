import React from 'react'
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import CompanyProfile from './Components/CompanyProfile';
import OurMission from './Components/OurMission';
import Facility from './Components/Facility';
import EntryProfile from './Components/EntryProfile';
import Vision from './Components/Vision';
import Income from './Components/Income';

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <CompanyProfile />
      <OurMission />
      <Vision />
      <Facility />
      <EntryProfile />
      <Income />
      <Footer />
    </div>
  )
}

export default App;
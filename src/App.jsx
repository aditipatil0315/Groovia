import React from 'react'
import Hero_section from './components/Hero_section/Hero_section'
import About_us from './components/About_us/About_us'
import Collection from './components/Collection/Collection'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Why_us from './components/Why_us/Why_us'
import './App.css'

function App() {

  return (
    <div className='app_container'>
      <Banner />
      <Navbar/>
      <Hero_section />
      <About_us />
      <Collection />
      <Why_us />
      
      
    </div>
  )
}

export default App

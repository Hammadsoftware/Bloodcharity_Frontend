import React from 'react'
import Navbar from '../components/Navbar' // Assuming Navbar is in components folder
import Hero from '../components/Hero'       // Assuming Hero is in components folder
import Mission from '../components/Mission'; // Assuming Mission is in components folder
import HowToGetBloodSection from '../components/HowToGetBloodSection'; // Assuming HowToGetBloodSection is in components folder
import Footer from '../components/ Footer'; // Assuming Footer is in components folder

function Home() {
  return (
    <>
    
      <div className='overflow-hidden'>
        <Hero/>
        <Mission/>
        <HowToGetBloodSection />
      </div>
    
    </>
  )
}

export default Home

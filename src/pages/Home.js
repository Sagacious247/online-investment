import React from 'react'
import Hero from '../components/Hero'
// import Featured from '../components/Featured'
import Signup from '../components/Signup'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Carousel from '../components/Carousel'

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
          <Navbar/>
          {/* <Carousel/> */}
          <Hero/>
          {/* <Featured/> */}
          <Signup/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home

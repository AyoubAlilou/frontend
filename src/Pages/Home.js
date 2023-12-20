import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Contain from '../Components/Contain'
import Autho from '../Components/Autho'

const Home = () => {
  return (
    <div>
      <h1>Version 2 </h1>
      <NavBar />
      <div></div>

      <div>
        <Contain />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home

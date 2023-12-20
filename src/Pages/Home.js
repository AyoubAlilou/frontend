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
        <h1>Version 2 </h1>
        <h1>Version 3</h1>

        <Contain />
      </div>
      <div>
        <h1>Version 3</h1>
        <h1>Version 3</h1>
        <Footer />
      </div>
    </div>
  )
}

export default Home

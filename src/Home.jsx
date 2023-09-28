import React from 'react'
import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Mainlanding from './Mainlanding'
import Users from './components/Users'
import Lists from './components/List'
import Customer from './components/Customer'
import Properties from './components/Properties'
import Prefoot from './components/Prefoot'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
     <Navbar/>
     <Mainlanding/>
     <Users/>
     <Lists/>
     <Customer/>
     <Properties/>
     <Prefoot/>
     <Footer/>
    </div>
  )
}

export default Home

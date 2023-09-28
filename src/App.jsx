import { useState } from 'react'

import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Mainlanding from './Mainlanding'
import Users from './components/Users'
import Lists from './components/List'
import Customer from './components/Customer'
import Properties from './components/Properties'
import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Paymentplans from './Paymentplans'
import Quotegenerator from './Quotegenerator'
import Quotecheck from './Quotecheck'
import Auth from './Auth'
import Axios from 'axios';
import Quote from './Quote'
import Imagelinks from './components/Imagelinks'


function App() {

  return (
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/payment-plans" element={<Paymentplans/>}/>
        <Route path="/payment-plans/quote-generator/:amount/:plan" element={<Quotegenerator/>}/>
        <Route path="/checkquote" element={<Quotecheck/>}/>
        <Route path="/admin-route" element={<Auth/>}/>
        <Route path="/quote/:id" element={<Quote/>}/>
        <Route path="/images-links" element={<Imagelinks/>}/>
      </Routes>
  )
}

export default App

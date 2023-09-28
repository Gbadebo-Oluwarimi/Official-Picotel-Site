import React, { useState } from 'react'
import map from '../assets/logo.png'
import { Link } from "react-router-dom";
import Phonenav from './Phonenav';
import Landing from './Landing';
import  { useStore }  from '../../Store.js'

const Navbar = () => {
    const box = useStore(state => state.popup)
    const updatebox = useStore(state => state.updatepopup)
  return (
    < >
      {box ? (<Phonenav/>) : ""}
      <Landing/>
    <div className=' bg-bright border-b border-green-600 py-3'>
    
    <div className='flex justify-between max-w-mmx m-auto '>
    <div className=' flex  items-center font-poppins text-sm '>
      <div className=' px-2 md:px-1 '>
       <Link to='/'><img src={map} alt="logo"/></Link>
      </div>
      <div className=''>
       <ul className='md:flex  text-xs hidden'>
        <li className='flex '><Link to="/"><div className='pr-2'>About Us</div> </Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" text-green-600 w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</li>
        <li><Link to="/services">Explore Services</Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" text-green-600 w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg></li>
        <li><Link to="/payment-plans"><div className='pr-2'>Payment plans</div></Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" text-green-600 w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg></li>
        <li><Link to="/contact">Contact Us</Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className=" text-green-600 w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg></li>
        {/* <button className='bg-slate-200 rounded-full p-2 ml-6 w-40 text-darkgreen ring-darkgreen ring-2'> Reach out </button> */}
       </ul>
      </div>
      </div>
      <div className='md:hidden inline-block px-10'>
      <svg onClick={() => updatebox()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </div>
      <div className='hidden md:flex'>
      <Link to="/checkquote"><button class=" hidden md:flex cursor-pointer  justify-between mr-2 bg-green-400 font-poppins text-xs hover:bg-green-500 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">
    Order a quote

</button>
</Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar

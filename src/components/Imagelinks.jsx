import React from 'react'
import { Link } from 'react-router-dom'
import Landing from './Landing'
import Navbar from './Navbar'


const Imagelinks = () => {
  return (
    <div className='font-poppins '>
         <div className='font-poppins'>
        <Landing/>
      <Navbar/>
      <div className='w-full bg-green-950 h-80 text-gray-200 p-10'>
        <div className='max-w-mx m-auto mt-12'>
            <div className='text-sm py-3'>Picotel.ng  /  <span className='text-green-600 py-10'>Explore Services</span></div>
            <div className='text-4xl pb-3 font-semibold '>Explore or competitve pricing <br/><span className='text-green-400'>options</span></div>
            <div className='text-xs'>Start your shopping experience with us and get the most out of your life</div>
        </div>
      </div>
      <div className='bg-bright min-h-screen p-20'>
      <div className='max-w-2xl m-auto'>
        <div className='font-semibold text-3xl text-center'>Resources <span className='text-green-400'>Used</span> </div>
        <div className='text-xs text-center py-4 text-gray-500'>A text is a passage of words that conveys a set
of meanings to </div>
</div>
<div className='max-w-2xl p-4 m-auto'>
   
</div>

</div>
    </div>
    </div>
  )
}

export default Imagelinks

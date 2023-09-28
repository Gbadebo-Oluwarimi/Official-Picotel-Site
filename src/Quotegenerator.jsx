import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quoteform from './components/Quoteform';

const Quotegenerator = () => {
        const { amount, plan } = useParams();

  return (
    <div className='bg-white'>
    <div className=' grid grid-cols-6 min-h-screen md:flex-wrap'>
      <div className='col-span-2 quoteimg p-3 hidden md:inline-block'>
    <div className='bg-gray-200 rounded-full h-10 w-10 ml-10 mt-5 '>
   

    </div>
      </div>
      <div className='md:col-span-4 w-full p-8 col-span-6'>
        <Quoteform number={plan}/>
      </div>
    </div>
    </div>
  )
}

export default Quotegenerator

import React, { useState } from 'react'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Axios from 'axios';

const Quotecheck = () => {
    const [quoteid, setQuoteid] = useState("")
    const [quotepop, setQuotepop] = useState(false)
    const [data, setData] = useState("");
   async function handleSubmit(e){
        e.preventDefault();
        
        try {
            const response = await Axios.post("http://localhost:3000/specificquote", {
               quoteid,
              });
        } catch (error) {
            console.error('Error:', error);
        }
        
    }
  return (
    <div className='bg-bright'>
        
      <Navbar/>
      <div className='w-full bg-green-950 h-80 text-gray-200 p-5'>
        <div className='max-w-mx m-auto mt-12 text-center'>
            <div className='text-2xl font-semibold py-2'>Picotel.ng  /  <span className='text-green-600 py-10'>Quote Generator</span></div>
            <div className='text-xs my-3'>Start your shopping experience with us and get the most out of your life</div>
            <div className='md:justify-between  md:flex bg-gray-100 p-3 rounded-md text-gray-600'>
    <div className=' flex justify-between'>
    <div className='relative pr-3 flex items-center justify-between w-32 divide-x divide-gray-600'>
        Quote ID
        <div ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="cursor-pointer w-4 h-4">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

</div>
    </div>
    <div><input type="text" value={quoteid} onChange={(e) => setQuoteid(e.target.value)} className="w-80 bg-transparent outline-none pl-3" placeholder="Put in you Quote Id"/></div>
   </div>
   <svg pnClick={(e) => handleSubmit(e)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

   </div>
         <div className=' max-w-mx m-auto  items-center text-md text-gray-200 pt-5'>
        
         &#x1F6A7; Carefull now, This site is still under construction &#x1F6A7;</div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Quotecheck

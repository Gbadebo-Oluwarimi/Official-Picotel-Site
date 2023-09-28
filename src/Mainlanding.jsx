import React from 'react'
import map from '../src/assets/logo.png';
import user5 from "../src/assets/user5.svg"
import user3 from "../src/assets/user3.png"
import { Link } from 'react-router-dom';
const Mainlanding = () => {
  return (
        <div>
          <div>
      <div className=' relative text-white border-top-3 bg-white background background-opacity-4 min-h-screen'>
        <div className='relative pl-5 md:pl-0 max-w-mx m-auto py-4 md:flex sm:inline-block z-1 pb-20'>      
            <div className="w-full">
              <div className='py-10 font-poppins text-xs '></div>
              <div  className='text-sm text-gray-100 inline-block font-poppins'><div>Welcome Onboard</div><div className=' mt-1 h-1 w-10 bg-green-500'/></div>
                <div className=' text-3xl md:text-5xl font-bold font-poppins leading text-softwhite py-8'>Unlimited, Unlabeled and <br/>Dedicated <span className='text-green-500'>Internet Service</span> <br/>for your Business &   Home </div>
                <div className='max-w-lg text-sm py-4 text-softwhite font-poppins'>Experience Seamless Connectivity and Reliability with Our Premium Internet Solutions </div>
                <div className='text-xs'><div className='py-6 font-poppins text-softwhite'> Powered by <span className='text-softwhite font-poppins font-bold'>Dapony Network Solution</span></div></div>
               <div className='flex'>
               <Link href="/payment-plans"> <button class="flex justify-between mr-2 bg-green-400 font-poppins text-xs hover:bg-green-500 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">
  Quote <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-3">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
</svg>

</button></Link>

<div>

</div>
</div>
            </div>
            <div className=' '>
              <div className='  m-auto flex items-center justify-center align-middle pt-5'>
              {/* <img src={
                map
              } alt="Image Description" /> */}
            </div>
            </div>
        </div>
        <div>
      <div className='m-auto w-10 mt-6'>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#697689" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.07 14.43L12 20.5l-6.07-6.07M12 12v8.33M12 3.5v4.53"></path></svg>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Mainlanding

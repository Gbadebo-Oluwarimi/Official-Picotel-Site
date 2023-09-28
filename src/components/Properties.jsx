import React from 'react'
import doodle from "../assets/doodle1.svg"
const Properties = () => {
  return (
    <div className='bg-gray-100 font-poppins'>
        <div className='absolute text-gray-200 z-0 right-10'>
          <img src={doodle} alt='' className='  w-96 h-96 z-0 opacity-5' />
        </div>
       <div className='text-center pt-20 z-10 text-gray-600'>
       <div className=' font-semibold text-3xl text-center'>Elevate Your Home Life with <br></br>Our <span className="text-green-400">Internet</span> Services </div>
        <div className='text-xs text-center py-4 text-gray-500'>Welcome to Uninterrupted Connectivity at Home and in the office</div>
       </div>
    <div className='py-20 max-w-smx m-auto  sm:inline-block z-1 inline-block md:flex mt-25 md:space-x-16'>
      
      <div><div className='text-2xl font-poppins font-semibold py-5 text-gray-400 leading-10 pl-4 md:pl-0 text-center md:text-left'> Benefits of Residential  <sapn className="text-green-400 underline decoration-wavy decoration-green-400">Internet Connectivity</sapn></div>
    <div className='font-poppins px-2 text-sm'>
      <div className=' flex md:gap-8 gap-1 pb-1'>
          <div className=' inline-block'><span className='font-semibold text-xl text-green-300'>01</span>
          <div className='border-l border-green-500 h-20 p-4 m-2'/>
          </div>
          <div className='inline-block'><h2 className='text-lg font-semibold text-gray-500'>Access to Information and Education</h2>
          <div className='text-gray-500 text-xs leading-5 pt-5'>Internet at home provides easy access to information and educational<br/> resources, benefiting students and lifelong learners.</div>
          </div>
      </div>

      <div className='flex md:gap-8 gap-1 pb-1'>
          <div className=' inline-block'><span className='font-semibold text-xl text-green-300'>02</span>
          <div className='border-l border-green-500 h-20 p-4 m-2'/>
          </div>
          <div className='inline-block'><h2 className='text-lg font-semibold text-gray-500'>Communication and Connectivity</h2>
          <div className='text-gray-500 text-xs leading-5 pt-5'> It enables seamless communication with loved ones and colleagues,<br/> fostering connections across distances.</div>
          </div>

      </div>

      <div className='flex md:gap-8 gap-1 pb-1'>
          <div className=' inline-block'><span className='font-semibold text-xl text-green-300'>03</span>
          <div className='  h-20 p-4 m-2'/>
          </div>
          <div className='inline-block'><h2 className='text-lg font-semibold text-gray-500'>Convenience and Productivity</h2>
          <div className='text-gray-500 text-xs leading-5 pt-5'> Internet access enhances convenience for online tasks like shopping, working from home, and accessing <br/>various services, ultimately saving time and boosting productivity.</div>
          </div>
      </div>
      
      </div>
      </div>
      <div className='md:m-0 m-3 mt-7 z-10 rounded-md md:w-2/3  customer'>
     
    </div>
    </div>
    </div>
  )
}

export default Properties

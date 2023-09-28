import React from 'react'

const Customer = () => {
  return (
    <div className='font-poppins '>
    <div className=' w-full min-h-screen customera font-poppins '>
      <div className=' relative mr-32 p-5 flex  w-full'>
          <div className='w-full hidden md:inline-block md:w-4/6'></div>
          <div className='w-full text-center text-softwhite md:text-left md:w-2/4 '>
          <div  className='text-sm text-gray-100 inline-block font-poppins pt-10'><div>Welcome Onboard</div><div className=' mt-1 h-1 w-10 bg-green-500'/></div>
            <h4 className='text-3xl font-semibold pt-10 text-softwhite pb-5 leading-[2rem]'>  Unlock Growth Opportunities<br/>  with Our High-Speed <br/><span className='text-green-500'>Internet</span></h4>
            <div className='text-sm leading-6 font-semibold'>In today's fast-paced business world, a reliable and high-speed internet connection is not just a convenience; it's a strategic advantage. We are thrilled to offer you our top-tier internet services that will empower your company's growth in more ways than one.</div>
            <div className='pt-10 text-xs text-semibold'>Empowering Your Company's Growth with Top-Tier Internet Services</div>
            <div className='flex gap-4 pt-16 w-124'>
              <div className='inline-block w-52'>
                  <div className='text-3xl text-green-500 font-bold'>25+</div>
                  <div className='text-xs '>Serving Diverse Enterprises: Our Presence in Over 25+ Businesses Across Nigeria</div>
              </div>
              <div className='inline-block w-52'>
                  <div className='text-3xl text-green-500 font-bold'>10+</div>
                  <div className='text-xs '>Expanding Horizons: Deployed in Over 10+ States and Still Growing</div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Customer

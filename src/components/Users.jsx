import React from 'react'
import user4 from "../assets/user4.png"
import user5 from "../assets/user5.svg"
import user3 from "../assets/user3.png"
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.svg"
const Users = () => {
  return (
    <div className='bg-bright '>
    <div className=' max-w-logo m-auto h-auto md:flex sm:inline-block z-1'>
      <div className=' h-10 w-full md:h-20 bg-bright rounded-xl  text-center  text-gray-500 font-poppins'>



<div className='hidden md:flex flex-wrap py-7 justify-between'>
  <img src={user4} alt="Hantec Markets" className='w-20  grayscale hover:grayscale-0 transition cursor-pointer ease-in-out delay-150'/>
  <img src={user2} alt="Hantec Markets" className='w-20   grayscale hover:grayscale-0 transition ease-in-out delay-150'/>
  <img src={user3} alt="Hantec Markets" className='w-20   grayscale hover:grayscale-0 transition ease-in-out delay-150'/>
  <img src={user1} alt="Hantec Markets" className='w-6   grayscale hover:grayscale-0 transition ease-in-out delay-150'/>
  <img src={user5} alt="Hantec Markets" className='w-20   grayscale hover:grayscale-0 transition ease-in-out delay-150'/>
 
</div>

      </div>
    
    </div>
    </div>
  )
}

export default Users

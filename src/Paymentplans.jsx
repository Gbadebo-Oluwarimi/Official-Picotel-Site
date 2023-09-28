import React from 'react'
import Navbar from "../src/components/Navbar.jsx"
import Footer from './components/Footer.jsx'
import doodle from "./assets/doodle1.svg"
import  {Link}  from 'react-router-dom'
import Landing from './components/Landing.jsx'

const Paymentplans = () => {
  return (
    <div>
       <div className=' font-poppins'>

      <Navbar/>
      <div className='payment w-full bg-green-950 h-screen text-gray-200 p-10'>
        <div className='max-w-mx m-auto mt-36 relative'>
            <div className='text-xs md:text-sm py-3'>Picotel.ng  /  <span className='text-green-600 py-10'>Explore Pricing</span></div>
            <div className='text-2xl md:text-5xl pb-3 font-semibold '>Explore our competitive pricing <br/><span className='text-green-400'>options</span></div>
            <div className='text-sm md:text-md'>Affordable Excellence: Competitive Pricing for Superior Connectivity</div>
        </div>
      </div>
     
      <div className='bg-bright min-h-screen p-20'>
    
      <div className='max-w-2xl m-auto'>
      <div className='absolute text-gray-200 z-0 right-10'>
          <img src={doodle} alt='' className='  w-96 h-96 z-0 opacity-5' />
        </div>
        <div className='font-semibold text-3xl text-center'>Abuja-Metro Unlimited Dedicated<br/>With the <span className='text-green-400'>ultimate</span> plan </div>
        <div className='text-xs text-center py-4 text-gray-500'>Unparalleled Connectivity with Abuja-Metro's Ultimate Plan</div>
</div>

<div className='flex flex-wrap gap-3 pt-10'>
    {/* 5mbps */}
<Link to="/payment-plans/quote-generator/20,000/5Mbps" className='z-10'><div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'>5Mbps</div>
            <div className='font-semibold   pt-4 text-2xl text-darkgreen'> N20,000<span className='text-xs'>.00</span></div>
            <div className='text-xs pt-7 leading-5'><ul className='inline-block'>
              <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>Installation cost : N100,000</div>
</li>
  <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Download/Upload: 5mbps
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Monthly Payment Subscription
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  No down Time
</div>
</li>
              </ul></div>
</div>
</Link>


<Link to="/payment-plans/quote-generator/40,000/10Mbps" className='z-10'><div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'>10Mbps</div>
            <div className='font-semibold   pt-4 text-2xl text-darkgreen'> N40,000<span className='text-xs'>.00</span></div>
            <div className='text-xs pt-7 leading-5'><ul className='inline-block'>
              <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>Installation cost : N100,000</div>
</li>
  <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Download/Upload: 10mbps
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Monthly Payment Subscription
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  No down Time
</div>
</li>
              </ul></div>
</div>
</Link>
{/* 15mbps */}


<Link to="/payment-plans/quote-generator/60,000/15Mbps" className='z-10'><div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'>15Mbps</div>
            <div className='font-semibold   pt-4 text-2xl text-darkgreen'> N60,000<span className='text-xs'>.00</span></div>
            <div className='text-xs pt-7 leading-5'><ul className='inline-block'>
              <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>Installation cost : N100,000</div>
</li>
  <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Download/Upload: 15mbps
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Monthly Payment Subscription
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  No down Time
</div>
</li>
              </ul></div>
</div>
</Link>
{/* 20mBPS */}

<Link to="/payment-plans/quote-generator/80,000/20Mbps" className='z-10'><div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'>20Mbps</div>
            <div className='font-semibold   pt-4 text-2xl text-darkgreen'> N80,000<span className='text-xs'>.00</span></div>
            <div className='text-xs pt-7 leading-5'><ul className='inline-block'>
              <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>Installation cost : N100,000</div>
</li>
  <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Download/Upload: 20mbps
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Monthly Payment Subscription
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  No down Time
</div>
</li>
              </ul></div>
</div>
</Link>
</div>

<div>










<div className='max-w-2xl m-auto '>
        <div className='font-semibold text-3xl text-center pt-16'>NationWide Ulimited Dedicated<br/>With the <span className='text-green-400'>ultimate</span> plan </div></div>
        <div className='text-xs text-center py-4 text-gray-500'>Unparalleled Connectivity with Abuja-Metro's Ultimate Plan </div>
        <div className='flex flex-wrap gap-3 pt-10'>
    
{/* 5mbps */}
<Link to="/payment-plans/quote-generator/130,000/5Mbps" className='z-10'><div className='p-6 w-72 h-72 shadow-md text-specialgray  bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'>5Mbps</div>
            <div className='font-semibold   pt-4 text-2xl text-darkgreen'> N130,000<span className='text-xs'>.00</span></div>
            <div className='text-xs pt-7 leading-5'><ul className='inline-block'>
              <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>Installation cost : N100,000</div>
</li>
  <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Download/Upload: 5mbps
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Monthly Payment Subscription
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  No down Time
</div>
</li>
              </ul></div>
</div>
</Link>

{/* 10Mbps */}

<Link to="/payment-plans/quote-generator/190,000/10Mbps" className='z-10'><div className='p-6 w-72 h-72 shadow-md text-specialgray  bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'>10Mbps</div>
            <div className='font-semibold   pt-4 text-2xl text-darkgreen'> N190,000<span className='text-xs'>.00</span></div>
            <div className='text-xs pt-7 leading-5'><ul className='inline-block'>
              <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>Installation cost : N100,000</div>
</li>
  <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Download/Upload: 10mbps
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Monthly Payment Subscription
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  No down Time
</div>
</li>
              </ul></div>
</div>
</Link>
{/* 15Mbps */}

<Link to="/payment-plans/quote-generator/260,000/15Mbps" className='z-10'><div className='p-6 w-72 h-72 shadow-md text-specialgray  bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'>15Mbps</div>
            <div className='font-semibold   pt-4 text-2xl text-darkgreen'> N260,000<span className='text-xs'>.00</span></div>
            <div className='text-xs pt-7 leading-5'><ul className='inline-block'>
              <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>Installation cost : N100,000</div>
</li>
  <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Download/Upload: 15mbps
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Monthly Payment Subscription
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  No down Time
</div>
</li>
              </ul></div>
</div>
</Link>
{/* 20Mbps */}
<Link to="/payment-plans/quote-generator/370,000/20Mbps" className='z-10'><div className='p-6 w-72 h-72 shadow-md text-specialgray  bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'>20Mbps</div>
            <div className='font-semibold   pt-4 text-2xl text-darkgreen'> N370,000<span className='text-xs'>.00</span></div>
            <div className='text-xs pt-7 leading-5'><ul className='inline-block'>
              <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>Installation cost : N100,000</div>
</li>
  <li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Download/Upload: 20mbps
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  Monthly Payment Subscription
</div>
</li>
<li className='flex pb-2'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 fill-green-400 mx-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <div>  No down Time
</div>
</li>
              </ul></div>
</div>
</Link>

</div>

<div className='text-center w-full text-sm p-4 text-gray-600'>For Inquiries about Our Exclusive High-Tier Plans,<br/> Please Contact Us at:<span className='text-green-700'>info@picotelng.com</span></div>

</div>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default Paymentplans

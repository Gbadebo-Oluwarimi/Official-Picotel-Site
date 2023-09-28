import React from 'react'
import Navbar from "../src/components/Navbar.jsx"
import Footer from './components/Footer.jsx'
import doodle from "./assets/doodle1.svg"
import Landing from './components/Landing.jsx'
const Services = () => {
  return (
    <div className='font-poppins'>
      <Navbar/>
      <div className='explore w-full bg-green-950 h-80 text-gray-100 p-10'>
        <div className='max-w-mx m-auto mt-12'>
            <div className='text-sm py-3'>Picotel.ng  /  <span className='text-green-300 py-10'>Explore Services</span></div>
            <div className='text-4xl pb-3 '>Our Comprehensive Suite of Services</div>
            <div className='text-xs text-gray-100'>Experience High-Speed Internet, Unmatched Customer Support, and More</div>
        </div>
      </div>
      <div className='w-full bg-lightergreen h-10 text-center'>
        
      </div>
      
      <div className='bg-bright min-h-screen'>
        <div className='absolute text-gray-200 z-0 right-10'>
          <img src={doodle} alt='' className='  w-96 h-96 z-0 opacity-5' />
        </div>
          <div className='p-20 z-10'>
            <div className='max-w-mx text-5xl font-bold text-gray-600 '> Services Anywhere in <br/><span className='text-green-500'>Nigeria</span></div>
            <div className='text-lg text-gray-500 pt-7 mb-10'>Delivering Reliable Connectivity and Tailored Solutions for <br/>Business Success</div>
            


            <div className=' flex flex-wrap gap-3 pt-10 z-10'>
            <div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>
</div>
            <div className='font-semibold   pt-4 text-md text-darkgreen'> Business Internet</div>
            <div className='text-xs pt-7 leading-5'> For businesses We often offer specialized internet solutions. These solutions come with dedicated support, static IP addresses for hosting websites and servers, and service-level agreements (SLAs) that guarantee uptime and reliability.</div>
</div>


<div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

</div>
            <div className='font-semibold   pt-4 text-md text-darkgreen'> Fiber Optic Internet</div>
            <div className='text-xs pt-7 leading-5'>  In select areas, We provide high-speed fiber optic internet connectivity, which offers faster and more reliable connections compared to traditional cable or DSL.</div>
</div>


<div className='p-6 w-72 h-72 shadow-md text-specialgray z-10  bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>

</div>
            <div className='font-semibold   pt-4 text-md text-darkgreen'> Cloud Services</div>
            <div className='text-xs pt-7 leading-5'> We offer cloud services, including cloud storage and backup solutions. This allows customers to store data securely in the cloud and access it from anywhere.</div>
</div>


<div className='p-6 w-72 h-72 shadow-md text-specialgray z-10  bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>

</div>
            <div className='font-semibold z-10  pt-4 text-md text-darkgreen'>Digital Security</div>
            <div className='text-xs pt-7 leading-5'>  We  provide antivirus and cybersecurity solutions to protect customers from online threats, including malware, phishing, and hacking attempts.</div>
</div>


<div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
</svg>


</div>
            <div className='font-semibold z-10  pt-4 text-md text-darkgreen'>Communication external Structure</div>
            <div className='text-xs pt-7 leading-5'> We supply top-notch external communication equipment to meet your needs.</div>
</div>


<div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>



</div>
            <div className='font-semibold   pt-4 text-md text-darkgreen'>Voip Services</div>
            <div className='text-xs pt-7 leading-5'> We offer voice services, including Voice over IP (VoIP) and traditional landline phone services. VoIP services often come with features like call forwarding and voicemail.</div>
</div>




<div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg>




</div>
            <div className='font-semibold   pt-4 text-md text-darkgreen'>Web Hosting</div>
            <div className='text-xs pt-7 leading-5'> We offer web hosting packages, domain registration, and website creation tools. Customers can host their websites and manage them through ISP-provided hosting services.</div>
</div>



<div className='p-6 w-72 h-72 shadow-md text-specialgray z-10 bg-white  rounded-md inline-block transition border hover:border-green-400 ease-in-out delay-150'>
<div className='text-green-400 font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
</svg>





</div>
            <div className='font-semibold   pt-4 text-md text-darkgreen'>Network Management</div>
            <div className='text-xs pt-7 leading-5'> We  provide networking equipment like modems and routers, along with Wi-Fi solutions for optimal connectivity and coverage. They may also offer network management services for businesses.</div>
</div>


           </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Services

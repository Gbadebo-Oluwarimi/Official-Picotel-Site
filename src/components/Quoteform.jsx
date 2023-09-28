import React, { useRef, useState } from 'react'
import Axios from 'axios';
import Popup from './Popup';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../Store';


const Quoteform = ({number}) => {
   const { message, updateMessage, updateStatus } = useStore();
  const form = useRef();
 
  const sendQuote = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1l6qqgp', 'template_dk4kszi', form.current, 'GpMiaoPLAvFdrDJR3')
      .then((result) => {
          updateMessage("Your Quote has been Sent Succesfully");
          updateStatus("success")
      }, (error) => {
        updateMessage("An Error Occured");
          updateStatus("fail");
      });
    };

  return (
    <div className=' w-full font-poppins '>
        <div className='text-xs'>Generate Quote for <span className='text-green-500'>{number}</span></div>
        <div className='font-semibold text-3xl'> Generate Quote for <span className='text-green-500'>{number}</span></div>
        <div>
  

      <div class="bg-white rounded  py-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 md:inline-block">
          <div class="text-gray-600">
          
          </div>
          <form ref={form} class="space-y-4" onSubmit={sendQuote}>
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text"  name="user_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text"  name="user_email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
              </div>

              <div class="md:col-span-3">
                <label for="address">Address / Street</label>
                <input type="text"    name="user_address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
              </div>

              <div class="md:col-span-2">
                <label for="city">City</label>
                <input type="text"   name="user_city" id="user_city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
              </div>
      
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end w-full mt-10">
                  <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Quote</button>
                </div>
              </div>
              <div className='w-full lg:col-span-5 my-4'>
               
                {
                  message ? (<Popup/>):("")
                }
              </div>

            </div>
          </div>
          </form>
        </div>
</div>
</div>
    </div>
  )}


export default Quoteform

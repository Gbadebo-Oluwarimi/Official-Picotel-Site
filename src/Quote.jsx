import React from 'react'
import Landing from './components/Landing'

const Quote = () => {
  return (
    <div className='font-poppins'>
      <Landing/>
      <div className='max-w-5xl m-auto my-8'>
        <div className='flex flex-wrap justify-between border-b p-1 items-center'>
          <div className='font-bold text-2xl'>Picotel Network <br/>Solutions<br/>
          <span className='text-xs font-normal'>21, Coshacris Plaza Area 10 Garki Abuja </span>
          </div>
         <div className='text-2xl text-green-800 font-bold'>Quote</div>
        </div>
        <div className='flex justify-between my-4'>
            <div className='inline-block'>
              <div>Bill to</div>
              <p className='text-md font-semibold'>
              James Doe<br/>
              Andreas street, Mountain View<br/>
              San Francisco, CA 9321, US<br/>
              Andreas-Doe@domain.com<br/>
              +123 456 <br/>
              </p>
            </div>
            <div><ul className='inline-block'>
        
              <li className='py-1'>Status</li>
              <li className='py-1'>Payment</li>
            </ul></div>
            <div><ul className='inline-block'>
             
              <li className='py-1'>Pending</li>
              <li className='py-1'>Paystack</li>
            </ul></div>
        </div>
        <div class="py-4">
                  <table class="table-bordered w-full ltr:text-left rtl:text-right text-gray-600">
                    <thead class="border-b dark:border-gray-700">
                      <tr class="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-20">
                        <th>Plan</th>
                        <th class="text-center">Qty</th>
                        <th class="text-center">Unit price</th>
                        <th class="text-center">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="flex flex-wrap flex-row items-center">
                           
                            <div class="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">  
                              10MBPS connection
                            </div>
                          </div>
                        </td>
                        <td class="text-center">1</td>
                        <td class="text-center">80$</td>
                        <td class="text-center">80$</td>
                      </tr>
                     {/* Installation fee charges */}
                      <tr>
                        <td>
                          <div class="flex flex-wrap flex-row items-center">
                          
                            <div class="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">  
                             Installtion Cost
                            </div>
                          </div>
                        </td>
                        <td class="text-center">1</td>
                        <td class="text-center">80$</td>
                        <td class="text-center">80$</td>
                      </tr>
                      
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="2"></td>
                        <td class="text-center"><b>Sub-Total</b></td>
                        <td class="text-center">$290</td>
                      </tr>
                      <tr>
                        <td colspan="2"></td>
                        <td class="text-center"><b>Tax</b></td>
                        <td class="text-center">7%</td>
                      </tr>
                      <tr>
                        <td colspan="2"></td>
                        <td class="text-center"><b>Total</b></td>
                        <td class="text-center font-bold">$258,8</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <button className='float-right my-5'>Proceed To Payment</button>
      </div>
    </div>
  )
}

export default Quote

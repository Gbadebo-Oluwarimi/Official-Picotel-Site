import React from 'react'

const Table = ({info}) => {
  return (
    <div>
      
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    User Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Quote-id
                </th>
                <th scope="col" class="px-6 py-3">
                    Plan
                </th>
                <th scope="col" class="px-6 py-3">
                    Class
                </th>
                <th scope="col" class="px-6 py-3">
                    City/Address
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {info.map((item) => (
          <tr  key={item.id}><td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{item.email_address} </td>
          <td className='px-6 py-4'>{item.Plan}</td>
          <td className='px-6 py-4'>{item._id}</td>
          <td className='px-6 py-4'>{item.paymentStatus}</td>
          <td className='px-6 py-4'>{item.Quote_status}</td>
          <td className='px-6 py-4'>{item.address}</td>
          </tr>
        ))}
            
          
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Table

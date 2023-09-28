import React from 'react'
import { useStore } from '../../Store'

const Popup = () => {
  const { message } = useStore();
  return (
    <div className='lg:cols-span-2 p-4 rounded-md border-2 border-green-400 bg-green-200 '>
      {message}
    </div>
  )
}

export default Popup

import { achivement } from '@/constants'
import React from 'react'

const Achivments = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
      {achivement.map(item => (
        <div className='p-5 flex flex-col gap-3 shadow mt-10' key={item.number}>
            <h2 className='font-bold text-4xl text-font'>{item.number}</h2>
            <p className='font-light'>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Achivments

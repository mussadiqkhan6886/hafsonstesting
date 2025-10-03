import React from 'react'

const Button = ({title}: {title: string}) => {
  return (
    <button className='w-[110px] font-semibold cursor-pointer py-1.5 bg-amber-800/50 backdrop-blur-[5px] hover:backdrop-blur-sm  text-white'>
      {title}
    </button>
  )
}

export default Button

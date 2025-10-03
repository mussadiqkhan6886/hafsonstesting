import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchProperty = () => {
  return (
    <section className="absolute left-0 top-20 lg:top-34 w-full px-0 md:px-25">
        <h2 className='text-main text-3xl font-semibold  mb-5 text-center py-2'>Find Your Best Property.</h2>
        <div className="flex gap-1 px-0 lg:px-50 relative">
          <div className='flex px-3 flex-[0.5] flex-col py-1.5 backdrop-blur-[6px]  bg-gray-200/50'>
            <label className='inline-block pl-1 text-[12px] sm:text-sm text-white' htmlFor="buy or let">I want to</label>
            <select id='buy or let' className='outline-none text-black'>
              <option value="buy">Buy</option>
              <option  value="let">Let</option>
            </select>
          </div>
          <div className='flex flex-col pl-3 flex-2  w-full backdrop-blur-[6px]  bg-gray-200/50'>
            <label htmlFor="search" className='text-sm text-white pt-1'>Location</label>
            <input autoComplete='off' type="text" id="search" placeholder="Area or postcode" className="outline-none w-full .5 border-none text-black text-lg pr-10" />
            <FaSearch className='absolute right-3 top-5' />
          </div>
        </div>
      </section>
  )
}

export default SearchProperty

'use client';

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { properties } from '@/constants';

const SearchProperty = () => {
  const [search, setSearch] = useState("")
  const [select, setSelect] = useState("buy")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!search.trim()) return

    const path = select === "buy" ? "sales" : "lettings"

    // Find the first property that matches the search term (case-insensitive, partial match allowed)
    const found = properties.find(
      item => item.address.toLowerCase().includes(search.trim().toLowerCase())
    )

    if (!found) {
      router.push(`/${path}/not-found`)
    } else {
      // Route to /sales/:id or /lettings/:id
      router.push(`/${path}/${found.id}`)
    }
  }

  return (
    <section className="absolute left-0 top-20 lg:top-34 w-full px-0 md:px-25">
      <h2 className='text-main text-3xl font-semibold mb-5 text-center py-2'>
        Find Your Best Property.
      </h2>

      <form 
        onSubmit={handleSearch} 
        className="flex gap-1 px-0 lg:px-50 relative"
      >
        {/* Select Buy / Let */}
        <div className='flex px-3 flex-[0.5] flex-col py-1.5 backdrop-blur-[6px] bg-gray-200/50'>
          <label 
            htmlFor="buy-or-let" 
            className='inline-block pl-1 text-[12px] sm:text-sm text-white'
          >
            I want to
          </label>
          <select 
            id='buy-or-let' 
            className='outline-none text-black'
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="buy">Buy</option>
            <option value="let">Let</option>
          </select>
        </div>

        {/* Search input */}
        <div className='flex flex-col pl-3 flex-2 w-full backdrop-blur-[6px] bg-gray-200/50 relative'>
          <label htmlFor="search" className='text-sm text-white pt-1'>Location</label>
          <input 
            type="text" 
            id="search" 
            autoComplete='off'
            placeholder="Area or postcode"
            className="outline-none w-full border-none text-black text-lg pr-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <FaSearch className='absolute right-3 top-8 cursor-pointer text-gray-600' />
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchProperty

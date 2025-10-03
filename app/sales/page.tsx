import Filteration from '@/components/Filteration'
import PropertyCard from '@/components/PropertyCard'
import SearchProperty from '@/components/SearchProperty'
import { properties } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import React from 'react'

const Sales = () => {

   const total = properties.filter(item => item.type === "buying")
  const totalL = total.length

  return (
    <main className='min-h-screen pb-10'>
      <section>
        <video autoPlay muted loop className='w-full h-[80vh] object-cover object-top' src={"/sellVideo.mp4"} />
        <SearchProperty />
      </section>
      <section className='flex items-center gap-5 flex-col max-w-3xl mx-auto mb-5'>
        <h1 className={`${instrumentSerif.className} text-[80px] sm:text-[100px] text-center`}>Buying or Selling</h1>
        <p className='font-[400] px-4 text-gray-800'>We know that there’s much more to selling a property than recommending an asking price and marketing it to buyers. We guide you through every step of the way, from advising on how best to present your home for viewings, to negotiating the sale and liaising with solicitors.</p>
      </section>
        <Filteration length={totalL} cat={"Sales"} />

      <section className='px-5 md:px-10 flex flex-col gap-7'>
        {properties.filter(item => item.type === "buying").map((item, i) => (
          <PropertyCard key={i} {...item} />
        ))}
      </section>
    </main>
  )
}

export default Sales

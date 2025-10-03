import React from 'react'
import { instrumentSerif } from '@/fonts/font'
import Link from 'next/link'

const Valuation = () => {
  return (
    <section className='bg-amber-100 py-10 relative flex items-center  flex-col justify-center'>
      <h4 className={`font-thin text-4xl mb-3 text-center ${instrumentSerif.className}`}>Request Your free, no-obligation valuation</h4>
      <p className='text-center font-light mb-4 px-5 md:px-30'>Discover the true value of your assets. Get a complimentary valuation today. Simply fill out the form below, and our experts will provide you with an accurate assessment.</p>
      <Link href={"/valuation"} className='px-6 py-2 text-white bg-yellow-700'>BOOK A VALUATION</Link>
    </section>
  )
}

export default Valuation

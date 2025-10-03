import { fees } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import React from 'react'
import { FaCircle } from 'react-icons/fa' // for icons

const Page = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-25 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1
          className={`${instrumentSerif.className} text-4xl md:text-6xl font-bold text-gray-900 mb-4`}
        >
          Hafsons – Landlord Fee Schedule
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          At Hafsons, we are committed to providing <span className="font-semibold">transparent</span> 
          and <span className="font-semibold">competitive pricing</span> for our landlord clients.  
          Below is a breakdown of the key fees and services we offer:
        </p>
      </div>

      {/* Fee Sections */}
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fees.map((item, i) => (
          <div
            key={i}
            className="shadow-md p-8 flex flex-col gap-5 
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Service Heading */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{item.heading}</h2>
              <h3 className="text-sm text-font font-medium">{item.subheading}</h3>
            </div>

            {/* Includes List */}
            <div>
              <h4 className="text-gray-800 font-semibold  mb-3">{item.include}</h4>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <FaCircle className="text-primary w-2 h-2 mt-1.5" />
                    <span className='text-sm font-[400]'>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Page

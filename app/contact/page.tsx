import ContactUs from '@/components/ContactUs'
import { instrumentSerif } from '@/fonts/font'
import React from 'react'
import { FaEnvelope, FaPhone, FaSearchLocation } from 'react-icons/fa'

const Contact = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-12 pt-25 py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className={`${instrumentSerif.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
          We are here to help
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto font-[400] text-lg">
          Looking for expert advice or client support?  
          Here’s how you can get in touch with us.
        </p>
      </section>

      {/* Contact Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className=" p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Contact Details
          </h2>

          <div className="space-y-4 mb-8">
            <p className="flex items-center text-gray-700">
              <FaPhone className="text-primary w-5 h-5 mr-3" />
              0208 679 9353
            </p>
            <p className="flex items-center text-gray-700">
              <FaEnvelope className="text-primary w-5 h-5 mr-3" />
              info@hafsons.co.uk
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Get Direction
            </h2>
            <address className="flex items-start text-gray-700 not-italic">
              <FaSearchLocation className="text-primary w-6 h-6 mr-3 mt-1" />
              656 Streatham High Road, London, SW16 3QL
            </address>
          </div>
        </div>
          <ContactUs />
      </section>
    </main>
  )
}

export default Contact

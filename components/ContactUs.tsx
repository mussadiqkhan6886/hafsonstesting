import React from 'react'
import Title from './Title'

const ContactUs = () => {
  return (
    <section className="relative  px-4 bg-white overflow-hidden">

      <div className="max-w-2xl mx-auto p-0 md:p-8 relative">
        <Title content="Get in touch" />
        <p className="text-gray-600 mt-2 mb-6 text-sm text-center">
          Please feel free to get in touch with us via any convenient means 
          (phone, WhatsApp, email, or by submitting a contact form). 
          We’ll be glad to answer your questions as soon as possible.
        </p>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-semibold text-gray-700">
              Phone Number:
            </label>
            <input
              type="tel"
              id="number"
              placeholder="Phone Number"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type your message..."
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full border border-yellow-700 text-yellow-700 font-semibold py-3 shadow-md"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs

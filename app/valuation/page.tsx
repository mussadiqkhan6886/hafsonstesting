import ValuationForm from "@/components/ValuationForm"
import { instrumentSerif } from "@/fonts/font"
import React from "react"

const Valuation = () => {
  return (
    <main className="pt-20 pb-16 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h1
          className={`${instrumentSerif.className} text-5xl font-bold text-gray-900 mb-6`}
        >
          Request a Property Valuation
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our professional valuation service provides you with an accurate,
          market-driven assessment of your property worth. Whether you are
          selling, renting, or simply curious about your property current
          value, our team uses a combination of local market knowledge, recent
          sales data, and property insights to deliver a clear, reliable
          valuation.
          <br />
          <br />
          With over 30 years of experience, we ensure your property is assessed
          with transparency and precision, helping you make informed decisions
          with confidence.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10">
          
          <ValuationForm />
        </div>
      </div>
    </main>
  )
}

export default Valuation

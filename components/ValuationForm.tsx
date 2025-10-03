"use client"
import { useState } from "react"

export default function ValuationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    address: "",
    date: "",
    time: "Any",
    interest: "Sales",
    title: "Mr",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactMethod: "Don't mind",
  })
  const [error, setError] = useState("")
  const [result, setResult] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if(formData.address && formData.date && formData.time){
      setStep(2)
    }else{
      setError("Please Fill Form")
    }
  }
  const handleBack = () => setStep(1)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult("Your valuation request has been submitted ")
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {step === 1 ? "Request a Valuation" : "Step 2"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 && (
          <>
            <div>
              <label className="block mb-2 font-medium">Enter Your Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                placeholder="123 Street, City"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">I am Interested in:</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              >
                <option>Any</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>

            <p className="text-red-600">{error}</p>
            <button
              type="button"
              onClick={handleNext}
              className="w-full border-font border cursor-pointer py-2 "
            >
              Next →
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block mb-2 font-medium">I am Interested in:</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option>Sales</option>
                <option>Lettings</option>
                <option>Both</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Title</label>
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Dr</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Preferred Contact Method</label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option>Don&apos;t mind</option>
                <option>Phone</option>
                <option>Email</option>
              </select>
            </div>

            <div className="flex justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="w-full bg-gray-300 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Submit 
              </button>
            </div>
              <p className="text-green-600">{result}</p>
          </>
        )}
      </form>
    </div>
  )
}

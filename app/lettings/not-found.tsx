import React from "react"
import Link from "next/link"
import { instrumentSerif } from "@/fonts/font"

const NotFound = () => {
  return (
    <section className="min-h-screen pt-25 flex flex-col justify-center items-center bg-gray-50 px-6 text-center">
      <h1 className={`${instrumentSerif.className} text-[100px] font-bold text-black leading-none`}>
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-4">
        Oops! Property Not Found
      </h2>
      <p className="text-gray-600 max-w-md mt-3">
        The property you’re searching for doesn’t exist or is no longer available.  
        Please try another search or go back to the homepage.
      </p>

      <div className="mt-6 flex gap-4">
        <Link 
          href="/sales" 
          className="px-5 py-2.5 bg-main text-black rounded-lg hover:bg-main/90 transition"
        >
          Back to Sales
        </Link>
        <Link 
          href="/lettings" 
          className="px-5 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Browse Lettings
        </Link>
      </div>
    </section>
  )
}

export default NotFound

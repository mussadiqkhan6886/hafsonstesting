import { team } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <main >
      {/* Hero Section */}
      <section>
        <Image
          className="w-full h-[80vh] object-cover object-bottom "
          src={"/team.jpg"}
          alt="team image"
          width={1200}
          height={800}
          priority
        />
      </section>

      {/* Intro Section */}
      <section className="text-center px-3 md:px-12 py-16">
        <h1
          className={`${instrumentSerif.className} text-4xl md:text-5xl font-bold text-gray-900 mb-6`}
        >
          Meet the Hafsons Team
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          Welcome to <span className={`font-semibold text-font text-3xl ${instrumentSerif.className}`}>Hafsons</span>, your dependable
          partner in the complex world of property investments and advisory services. With a profound
          commitment to excellence, unwavering integrity, and a relentless focus on delivering the
          best outcomes for our clients, we have earned our reputation as a premier property advisory
          firm.
        </p>
      </section>

      {/* Team Members */}
      <section className="px-6 md:px-12 pb-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-indigo-100 shadow-md object-cover"
                />
              </div>
              {/* Info */}
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-600 font-[400]">{item.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Page

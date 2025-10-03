import SearchProperty from '@/components/SearchProperty'
import { projects } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <Image
          src="/projectHero.jpg"
          alt="project hero"
          width={1600}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <h1 className={`absolute bottom-5 text-[80px] sm:text-[100px] text-white font-bold text-center ${instrumentSerif.className}`}>
          Our Projects
        </h1>
      </section>

      {/* Search Component */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <SearchProperty />
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center space-y-6">
        <h2 className="text-3xl font-semibold">Welcome to <span className={`${instrumentSerif.className} text-5xl`}>Hafsons</span> Company</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          At Hafsons Company, we believe in transforming dreams into reality. As a leading name in the real estate industry, 
          we take immense pride in our commitment to quality, innovation, and customer satisfaction. 
          Our passion for creating exceptional living spaces and our dedication to excellence drive every project we undertake.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Gallery</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link
              href={`/our-projects/${project.slug}`}
              key={project.slug}
              className="group relative shadow-md hover:shadow-xl transition"
            >
              <Image
                src={project.images[0]}
                alt={project.slug}
                width={400}
                height={300}
                className="w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-font/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h4 className="text-white text-lg font-medium">{project.title}</h4>
              </div>
                <h4 className="text-black group-hover:opacity-0 p-3 font-medium">{project.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects

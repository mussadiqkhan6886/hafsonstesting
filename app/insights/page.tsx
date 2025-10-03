import { insights } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InsightList = () => {
  return (
    <main className="pt-24 pb-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      {/* Title */}
      <h1 className={`${instrumentSerif.className} text-4xl md:text-5xl text-center mb-12 text-gray-800`}>
        Insights
      </h1>

      {/* Grid Layout */}
      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((item, i) => (
          <div
            key={i}
            className="hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                priority
                fetchPriority='high'
                src={item.image}
                alt={item.slug}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h2>

              <Link
                href={`/insights/${item.slug}`}
                className="inline-block w-fit px-5 py-2 rounded-full text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {item.linkText}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default InsightList

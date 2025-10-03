import Filteration from '@/components/Filteration'
import PropertyCard from '@/components/PropertyCard'
import Title from '@/components/Title'
import { properties } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Lettings = () => {

  const total = properties.filter(item => item.type === "letting")
  const totalL = total.length

  return (
    <main>
      <section className='h-[80vh]'>
        <section className='py-5 z-10 absolute text-white top-35 flex flex-col justify-center items-center w-full'>
          <h1 className={`${instrumentSerif.className}  text-white text-[100px]`}>Lettings</h1>
          <p className=' w-full text-base md:text-lg px-4 md:w-[50%] text-center'>We know that there is much more to selling a property than recommending an asking price and marketing it to buyers. We guide you through every step of the way, from advising on how best to present your home for viewings, to negotiating the sale and liaising with solicitors</p>
        </section>
        <section className='bg-black/20 absolute w-full h-[80vh] left-0 top-0' />
          <Image priority fetchPriority='high' src={"/aboutHero.jpg"} alt='hero image about' width={1000} height={1000} className='w-full h-full' />
        </section>
        <section className='flex flex-col gap-10 my-15 px-5 md:px-10 lg:px-20'>
          <section className='flex flex-col gap-8'>
            <section className='flex flex-col sm:flex-row-reverse gap-8 lg:gap-10 px-0 lg:px-10'>
              <div className=' border border-gray-200 p-5'>
                <Title content='Experts in Residential Lettings' />
                <div className='flex flex-col md:flex-row md:gap-5 gap-0 items-start mt-5'>
                  <Image className='w-full md:w-[60%] h-full object-cover object-top' src={"/about.jpg"} alt='director image' width={100} height={100} />
                  <div className='mt-5 md:mt-10'>
                    <h5 className='whitespace-nowrap font-semibold'>Sales & Lettings Director</h5>
                    <p>+44 7507 921011</p>
                    <Link href={"/contact"}>Contact Us</Link>
                  </div>
                </div>
              </div>
              <div className='flex-1 '>
                <p className='w-full text-sm md:text-base md:w-[80%] leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur in dicta aliquid blanditiis ratione iste nulla nectetur adipisicing elit. Tenetur architecto voluptatum tempora odio. Rem porro quis quidem sequi asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi ectetur adipisicing elit. Tenetur architecto voluptatum tempora odio. Rem porro quis quidem sequi asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi ectetur adipisicing elit. Tenetur architecto voluptatum tempora odio. Rem porro quis quidem sequi asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit </p>
              </div>
            </section>
            <article className='mt-5'>
              <h5 className='font-bold mb-3 w-full md:w-[60%] text-2xl md:text-3xl'>A one-stop shop of honest and insightful lettings advice, guidance and services for landlords</h5>
              <p className='font-[400]'>This includes how to best present your property for a successful let; marketing your property locally, nationally and internationally to our wide database of applicants; negotiating between you and your applicant to get the right tenancy terms; creating a robust tenancy agreement to suit all parties; and keeping you informed with legislative requirements including health and safety and the relevant consents and conditions for letting your property. We have different levels of service so you can choose what’s best for you. You can either manage your property yourself, or we can look after it throughout your journey as a landlord and take responsibility for its management. Whichever you choose, our teams will guide you every step of your journey with us.</p>
              
            </article>
          </section>
        </section>
        <div>
          <Title content='Property for Letting' />
          <Filteration length={totalL} cat={"Letting"} />
        </div>
        <section className=' px-2 md:px-10 flex flex-col gap-7 pb-10'>
          {properties.filter(item => item.type === "letting").map((item, i) => (
            <PropertyCard key={i} {...item} />
          ))}
        </section>
    </main>
  )
}

export default Lettings

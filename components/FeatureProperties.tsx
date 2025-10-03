'use client';

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper/modules";
import "swiper/css/pagination"
import "swiper/css";
import { properties } from '@/constants';
import Link from 'next/link';

const FeatureProperties = () => {

  return (
    <Swiper
         modules={[Pagination]}
        pagination={{ clickable: true }}
        style={{ scrollBehavior: "smooth" }}
        className="mt-10 h-[40vh]"
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
        200: {slidesPerView: 1, spaceBetween: 0},
        470: {slidesPerView: 2, spaceBetween: 0},
        890: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }}
    >
      {properties.filter(item => item.featured).map((item, i) => (
        <SwiperSlide key={i}>
          <Link href={`/${item.type === "buying" ? "sales" : "lettings"}/${item.id}`}>
            <div className='w-full h-[150px] sm:h-[160px]'>
              <h3 className={`absolute text-xl text-black left-2 top-2 px-2 bg-main`}>{item.type}</h3>
              <Image className='w-full h-full' src={item.images[0]} alt={item.address} width={100} height={100} />
            </div>
            <h3 className='text-center font-xl font-bold'>${item.price}</h3>
            <p className='text-center font-[400]'>{item.address}</p>
          </Link>
        </SwiperSlide>
      )) }
    </Swiper>
  )
}

export default FeatureProperties

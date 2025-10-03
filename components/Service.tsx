'use client';

import { services } from '@/constants';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"
import "swiper/css";
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <div className="mt-12 h-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          550: { slidesPerView: 2, spaceBetween: 20 },
          850: { slidesPerView: 3, spaceBetween: 30 },
        }}
        style={{ scrollBehavior: "smooth" }}
        className='h-full'
      >
        {services.map((service) => (
          <SwiperSlide key={service.title}>
            <ServiceCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Service

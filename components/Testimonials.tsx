'use client';

import { test } from '@/constants'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules";
import "swiper/css/pagination"
import "swiper/css";
import { Italianno } from "next/font/google";

// import font correctly
const instrumentSerif = Italianno({
  subsets: ["latin"],
  weight: "400",
}); 

const Testimonials = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      style={{ scrollBehavior: "smooth" }}
      className="mt-10 h-[40vh]"
      slidesPerView={3}
      spaceBetween={10}
      breakpoints={{
        200: {slidesPerView: 1, spaceBetween: 0},
        320: {slidesPerView: 1, spaceBetween: 0},
        600: {slidesPerView: 2, spaceBetween: 0},
        890: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
    >
      {test.map((review, i) => (
        <SwiperSlide
          className="w-[400px] h-full shadow-xl px-5"
          key={review.name + i} // better key
        >
          <h4
            className={`${instrumentSerif.className} text-center leading-[1.2] pt-1 text-[40px] md:text-[60px]`}
          >
            {review.name}
          </h4>
          <p className="text-[17px] font-[400] text-gray-700">{review.message}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Testimonials;

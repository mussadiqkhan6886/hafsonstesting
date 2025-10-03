'use client';

import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import "swiper/css/pagination"
import "swiper/css";

export default function ServiceCard({ title, link, image, description }: {title: string, link: string, image: string, description: string}) {
  return (
    <SwiperSlide className="group bg-white shadow-md h-full transition hover:-translate-y-1 hover:shadow-xl flex flex-col">
      <Link href={link} className="block text-center">
        <Image src={image} alt={title} width={100} height={100} className="w-full h-[200px] mb-2 object-cover object-bottom" />
        <h3 className="text-lg uppercase font-semibold text-font">
          {title}
        </h3>
        <p className="font-[400] text-sm mb-5 mt-1 px-7 md:px-10 ">{description}</p>
      </Link>
    </SwiperSlide>
  );
}

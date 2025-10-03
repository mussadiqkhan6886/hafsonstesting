'use client';

import { menu } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa';

const HeaderComp = () => {
  
    const [open,setOpen] = useState(false)
  const pathname = usePathname()
  const path = pathname.match("/fees") || pathname.match("/contact") || pathname.match("/insights") || pathname.match("/our-projects/") || pathname.match("/valuation") || pathname.match("/sales/") || pathname.match("/lettings/")

  return (
    <header className={`${path ? "text-black" : "text-white"}  backdrop-blur-sm items-center px-5 md:px-10 py-2 justify-between flex w-full absolute z-50 `}>
      <Link href={"/"}>
        <Image src={"/logo.png"} alt='logo' height={100} width={100} />
      </Link>
      <div className='hidden md:block'>
        <ul className='flex gap-5 lg:gap-7'>
            {menu.map(item => (
                <li key={item.title}><Link className={`hover:border-b text-sm hover:font-normal  hover:text-primary hover:border-orange-300 pb-0.5 transition-all duration-200 ease-in-out border-transparent uppercase font-thin`} href={item.link}>{item.title}</Link></li>
            ))}
        </ul>
      </div>
      <FaHamburger onClick={ () => setOpen(true)} className='block md:hidden cursor-pointer' />
      <div className='fixed right-0 top-0 md:hidden'>
        {open && 
        <ul className='flex pt-10 pl-10 min-w-[320px] min-h-screen  flex-col bg-main text-gray-700 gap-7'>
          <p onClick={() => setOpen(false)} className='cursor-pointer text-end pr-10'>x</p>
          {menu.map(item => (
              <li onClick={() => setOpen(false)} key={item.title}><Link className={`hover:border-b text-sm hover:font-normal  hover:text-primary hover:border-orange-300 pb-0.5 transition-all duration-200 ease-in-out border-transparent uppercase font-thin w-full`} href={item.link}>{item.title}</Link></li>
          ))}
        </ul>}
      </div>
    </header>
  )
}


export default HeaderComp

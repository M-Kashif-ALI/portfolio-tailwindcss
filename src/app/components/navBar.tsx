"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav>
      <div className='flex flex-wrap items-center justify-between mx-auto md:max-w-[90%] p-4'>
        <Link href={'/'} className='text-3xl md:text-5xl text-white font-semibold'>
        <Image src='/logo1.jfif' alt='logo' width={80} height={80} className='rounded-full'/>
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!isOpen ? (
            <button onClick={ () => setIsOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-300 text-slate-300 hover:text-white hover:border-white'><FaBars className='h-5 w-5'/></button>
          ) : (
            <button onClick={ () => setIsOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-300 text-slate-300 hover:text-white hover:border-white'><RxCross2 className='h-5 w-5'/></button>
          )}

         {
          isOpen && <div className='absolute bg-black/25 left-0 px-5 py-20 backdrop-blur-sm h-screen -top-0 scale-in-hor-left scale-out-hor-left'>
          <ul className='flex flex-col items-center justify-center font-bold text-2xl space-y-7'>
            <li>
              <Link href={'/'} className='block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Home</Link>
            </li>

            <li>
              <Link href={'/project'} className='block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
              Projects
              </Link>
            </li>

            <li>
              <Link href={'/about'} className='block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link>
            </li>

            <li>
              <Link href={'/contact'} className='block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link>
            </li>
          </ul>
        </div>
         }

        </div>

        <div className='menu hidden md:block md:w-auto'>
          <ul className='flex space-x-10'>
            <li>
              <Link href={'/'} className='block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Home</Link>
            </li>

            <li>
              <Link href={'/project'} className='block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</Link>
            </li>

            <li>
              <Link href={'/about'} className='block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link>
            </li>

            <li>
              <Link href={'/contact'} className='block py-2 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
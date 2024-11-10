"use client"

import Image from 'next/image'
import React from 'react'

import { TypeAnimation } from 'react-type-animation'



const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-in-expand-fwd-top '>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-400 via-sky-600'>
              Hello, I am {' '} <br />
            </span>
            <TypeAnimation
              sequence={[
                'Kashif ALi',
                2000,
                'Web Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}  
              repeat={Infinity}
            />

          </h1>
          <p className='text-[#ADB7BE] text-base lg:text-xl sm:text-lg mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reprehenderit ullam quidem doloribus tempore ut ipsum cumque laboriosam odio, dolorem quod, tempora, minus nobis cum eius atque modi quos? Doloremque.</p>
          <div>
            <button className='px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-green-500 via-sky-600 to-purple-500 hover:bg-slate-200 text-white w-full sm:w-fit'>Hire me</button>

            <button className='px-1 py-1 rounded-full bg-gradient-to-br from-green-500 via-sky-600 to-purple-500   hover:bg-slate-800 text-white mt-3 w-full sm:w-fit'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className='w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative'>
            <Image src="/main.png" alt='pic' height={300} width={300} className='rounded-full md:h-[300px] md:w-[330px] h-[200px] w-[230px] bg-[#181818] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
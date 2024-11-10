import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black min-h-[100px]'>
      <div>
        <ul className='text-white flex py-10 items-center justify-around md:justify-center md:space-x-10 font-mono font-bold text-xl'>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/project'}>projects</Link></li>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/contact'}>Contct</Link></li>
        </ul>
      </div>
      <p className='text-white text-opacity-60 mt-6 text-center'>&copy;2024 All Rights Reserved by Kashif Ali</p>
    </div>
  )
}

export default Footer
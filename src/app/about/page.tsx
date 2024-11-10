import React from 'react'
import NavBar from '../components/navBar'
import Image from 'next/image'

const page = () => {
  return (
    <section className='bg-black min-h-screen text-white'>
      <NavBar/>
      <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 md:items-center md:py-8 '>
      <div className='md:h-[500px] md:w-[500px] h-[250px] w-[300px] mx-auto md:mx-3 mt-5'>
        <Image src={'/OIP.jfif'} alt='about image' width={500} height={500} className='rounded-md'/>
      </div>
      <div>
        <h2 className='font-bold text-center text-4xl'>About ME</h2>
        <p className='px-5 mt-3 font-semibold pb-14'>{
        "Hello! I'm a web developer who has learned HTML, CSS, TypeScript, and Next.js. While I'm still working on mastering these technologies, I'm passionate about building functional and visually appealing websites. I'm always eager to take on new challenges and learn more along the way. I'm excited to continue growing and expanding my skills as I work on new projects."}
        </p>
        <h3 className='font-bold px-5 md:text-center text-3xl pb-5'>Skills</h3>
        <ul className='px-5 font-serif text-base md:text-xl'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Next js</li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default page
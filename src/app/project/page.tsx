import React from 'react'
import { projects } from '../components/data'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../components/navBar'

const page = () => {
  return (
    <div className='bg-slate-950'>
      <NavBar />
      <div> <h1 className='text-4xl font-bold my-10 text-center md:text-6xl text-white'>Projects</h1>

        <div className='w-[80%] mx-auto flex flex-col md:flex-row gap-10 pb-14'>
          {projects.map((projects) => {
            return <div key={projects.id} className='hover:scale-105 duration-200'>
              <Link href={projects.url} target='_blank'>
                <Image src={projects.image} alt='projects' width={300} height={200} className='rounded-lg h-[300px] w-[300px]'/>
              </Link>

            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default page
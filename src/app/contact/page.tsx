import React from 'react'
import NavBar from '../components/navBar'

const page = () => {
  return (
    <div className='bg-slate-950 text-white min-h-screen'>
      <NavBar />

      <div className='w-[90%] min-h-screen mx-auto py-5 bg-slate-900 rounded-xl'>
        <h2 className='font-semibold md:font-extrabold md:text-5xl text-3xl text-center'>{`let's work together`}</h2>
        <p className='px-5 mt-5 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae qui dolor atque molestias ducimus blanditiis ex delectus aliquam natus nostrum dolore eveniet..</p>

        <div className='p-5 w-[70%] md:space-x-20 mx-auto md:w-[90%] flex md:flex-row flex-col items-center justify-center'>

          <div>
            <label htmlFor="name" className='font-medium md:font-bold md:text-xl'>Name: </label>
            <input type="text" name='name' id='name' className='bg-transparent border rounded md:px-7 py-2 my-4' />
          </div>

          <div>
            <label htmlFor="name" className='font-medium md:font-bold md:text-xl'>Email: </label>
            <input type="text" name='name' id='name' className='bg-transparent border rounded md:px-7 py-2 my-4' />
          </div>
        </div>

        <div className='text-center'>
        <div>
          <label htmlFor="phone" className='font-medium md:font-bold md:text-xl'>Phone:</label>
          <input type="text" name="phone" id="phone" className='bg-transparent border rounded md:px-7 py-2 my-4' />
          </div>
          </div>

          <div className='mt-10 ml-10 text-center'>
            <textarea className='bg-transparent border w-[299px] md:w-[40%] h-[200px] rounded-lg p-3 text-[15px]' placeholder='Message'></textarea>
          </div>

          <div className='text-center ml-[200px]  md:ml-[540px] font-serif bg-gradient-to-br from-green-500 to-cyan-500 via-purple-600 mt-5 w-[100px]'>
          <button type='submit' className='px-3 py-1 my-2'>Send</button>
          </div>


      </div>
    </div>
  )
}

export default page
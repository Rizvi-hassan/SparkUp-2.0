import React from 'react'
import paper from './../assets/paper.png'
// import silicon from './../assets/25_yearsW.webp'

const Navbar = () => {
  return (
    <header 
      className=' w-full h-20 z-100 flex justify-center items-center'
      
    >

        <div className="h-full w-[20%] ">
            <img src="/logo-dark.png" alt="Website Logo" className='h-20 m-auto' />
        </div>
        <div className='md:w-[80%] md:h-full flex flex-col md:flex-row items-center justify-center md:relative md:bg-none fixed w-[80dvw] h-lvh top-0 right-0'>
          <ul className='flex flex-col md:flex-row  text-gray-950  gap-5 h-fit md:h-full mb-8 justify-center items-center text-xl md:w-[75%]  '>
              <li><a href="#" className='hover:text-2xl hover:font-semibold transition-all duration-100'>Home</a></li>
              <li><a href="#" className='hover:text-2xl hover:font-semibold transition-all duration-100'>About</a></li>
              <li><a href="#" className='hover:text-2xl hover:font-semibold transition-all duration-100'>Events</a></li>
              <li><a href="#" className='hover:text-2xl hover:font-semibold transition-all duration-100'>Team</a></li>
              <li><a href="#" className='hover:text-2xl hover:font-semibold transition-all duration-100'>Glimpse</a></li>
              <li><a href="#" className='hover:text-2xl hover:font-semibold transition-all duration-100'>Contact</a></li>
          </ul>

          <div className="right md:w-[25%] md:h-full h-20 flex justify-center items-center">
              <button className='m-auto h-[50%] text-xl bg-red-600 px-8 hover:text-red-700 hover:font-bold hover:bg-white transition duration-500 rounded-sm'>Register</button>
          </div>

        </div>
    </header>
  )
}

export default Navbar
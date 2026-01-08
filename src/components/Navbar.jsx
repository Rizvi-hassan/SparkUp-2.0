import React from 'react'

const Navbar = () => {
  return (
    <nav className=' w-full h-20 z-100 flex justify-center items-center'>
        <div className="h-full w-[20%] ">
            <img src="/logo-dark.png" alt="Website Logo" className='h-20 m-auto' />
        </div>

        <ul className='flex text-gray-900  gap-5 h-full justify-center items-center text-xl w-[60%] font-semibold '>
            <li><a href="#" className='hover:text-black'>Home</a></li>
            <li><a href="#" className='hover:text-black'>About</a></li>
            <li><a href="#" className='hover:text-black'>Events</a></li>
            <li><a href="#" className='hover:text-black'>Team</a></li>
            <li><a href="#" className='hover:text-black'>Glimpse</a></li>
            <li><a href="#" className='hover:text-black'>Contact</a></li>
        </ul>

        <div className="right w-[20%] h-full flex justify-center items-center">
            <button className='m-auto h-[50%] text-xl bg-red-600 px-8 hover:text-red-700 hover:font-bold hover:bg-white transition duration-500 rounded-sm'>Register</button>
        </div>
    </nav>
  )
}

export default Navbar
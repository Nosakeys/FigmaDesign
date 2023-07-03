import React from 'react'


const Nav = () => {
  return (
    <div className='w-full h-10 bg-transparent justify-around items-center  flex-row flex'>
            <h1 className='font-extrabold text-xl text-[white] '>NosaKeys</h1>
            <ul className='flex flex-row gap-5 text-sm font-semibold text-[white]'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Testimonial</li>
                <li>Pricing</li>
            </ul>
            <button className='w-32 h-8 rounded-md bg-[orange] font-medium text-xs text-[white]'>Get Started</button>
    </div>
  )
}

export default Nav
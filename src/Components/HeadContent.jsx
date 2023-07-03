import React from 'react'
import tablets from "../asset/images/tablets.png"

const HeadContent = () => {
  return (
    <div className='w-screen h-[100%] flex flex-row justify-around align-middle items-center'>
        <div className='w-[20%] h-[60%] bg-transparent flex flex-col items-start'>
            <p className=' text-white text-xs font-semibold'>INSPIRATION TECHNOLOGY</p>
        <h1 className='font-bold text-2xl text-white pt-2'>Runs faster</h1>
        <h2 className='text-lg text-white pt-2'>Costs less and </h2>
        <h2 className='text-base text-white pb-5 ' >never break</h2>

        <div className='w-full h-[1px] bg-white'></div>
        <h6 className='text-white font-medium text-[12px] text-left pt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi</h6>
        <div className='w-full flex flex-row gap-6 pt-10'>
            <button  className='w-20 h-8  bg-[orange] font-medium text-xs text-[white]'>Get Started</button>
            <button  className='w-20 h-8 font-medium text-xs text-[white] border-[#d1cfcf] border-2'>Free Trial</button>
            </div>
        </div>
        <img className='w-[32%] h- [80%]' src= {tablets} alt='' />
    </div>
  )
}

export default HeadContent
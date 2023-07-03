import React from 'react'
import fedex from '../asset/images/90a2c3b80d4b7a7599788bfeb9b848ce-removebg-preview 1.png'
import google from '../asset/images/google-1-removebg-preview 1.png'
import ola from '../asset/images/image 27.png'
import micro from '../asset/images/new-Microsoft-logo-removebg-preview 1.png'


const ImageList = () => {
  return (
    <div className='w-full h-24 flex flex-col bg-slate-400'>
        <div className=''> 
        <img src={fedex} alt="" />
        <img src={google} alt="" />
        <img src={ola} alt="" />
        <img src={micro} alt="" />
        </div>
        <div></div>

    </div>
  )
}

export default ImageList
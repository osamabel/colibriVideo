import React from 'react'
import { NavLink } from 'react-router-dom'

function NewsLetter() {
  return (
    <div className='mt-[50px]'>
        <div className="container mx-auto h-full bg-[#ff305e] rounded-lg">
            <div className="flex flex-col items-center gap-y-[10px] py-[100px] lg:px-[80px] px-[20px] ">
                <h1 className='text-white/80 text-[20px] font-Raleway font-bold'>Besoin d'inspiration pour votre stratégie vidéo ?</h1>
                <p className='text-white/80 text-[16px] font-Lato font-[300]'>Recevez notre newsletter avec nos articles, benchmarks et inspirations.</p>
                <div className='flex items-center gap-x-[20px] mt-[30px]'>
                  <input className='py-[10px] px-[10px] rounded-md w-[300px] text-[#171717]' placeholder='Enter votre email' type="email" name="" id="" value="" />
                  <div className='bg-[#222] px-[20px] py-[9px] rounded-md cursor-pointer font-semibold z-[10] border-[2px] border-[#ff305e] hover:border-[#fff] hover:bg-transparent hover:px-[30px] t-300'>inscription</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
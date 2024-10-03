import React from 'react'

function Hero() {
  return (
    <div className='h-[50vh] flex items-center justify-center'>
        <div className='text-center w-[90%] lg:w-full flex flex-col gap-y-[20px] lg:gap-y-[30px]'>
            <h1 className='text-[44px] leading-[50px] lg:text-[74px] font-Raleway font-[700]'>La marketplace 100% vidéo</h1>
            <p className='text-[16px] lg:text-[27px] font-Lato font-[300]'>Toutes vos vidéos avec les meilleures équipes locales partout dans le monde.</p>
        </div>
    </div>
  )
}

export default Hero
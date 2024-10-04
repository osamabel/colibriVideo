import React from 'react'

interface DescriptionProps{
    title: string
    desc: string
}

function Description({title, desc}:DescriptionProps ) {
  return (
    <div className="flex flex-col gap-y-[10px] text-[#222]">
        <h1 className='text-[25px] md:text-[30px] font-Raleway font-[700]'>{title} :</h1>
        <p className='text-[16px] font-Lato font-[500] opacity-60'>{desc}</p>
    </div>
  )
}

export default Description
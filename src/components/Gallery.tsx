import { useState } from 'react'

const filters = ["Tout","Marketing", "Recrutment", "Branding"]

interface GalleryPrps{
    title: string
}

function Gallery({title}: GalleryPrps) {
    const [filter, setFilter] = useState(0)

  return (
    <div className="w-full min-h-[70vh] flex flex-col gap-y-[100px] items-center">
        <div className="flex flex-col gap-y-[30px] w-[90%] md:w-[50%] items-center min-h-[400px] justify-center">
            <h1 className="text-[34px] md:text-[44px] md:leading-[50px] leading-[40px] lg:text-[44px] font-Raleway font-[700] text-center">
                {title}
            </h1>
            <div className="flex flex-wrap gap-[10px]">
                {
                    filters.map((f, index) => (
                        <div 
                        key={index} 
                        onClick={()=>{setFilter(index)}}
                        className={`border-[2px] px-[10px] py-[5px] rounded-full text-primary border-primary cursor-pointer t-300 ${filter === index ? "" : "opacity-35 hover:opacity-70"} `}>{f}</div>
                    ))
                }
            </div>
        </div>
        <div className="w-full font-Raleway font-semibold text-[20px]">
            <p>0 video</p>
        </div>
    </div>
  )
}

export default Gallery
import { NavLink } from "react-router-dom";

interface MoreProps{
    title: string
    desc: string
    link: string
}

function More({title, desc, link}: MoreProps) {
  return (
    <div className=''>
        <div className="container mx-auto h-full pt-[60px] flex flex-col gap-y-[100px]">
            <div className="flex flex-col gap-y-[10px]">
                <h1 className='text-white/80 text-[25px] md:text-[30px] font-Raleway font-black'>{title} :</h1>
                <p className='text-white/80 text-[16px] font-Lato font-[300]'>{desc}</p>
            </div>
            <NavLink to={`/${link}`}>
                <div className='flex items-center justify-center relative cursor-pointer group'>
                    <div className='bg-[#222] px-[20px] py-[10px] rounded-full font-semibold z-[10] group-hover:bg-[#ff305e] group-hover:px-[30px] t-300'>Voir plus de vidéos</div>
                    <div className='absolute w-full h-[1px] bg-white/20 group-hover:bg-gradient-to-r from-transparent via-[#ff305e] to-transparent t-300'></div>
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default More
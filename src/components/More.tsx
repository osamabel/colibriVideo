import { NavLink } from "react-router-dom";
import Description from "./Description";

interface MoreProps{
    title: string
    desc: string
    link: string
}

function More({title, desc, link}: MoreProps) {
  return (
    <div className=''>
        <div className="container mx-auto h-full pt-[60px] flex flex-col gap-y-[100px]">
            <Description title={title} desc={desc} />
            
            <NavLink to={`/${link}`}>
                <div className='flex items-center justify-center relative cursor-pointer group'>
                    <div className='bg-white text-[12px] px-[20px] py-[7px] rounded-full z-[10]'>Plus de vidéos</div>
                    <div className='absolute w-full h-[1px] bg-black/10'></div>
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default More
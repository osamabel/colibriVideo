import { Link } from "react-router-dom";
import Footer from "./Footer";
import { MenuProps } from "./Header";
import { Undo2 } from "lucide-react";

const navs = [
    {name: 'Accueil', link:'/'},
    {name: 'Videos', link:'videos'},
    {name: 'Creators', link:'creator'},
    {name: 'Resources', link:'resources'},
    {name: 'Collections', link:'collection'},
]

export default function Nav({menuOpen, toggleMenu }: MenuProps) {
  return (
    <div className="fixed inset-0 bg-[#f6f6f6] z-50">
      <div className="h-full flex flex-col overflow-auto justify-between relative">
        <div className="flex flex-col gap-y-[10px] items-center pt-[100px]">
        <div onClick={toggleMenu} className="text-sm cursor-pointer hover:bg-black/5 rounded-[13px] p-[8px] t-300">
          <Undo2/>
        </div>
            {
                navs.map((item, index)=>(
                    <Link
                        key={index}
                        to={item.link}
                        onClick={toggleMenu}
                        className="text-[18px] font-[600] text-black/70 hover:bg-black/5 rounded-[13px] text-center py-[10px] px-[20px] transition-colors t-300"
                    >
                        {item.name}
                    </Link>
                ))
            }
          
        </div>
      <Footer/>
      </div>
    </div>
  );
}

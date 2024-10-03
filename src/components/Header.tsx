import Nav from "./Nav";
import { Menu } from "lucide-react";

export interface MenuProps {
  menuOpen: boolean
  toggleMenu: () => void;
}


export default function Header({menuOpen, toggleMenu }: MenuProps) {
  return (
    <div className="h-[90px] relative">
      <div className="container mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          <div className="font-Raleway text-[20px] font-bold">
            <img width={50} src="./colibri.svg" alt="" />
          </div>
          <div
            className="text-sm cursor-pointer hover:bg-black/5 rounded-[13px] p-[8px] t-300"
            onClick={toggleMenu}
          >
            <Menu/>
          </div>
        </div>
      </div>

      {menuOpen && (
        <Nav menuOpen={menuOpen} toggleMenu={toggleMenu} />
      )}
    </div>
  );
}

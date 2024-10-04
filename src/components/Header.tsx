import { useEffect, useState } from "react";
import Nav from "./Nav";
import { Menu } from "lucide-react";

export interface MenuProps {
  menuOpen: boolean
  toggleMenu: () => void;
}




export default function Header({ menuOpen, toggleMenu }: MenuProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Check for scroll position and update the state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the current scroll position
      if (scrollTop > 500) {
        setIsScrolled(true); // User has started scrolling
      } else {
        setIsScrolled(false); // User is at the top of the page
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed h-[90px] w-full transition-all duration-1000 z-[50] ${
        isScrolled ? "bg-white softshad" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          <div className="font-Raleway text-[20px] font-bold">
            <img width={50} src="./colibri.svg" alt="" />
          </div>
          <div
            className="text-sm cursor-pointer hover:bg-black/5 rounded-[13px] p-[8px] t-300"
            onClick={toggleMenu}
          >
            <Menu />
          </div>
        </div>
      </div>

      {menuOpen && <Nav menuOpen={menuOpen} toggleMenu={toggleMenu} />}
    </div>
  );
}
